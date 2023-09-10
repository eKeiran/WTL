<?php

$con = mysqli_connect('localhost', 'root', '');

mysqli_select_db($con, "shopping");

$str = "SELECT * FROM stationary";

$result = mysqli_query($con, $str);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);

    echo "\n ItemID: ", $row["itemID"], "\tItem Name: ", $row["itemname"], "\tItem Quantity: ", $row["itemquantity"], "<br>";
} else {
    echo "0 results";
}

?>