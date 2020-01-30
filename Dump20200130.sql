-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: checkpoint4
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `main_category`
--

DROP TABLE IF EXISTS `main_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `sub1` varchar(45) DEFAULT NULL,
  `sub2` varchar(45) DEFAULT NULL,
  `sub3` varchar(45) DEFAULT NULL,
  `sub4` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_category`
--

LOCK TABLES `main_category` WRITE;
/*!40000 ALTER TABLE `main_category` DISABLE KEYS */;
INSERT INTO `main_category` VALUES (1,'Menu',NULL,NULL,NULL,NULL),(2,'Image',NULL,NULL,NULL,NULL),(3,'Tests',NULL,NULL,NULL,NULL),(4,'API',NULL,NULL,NULL,NULL),(5,'UX',NULL,NULL,NULL,NULL),(6,'State Management',NULL,NULL,NULL,NULL),(7,'Hooks',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `main_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package`
--

DROP TABLE IF EXISTS `package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `npm_link` varchar(110) NOT NULL,
  `github_link` varchar(110) DEFAULT NULL,
  `info` varchar(500) DEFAULT NULL,
  `main_category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`main_category_id`),
  KEY `fk_package_main_category1_idx` (`main_category_id`),
  CONSTRAINT `fk_package_main_category1` FOREIGN KEY (`main_category_id`) REFERENCES `main_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package`
--

LOCK TABLES `package` WRITE;
/*!40000 ALTER TABLE `package` DISABLE KEYS */;
INSERT INTO `package` VALUES (11,'react-draggable','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',1),(12,'react-select','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',2),(13,'react-dom','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',1),(14,'react-redux','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',4),(15,'prop-types','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',5),(16,'react-popper','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',3),(17,'eslint-plugin-react','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',1),(18,'react-helmet','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',2),(19,'react-dropzone','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',7),(20,'react-table','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',6),(21,'@babel/preset-react','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',1),(22,'react-docgen','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',4),(23,'rc-util','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',7),(24,'react-native-svg','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',3),(25,'airbnb-prop-types','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',5),(26,'react-ga','http://link.com','http://git.com','bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo bolob lbollbo ',1);
/*!40000 ALTER TABLE `package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_has_tag`
--

DROP TABLE IF EXISTS `package_has_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package_has_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `package_id` int(11) NOT NULL,
  `secondary_category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`package_id`,`secondary_category_id`),
  KEY `fk_package_has_secondary_category_secondary_category1_idx` (`secondary_category_id`),
  KEY `fk_package_has_secondary_category_package_idx` (`package_id`),
  CONSTRAINT `fk_package_has_secondary_category_secondary_category1` FOREIGN KEY (`secondary_category_id`) REFERENCES `tag` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_package_has_tag_1` FOREIGN KEY (`package_id`) REFERENCES `package` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_has_tag`
--

LOCK TABLES `package_has_tag` WRITE;
/*!40000 ALTER TABLE `package_has_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_has_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(112) NOT NULL,
  `pseudo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Testss','$2b$08$RdKbcclPuk7MVUKY2Mbinuvwb0n4NVqrdcEcx0UZexpB1hSwQzZku','aaa'),(2,'gautier.mille@gmail.com','$2b$08$Wxa/QxdSjR3E2iCnsAYuv.GfVWqNzcGlTQve8YutKcPgHFSryt7Jq','Got'),(18,'Jdjdj','$2b$08$BYZgNymqEz8SdqGNIN.HQ.WGwYY/gRUMKFfJk31IKQl1jrJsCAd2S','Jdhd'),(19,'Ggg','$2b$08$7MW27A4BWK5MskTVt1dVjOXONrQSDhdZpQ6nwNz9/UDgmCtj8jN2S','Gggv'),(20,'Newuser','$2b$08$Nyxqa/Wfu6NJ04fZWTUtmO7mhy8FaN6X5JQ5l.66FZdzk5CJKk1sy','Newuser'),(21,'Hdhehd','$2b$08$Mue/gkJUcf9TAemL7FMvSuwJiwsYeK3bcD38iq2SsEE.wL7b8Bqn2','aaaaa'),(22,'Fjrjr','$2b$08$aiTsIcIrMZS.NIGyU8n0lulIx2OHXWGrC6.7E7OuAnMYblXWo1Hvu',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote`
--

DROP TABLE IF EXISTS `vote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `globale` int(11) DEFAULT NULL,
  `sub1` int(11) DEFAULT NULL,
  `sub2` int(11) DEFAULT NULL,
  `sub3` int(11) DEFAULT NULL,
  `sub4` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`user_id`,`package_id`),
  KEY `fk_user_has_package_user1_idx` (`user_id`),
  KEY `fk_vote_1_idx` (`package_id`),
  CONSTRAINT `fk_user_has_package_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_vote_1` FOREIGN KEY (`package_id`) REFERENCES `package` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote`
--

LOCK TABLES `vote` WRITE;
/*!40000 ALTER TABLE `vote` DISABLE KEYS */;
INSERT INTO `vote` VALUES (2,1,11,1,NULL,NULL,NULL,NULL),(4,1,12,-1,NULL,NULL,NULL,NULL),(5,2,12,1,NULL,NULL,NULL,NULL),(6,18,12,-1,NULL,NULL,NULL,NULL),(7,20,11,-1,NULL,NULL,NULL,NULL),(8,20,12,-1,NULL,NULL,NULL,NULL),(9,20,13,1,NULL,NULL,NULL,NULL),(10,20,14,-1,NULL,NULL,NULL,NULL),(11,20,15,1,NULL,NULL,NULL,NULL),(12,20,16,1,NULL,NULL,NULL,NULL),(13,20,20,-1,NULL,NULL,NULL,NULL),(14,20,21,1,NULL,NULL,NULL,NULL),(15,20,19,1,NULL,NULL,NULL,NULL),(16,20,18,-1,NULL,NULL,NULL,NULL),(17,20,17,-1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `vote` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-30 17:57:40
