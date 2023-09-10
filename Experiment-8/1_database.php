<?php

$con = mysqli_connect('localhost', 'root', '');

$str = "create database shopping";

if (mysqli_query($con, $str)) {
    echo "Database created";
} else {
    echo "Database not created" . mysqli_error($con);
}

?>