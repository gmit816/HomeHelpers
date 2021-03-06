<!DOCTYPE HTML>
<html>
<?php
require("../connection.php");
require_once("Navigation.php");
?>
<head>
    <title>User Dashboard</title>
</head>
<body>
<div id="wrapper">
    <div id="page-wrapper" style="margin-left: 0px; min-height: 399px;">
        <div class="graphs">
            <div class="xs" style="margin-top: 80px;">
            <div class="tab-content col_3">
                <div class="tab-pane active" id="horizontal-form">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <a class="tiles_info" href="Book_Service.php">
                            <div class="tiles-body fb2" style="padding-top: 75px;padding-bottom: 75px;margin-top: 20px;margin-bottom: 20px;">
                                <div class="text-center" style="font-size: 24px;">Book Service</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <a class="tiles_info" href="MCService.php">
                            <div class="tiles-body fb2" style="padding-top: 75px;padding-bottom: 75px;margin-top: 20px;margin-bottom: 20px;">
                                <div class="text-center" style="font-size: 24px;">Manage Current Service</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <a class="tiles_info" href="VPServices.php">
                            <div class="tiles-body fb2" style="padding-top: 75px;padding-bottom: 75px;margin-top: 20px;margin-bottom: 20px;">
                                <div class="text-center" style="font-size: 24px;">View Previous Services</div>
                            </div>
                        </a>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="col_1">
                <div class="col-md-12 span_3">
                    <div class="bs-example1" data-example-id="contextual-table" style="height: auto;margin-bottom: 20px;">
                        <center style="margin-bottom: 30px; font-size: 20px;"><b>How We Work?!</b></center>
                        <div class="col-md-4" align="center">
                            <img src="../images/book.svg" width="100px" style="margin-bottom: 20px;"><br>
                            <strong>Book</strong> <br><br>Share your need and information with us.
                        </div>
                        <div class="col-md-4" align="center">
                            <img src="../images/schedule.svg" width="100px" style="margin-bottom: 20px;"><br>
                            <strong>Wait</strong> <br><br>Schedule a time for us to attend to you.
                        </div>
                        <div class="col-md-4" align="center">
                            <img src="../images/relax.svg" width="100px" style="margin-bottom: 20px;"><br>
                            <strong>Relax</strong> <br><br>Our expert team will do the assigned task while you relax.
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col_3">
                <div class="col-md-12 span_3">
                    <div class="bs-example1" data-example-id="contextual-table" style="height: auto;margin-bottom: 20px;">
                        <center style="margin-bottom: 40px; font-size: 20px;"><b>Our Services!</b></center>
                        <?php
                        $selectSQL = "SELECT * FROM `service_master` where Deleted=0 ORDER BY `Service_id`";
                        # Execute the SELECT Query
                        if( !( $selectRes = mysql_query( $selectSQL ) ) ){
                            echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
                        }
                        else {
                            if (mysql_num_rows($selectRes) == 0) {
                                echo 'No Rows Returned';
                            } else {
                                while ($row = mysql_fetch_assoc($selectRes)) {
                                    echo '<div class="col-md-3" align="center" style="margin-bottom: 30px;">';
                                    echo "{$row['Service_name']}";
                                    echo '</div>';
                                }
                            }
                        }
                        ?>
                        <div class="col-md-12"><center>Many More Service are COMING SOON!</center></div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col_1">
                <div class="col-md-12 span_3">
                    <div class="bs-example1" data-example-id="contextual-table" style="height: auto;margin-bottom: 20px;">
                        <center style="margin-bottom: 20px; font-size: 20px;"><b>Experts You Can Trust Upon!</b></center>
                        <center style="margin-bottom: 40px;font-weight: 300">All our staff is carefully selected and trained to offer high standards of Quality & Service.</center>
                        <div class="col-md-2"> </div>
                        <div class="col-md-4" align="">
                            <img src="../images/u1.svg" width="85px" style="margin-bottom: 20px;">
                            Certified & Background checked
                        </div>
                        <div class="col-md-1"> </div>
                        <div class="col-md-5">
                            <img src="../images/u2.svg" width="85px" style="margin-bottom: 20px;">
                            Insured work
                        </div>
                        <div class="col-md-2"> </div>
                        <div class="col-md-4">
                            <img src="../images/u3.svg" width="85px" style="margin-bottom: 20px;">
                            Satisfaction guaranteed
                        </div>
                        <div class="col-md-1"> </div>
                        <div class="col-md-5">
                            <img src="../images/u4.svg" width="85px" style="margin-bottom: 20px;">
                            Easy payment
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="clearfix"> </div>
            <div class="copy_layout">
                <p>Copyright © 2016. Still No Rights Reserved | Designed by <b style="font-weight: 500">M!t</b> </p>
            </div>
        </div>
        </div>
    </div>
    <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
<!-- Bootstrap Core JavaScript -->
</body>
</html>
