<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>
<form name="fmrcart" method="post">






	<?php
		session_start();
		include_once("connection.php");
	
	    $csql=mysql_query("select *,(p.Pro_rate * a.qty) as total from addtocart a,product p where a.pro_id=p.Pro_id and a.session_id='".session_id()."'");
	
			
		echo "<table align='center'>";
 	
		echo "<th>Product_Name</th>";
		echo "<th>Quantity</th>";
		echo "<th>Price</th>";	
		echo "<th>Total</th>";
		echo "<th>Edit</th>";
		echo "<th>Delete</th>";
		
		while($row=mysql_fetch_array($csql))
		{
			echo "<tr>";
		 	echo "<td>".$row['Pro_name']."</td>";
			echo "<td>".$row['qty']."</td>";
			echo "<td>".$row['Pro_rate']."</td>";
			echo "<td>".$row["total"]."</td>";
			
		
			echo "<td><a href='index.php?page=update_addtocart.php&id=".$row[0]."&pname=".$row[7]."&txtqua=".$row[3]."&price=".$row[8]."'>Edit</td>";
			
			echo "<td><a href='index.php?page=grid_addtocart.php&id=".$row[0]."'>Delete</td>";
			
			echo "</tr>";
			$_SESSION["pid"]=$row[0];
			$_SESSION["total"]=$row["total"];	
			//$_SESSION["qty"]=$row[2];
		}		
	?>
	<tr>
		<td colspan="6"></td>
	</tr>
	<tr>
	
	<th align="left" >Quantity:
	</th>
	<td>
	
	<?php
	$sql1=mysql_query("select sum(qty) from addtocart where session_id='".session_id()."'");
	
	$row1=mysql_fetch_array($sql1);
	$_SESSION["qty"]=$row1[0];
	echo  $row1[0];
	 
	?>
 
	<th>Total Amount:
	</th>
	<td>
	 
 

	<?php
	$sql2=mysql_query("select sum(p.Pro_rate * a.qty) as total  from addtocart a,product p where a.pro_id=p.Pro_id and a.session_id='".session_id()."'");
	
	$row2=mysql_fetch_array($sql2);
	echo $row2[0];
		
		echo "</tr>";
		
		
		
		echo "<td colspan='6'><a href='index.php?page=insert_payment.php&pid=".$_SESSION["pid"]."&total=".$row2[0]."&qty=".$_SESSION["qty"]."'>Payment</a>";
	 
	?>
	
	
<?php
echo "</table>";
?>
	</form>
</body>
</html>
