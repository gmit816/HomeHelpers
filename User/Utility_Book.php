<?php
require("../connection.php");
require ("../PHPMailer/PHPMailerAutoload.php");
session_start();

$Service=$_POST['EService'];
$SService=$_POST['ESubService'];
$City=$_POST['ECity'];
$Area=$_POST['EArea'];
$Problem=$_POST['EProblem'];
$Address=$_POST['Address1'];
$User_id=$_SESSION['User_id'];
$Amt=$_POST['CCharge'];
//echo $Service,$SService,$City,$Area,$Problem,$Address,$User_id;

$SSelect="SELECT Emp_id , Contact_no FROM `sprovider_master` WHERE Area_id='$Area' AND Service_id='$Service' AND Available=1 ORDER BY Points DESC LIMIT 1";
if( !( $Res = mysql_query( $SSelect ) ) ){
    echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
}
else{
    if (mysql_num_rows($Res) == 0) {
        $DSelect="SELECT Emp_id , Contact_no FROM `sprovider_master` WHERE City_id='$City' AND Service_id='$Service' AND Available=1 ORDER BY Points DESC LIMIT 1";
        if( !( $DRes = mysql_query( $DSelect ) ) ){
            echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
        }
        else{
            $row=mysql_fetch_assoc($DRes);
            $SProvider=$row['Emp_id'];
            //echo $SProvider;
            //echo $Service,$SService,$City,$Area,$Problem,$Address,$User_id,$Amt;
            $sql="INSERT INTO `receipt_master`(`User_id`, `Emp_id`, `Service_id`, `Subservice_id`, `Address`, `Area_id`, `City_id`, `Bill_amt`, `Booking_date`, `Problem_desc`) VALUES ('$User_id','$SProvider','$Service','$SService','$Address','$Area','$City','$Amt',NOW(),'$Problem')";
            $r=mysql_query($sql,$con);
            if($r){
                $SproUpdate="UPDATE `sprovider_master` SET Available=0 WHERE Emp_id='$SProvider'";
                $rupdate=mysql_query($SproUpdate,$con);
                if($rupdate){
                    $rmail=$_SESSION['Email_ID'];
                    $subject="Booking Status - HomeHelpers";
                    $message="Your requested Service is successfully Booked, our one of the best Service Provider will solve your problem as soon as possible! Please stay updated with your HomeHelpers' account for latest status of your requested Service.";

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

                    $mail->WordWrap = 250;
                    $mail->IsHTML(true);

                    $mail->Subject = $subject;
                    $mail->Body = $message;

                    if(!$mail->Send())
                    {
                        echo "<script>alert('Something Went Wrong during sending Mail to you. Please Try Again. $mail->ErrorInfo;');document.location='Book_Service.php';</script>";
                    }
                    else{
                        //echo $row['Contact_no'];

                        $User_select="SELECT Contact_no FROM `user_master` WHERE User_id='$User_id'";
                        $result=mysql_query($User_select,$con);
                        $row1=mysql_fetch_assoc($result);
                        // echo $row1['Contact_no'];
                        $SPCon=$row['Contact_no'];
                        $msg="You have got a new order from ".$row1['Contact_no'].", Please visit your HomeHelpers' account for more information.";

                        // Authorisation details.
                        $username = "jayantgandhi25@gmail.com";
                        $hash = "e503831555102dece3c50f2f8b5fcd6aa18a6b9e";

                        // Config variables. Consult http://api.textlocal.in/docs for more info.
                        $test = "0";

                        // Data for text message. This is the text message data.
                        $sender = "TXTLCL"; // This is who the message appears to be from.
                        $numbers = "$SPCon"; // A single number or a comma-seperated list of numbers
                        $message = $msg;
                        // 612 chars or less
                        // A single number or a comma-seperated list of numbers
                        $message = urlencode($message);
                        $data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
                        $ch = curl_init('http://api.textlocal.in/send/?');
                        curl_setopt($ch, CURLOPT_POST, true);
                        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        $result = curl_exec($ch); // This is the result from the API
                        curl_close($ch);

                        echo "<script>alert('Your order is successfully placed !');document.location='index.php';</script>";
                    }
                }
                else{
                    //echo 'Something went wrong during assigning Service Provider';
                    echo "<script>alert('Something went wrong during assigning Service Provider');document.location='Book_Service.php';</script>";
                }
            }
            else{
//            echo 'Insertion of data from Database Failed - #'.mysql_errno().': '.mysql_error();
                echo "<script>alert('Insertion of data failed. Please book your service Again.');document.location='Book_Service.php';</script>";
            }
            //echo 'mit';
      }
        //echo 'mit1';
    }
    else{
        $row=mysql_fetch_assoc($Res);
        $SProvider=$row['Emp_id'];
        //echo $SProvider;
        //echo $Service,$SService,$City,$Area,$Problem,$Address,$User_id,$Amt;
        $sql="INSERT INTO `receipt_master`(`User_id`, `Emp_id`, `Service_id`, `Subservice_id`, `Address`, `Area_id`, `City_id`, `Bill_amt`, `Booking_date`, `Problem_desc`) VALUES ('$User_id','$SProvider','$Service','$SService','$Address','$Area','$City','$Amt',NOW(),'$Problem')";
        $r=mysql_query($sql,$con);
        if($r){
            $SproUpdate="UPDATE `sprovider_master` SET Available=0 WHERE Emp_id='$SProvider'";
            $rupdate=mysql_query($SproUpdate,$con);
            if($rupdate){
                $rmail=$_SESSION['Email_ID'];
                $subject="Booking Status - HomeHelpers";
                $message="Your requested Service is successfully Booked, our one of the best Service Provider will solve your problem as soon as possible! Please stay updated with your HomeHelpers' account for latest status of your requested Service.";

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

                $mail->WordWrap = 250;
                $mail->IsHTML(true);

                $mail->Subject = $subject;
                $mail->Body = $message;

                if(!$mail->Send())
                {
                    echo "<script>alert('Something Went Wrong during sending Mail to you. Please Try Again. $mail->ErrorInfo;');document.location='Book_Service.php';</script>";
                }
                else{
                    //echo $row['Contact_no'];

                    $User_select="SELECT Contact_no FROM `user_master` WHERE User_id='$User_id'";
                    $result=mysql_query($User_select,$con);
                    $row1=mysql_fetch_assoc($result);
                   // echo $row1['Contact_no'];
                    $SPCon=$row['Contact_no'];
                    $msg="You have got a new order from ".$row1['Contact_no'].", Please visit your HomeHelpers' account for more information.";

                    // Authorisation details.
                    $username = "jayantgandhi25@gmail.com";
                    $hash = "e503831555102dece3c50f2f8b5fcd6aa18a6b9e";

                    // Config variables. Consult http://api.textlocal.in/docs for more info.
                    $test = "0";

                    // Data for text message. This is the text message data.
                    $sender = "TXTLCL"; // This is who the message appears to be from.
                    $numbers = "$SPCon"; // A single number or a comma-seperated list of numbers
                    $message = $msg;
                    // 612 chars or less
                    // A single number or a comma-seperated list of numbers
                    $message = urlencode($message);
                    $data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
                    $ch = curl_init('http://api.textlocal.in/send/?');
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    $result = curl_exec($ch); // This is the result from the API
                    curl_close($ch);

                    echo "<script>alert('Your order is successfully placed !');document.location='index.php';</script>";
                }
            }
            else{
                //echo 'Something went wrong during assigning Service Provider';
                echo "<script>alert('Something went wrong during assigning Service Provider');document.location='Book_Service.php';</script>";
            }
        }
        else{
//            echo 'Insertion of data from Database Failed - #'.mysql_errno().': '.mysql_error();
            echo "<script>alert('Insertion of data failed. Please book your service Again.');document.location='Book_Service.php';</script>";
        }
        //echo $row['Emp_id'];
        //echo 'mit2';
    }
}