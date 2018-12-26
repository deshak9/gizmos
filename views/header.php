<?php
/**
 * Created by PhpStorm.
 * User: prabhato
 * Date: 3/3/2017
 * Time: 8:25 PM
 */
include_once (__DIR__) . "/dom-generator.php";
include_once (__DIR__) . "/../model/dbutils/dbConnection.php";
$conn = createConnection();

?>


<header>
    <div class="header-container">
        <div class="header-content">
            <div class="left-aligned logo-container">
                <a href="/"><img src="/images/logo3.png"></a>
            </div>
            <div class=" hide-in-mobile">
                <div class="left-aligned menu-container">
                    <ul>
                        <li class="gadget-category-button">GADGETS
                            <div class="gadget-category-container gadget-category-specific">
                                <ul>
                                    <?php echo getGadgetsMenuList($conn); ?>
                                </ul>


                            </div>
                        </li>
                        <li class="story-category-button">STORIES
                            <div class="gadget-category-container story-category-specific">
                                <ul>
                                    <?php echo getStoriesMenuList($conn); ?>
                                </ul>
                            </div>
                        </li>
                        <div class="clear-both-side"></div>
                    </ul>
                </div>
                <SearchBarLogin id="search-bar-login" class="right-aligned login-button-container">
                </SearchBarLogin>

                <div class="clear-both-side"></div>
            </div>
        </div>
    </div>
</header>