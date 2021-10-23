<?php

//CROSS-ORIGIN-PERMISSION
 if (isset($_SERVER['HTTP_ORIGIN']))
 {
     header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
     header('Access-Control-Allow-Credentials: true');
     header('Access-Control-Max-Age: 86400');
 }
 //------------------------




 
 if(isset($_GET["username"]) && isset($_GET["password"]))
 {
     $b = $_GET["username"];
     $p = $_GET["password"];

     if($b == "admin" && $p == "123456")
     {
         echo("1");
     }
     else
     {
         echo("0");
     }

 }
 else
 {
     echo("Parameter not complete ");
 }

 ?>