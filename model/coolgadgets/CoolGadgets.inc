<?php

include_once (__DIR__) . "/CoolGadgetsDB.inc";
include_once (__DIR__) . "/GadgetLikesDB.inc";
include_once (__DIR__) . "/GadgetAvailabilityDB.inc";
include_once (__DIR__) . "/BlogContentDB.inc";
include_once (__DIR__) . "/../util/ArrayUtil.inc";
include_once (__DIR__) . "/../sql/Tables/CoolGadgetsTable.inc";
include_once (__DIR__) . "/../login/ClientCookies.inc";
include_once (__DIR__) . "/RedirectDB.inc";

/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 11/26/2016
 * Time: 9:04 PM
 */
class CoolGadgets
{
    var $conn;
    var $coolGadgetsDb;
    var $gadgetLikes;
    var $gadgetAvailability;
    var $blogContent;
    var $imagesLocation = "/product_img/gadgets";
    var $isCountryBasedFilter = true;
    var $clientCookie;
    var $storyCookieName = "storyCookieOffset";
    var $gadgetCookieName = "gadgetCookieOffset";
    var $redirectDb;

    function __construct($conn, $entityType)
    {
        $this->conn = $conn;
        $this->coolGadgetsDb = new CoolGadgetsDB($conn, $entityType);
        $this->gadgetLikes = new GadgetLikesDB($conn);
        $this->gadgetAvailability = new GadgetAvailabilityDB($conn);
        $this->blogContent = new BlogContentDB($conn);
        $this->clientCookie = new ClientCookies();
        $this->redirectDb = new RedirectDB($conn);
    }

    function getGadgetsByCategory($category, $offset, $limit)
    {
        $category = strtolower(str_replace('-', ' ', $category));
        return $this->coolGadgetsDb->getAllGadgetsByCategoryFirst($category, $offset, $limit);
    }

    function getAllGadgetsWithLikes($UID, $country)
    {
        $allGadgets = $this->coolGadgetsDb->getAllGadgets();
        return $this->setProductLikedByUser($country, $UID, $allGadgets, true);
    }

    function getTop10Product($UID, $country)
    {
        $top10Gadgets = $this->coolGadgetsDb->getTopGadgetsWithLimit(10);
        return $this->setProductLikedByUser($country, $UID, $top10Gadgets, true);
    }

    function getTopGadgetsWithLimitByView($limit)
    {
        $topGadgets = $this->coolGadgetsDb->getTopGadgetsWithLimitByView($limit);
        return $topGadgets;
    }

    function getGadgetByLimit($offset, $limit)
    {
        $topGadgets = $this->coolGadgetsDb->getLatestProductsByRange($offset, $limit);
        return $topGadgets;
    }

    function getTrendingStoriesByView($limit)
    {
        $trendingStories = $this->coolGadgetsDb->getTrendingStoriesByView($limit);
        return $trendingStories;
    }

    function getLatestStoriesByRange($offset, $limit)
    {
        $result = $this->coolGadgetsDb->getLatestStoriesByRange($offset, $limit);
        return $result;
    }

    function getSearchItemsByLimit($productName)
    {
        $result = $this->coolGadgetsDb->getSearchItemsByLimit($productName, 7);
        return $result;
    }

    function getLatestReview($limit)
    {
        $trendingStories = $this->coolGadgetsDb->getLatestProduct($limit);
        return $trendingStories;
    }

    function getTop10ProductWithoutUID($limit)
    {
        return $this->coolGadgetsDb->getTopGadgetsWithLimit($limit);
    }

    function getDataByLimitAndCountry($limit, $country)
    {
        return $this->coolGadgetsDb->getTopGadgetsWithLimitAndCountry($limit, $country);
    }

    function getPublishingGadgets($limit)
    {
        return $this->coolGadgetsDb->getPublishingGadgetsWithLimit($limit);
    }

