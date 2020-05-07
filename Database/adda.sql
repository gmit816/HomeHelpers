-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2016 at 05:42 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `adda`
--

-- --------------------------------------------------------

--
-- Table structure for table `area_master`
--

CREATE TABLE IF NOT EXISTS `area_master` (
`Area_id` int(8) NOT NULL,
  `Area_name` varchar(16) NOT NULL,
  `City_id` int(4) NOT NULL,
  `Deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `area_master`
--

INSERT INTO `area_master` (`Area_id`, `Area_name`, `City_id`, `Deleted`) VALUES
(1, 'Ahmedabad East', 1, 0),
(2, 'Ahmedabad West', 1, 0),
(3, 'Borivali', 2, 0),
(4, 'Kandivali', 2, 0),
(5, 'Dahisar', 2, 0),
(6, 'Vasai Road', 2, 0),
(7, 'Vasi', 2, 0),
(8, 'Delhi East', 3, 0),
(9, 'Delhi West', 3, 0),
(10, 'Vadodara East', 4, 0),
(11, 'Vadodara West', 4, 0),
(12, 'Chennai East', 5, 0),
(13, 'Chennai West', 5, 0),
(14, 'Bengaluru East', 6, 0),
(15, 'Bengaluru West', 6, 0),
(16, 'Kolkata East', 7, 0),
(17, 'Kolkata West', 7, 0),
(18, 'Mysuru East', 8, 0),
(19, 'Mysuru West', 8, 0),
(20, 'Jaipur East', 9, 0),
(21, 'Jaipur West', 9, 0),
(22, 'Surat East', 10, 0),
(23, 'Surat West', 10, 0),
(24, 'Rajkot East', 11, 0),
(25, 'Rajkot West', 11, 0);

-- --------------------------------------------------------

--
-- Table structure for table `city_master`
--

CREATE TABLE IF NOT EXISTS `city_master` (
`City_id` int(4) NOT NULL,
  `City_name` varchar(16) NOT NULL,
  `Deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city_master`
--

INSERT INTO `city_master` (`City_id`, `City_name`, `Deleted`) VALUES
(1, 'Ahmedabad', 0),
(2, 'Mumbai', 0),
(3, 'Delhi', 0),
(4, 'Vadodara', 0),
(5, 'Chennai', 0),
(6, 'Bengaluru', 0),
(7, 'Kolkata', 0),
(8, 'Mysuru', 0),
(9, 'Jaipur', 0),
(10, 'Surat', 0),
(11, 'Rajkot', 0);

-- --------------------------------------------------------

--
-- Table structure for table `feedback_master`
--

CREATE TABLE IF NOT EXISTS `feedback_master` (
`Feedback_id` int(8) NOT NULL,
  `Email_ID` varchar(32) NOT NULL,
  `User_type` varchar(8) NOT NULL,
  `Subject` varchar(64) NOT NULL,
  `Message` text NOT NULL,
  `Time_Stamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Reply` text,
  `Replied` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback_master`
--

INSERT INTO `feedback_master` (`Feedback_id`, `Email_ID`, `User_type`, `Subject`, `Message`, `Time_Stamp`, `Reply`, `Replied`) VALUES
(1, '13dce029@nirmauni.ac.in', 'SP', 'Improper Behaviour of Customer', 'I am working on a Service of User 6, the behaviour of him is not tolerable.', '2016-05-16 09:05:46', 'Hello 13dce029@nirmauni.ac.in,\r\nWe will ask the user to maintain peace, and will block that user if necessary', 1);

-- --------------------------------------------------------

--
-- Table structure for table `receipt_master`
--

CREATE TABLE IF NOT EXISTS `receipt_master` (
`Receipt_id` int(16) NOT NULL,
  `User_id` int(8) NOT NULL,
  `Emp_id` int(8) NOT NULL,
  `Service_id` int(4) NOT NULL,
  `Subservice_id` int(4) NOT NULL,
  `Address` text NOT NULL,
  `Area_id` int(8) NOT NULL,
  `City_id` int(4) NOT NULL,
  `Problem_desc` text NOT NULL,
  `Booking_date` datetime NOT NULL,
  `Solution` text NOT NULL,
  `Bill_amt` int(4) NOT NULL,
  `Rating` int(1) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT '0',
  `SServed_date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receipt_master`
--

INSERT INTO `receipt_master` (`Receipt_id`, `User_id`, `Emp_id`, `Service_id`, `Subservice_id`, `Address`, `Area_id`, `City_id`, `Problem_desc`, `Booking_date`, `Solution`, `Bill_amt`, `Rating`, `Status`, `SServed_date`) VALUES
(1, 6, 8, 1, 3, '203, Sahaj Residency, B/H Old Wadaj A.M.T.S Bus Station, Ashram Road', 1, 1, 'Got leaking in my sink, please help!', '2016-05-16 08:54:22', '', 40, 3, 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `service_master`
--

CREATE TABLE IF NOT EXISTS `service_master` (
`Service_id` int(4) NOT NULL,
  `Service_name` varchar(32) NOT NULL,
  `Service_description` text,
  `Service_icon` varchar(64) DEFAULT NULL,
  `Service_fees` int(2) DEFAULT NULL,
  `Deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_master`
--

INSERT INTO `service_master` (`Service_id`, `Service_name`, `Service_description`, `Service_icon`, `Service_fees`, `Deleted`) VALUES
(1, 'Plumbing', 'Most of us surely find it frustrating to live with a broken tap, leaky pipe, undone toilet flush or low water pressure during our long showers. By us, you can easily fix the problem.', 'Plumbing.jpeg', 40, 0),
(2, 'Electrical', 'You want immediate services when your geyser or water motor breaksdown for a sparkling switch or wiring fuse. We understand the urgency and provide express electrician services.', 'Electrical.jpeg', 50, 0),
(3, 'Painting', 'Painting is a necessary thing for a beautiful house, with us, pick a beautiful color and our painters will give you the best painted walls with different designs and shades.', 'Painting.jpeg', 60, 0),
(4, 'Carpentry', 'Every household and office would have atleast 1 broken door knob, hinges or handles. We take responsibility for service delivery from end to end. We help you repair your furniture, doors and windows.', 'Carpentry.jpeg', 50, 0),
(5, 'Computer Repairing', NULL, NULL, 40, 0),
(6, 'Mobile Repairing', NULL, NULL, 35, 0),
(7, 'Pest Control', NULL, NULL, 35, 0),
(8, 'Residential Cleaning', NULL, NULL, 35, 0),
(9, 'Automobile', '', NULL, 150, 0),
(10, 'Appliances Repairing', '', NULL, 50, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sprovider_master`
--

CREATE TABLE IF NOT EXISTS `sprovider_master` (
`Emp_id` int(8) NOT NULL,
  `First_name` varchar(16) NOT NULL,
  `Last_name` varchar(16) DEFAULT NULL,
  `Email_ID` varchar(32) NOT NULL,
  `Profile_image` text NOT NULL,
  `User_type` varchar(5) NOT NULL DEFAULT 'SP',
  `Service_id` int(2) NOT NULL,
  `City_id` int(4) NOT NULL,
  `Area_id` int(8) NOT NULL,
  `Contact_no` bigint(10) NOT NULL,
  `Points` int(4) NOT NULL DEFAULT '50',
  `Available` tinyint(1) NOT NULL DEFAULT '1',
  `Password` varchar(32) NOT NULL DEFAULT 'homehelpers',
  `Deleted` tinyint(1) NOT NULL DEFAULT '0',
  `Time_Stamp` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sprovider_master`
--

INSERT INTO `sprovider_master` (`Emp_id`, `First_name`, `Last_name`, `Email_ID`, `Profile_image`, `User_type`, `Service_id`, `City_id`, `Area_id`, `Contact_no`, `Points`, `Available`, `Password`, `Deleted`, `Time_Stamp`) VALUES
(1, 'Mit', 'Gandhi', 'gmit816@gmail.com', '1.png', 'Admin', 0, 0, 0, 9409056375, 50, 0, '30061998@mjg', 0, '2016-05-16'),
(2, 'Samvid', 'Mistry', '13dce004@nirmauni.ac.in', '3.png', 'SP', 1, 1, 2, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(3, 'Jaydev', 'Desai', '13dce003@nirmauni.ac.in', '4.png', 'SP', 2, 1, 1, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(4, 'Tirth', 'Patel', '13dce006@nirmauni.ac.in', '3.png', 'SP', 3, 1, 1, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(5, 'Nijraj', 'Gelani', '13dce008@nirmauni.ac.in', '4.png', 'SP', 4, 10, 23, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(6, 'Krunal', 'Kannani', '13dce016@nirmauni.ac.in', '3.png', 'SP', 4, 10, 23, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(7, 'Joy', 'Gohil', '13dce012@nirmauni.ac.in', '4.png', 'SP', 1, 1, 2, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(8, 'Monil', 'Andharia', '13dce029@nirmauni.ac.in', '3.png', 'SP', 1, 1, 1, 9409056375, 50, 0, 'homehelpers', 0, '2016-05-16'),
(9, 'Jay', 'Kothari', '13dce030@nirmauni.ac.in', '3.png', 'SP', 2, 11, 24, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(10, 'Rahul', 'Nair', '13dce034@nirmauni.ac.in', '4.png', 'SP', 4, 10, 22, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(11, 'Shyam', 'Bhimani', '13dce055@nirmauni.ac.in', '3.png', 'SP', 2, 11, 25, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(12, 'Sharvik', 'Joshi', '13dce037@nirmauni.ac.in', '3.png', 'SP', 2, 1, 1, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(13, 'Purvam', 'Chokshi', '13dce031@nirmauni.ac.in', '4.png', 'SP', 2, 1, 2, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(14, 'Vraj', 'Modi', '13dce019@nirmauni.ac.in', '3.png', 'SP', 3, 1, 2, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16'),
(15, 'Mit', 'Gandhi', '13dce053@nirmauni.ac.in', '1.png', 'SP', 3, 1, 2, 9409056375, 50, 1, 'homehelpers', 0, '2016-05-16');

-- --------------------------------------------------------

--
-- Table structure for table `subservice_master`
--

CREATE TABLE IF NOT EXISTS `subservice_master` (
`Subservice_id` int(4) NOT NULL,
  `Subservice_name` varchar(32) NOT NULL,
  `Subservice_image` varchar(64) DEFAULT NULL,
  `Service_id` int(4) NOT NULL,
  `Deleted` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subservice_master`
--

INSERT INTO `subservice_master` (`Subservice_id`, `Subservice_name`, `Subservice_image`, `Service_id`, `Deleted`) VALUES
(1, 'Door / Window Replacement', 'c1.jpeg', 4, 0),
(2, 'Tube-light Repair /Replacement', 'e1.jpeg', 2, 0),
(3, 'Leak Detection', 'pl1.jpeg', 1, 0),
(4, 'Wall Paint', 'p1.jpeg', 3, 0),
(5, 'MCB Repair', 'e2.jpeg', 2, 0),
(6, 'Furniture Installation', 'c2.jpeg', 4, 0),
(7, 'Faucet Repair / Replacement', 'pl2.jpeg', 1, 0),
(8, 'Chip Repair / Replacement', 'm1.png', 6, 0),
(9, 'White Wash', 'p2.jpeg', 3, 0),
(10, 'Ant / Cockroach / Rat Control', 'pc2.jpg', 7, 0),
(11, 'Clogged Drain Pipe', 'pl3.jpeg', 1, 0),
(12, 'Switch Repair /Replacement', 'e3.jpeg', 2, 0),
(13, 'Design Wall', 'p3.jpeg', 3, 0),
(14, 'Wall Protection', 'p4.jpeg', 3, 0),
(15, 'Furniture Repair', 'c3.jpeg', 4, 0),
(16, 'Drive Repair / Replacement', 'cr1.jpg', 5, 0),
(17, 'General Carpentry Work', 'c4.jpeg', 4, 0),
(18, 'Rewiring', 'e4.jpeg', 2, 0),
(19, 'Regular Cleaning', 'rc1.jpg', 8, 0),
(20, 'Shower Repair / Replacement', 'pl4.jpeg', 1, 0),
(21, 'Daily Milk Provider', NULL, 9, 0),
(22, 'Tap, Wash Basin And Sink', NULL, 1, 0),
(23, 'Toilet And Sanitary Work', NULL, 1, 0),
(24, 'Water Tank', NULL, 1, 0),
(25, 'Others', NULL, 2, 0),
(26, 'Laptop Repairing', NULL, 5, 0),
(27, 'Printer Repairing', NULL, 5, 0),
(28, 'Screen Damage', NULL, 6, 0),
(29, 'Software Issue', NULL, 6, 0),
(30, 'Battery Issue', NULL, 6, 0),
(31, 'Hardware Issue', NULL, 6, 0),
(32, 'General Pest Control', NULL, 7, 0),
(33, 'Wood Borer Control', NULL, 7, 0),
(34, 'Full Home Deep Cleaning', NULL, 8, 0),
(35, 'Floor Scrubbing and Polishing', NULL, 8, 0),
(36, 'Wheels', NULL, 9, 0),
(37, 'Battery Replacement', NULL, 9, 0),
(38, 'Car Spa', NULL, 9, 0),
(39, 'AC Service', NULL, 10, 0),
(40, 'AC Installation', NULL, 10, 0),
(41, 'Refrigerator', NULL, 10, 0),
(42, 'Washing Machine Service', NULL, 10, 0),
(43, 'TV Service', NULL, 10, 0),
(44, 'Home Security', NULL, 10, 0),
(45, 'Water Purifier', NULL, 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE IF NOT EXISTS `user_master` (
`User_id` int(8) NOT NULL,
  `First_name` varchar(16) NOT NULL,
  `Last_name` varchar(16) DEFAULT NULL,
  `Email_ID` varchar(32) NOT NULL,
  `Address` text,
  `Area_id` int(8) NOT NULL,
  `City_id` int(4) NOT NULL,
  `Contact_no` bigint(10) DEFAULT NULL,
  `User_type` varchar(5) NOT NULL DEFAULT 'User',
  `Password` varchar(32) NOT NULL,
  `Deleted` tinyint(1) NOT NULL DEFAULT '0',
  `Time_Stamp` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`User_id`, `First_name`, `Last_name`, `Email_ID`, `Address`, `Area_id`, `City_id`, `Contact_no`, `User_type`, `Password`, `Deleted`, `Time_Stamp`) VALUES
(1, 'Mit', 'Gandhi', 'gmit816@gmail.com', '203, Sahaj Residency, B/H Old Wadaj Bus Station, Ashram Road', 2, 1, 9409056375, 'Admin', '30061998@mjg', 0, '2016-05-16'),
(2, 'Jayant', 'Gandhi', 'jayantgandhi25@gmail.com', NULL, 0, 0, 9409056375, 'User', 'homehelpers', 0, '2016-05-16'),
(3, 'Jyotika', 'Gandhi', 'jyotikagandhi26@gmail.com', NULL, 0, 0, 9409056375, 'User', 'homehelpers', 0, '2016-05-16'),
(4, 'Rahul', 'Nair', 'nair.rahul15@gmail.com', NULL, 0, 0, 9409056375, 'User', 'homehelpers', 0, '2016-05-16'),
(5, 'Sharvik', 'Joshi', 'spj291996@gmail.com', NULL, 0, 0, 9409056375, 'User', 'homehelpers', 0, '2016-05-16'),
(6, 'Krupa', 'Gandhi', 'krupagandhi91@gmail.com', NULL, 0, 0, 9409056375, 'User', 'homehelpers', 0, '2016-05-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area_master`
--
ALTER TABLE `area_master`
 ADD PRIMARY KEY (`Area_id`);

--
-- Indexes for table `city_master`
--
ALTER TABLE `city_master`
 ADD PRIMARY KEY (`City_id`);

--
-- Indexes for table `feedback_master`
--
ALTER TABLE `feedback_master`
 ADD PRIMARY KEY (`Feedback_id`);

--
-- Indexes for table `receipt_master`
--
ALTER TABLE `receipt_master`
 ADD PRIMARY KEY (`Receipt_id`);

--
-- Indexes for table `service_master`
--
ALTER TABLE `service_master`
 ADD PRIMARY KEY (`Service_id`), ADD UNIQUE KEY `Service_name` (`Service_name`);

--
-- Indexes for table `sprovider_master`
--
ALTER TABLE `sprovider_master`
 ADD PRIMARY KEY (`Emp_id`), ADD UNIQUE KEY `Email_ID` (`Email_ID`);

--
-- Indexes for table `subservice_master`
--
ALTER TABLE `subservice_master`
 ADD PRIMARY KEY (`Subservice_id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
 ADD PRIMARY KEY (`User_id`), ADD UNIQUE KEY `Email_ID` (`Email_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area_master`
--
ALTER TABLE `area_master`
MODIFY `Area_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `city_master`
--
ALTER TABLE `city_master`
MODIFY `City_id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `feedback_master`
--
ALTER TABLE `feedback_master`
MODIFY `Feedback_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `receipt_master`
--
ALTER TABLE `receipt_master`
MODIFY `Receipt_id` int(16) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `service_master`
--
ALTER TABLE `service_master`
MODIFY `Service_id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `sprovider_master`
--
ALTER TABLE `sprovider_master`
MODIFY `Emp_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `subservice_master`
--
ALTER TABLE `subservice_master`
MODIFY `Subservice_id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
MODIFY `User_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
