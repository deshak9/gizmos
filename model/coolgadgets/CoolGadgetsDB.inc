<?php

include_once (__DIR__) . "/../sql/Tables/CoolGadgetsTable.inc";
include_once (__DIR__) . "/../sql/DbQuery.inc";
include_once (__DIR__) . "/PublishingEntity.inc";

class CoolGadgetsDB
{
    var $conn;
    var $sqlQuery;
    var $NEW_STATUS = "NEW";
    var $PUBLISHING_STATUS = "PUBLISHING";
    var $PUBLISHED_STATUS = "PUBLISHED";
    var $entityType;

    function __construct($conn, $entityType)
    {
        $this->conn = $conn;
        $this->entityType = $entityType;
        $this->sqlQuery = new DbQuery($conn);
    }

    function getAllGadgetsByCategoryFirst($category, $offset, $limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND type='$this->entityType' ORDER BY CASE WHEN " . CoolGadgetsTable::$CATEGORY
            . " LIKE '%$category%' THEN 1 ELSE 2 END, " . CoolGadgetsTable::$CATEGORY . " DESC LIMIT ?,?";

        $params = array($offset, $limit);

        return $this->sqlQuery->_fetchAllData($query, "ii", $params);
    }

    function getAllGadgets()
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "=1";
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getNewGadgetsWithLimit($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND " . CoolGadgetsTable::$PUBLISHED_STATUS . "='" . PublishingEntity::$NEW_STATUS . "' LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getNewStoriesWithLimit($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND " . CoolGadgetsTable::$PUBLISHED_STATUS . "='" . PublishingEntity::$NEW_STATUS . "' LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getPublishingGadgetsWithLimit($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND " . CoolGadgetsTable::$PUBLISHED_STATUS . "='" . PublishingEntity::$PUBLISHING_STATUS . "' LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getPublishingStories($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND " . CoolGadgetsTable::$PUBLISHED_STATUS . "='" . PublishingEntity::$PUBLISHING_STATUS . "' LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getTopGadgetsWithLimit($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 ORDER BY " . CoolGadgetsTable::$LIKES . " DESC" . " LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getTopGadgetsWithLimitByView($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND TYPE='$this->entityType' ORDER BY " . CoolGadgetsTable::$NO_OF_VIEW . " DESC" . " LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getLatestProductsByRange($offset, $limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND TYPE='$this->entityType' ORDER BY id DESC" . " LIMIT $offset,$limit";

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getTrendingStoriesByView($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND TYPE='$this->entityType' ORDER BY " . CoolGadgetsTable::$NO_OF_VIEW . " DESC" . " LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getLatestStoriesByRange($start, $end)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 ORDER BY id DESC" . " LIMIT $start,$end";

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }


    function getSearchItemsByLimit($productName, $limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND " . CoolGadgetsTable::$NAME . " LIKE '%$productName%'" . " ORDER BY id DESC LIMIT $limit";

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getLatestProduct($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 AND TYPE='$this->entityType' ORDER BY id DESC" . " LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getTopGadgetsWithLimitAndCountry($limit, $country)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1" . " ORDER BY "
            . CoolGadgetsTable::$NO_OF_VIEW . " DESC" . " LIMIT " . $limit;
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getAllProductNameAndId()
    {
        $query = "SELECT " . CoolGadgetsTable::$NAME . "," . CoolGadgetsTable::$PRODUCT_ID . " FROM "
            . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "=1 AND TYPE='$this->entityType'";
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }


    function getAllProductNameAndIdWithRange($start, $end)
    {
        $query = "SELECT " . CoolGadgetsTable::$NAME . "," . CoolGadgetsTable::$PRODUCT_ID . " FROM "
            . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "=1 AND TYPE='$this->entityType'"
            . " ORDER BY id LIMIT $start,$end";
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getAllCategories()
    {
        $query = "SELECT " . CoolGadgetsTable::$CATEGORY . " FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON
            . "=1 ORDER BY " . CoolGadgetsTable::$LIKES . " DESC";

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getOwnedPopularGadgets($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "=1 ORDER BY "
            . CoolGadgetsTable::$OWN_POPULARITY . " DESC LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getPopularGadgets($limit)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "=1 ORDER BY "
            . CoolGadgetsTable::$LIKES . " DESC LIMIT " . $limit;

        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getAGadget($productId)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "='1' AND "
            . CoolGadgetsTable::$PRODUCT_ID . "=?";

        $params = array($productId);

        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }


    function getAGadgetByName($gadgetName)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "='1' AND "
            . CoolGadgetsTable::$NAME . "=?";

        $params = array($gadgetName);

        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function getProductInfoById($productId)
    {
        $query = "SELECT * FROM " . CoolGadgetsTable::$TABLE_NAME . " WHERE " . CoolGadgetsTable::$IS_ON . "='1' AND "
            . CoolGadgetsTable::$PRODUCT_ID . "=?";

        $params = array($productId);

        return $this->sqlQuery->_fetchAllData($query, "s", $params);
    }

    function updatePublishedStatus($status, $gadgetIdStr)
    {
        $query = "UPDATE " . CoolGadgetsTable::$TABLE_NAME . " SET " . CoolGadgetsTable::$PUBLISHED_STATUS . "=? WHERE "
            . CoolGadgetsTable::$PRODUCT_ID . " IN (" . $gadgetIdStr . ")";

        $params = array($status);
        return $this->sqlQuery->_updateAColumn($query, "s", $params);
    }


    function submitNewCoolGadget($isOn, $productId, $type, $name, $category, $imageUrl, $description, $targetLink, $likes,
                                 $countries, $videoUrl, $img_1, $img_2, $img_3, $img_4)
    {
        $query = "INSERT INTO " . CoolGadgetsTable::$TABLE_NAME . " (" . CoolGadgetsTable::getAllComaSeparatedColumns() .
            ") VALUES(" .
            CoolGadgetsTable::getQuestionMarks() . ")";

        $typeString = CoolGadgetsTable::getTypeString();
        $params = array($isOn, $productId, $type, $name, $category, $imageUrl, $description, $targetLink, $likes,
            0, $countries, "NEW", $videoUrl, $imageUrl, $img_1, $img_2, $img_3, $img_4);

        return $this->sqlQuery->_saveData($query, $typeString, $params);
    }


    function updateAProduct($productId, $type, $name, $category, $imageUrl, $description, $countries, $videoUrl,
                            $img_1, $img_2, $img_3, $img_4)
    {
        $query = "UPDATE " . CoolGadgetsTable::$TABLE_NAME . " set " .
            CoolGadgetsTable::$TYPE . "=?," .
            CoolGadgetsTable::$NAME . "=?," .
            CoolGadgetsTable::$CATEGORY . "=?," .
            CoolGadgetsTable::$IMAGE_URL . "=?," .
            CoolGadgetsTable::$DESCRIPTION . "=?," .
            CoolGadgetsTable::$COUNTRY . "=?," .
            CoolGadgetsTable::$VIDEO_URL . "=?," .
            CoolGadgetsTable::$IMAGE_1 . "=?," .
            CoolGadgetsTable::$IMAGE_2 . "=?," .
            CoolGadgetsTable::$IMAGE_3 . "=?," .
            CoolGadgetsTable::$IMAGE_4 . "=?," .
            CoolGadgetsTable::$IMAGE_5 . "=?" .
            " WHERE " . CoolGadgetsTable::$PRODUCT_ID . "=?";

        $params = array($type, $name, $category, $imageUrl, $description, $countries, $videoUrl, $imageUrl, $img_1,
            $img_2, $img_3, $img_4, $productId);

        return $this->sqlQuery->_saveData($query, "sssssssssssss", $params);
    }

    function updateAColumn($columnName, $type, $value, $productId)
    {
        $query = "UPDATE " . CoolGadgetsTable::$TABLE_NAME . " SET " . $columnName . "=? WHERE "
            . CoolGadgetsTable::$PRODUCT_ID . "=?";

        $params = array($value, $productId);

        return $this->sqlQuery->_updateAColumn($query, $type, $params);
    }

    function incrementLikeCount($productId)
    {
        $this->incrementAColumnValue(CoolGadgetsTable::$LIKES, $productId);
    }

    function incrementBlogViewCount($productId)
    {
        $this->incrementAColumnValue(CoolGadgetsTable::$NO_OF_VIEW, $productId);
    }

    function incrementAColumnValue($columnName, $productId)
    {
        $query = "UPDATE " . CoolGadgetsTable::$TABLE_NAME . " set " . $columnName . "=" . $columnName
            . "+1 WHERE " . CoolGadgetsTable::$PRODUCT_ID . "=?";
        $params = array($productId);
        return $this->sqlQuery->_updateAColumn($query, "d", $params);
    }

    function getRowCount()
    {
        $query = "SELECT COUNT(*) AS COUNT FROM " . CoolGadgetsTable::$TABLE_NAME
            . " WHERE TYPE='$this->entityType' AND " . CoolGadgetsTable::$IS_ON . "=1";
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

    function getWholeTableRowCount()
    {
        $query = "SELECT COUNT(*) AS COUNT FROM " . CoolGadgetsTable::$TABLE_NAME
            . " WHERE " . CoolGadgetsTable::$IS_ON . "=1";
        return $this->sqlQuery->_fetchWithoutPreparedStatement($query);
    }

}