    function getPublishingStories($limit)
    {
        return $this->coolGadgetsDb->getPublishingStories($limit);
    }

    function getAllCategories()
    {
        $categories = $this->coolGadgetsDb->getAllCategories();

        $duplicateCategories = $this->extractAllCategories($categories, CoolGadgetsTable::$CATEGORY);
        return $this->removeDuplicateFromArray($duplicateCategories);
    }

    function getAllProductNameAndId()
    {
        return $this->coolGadgetsDb->getAllProductNameAndId();
    }

    function getAllProductNameAndIdWithRange($offset, $limit)
    {
        return $this->coolGadgetsDb->getAllProductNameAndIdWithRange($offset, $limit);
    }

    function getStoryNamesAndIdWithRange()
    {
        $storyLimit = 10;
        $totalRowCount = $this->coolGadgetsDb->getRowCount()[0]['COUNT'];
        $storyOffset = $this->getOffset($this->storyCookieName, $totalRowCount);

        $result = $this->getAllProductNameAndIdWithRange($storyOffset, $storyLimit);
        $this->setOffset($this->storyCookieName, sizeof($result), $totalRowCount, $storyOffset);

        return $result;
    }

    function getOffset($cookieName, $totalRowCount)
    {
        $storyOffset = $this->clientCookie->getSessionOrCookie($cookieName);

        if($storyOffset == null || $storyOffset >= $totalRowCount) {
            $storyOffset = 0;
        }

        return $storyOffset;
    }

    function setOffset($cookieName, $resultCount, $totalRowCount, $offset)
    {
        $offset = $offset + $resultCount;
        if($offset >= $totalRowCount) {
            $offset = 0;
        }
        $this->clientCookie->setCookieAndSession($cookieName, $offset, ClientCookies::oneYearExpiration());
    }

    function getGadgetInfo($productName, $UID, $country)
    {
        $productName = trim($productName);
        $gadgetInfo = $this->coolGadgetsDb->getAGadgetByName($productName);
        $availabilityInfo = [];
        $gadgetInfoWithLike = [];
        if(sizeof($gadgetInfo) > 0) {
            $availabilityInfo = $this->gadgetAvailability->getGadgetAvailability($gadgetInfo[0][CoolGadgetsTable::$PRODUCT_ID], $country);
            $gadgetInfoWithLike = $this->setProductLikedByUser($country, $UID, $gadgetInfo, false);
        }

        $result = array();
        $result['productDetails'] = $gadgetInfoWithLike;
        $result['productAvailability'] = $availabilityInfo;

        return $result;
    }

    function getGadgetAvailabilityById($productId, $country)
    {
        return $this->gadgetAvailability->getGadgetAvailability($productId, $country);
    }

    function updateBlogViewCount($productId)
    {
        $this->coolGadgetsDb->incrementBlogViewCount($productId);
    }

    function getBlogContentById($productId)
    {
        return $this->blogContent->getBlogContentById($productId);
    }

    function setPublishedStatus($status, $gadgets)
    {
        $gadgetIdStr = "";
        $gadgetSize = sizeof($gadgets);
        foreach ($gadgets as $gadget) {
            $gadgetIdStr .= "'" . $gadget[CoolGadgetsTable::$PRODUCT_ID] . "'";
            if($gadgetSize-- > 1) {
                $gadgetIdStr .= ",";
            }
        }
        $this->coolGadgetsDb->updatePublishedStatus($status, $gadgetIdStr);
    }

    function getNewGadgets($limit)
    {
        return $this->coolGadgetsDb->getNewGadgetsWithLimit($limit);
    }

    function getNewStories($limit)
    {
        return $this->coolGadgetsDb->getNewStoriesWithLimit($limit);
    }


    function getGadgetInfoByName($gadgetName)
    {
        $gadgetName = trim($gadgetName);
        $result = $this->coolGadgetsDb->getAGadgetByName($gadgetName);
        if(sizeof($result) > 0) {
            return $result[0];
        }
        return array();
    }

