<!DOCTYPE html>
<!--[if lt IE 7]><html lang="en" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html lang="en" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Always force latest IE rendering engine -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Meta Keyword -->
    <meta name="keywords" content="one page, business template, single page, onepage, responsive, parallax, creative, business, html5, css3, css3 animation">
    <!-- meta character set -->
    <meta charset="utf-8">
    <!-- Site Title -->
    <title>HomeHelpers</title>
    <link rel="shortcut icon" href="images/icon.jpg">
    <!--Google Fonts-->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css">
    <!--CSS-->
    <!-- Fontawesome -->
    <link rel="stylesheet" href="css/font-awesome.min_visitor.css">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min_visitor.css">
    <!-- Fancybox -->
    <link rel="stylesheet" href="css/jquery.fancybox_visitor.css">
    <!-- owl carousel -->
    <link rel="stylesheet" href="css/owl.carousel_visitor.css">
    <!-- Animate -->
    <link rel="stylesheet" href="css/animate_visitor.css">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="css/main_visitor.css">
    <!-- Main Responsive -->
    <link rel="stylesheet" href="css/responsive_visitor.css">
    <!-- Modernizer Script for old Browsers -->
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<?php
require("connection.php");
?>
<body>
<!--Fixed Navigation-->
<header id="navigation" class="navbar-fixed-top">
    <div class="container" style="border-bottom-width: 0px;width: auto;">
        <div class="navbar-header">
            <!-- responsive nav button -->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- /responsive nav button -->
            <!-- logo -->
            <a href="index.php">
                <img src="images/logo.jpeg" alt="HomeHelper">
            </a>
            <!-- /logo -->
        </div>
        <!-- main nav -->
        <nav class="collapse navigation navbar-collapse navbar-right" role="navigation">
            <ul id="nav" class="nav navbar-nav">
                <li class="current"><a href="#home">Home</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="SignUp.php">Sign Up</a></li>
                <li><a href="LogIn.php">Log In</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <!-- /main nav -->
    </div>
</header>
<!--End Fixed Navigation-->
<!--Home Slider-->
<section id="home">
    <div id="home-carousel" class="carousel slide" data-interval="false">
        <ol class="carousel-indicators">
            <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#home-carousel" data-slide-to="1"></li>
            <li data-target="#home-carousel" data-slide-to="2"></li>
        </ol>
        <!--/.carousel-indicators-->
        <div class="carousel-inner">
            <div class="item active" style="background-image: url('images/slider/sl5.jpg')">
                <div class="carousel-caption">
                    <div class="animated bounceInUp">
                        <h2>HELLO! <br>WE ARE HERE FOR YOUR HELP.</h2>
                        <p>HomeHelpers is a pioneer in providing residential services related to day to day life in 10+ cities. We are a dynamic team, with just one passion: to make life easier for YOU.<br>So please give us a chance to do so.</p>
                    </div>
                </div>
            </div>
            <div class="item" style="background-image: url('images/slider/sl7.jpg')" >
                <div class="carousel-caption">
                    <div class="animated bounceInRight">
                        <h2>How We Work?</h2>
                        <p>You can book for any home repair service requirement right from your home. It's quite easy and here's how it works<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Say you need a Serviceman for your Home<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.&nbsp;&nbsp;&nbsp;&nbsp;The best situated Serviceman is assigned for You<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.&nbsp;&nbsp;&nbsp;HomeHelpers resolves all your Home Repair issues.</p>
                    </div>
                </div>
            </div>
            <div class="item" style="background-image: url('images/slider/sl4.jpeg')">
                <div class="carousel-caption">
                    <div class="animated bounceInDown">
                        <h2>Experts You Can Trust Upon!</h2>
                        <p>All our staff is carefully selected and trained to offer high standards of Quality & Service.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certified & Background checked<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Insured work<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Satisfaction guaranteed<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Easy payment</p>
                    </div>
                </div>
            </div>
        </div>
        <!--/.carousel-inner-->
        <nav id="nav-arrows" class="nav-arrows hidden-xs hidden-sm visible-md visible-lg">
            <a class="sl-prev hidden-xs" href="#home-carousel" data-slide="prev">
                <i class="fa fa-angle-left fa-3x"></i>
            </a>
            <a class="sl-next" href="#home-carousel" data-slide="next">
                <i class="fa fa-angle-right fa-3x"></i>
            </a>
        </nav>
    </div>
