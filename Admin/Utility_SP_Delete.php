<?php
require("../connection.php");
$Emp_id=$_GET['id'];
$Email_ID=$_GET["name"];
$query="UPDATE `sprovider_master` SET Deleted=1 WHERE Emp_id='$Emp_id'";
$res=mysql_query($query,$con);
if($res){
    echo "<script>alert('$Email_ID is successfully Deleted.');document.location='ServiceProvider_EVD.php';</script>";
}
else{
    echo "<script>alert('Something went Wrong. Please try again.');document.location='ServiceProvider_EVD.php';</script>";
}