    function getProductInfoById($productId)
    {
        $productId = trim($productId);
        $result = $this->coolGadgetsDb->getProductInfoById($productId);
        if(sizeof($result) > 0) {
            return $result[0];
        }
        return array();
    }

    function getGadgetInfoWithBlogContentByName($gadgetName)
    {
        $gadgetName = trim($gadgetName);
        $result = $this->coolGadgetsDb->getAGadgetByName($gadgetName);
        if(sizeof($result) > 0) {
            $result = $result[0];
            $blogContent = $this->getBlogContentById($result[CoolGadgetsTable::$PRODUCT_ID]);
            $result['BLOG_CONTENT'] = $blogContent[0][BlogContentTable::$CONTENT];
            return $result;
        }
        return array();
    }

    private function removeDuplicateFromArray($inputArray)
    {
        $result = array();
        foreach ($inputArray as $entry) {
            if(!in_array($entry, $result)) {
                array_push($result, $entry);
            }
        }

        return $result;
    }

    private function extractAllCategories($columnData, $columnName)
    {
        $result = array();

        foreach ($columnData as $row) {
            $categories = $row[$columnName];
            $result = array_merge($result, explode(',', $categories));
        }

        return $result;
    }

    private function setProductLikedByUser($country, $UID, $allGadgets, $filterOnCountry)
    {
        $ifUserLoggedIn = $this->isUserLoggedIn($UID);

        $allLikedGadgets = [];
        if($ifUserLoggedIn) {
            $allLikedGadgets = $this->gadgetLikes->getAllLikedProductIdForAnUser($UID);
        }

        //print_r($allLikedGadgets);

        $finalResult = [];

        for ($i = 0, $j = 0; $i < count($allGadgets); $i++) {
            $productId = $allGadgets[$i][CoolGadgetsTable::$PRODUCT_ID];

            /// If product id available in user liked product array

            if(!$filterOnCountry || $this->applyRowFilter($allGadgets[$i], $country)) {
                if($ifUserLoggedIn && isset($allLikedGadgets[$productId]) == 1) {
                    $finalResult[$j] = ArrayUtil::addOneEntryToArray($allGadgets[$i], "IS_LIKED", true);
                } else {
                    $finalResult[$j] = ArrayUtil::addOneEntryToArray($allGadgets[$i], "IS_LIKED", false);
                }
                $j++;
            }
        }

        return $finalResult;

    }

    private function isUserLoggedIn($UID)
    {
        return (isset($_SESSION['RW-UID']) && $UID == $_SESSION['RW-UID']) ? true : false;
    }

    /**
     * This method will apply filter each row of data that we got from database
     * @param $row
     * @param $country
     * @return bool
     */
    private function applyRowFilter($row, $country)
    {
        if(strlen($country) < 2) {
            return false;
        }
        if($this->isCountryBasedFilter) {
            $data = $row[CoolGadgetsTable::$COUNTRY];
            if(strpos($data, $country) === false) {
                return false;
            }
        }
        return true;
    }

    function likeAProduct($UID, $productId)
    {
        if($UID == "" || $productId == "") {
            return;
        }
        if($this->gadgetLikes->saveNewLike($UID, $productId)) {
            $this->coolGadgetsDb->incrementLikeCount($productId);
        }
    }

    function submitAvailability($data)
    {
        $productId = $data['productId'];
        $storeName = $data['storeName'];
        $storeUrl = $data['storeUrl'];
        $country = $data['country'];

        if($this->gadgetAvailability->submitGadgetAvailability($productId, $storeName, $storeUrl, null, $country)) {
            return true;
        }

        return false;
    }