</section>
<!--End #home Slider-->
<!--#service-->
<section id="service">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center wow fadeInDown">
                    <h2>Services</h2>
                </div>
            </div>
        </div>
        <?php
        $selectSQL = "SELECT * FROM `service_master` where Deleted=0 ORDER BY `Service_id`";
        # Execute the SELECT Query
        if( !( $selectRes = mysql_query( $selectSQL ) ) ){
            echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
        }
        else{
        ?>
        <div class="row">
            <?php
            if (mysql_num_rows($selectRes) == 0) {
                echo 'No Rows Returned';
            } else {
                $mit = 0;
                while ($row = mysql_fetch_assoc($selectRes)) {
                    if ($mit < 4) {
                        echo "<div class='col-md-6 col-sm-12 wow fadeInLeft'>";
                        echo "<div class='media'>";
                        echo "<a href='#' class='pull-left'>";
                        echo "<img src='images/icons/{$row['Service_icon']}' class='media-object' alt='{$row['Service_name']}'>";
                        echo "</a>";
                        echo "<div class='media-body'>";
                        echo "<h3>{$row['Service_name']}</h3>";
                        echo "<p>{$row['Service_description']}</p>";
                        echo "</div></div></div>";
                    }
                    $mit++;
                }
            }
            }
            ?>
            <div class="col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                <div class="media">
                    <a href="#" class="pull-left">
                        <img src="images/icons/Other.jpg" alt="Camera">
                    </a>
                    <div class="media-body">
                        <h3>Other</h3>
                        <p>We have many more helpful services like Computer Repairing, Mobile Repairing, Pest Control,
                            House Cleaning, Laundry. You can use any of these services to make your life easier.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end .row -->
    </div>
    <!-- end .container -->
    <div class="section-title text-center wow fadeInDown">
    </div>
    <nav class="project-filter clearfix text-center wow fadeInDown" data-wow-delay="0.5s">
        <ul class="list-inline">
            <li><a href="javascript:;" class="filter" data-filter="all">All</a></li>
            <?php
            if( !( $selectRes = mysql_query( $selectSQL ) ) ){
                echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
            }
            else {
                if (mysql_num_rows($selectRes) == 0) {
                    echo 'No Rows Returned';
                } else {
                    $gandhi = 0;
                    while ($rows = mysql_fetch_assoc($selectRes)) {
                        if ($gandhi < 4) {
                            echo "<li><a href='javascript:;' class='filter' data-filter='.{$rows['Service_id']}'>{$rows['Service_name']}</a></li>";
                        }
                        $gandhi++;
                    }
                }
            }
            ?>
            <li><a href="javascript:;" class="filter" data-filter=".other">Other</a></li>
        </ul>
    </nav>
    <div id="projects" class="clearfix">
        <?php
        $selectSQL = "SELECT * FROM `subservice_master` where Deleted=0 AND Subservice_id<17";
        # Execute the SELECT Query
        if( !( $selectRes = mysql_query( $selectSQL ) ) ){
            echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
        }
        else {
            if (mysql_num_rows($selectRes) == 0) {
                echo 'No Rows Returned';
            }
            else
            {
                While ($mt = mysql_fetch_assoc($selectRes)) {
                    $query = "SELECT `Service_name` FROM `service_master` WHERE Service_id = {$mt['Service_id']}";
                    if (!($Res = mysql_query($query))) {
                        echo 'Retrieval of City Name from Database Failed - #' . mysql_errno() . ':' . mysql_error();
                    } else {
                        while($a = mysql_fetch_assoc($Res)) {
                            if ($mt['Service_id'] < 5) {
                                echo "<figure class='mix portfolio-item {$mt['Service_id']}'>";
                            } else {
                                echo "<figure class='mix portfolio-item other'>";
                            }
                            echo "<img class='img-responsive' src='images/Sub-Services/{$mt['Subservice_image']}' alt='Portfolio Item'>";
                            echo "<figcaption class='mask'>";
                            echo "<h3>{$mt['Subservice_name']}</h3>";
                            echo "<span>{$a['Service_name']}</span>";
                            echo "</figcaption></figure>";
                        }
                    }
                }
            }
        }
        ?>
    </div> <!-- end #projects -->
