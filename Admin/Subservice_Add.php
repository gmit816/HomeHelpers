<!DOCTYPE HTML>
<html>
<head>
    <title>Sub-Service Manage</title>
</head>
<?php
require_once("Navigation.php");
require("../connection.php");
?>
<body>
<div id="wrapper">
    <div id="page-wrapper" style="margin-top: 98px;">
        <div class="graphs">
            <div class="xs">
                <h3>Add Sub-Service</h3>
                <div class="tab-content" style="margin-top: 80px;">
                    <div class="tab-pane active" id="horizontal-form">
                        <form class="form-horizontal" action="Utility_Subservice.php" method="post" enctype="multipart/form-data">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <div class="col-sm-2">&nbsp;</div>
                                    <label for="focusedinput" class="col-sm-2 control-label">Sub-Service Name:</label>
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control1" name="Sub" placeholder="Leak Detection" required="required">
                                    </div>
                                </div>
                                <div class="col-sm-12" style="margin-top: 8px;">
                                    <div class="col-sm-2">&nbsp;</div>
                                    <label for="focusedinput" class="col-sm-2 control-label">Sub-Service Image:</label>
                                    <div class="col-sm-4">
                                        <input type="file" class="form-control1" name="Image" id="Image">
                                    </div>
                                </div>
                                <div class="col-sm-12" style="margin-top: 8px;">
                                    <div class="col-sm-2">&nbsp;</div>
                                    <label for="focusedinput" class="col-sm-2 control-label">Service Name:</label>
                                    <div class="col-sm-4">
                                        <?php
                                        $selectSQL = "SELECT * FROM `service_master` where Deleted=0 ORDER BY `Service_id`";
                                        # Execute the SELECT Query
                                        if( !( $selectRes = mysql_query( $selectSQL ) ) ){
                                            echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
                                        }
                                        else{
                                        ?>
                                        <select name="Service" class="form-control1" id="selector1" required="required">
                                            <option value="">---------------------------&nbsp;&nbsp;Select Service&nbsp;&nbsp;----------------------------</option>
                                            <?php
                                            if( mysql_num_rows( $selectRes )==0 ){
                                                echo '<option>No Rows Returned</option>';
                                            }
                                            else
                                            {
                                                while( $row = mysql_fetch_assoc( $selectRes ) )
                                                {
                                                    echo "<option value={$row['Service_id']}>{$row['Service_name']}</option>";
                                                }
                                            }
                                            }
                                            ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12" align="center" style="margin-top: 40px;">
                                    <input type="submit" class="btn btn-default" name="Submit" value="Add" style="width: 100px;">
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="copy_layout">
                    <p>Copyright © 2016. Still No Rights Reserved | Designed by <b style="font-weight: 500">M!t</b></p>
                </div>
            </div>
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
    <!-- Nav CSS -->
</body>
</html>