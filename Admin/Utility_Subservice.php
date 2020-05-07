<?php
require("../connection.php");
$Sub=$_POST['Sub'];
$Service=$_POST['Service'];
$path="../images/Sub-Services/". basename($_FILES['Image']['name']);
$gandhi=basename($path);
$mit="SELECT * FROM `subservice_master` WHERE Subservice_name='$Sub'";
$res=mysql_query($mit,$con);
if(mysql_num_rows($res)==1){
    echo "<script>alert('$Sub is already Existed. Try Again.');document.location='Subservice_Add.php';</script>";
    //echo "<script>var mit = confirm($Sub + 'is already existed.');if( mit == true ){$Sub} else {$gandhi}</script>";
}
else{
    if(isset($_FILES)){
        if(empty($_FILES['Image']['tmp_name'])){
            $sql="INSERT INTO `subservice_master`(`Subservice_name`,`Service_id`) VALUES ('$Sub','$Service')";
            $result=mysql_query($sql,$con);
            if($result){
                echo "<script>alert('$Sub is Successfully Added!');document.location='Subservice_Manage.php';</script>";
            }
            else{
                echo "<script>alert('Something went Wrong.');document.location='Subservice_Add.php';</script>";
            }
        }
        else{
            if(move_uploaded_file($_FILES['Image']['tmp_name'],$path)){
                $sql="INSERT INTO `subservice_master`(`Subservice_name`,`Subservice_image`,`Service_id`) VALUES ('$Sub','$gandhi','$Service')";
                $result=mysql_query($sql,$con);
                if($result){
                    echo "<script>alert('$Sub is Successfully Added!');document.location='Subservice_Manage.php';</script>";
                }
                else{
                    echo "<script>alert('Something went Wrong.');document.location='Subservice_Add.php';</script>";
                }
            }
            else
            {
                echo "<script>alert('Something went Wrong in uploading the image');document.location='Subservice_Add.php';</script>";
            }
        }
    }
/*    if(move_uploaded_file($_FILES['Image']['tmp_name'],$path)){
        $sql="INSERT INTO `subservice_master`(`Subservice_name`,`Subservice_image`,`Service_id`) VALUES ('$Sub','$gandhi','$Service')";
        $result=mysql_query($sql,$con);
        if($result){
            echo "<script>alert('$Sub is Successfully Added!');document.location='Subservice_Manage.php';</script>";
        }
        else{
            echo "<script>alert('Something went Wrong.');document.location='Subservice_Add.php';</script>";
        }
    }
    else
    {
        echo "<script>alert('Something went Wrong in uploading the image');document.location='Subservice_Add.php';</script>";
    }*/
}