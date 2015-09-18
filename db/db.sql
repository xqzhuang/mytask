
-- database
CREATE DATABASE IF NOT EXISTS `task`;

-- table
USE task;
CREATE TABLE IF NOT EXISTS `user` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`username` varchar(30) NOT NULL,
	`password` varchar(30) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- insert some data
INSERT INTO `user` (`id`, `username`, `password`) VALUES
(0, 'admin', 'admin');

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(0, 'xiaoqin', 'xiaoqin');