</section>
<!--End #service-->
<!--#about-->
<section id="about">
    <div class="container">
        <div class="row">
            <div class="section-title text-center wow fadeInUp">
                <h2>About Us</h2>
                <p>We started HomeHelpers with the basic services in just 5 cities, And now we had crossed milestones of the road of success with the satisfied clients and trust-worthy service providers.<br> Looking forward to achieve and crosseed many more milestones!</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="counter-section clearfix">
                <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.5s">
                    <div class="fact-item text-center">
                        <div class="fact-icon">
                            <i class="fa fa-check-square fa-lg"></i>
                        </div>
                        <span data-to="120">0</span>
                        <p>Completed Projects</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.8s">
                    <div class="fact-item text-center">
                        <div class="fact-icon">
                            <i class="fa fa-users fa-lg"></i>
                        </div>
                        <span data-to="152">0</span>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="1.1s">
                    <div class="fact-item text-center last">
                        <div class="fact-icon">
                            <i class="fa fa-clock-o fa-lg"></i>
                        </div>
                        <span data-to="2500">0</span>
                        <p>Working Hours</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="1.3s">
                    <div class="fact-item text-center last">
                        <div class="fact-icon">
                            <i class="fa fa-trophy fa-lg"></i>
                        </div>
                        <span data-to="200">0</span>
                        <p>Total Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End #about-->
<!--#pricing-->
<section id="pricing">
    <div class="container">
        <div class="row">
            <div class="section-title text-center wow fadeInUp">
                <h2>Pricing</h2>
            </div>
            <?php
            $selectSQL = "SELECT * FROM `service_master` where Deleted=0";
            # Execute the SELECT Query
            if( !( $selectRes = mysql_query( $selectSQL ) ) ){
                echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
            }
            else {
                if (mysql_num_rows($selectRes) == 0) {
                    echo 'No Rows Returned';
                }
                else
                {
                    $krupa=1;
                    While ($m = mysql_fetch_assoc($selectRes)) {
                        if ($m['Service_id'] < 5) {
                            if ($krupa % 2 == 1) {
                                echo "<div class='col-md-2 col-sm-6 col-xs-12 wow fadeInUp'>";
                                echo "<div class='pricing-table text-center'>";
                                echo "<div class='price'>";
                                echo "<span class='plan'>{$m['Service_name']}</span>";
                                echo "<span class='value'><small>Rs</small><strong>{$m['Service_fees']}+</strong>/Hr</span>";
                                echo "</div>";
                                $select = "SELECT `Subservice_name` FROM `subservice_master` WHERE Service_id='{$m['Service_id']}' AND Subservice_id<17";
                                if (!($Res = mysql_query($select))) {
                                    echo 'Retrieval of data from Database Failed - #' . mysql_errno() . ': ' . mysql_error();
                                } else {
                                    echo "<ul class='text-center'>";
                                    While ($t = mysql_fetch_assoc($Res)) {
                                        echo "<li>{$t['Subservice_name']}</li>";
                                    }
                                    echo "<li>Many More!</li>";
                                    echo "</ul>";
                                    echo "<a href='LogIn.php?id={$m['Service_id']}' class='btn btn-price'>Book Now</a>";
                                }
                                echo "</div></div>";
                            }
                            else
                            {
                                echo "<div class='col-md-3 col-sm-6 col-xs-12 wow fadeInUp'>";
                                echo "<div class='pricing-table text-center'>";
                                echo "<div class='price'>";
                                echo "<span class='plan'>{$m['Service_name']}</span>";
                                echo "<span class='value'><small>Rs</small><strong>{$m['Service_fees']}+</strong>/Hr</span>";
                                echo "</div>";
                                $select = "SELECT `Subservice_name` FROM `subservice_master` WHERE Service_id='{$m['Service_id']}' AND Subservice_id<17";
                                if (!($Res = mysql_query($select))) {
                                    echo 'Retrieval of data from Database Failed - #' . mysql_errno() . ': ' . mysql_error();
                                } else {
                                    echo "<ul class='text-center'>";
                                    While ($t = mysql_fetch_assoc($Res)) {
                                        echo "<li>{$t['Subservice_name']}</li>";
                                    }
                                    echo "<li>Many More!</li>";
                                    echo "</ul>";
                                    echo "<a href='LogIn.php?id={$m['Service_id']}' class='btn btn-price'>Book Now</a>";
                                }
                                echo "</div></div>";
                            }
                        }
                        $krupa++;
                    }
                    echo "<div class='col-md-2 col-sm-6 col-xs-12 wow fadeInUp'>";
                    echo "<div class='pricing-table text-center'>";
                    echo "<div class='price'>";
                    echo "<span class='plan'>Other</span>";
                    echo "<span class='value'><small>Rs</small><strong>30+</strong>/Hr</span>";
                    echo "</div>";
                    $select = "SELECT * FROM `service_master` where Deleted=0";
                    if( !( $Res = mysql_query( $select ) ) ){
                        echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
                    }
                    else {
                        echo "<ul class='text-center'>";
                        WHILE ($n = mysql_fetch_assoc($Res)) {
                            if ($n['Service_id'] >= 5) {
                                $sel = "SELECT `Subservice_name` FROM `Subservice_master` WHERE Service_id='{$n['Service_id']}' AND Deleted=0 AND Subservice_id<17";
                                if (!($R = mysql_query($sel))) {
                                    echo 'Retrieval of data from Database Failed - #' . mysql_errno() . ': ' . mysql_error();
                                }
                                else {
                                    WHILE ($nehal = mysql_fetch_assoc($R)){
                                        echo "<li>{$nehal['Subservice_name']}</li>";
                                    }
                                }
                            }
                        }
                        echo "<li>Many More!</li>";
                        echo "</ul>";
                        echo "<a href='LogIn.php' class='btn btn-price'>Book Now</a>";
                    }
                    echo "</div></div>";
                }
            }
            ?>
        </div>
    </div>
