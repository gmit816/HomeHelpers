<?php
require ("../PHPMailer/PHPMailerAutoload.php");
require("../connection.php");

$rmail="jayantgandhi25@gmail.com";

    $mail = new PHPMailer();

    $mail->IsSMTP();

    $mail->SMTPDebug= 0;

    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;

    $mail->Username = "gmit816@gmail.com";
    $mail->Password = "mjg@30061998";
    $mail->From = "gmit816@gmail.com";
    $mail->FromName = "Mit Gandhi";
    $mail->AddAddress($rmail);

    $mail->WordWrap = 128;


    $mail->Subject = "test";
    $mail->MsgHTML(file_get_contents('test.html'));
$mail->AltBody = 'To view the message, please use an HTML compatible email viewer!';
$mail->IsHTML(true);

    if(!$mail->Send())
    {
        echo "<script>alert('Something Went Wrong during sending Mail. Please Try Again. $mail->ErrorInfo;');</script>";
    }
    else{
        echo "<script>alert('Password is successfully Recovered, Please check Your registered Email Id.');</script>";
    }