-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 16, 2018 at 08:48 AM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sendmail`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` tinyint(10) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mail_contact` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `mail_contact`) VALUES
(1, 'media', 'xuan_binh_01@yahoo.com'),
(2, 'ecommerce', 'lexuanbinh220189@gmail.com'),
(5, 'kids', 'beelzebub0866010@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `mail_recieved`
--

CREATE TABLE IF NOT EXISTS `mail_recieved` (
  `id` tinyint(10) NOT NULL,
  `sender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category_recieved` tinyint(10) NOT NULL,
  `reason` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `mail_recieved`
--

INSERT INTO `mail_recieved` (`id`, `sender`, `subject`, `category_recieved`, `reason`) VALUES
(1, 'binhne', 'test choi thoi', 2, 'asdsa'),
(2, 'binhne2', 'test choi thoi', 5, 'aaaa'),
(3, 'binhne3', 'test choi thoi', 1, 'bbbb'),
(4, 'binhne', 'test choi thoi', 1, 'asdasd'),
(5, 'binhne', 'test choi thoi', 1, 'asdasd'),
(6, 'binhne', 'test choi thoi', 1, 'asdasd'),
(7, 'binhne', 'test choi thoi', 1, 'asdasd'),
(8, 'binhne', 'test choi thoi', 1, 'asdasd'),
(9, 'binhne', 'test choi thoi', 1, 'asdasd'),
(10, 'binhne', 'test choi thoi', 1, 'asdasd'),
(11, 'binhne', 'test choi thoi', 1, 'asdasd'),
(12, 'binhne', 'test choi thoi', 1, 'asdasd'),
(13, 'binhne', 'test choi thoi', 1, 'asdasd'),
(14, 'binhne', 'test choi thoi', 1, 'asdasd'),
(15, 'binhne', 'test choi thoi', 1, 'asdasd'),
(16, 'binhne', 'test choi thoi', 1, 'asdasd'),
(17, 'binhne', 'test choi thoi', 1, 'asdasd'),
(18, 'binhne', 'test choi thoi', 1, 'asdasd'),
(19, 'binhne', 'test choi thoi', 1, 'asdasd'),
(20, 'binhne', 'test choi thoi', 1, 'asdasd'),
(21, 'binhne', 'test choi thoi', 1, 'asdasd'),
(22, 'binhne', 'test choi thoi', 1, 'asdasd'),
(23, 'binhne', 'test choi thoi', 2, 'asdasd'),
(24, 'binhne', 'test choi thoi', 2, 'asdasd'),
(25, 'binhne', 'test choi thoi', 2, 'asdasd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail_recieved`
--
ALTER TABLE `mail_recieved`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` tinyint(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `mail_recieved`
--
ALTER TABLE `mail_recieved`
  MODIFY `id` tinyint(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
