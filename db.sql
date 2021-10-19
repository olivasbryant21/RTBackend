CREATE SCHEMA RTUSER;

USE RTUSER;

CREATE TABLE USERS(
ID INT PRIMARY KEY,
userName VARCHAR(30) NOT NULL,
phoneNumber INT NOT NULL,
email VARCHAR(50),
password VARCHAR(50),
UNIQUE KEY (phoneNumber)
);

CREATE TABLE CONTACTS(
contactName VARCHAR(30) NOT NULL,
contactNumber INT NOT NULL,
FOREIGN KEY(contactNumber) 
REFERENCES USERS(phoneNumber),
UNIQUE KEY (contactNumber)
 ); 