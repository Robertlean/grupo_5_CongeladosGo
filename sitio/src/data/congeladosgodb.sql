CREATE DATABASE  IF NOT EXISTS `congeladosgodb2` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `congeladosgodb2`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: congeladosgodb2
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

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
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `idCarrito` int(11) NOT NULL AUTO_INCREMENT,
  `idProductos` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCarrito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `id_categoria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'empanadas-bien de campo',NULL,NULL),(2,'empanadas-el noble',NULL,NULL),(3,'pizzas',NULL,NULL),(4,'tartas',NULL,NULL),(5,'viendas',NULL,NULL),(6,'churros',NULL,NULL),(7,'media lunas',NULL,NULL),(8,'tostables',NULL,NULL),(9,'pan de queso',NULL,NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediodepago`
--

DROP TABLE IF EXISTS `mediodepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mediodepago` (
  `idMedioDePago` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idMedioDePago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediodepago`
--

LOCK TABLES `mediodepago` WRITE;
/*!40000 ALTER TABLE `mediodepago` DISABLE KEYS */;
/*!40000 ALTER TABLE `mediodepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `cantidad_ventas` varchar(100) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `id_categorias` int(11) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `createdAt` varchar(45) DEFAULT NULL,
  `updatedAt` varchar(45) DEFAULT NULL,
  `id_productos` varchar(45) DEFAULT NULL,
  `idProducto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_Cat_idx` (`id_categorias`),
  CONSTRAINT `id_Cat` FOREIGN KEY (`id_categorias`) REFERENCES `categorias` (`id_categorias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Empanadas de Verdura','Empanadas rellenas de espinaca con queso','6',120,NULL,1,'IMG-20200311-WA0031.jpg',NULL,NULL,NULL,NULL),(2,'Empanadas de jamón y queso','Empanadas rellenas de jamón y queso','6',120,NULL,1,'IMG-20200311-WA0025.jpg',NULL,NULL,NULL,NULL),(3,'Empanadas de carne suave','Empanads rellenas de carne molida','6',120,NULL,1,'IMG-20200311-WA0024.jpg',NULL,NULL,NULL,NULL),(4,'Empanadas de pollo','Empanadas rellenas de pollo','6',120,NULL,1,'IMG-20200311-WA0035.jpg',NULL,NULL,NULL,NULL),(5,'Empanadas de humita','Empanadas rellenas de choclo y salsa blanca','6',120,NULL,1,'IMG-20200311-WA0022.jpg',NULL,NULL,NULL,NULL),(6,'Empanadas de queso y cebolla','Empanadas rellenas de queso y cebolla','6',120,NULL,1,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(7,'Empanadas de carne cortada a cuchillo','Empanadas rellenas a base de carne cortada a cuchillo','6',120,NULL,1,'IMG-20200311-WA0024.jpg',NULL,NULL,NULL,NULL),(8,'Minitartas de Verdura','Pequeñas tartas rellenas de espinaca','8',350,NULL,4,'mini-tartas.png',NULL,NULL,NULL,NULL),(9,'Minitartas de jamón y queso','Pequeñas tartas rellenas de jamón y queso','8',350,NULL,4,'IMG-20200311-WA0013.jpg',NULL,NULL,NULL,NULL),(10,'Minitartas de zapallito','Pequeñas tartas rellenas de zapallito','8',350,NULL,4,'IMG-20200311-WA0012.jpg',NULL,NULL,NULL,NULL),(11,'Empanadas de espinaca con queso - Integral','Empanadas rellenas de espinaca con queso siendo su masa de tipo integral','6',150,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(12,'Empanadas de carne picante','Empanadas rellenas de carne con un sabor algo picante','6',150,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(13,'Empanadas de espinaca con queso','Empanadas rellenas de espinaca con queso','6',150,NULL,2,'IMG-20200311-WA0011.jpg',NULL,NULL,NULL,NULL),(14,'Empanadas de carne suave','Empanadas rellenas de carne molida','6',150,NULL,2,'IMG-20200311-WA0017.jpg',NULL,NULL,NULL,NULL),(15,'Empanadas de humita','Empanadas rellenas de choclo con salsa blanca','6',150,NULL,2,'IMG-20200311-WA0030.jpg',NULL,NULL,NULL,NULL),(16,'Empanadas de jamón y queso','Empanadas rellenas de jamón y queso','6',150,NULL,2,'IMG-20200311-WA0019.jpg',NULL,NULL,NULL,NULL),(17,'Empanadas de pollo','Emapanadas rellenas de pollo','6',150,NULL,2,'IMG-20200311-WA0021.jpg',NULL,NULL,NULL,NULL),(18,'Empanadas de queso y cebolla','Empanadas rellenas de queso y cebolla','6',150,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(19,'Empanadas de pollo BBQ','Empanadas rellenas de pollo con aalsa de barbacoa','6',170,NULL,2,'IMG-20200311-WA0037.jpg',NULL,NULL,NULL,NULL),(20,'Empanadas de panceta, morrón y muzzarella','Emapandas rellenas de panceta, morrón y muzzarella','6',170,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(21,'Empanadas de carne cortada a cuchillo','Empanadas rellenas de carne cortada a cuchillo','6',170,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(22,'Empanadas de roquefort con jamón','El Noble Especial','6',170,NULL,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(23,'Empanadas de fusión 4 quesos','Empanadas rellenas de 4 quesos especiales','6',170,0,2,'IMG-20200311-WA0018.jpg',NULL,NULL,NULL,NULL),(24,'Empanadas de copetín jamón y queso','Pequeñas empanadas rellenas de jamón y qeuso','96',920,NULL,2,'IMG-20200311-WA0020.jpg',NULL,NULL,NULL,NULL),(25,'Empanadas de copetín de carne suave','Pequeñas empanadas rellenas de carne','96',920,NULL,2,'IMG-20200311-WA0020.jpg',NULL,NULL,NULL,NULL),(26,'Tarta de zapallito','Tarta individual rellena de zapallito','1',130,NULL,4,'IMG-20200218-WA0016.jpg',NULL,NULL,NULL,NULL),(27,'Tarta de jamón y queso','Tarta individual rellena de jamón y queso','1',130,NULL,4,'IMG-20200218-WA0015.jpg',NULL,NULL,NULL,NULL),(28,'Tarta de espinaca','Tarta individual rellena de espinaca','1',130,NULL,4,'IMG-20200218-WA0014.jpg',NULL,NULL,NULL,NULL),(29,'Tarta de calabaza','Tarta individual rellena de calabaza con masa integral','1',130,NULL,4,'IMG-20200218-WA0013.jpg',NULL,NULL,NULL,NULL),(30,'Tarta de queso y cebolla','Tarta individual rellena de queso y cebolla','1',130,NULL,4,'IMG-20200218-WA0017.jpg',NULL,NULL,NULL,NULL),(31,'Tostables de jamón y queso','Pan para tostadora relleno de jamón y queso','4',180,NULL,8,'IMG-20200311-WA0010.jpg',NULL,NULL,NULL,NULL),(32,'Tostables de caprese','Pan para tostadora relleno caprese','4',180,NULL,8,'tostables.jpg',NULL,NULL,NULL,NULL),(33,'Canelones de verdura con salsa mixta','Bandeja con 2 canelones de verdura bañados con salsa mixta','1',12,NULL,5,'Canelones.jpg',NULL,NULL,NULL,NULL),(34,'Risotto de calabaza y zucchini','Bandeja con risotto de zalabaza','1',100,NULL,5,'Risotto.jpg',NULL,NULL,NULL,NULL),(35,'Milanesa de carne con pure','Bandeja con una milanesa + puré','1',145,NULL,5,'milanesa.jpg',NULL,NULL,NULL,NULL),(36,'Wok de pollo con vegetales y arroz','Bandeja con wok de pollo con vegetales + arroz','1',100,NULL,5,'wok.jpg',NULL,NULL,NULL,NULL),(37,'Churros tradicionales','12 unidades de churros simples','12',140,NULL,6,'churrosprecios.jpg',NULL,NULL,NULL,NULL),(38,'Churros rellenos de dulce de leche','12 unidades de churros rellenos de dulce de leche','12',170,NULL,6,'churrosprecios.jpg',NULL,NULL,NULL,NULL),(39,'Churros rellenos de Nutella','12 unidades de churros rellenos de Nutella','12',210,NULL,6,'churrosprecios.jpg',NULL,NULL,NULL,NULL),(40,'Churros rellenos de dulce de leche con almend','12 unidades de churros rellenos de dulce de leche con almendras apto para veganos','12',170,NULL,6,'churrosprecios.jpg',NULL,NULL,NULL,NULL),(41,'Pan de queso(chipá)','42 unidades de chipas lista para hornear','42',250,NULL,9,'pan-de-queso.png',NULL,NULL,NULL,NULL),(42,'Pizza de muzzarella','Pizza con queso muzzarella','1',180,NULL,3,'pizza.png',NULL,NULL,NULL,NULL),(43,'Pizza de fugazetta','Pizza con queso muzzarella y cebolla','1',200,NULL,3,'pizza.png',NULL,NULL,NULL,NULL),(44,'Pizza de muzzarella con jamón','Pizza con queso muzzarella y trozos de jamón','1',200,NULL,3,'pizza.png',NULL,NULL,NULL,NULL),(45,'Pizzas de muzzarella individual','Pizzas individuales (4 porciones por pizza) de muzzarella','2',210,NULL,3,'IMG-20200311-WA0034.jpg',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) NOT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Eric','Mena','menaericdaniel@gmail.com',NULL,'$2b$10$6kY.x7.dsLoJEhJLBPUqPe3sa3m5OwzQLJW/nU3vL8shPFFuUtssG','admin','',NULL,'2020-11-07 23:56:51','2020-11-07 23:56:51',NULL),(2,'Roberto','Veintemilla','roberto@gmail.com',NULL,'$2b$10$pVj/3MVEYon9cy2Ny72CDe2a2PT4533hst6QKsDPgLkFLEmjp1dDO','admin','',NULL,'2020-11-08 00:36:28','2020-11-08 00:36:28',NULL),(3,'Paulina','Fridman','paulina@gmail.com',NULL,'$2b$10$QIatRU3NKweK1DVH4253nOKFB32a.8ufAtKr9DiRrcMH71JUex0Pq','user','',NULL,'2020-11-08 00:54:22','2020-11-08 00:54:22',NULL),(4,'nahuel','ojeda','nahuel@hotmail.com',NULL,'$2b$10$eHn6uP5dHX0Ex4KExT07AexMb5aP1AXUhpxmx.M/6vvBeCjDwMCtm','admin','',NULL,'2020-11-12 00:01:24','2020-11-12 00:01:24',NULL),(5,'Leandro','Veintemilla','pipi@gmail.com',NULL,'$2b$10$L/zTiAQkmm6CZDRhuhtnHOELde/5n.NE09loVBNNm9uGw.6mpxdaO','user','',NULL,'2020-11-12 04:03:30','2020-11-12 04:03:30',NULL),(6,'Ailen','Formar','Ailen@gmail.com',NULL,'$2b$10$WWb9ORagtMZEzv7pTCneN.CFqGwOM9MJJBvz00t4FKLfAynLEbDFm','user','',NULL,'2020-11-12 18:38:18','2020-11-12 18:38:18',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `idVentas` int(11) NOT NULL AUTO_INCREMENT,
  `totalDeVenta` decimal(10,0) DEFAULT NULL,
  `idUsuarios` int(11) DEFAULT NULL,
  `idMedioDePago` int(11) DEFAULT NULL,
  PRIMARY KEY (`idVentas`),
  KEY `idMedioDePagoFK_idx` (`idMedioDePago`),
  CONSTRAINT `idMedioDePagoFK` FOREIGN KEY (`idMedioDePago`) REFERENCES `mediodepago` (`idMedioDePago`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 16:30:16