</section>
<!--End #pricing-->
<!--#contact-->
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="section-title text-center wow fadeInDown">
                <h2>Contact Us</h2>
                <p>Do you have any question? Feel free to ask. Just send us a message with the help of below form.</p>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-6 col-sm-9 wow fadeInLeft">
                <div class="contact-form clearfix">
                    <form action="Utility_Feedback.php" method="post">
                        <div class="input-field" style="margin-bottom: 24px;">
                            <input type="email" maxlength="32" class="form-control" name="email" placeholder="Email Id" pattern="([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?" title="Email Address must contain '@','.'!" required="required" style="padding: 10px; height: 46px;">
                        </div>
                        <div class="input-field" style="margin-bottom: 24px;">
                            <input type="text" maxlength="64" class="form-control" name="subject" placeholder="Subject" required="required" style="padding: 10px; height: 46px;">
                        </div>
                        <div class="input-field message">
                            <textarea name="message" class="form-control" placeholder="Your Message" required="required" style="padding: 10px; resize: none;"></textarea>
                        </div>
                        <div  align="center">
                            <input type="submit" class="btn btn-primary" value="SEND MESSAGE" name="submit" style="padding-top: 12px;padding-bottom: 12px;padding-left: 32px;padding-right: 32px;">
                        </div>
                        <input type="hidden" name="type" value="Visitor">
                    </form>
                </div><!-- end .contact-form -->
            </div><!-- .col-md-6 -->
        </div>
    </div>
</section>
<!--End #contact-->
<!--#footer-->
<footer id="footer" class="text-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-logo wow fadeInDown">
                    <img src="images/logo.jpeg" alt="HomeHelpers">
                </div>
                <div class="footer-social wow fadeInUp">
                    <h3>We are social:</h3>
                    <ul class="text-center list-inline">
                        <li><a href="https://www.facebook.com/HomeHelpers/"><i class="fa fa-facebook fa-lg"></i></a></li>
                        <!--li><a href="http://goo.gl/hUfpSB"><i class="fa fa-twitter fa-lg"></i></a></li>
                        <li><a href="http://goo.gl/r4xzR4"><i class="fa fa-google-plus fa-lg"></i></a></li>
                        <li><a href="http://goo.gl/k9zAy5"><i class="fa fa-dribbble fa-lg"></i></a></li-->
                    </ul>
                </div>
                <div>
                    <h5>Copyright © 2016. Still No Rights Reserved!</h5>
                </div>
            </div>
        </div>
    </div>
</footer>
<!--End #footer -->
<!--JavaScripts -->
<!-- main jQuery -->
<script src="js/vendor/jquery-1.11.1.min.js"></script>
<!-- Bootstrap -->
<script src="js/bootstrap.min.js"></script>
<!-- jquery.nav -->
<script src="js/jquery.nav.js"></script>
<!-- Portfolio Filtering -->
<script src="js/jquery.mixitup.min.js"></script>
<!-- Fancybox -->
<script src="js/jquery.fancybox.pack.js"></script>
<!-- Parallax sections -->
<script src="js/jquery.parallax-1.1.3.js"></script>
<!-- jQuery Appear -->
<script src="js/jquery.appear.js"></script>
<!-- countTo -->
<script src="js/jquery-countTo.js"></script>
<!-- owl carousel -->
<script src="js/owl.carousel.min.js"></script>
<!-- WOW script -->
<script src="js/wow.min.js"></script>
<!-- theme custom scripts -->
<script src="js/main.js"></script>
</body>
</html>