<?php


// CROSS-ORIGIN-PERMISSION
if (isset($_SERVER["HTTP_ORIGIN"]))
{
    header("Access-Control-Allow-Origin: {$_SERVER["HTTP_ORIGIN"]}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 86400");
}
//------------------------


echo(
    '[{"id":0,"name":"iPhone 5","preis":300},{"id":1,"name":"iPhone 6","preis":400},{"id":2,"name":"iPhone 7","preis":500},{"id":3,"name":"Galaxy S10","preis":500}]'
);

?>