    function submitNewGadget($data)
    {
        $name = $data['name'];
        $description = $data['description'];
        $type = $data['type'];
        $categories = $data['categories'];
        $countries = $data['countries'];
        $videoUrl = $data['videoUrl'];
        $imageName = $data['imageName'];
        $image_1 = $data['image_1'];
        $image_2 = $data['image_2'];
        $image_3 = $data['image_3'];
        $image_4 = $data['image_4'];
        $blogContent = $data['blogContent'];

        if($imageName) {
            $imageName = $this->imagesLocation . "/" . $imageName;
        }
        if($image_1) {
            $image_1 = $this->imagesLocation . "/" . $image_1;
        }

        if($image_2) {
            $image_2 = $this->imagesLocation . "/" . $image_2;
        }

        if($image_3) {
            $image_3 = $this->imagesLocation . "/" . $image_3;
        }

        if($image_4) {
            $image_4 = $this->imagesLocation . "/" . $image_4;
        }
        $productId = HashGenerator::getRandomInt();

        if($this->coolGadgetsDb->submitNewCoolGadget(1, $productId, $type, $name, $categories, $imageName, $description, "", 0,
            $countries, $videoUrl, $image_1, $image_2, $image_3, $image_4)
        ) {
            $this->blogContent->submitBlogContentById($productId, $blogContent);
            return true;
        }

        return false;
    }


    function updateGadget($data)
    {
        $productId = $data['productId'];
        $productInfo = $this->getProductInfoById($productId);
        $oldName = $productInfo[CoolGadgetsTable::$NAME];
        $newName = $data['name'];
        $oldType = $productInfo[CoolGadgetsTable::$TYPE];
        $newType = $data['type'];

        $name = $data['name'];
        $description = $data['description'];
        $type = $data['type'];
        $categories = $data['categories'];
        $countries = $data['countries'];
        $videoUrl = $data['videoUrl'];
        $imageName = $data['imageName'] ? $data['imageName'] : $productInfo[CoolGadgetsTable::$IMAGE_URL];
        $image_1 = $data['image_1'] ? $data['image_1'] : $productInfo[CoolGadgetsTable::$IMAGE_2];
        $image_2 = $data['image_2'] ? $data['image_2'] : $productInfo[CoolGadgetsTable::$IMAGE_3];
        $image_3 = $data['image_3'] ? $data['image_3'] : $productInfo[CoolGadgetsTable::$IMAGE_4];
        $image_4 = $data['image_4'] ? $data['image_4'] : $productInfo[CoolGadgetsTable::$IMAGE_5];
        $blogContent = $data['blogContent'];

        if($data['imageName'] && $imageName) {
            $imageName = $this->imagesLocation . "/" . $imageName;
        }
        if($data['image_1'] && $image_1) {
            $image_1 = $this->imagesLocation . "/" . $image_1;
        }

        if($data['image_2'] && $image_2) {
            $image_2 = $this->imagesLocation . "/" . $image_2;
        }

        if($data['image_3'] && $image_3) {
            $image_3 = $this->imagesLocation . "/" . $image_3;
        }

        if($data['image_4'] && $image_4) {
            $image_4 = $this->imagesLocation . "/" . $image_4;
        }

        if($this->coolGadgetsDb->updateAProduct($productId, $type, $name, $categories, $imageName, $description,
            $countries, $videoUrl, $image_1, $image_2, $image_3, $image_4)
        ) {
            $this->submitRedirectEntry($oldName, $newName, $oldType, $newType);
        }

        $this->blogContent->updateBlogContentById($productId, $blogContent);

        return true;
    }

    function submitRedirectEntry($oldName, $newName, $oldType, $newType)
    {
        if($oldName == $newName && $oldType == $newType) {
            return;
        }
        $oldType = strtolower(trim($oldType));
        $newType = strtolower(trim($newType));
        $oldName = str_replace(' ', '-', trim($oldName));
        $newName = str_replace(' ', '-', trim($newName));
        $oldUrl = "/" . $oldType . "/" . $oldName;
        $newUrl = "/" . $newType . "/" . $newName;
        $this->redirectDb->submitNewRedirectEntry($oldUrl, $newUrl);
    }
}