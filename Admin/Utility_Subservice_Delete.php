<?php
require("../connection.php");
$id=$_GET['id'];
$name=$_GET["name"];
$query="UPDATE `subservice_master` SET Deleted=1 WHERE Subservice_id='$id'";
$res=mysql_query($query,$con);
if($res){
    echo "<script>alert('$name is successfully Deleted.');document.location='Subservice_View_Delete.php';</script>";
}
else{
    echo "<script>alert('Something went Wrong. Please try again.');document.location='Subservice_View_Delete.php';</script>";
}