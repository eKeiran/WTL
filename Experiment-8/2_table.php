<?php

$con = mysqli_connect('localhost', 'root', '');

mysqli_select_db($con, "shopping");

$str = "create table stationary(itemID int not null, itemname varchar(20),itemquantity int)";

if (mysqli_query($con, $str)) {
    echo "Table created";
} else {
    echo "Table not created" . mysqli_error($con);
}

?>