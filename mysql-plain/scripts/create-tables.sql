DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;

use mydb;

CREATE TABLE IF NOT EXISTS Devices
(
    Id INT AUTO_INCREMENT,
    Title VARCHAR(50) NOT NULL,
    OS VARCHAR(20) NOT NULL,
    Price DECIMAL NOT NULL,
    Count INT DEFAULT 0,
    CONSTRAINT devices_pk PRIMARY KEY(Id),
    CONSTRAINT devices_unique UNIQUE(Title, OS)
);

CREATE TABLE IF NOT EXISTS Users
(
    Id INT AUTO_INCREMENT,
    Name VARCHAR(256) NOT NULL,
    Age INT NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY(Id),
    CONSTRAINT users_valid_age CHECK(Age > 18 AND Age < 100)
);

INSERT INTO Devices (Id, Title, OS, Price, Count)
VALUES
(NULL, 'device1', 'iOS', 200, 10),
(NULL, 'device2', 'Android', 300, 5),
(NULL, 'device3', 'Symbian', 250, 13),
(NULL, 'device4', 'iOS', 100, DEFAULT),
(NULL, 'device5', 'Android', 200, 3);