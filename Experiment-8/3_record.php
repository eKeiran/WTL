<?php

$con = mysqli_connect('localhost', 'root', '');

mysqli_select_db($con, "shopping");

$itemID = $_REQUEST['itemID'];
$itemname = $_REQUEST["itemname"];
$itemquantity = $_REQUEST["itemquantity"];

$str1 = "insert into stationary values('$itemID', '$itemname','$itemquantity')";

if (mysqli_query($con, $str1)) {
    echo "Values inserted";
} else {
    echo "Values not inserted" . mysqli_error($con);
}

?>