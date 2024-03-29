CREATE TABLE `accounts` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(16) NOT NULL,
	`password` CHAR(32) NOT NULL,
	`x` INT(11) NOT NULL DEFAULT '0',
	`y` INT(11) NOT NULL DEFAULT '0',
	`email` VARCHAR(255) NULL DEFAULT NULL,
	`gender` TINYINT(4) NULL DEFAULT '0',
	`admin` TINYINT(4) NULL DEFAULT '0',
	`skin` TINYINT(4) NULL DEFAULT '0',
	`experience` INT(11) NULL DEFAULT '0',
	`health` INT(11) NULL DEFAULT '10',
	`max_health` INT(11) NULL DEFAULT '10',
	`arena_kills` INT(11) NULL DEFAULT '0',
	`arena_deaths` INT(11) NULL DEFAULT '0',
	`map` INT(11) NULL DEFAULT '0',
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=MyISAM
AUTO_INCREMENT=877;