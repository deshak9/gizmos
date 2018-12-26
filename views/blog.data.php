<?php

include_once (__DIR__) . "/../model/coolgadgets/CoolGadgets.inc";
include_once (__DIR__) . "/../model/sql/Tables/BlogContentTable.inc";
include_once (__DIR__) . "/../model/tp/CountryCode.inc";

$coolGadgets = new CoolGadgets($conn, EntityType::$ANY);

// update blog view count
$coolGadgets->updateBlogViewCount($productId);

$gadgetAvailability = $coolGadgets->getGadgetAvailabilityById($productId, CountryCode::getCountryCode());

$blogContent = $coolGadgets->getBlogContentById($productId);

?>

<div class="blog-container">
    <div class="blog">
        <h1><?php echo $productName ?></h1>

        <!--<div class="blog-author blog-margin-top">
            AUTHOR: PRABHAT
        </div>-->

        <br/>
        <br/>

        <div class="blog-share blog-margin-top">
            <SocialButtonsColor id="social-buttons-color"></SocialButtonsColor>
        </div>

        <div class="blog-content">
            <?php
            if(sizeof($blogContent) > 0) {
                echo $blogContent[0][BlogContentTable::$CONTENT];
            }
            ?>
        </div>

        <div class="blog-product-availability">
            <?php
            if(sizeof($gadgetAvailability) > 0) {

                ?>
                <h2>Buy <?php echo $productName; ?></h2>
                <br/>
                <br/>

                <div class="blog-availability">
                    <?php
                    foreach ($gadgetAvailability as $entry) {
                        $targetUrl = $entry[GadgetAvailabilityTable::$STORE_URL];
                        $storeImageUrl = "/images/store-image/" . strtolower($entry[GadgetAvailabilityTable::$STORE_NAME]) . "-logo.png";
                        ?>
                        <div>
                            <a href="<?php echo $targetUrl; ?>" target="_blank"><img width="50" height="50"
                                                                                     src="<?php echo $storeImageUrl ?>"/></a>
                        </div>
                        <?php
                    }
                    ?>
                </div>

                <?php
            }
            ?>
        </div>
        <br/>
        <br/>
        <br/>

        <div style="width: 100%;" data-width="100%" class="fb-comments"
             data-href="http://www.gadgetclues.com<?php echo $productUrl; ?>"
             data-numposts="5"></div>
    </div>
</div>

