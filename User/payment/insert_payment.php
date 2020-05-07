<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>
<?php
//include("connection.php");
	include("connection.php");
$ins=mysql_query("insert into payment_master values('',".$_REQUEST["oid"].",".$_REQUEST["total"].",'Payment')");
echo "<script>alert('Payment Done');document.location='Payment.php?total=".$_REQUEST["total"]."'</script>";
?>
</body>
</html>
