<?php

function getPublicFacingKey()
{
    return "fkk3j2f2389fu9823230rf283f98ayfy97y3487ryf487yf743yf8743f7g34fh38374f4sefhsdh4f8";
}

function getPrivateKey()
{
    return "flksafjkas8f9sd8fu98y93yr8f27hy3f87fh8278h7872y98y28g9872gf8g87g36g34332r2398f8";

}

function checkVulnerability()
{
    if($key != "safjlkalk3j92838r8923rh238fh823f984f4397f47f43hf3")
        die();
}

function validatePublicKey()
{
    if($key == "fkk3j2f2389fu9823230rf283f98ayfy97y3487ryf487yf743yf8743f7g34fh38374f4sefhsdh4f8")
        return true;
    return false;
}

function validatePrivateKey($key)
{
    if($key == "flksafjkas8f9sd8fu98y93yr8f27hy3f87fh8278h7872y98y28g9872gf8g87g36g34332r2398f8")
        return true;
    return false;
}

function getPasswordSaltKey()
{
    return "afkjsalkjb32b3b25b32k523kj5h32kj52h3kl5h32j532532k5h2j3kh532jkh5k2332kh5j32kh5k32jhhj";
}

function getCookieSaltKey()
{
    return "fas9483u9u8dgd9y88yfwefo283r32r9f8ewfydf8ayg9s8dygasd87gds7ag6ads98g6sad87gsdy9g8d7yg8";
}

?>