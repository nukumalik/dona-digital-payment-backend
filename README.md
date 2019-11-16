## Introduction

This is team project based to pass bootcamp fifth task and this is website for digital payment apps like Dana apps. This is open source and feel free to use and bought me.

## Prerequiste

-   Node.js
-   MySQL
-   Nodemon

## Installation

### Clone

    $ git clone https://github.com/nukumalik/dona-digital-payment-backend.git
    $ cd dona-digital-payment-backend
    $ npm install

### SQL

Create Database

    $ CREATE DATABASE dona_db;
    $ USE dona_db;

Create users table

    $ CREATE TABLE users (
        id varchar(50) NOT NULL,
        name varchar(50) NOT NULL,
        email varchar(50) NOT NULL,
        phone varchar(15) NOT NULL,
        pin varchar(50) NOT NULL,
        photo varchar(50) NOT NULL
        )
     
Create transactions table
    
    $ CREATE TABLE transactions (
        id int(20) NOT NULL,
        user_id varchar(50) NOT NULL,
        type enum('transfer','payment') NOT NULL
        )
        
Create transfers table

    $ CREATE TABLE transfers (
        id tinyint(4) NOT NULL,
        transaction_id int(20) NOT NULL,
        sender_id varchar(50) NOT NULL,
        receiver_id varchar(50) NOT NULL,
        amount int(20) NOT NULL,
        published date NOT NULL
        )
        
Create payments table

    $ CREATE TABLE payments (
        id int(11) NOT NULL,
        transaction_id int(20) NOT NULL,
        merchant_id varchar(20) NOT NULL,
        amount int(20) NOT NULL,
        status enum('pending','cancel','success') NOT NULL,
        description text NOT NULL,
        published date NOT NULL
        )
    
Create deals table

    $ CREATE TABLE deals (
        id int(11) NOT NULL,
        code varchar(20) NOT NULL,
        merchant_id varchar(50) NOT NULL,
        value int(11) NOT NULL,
        start date NOT NULL,
        end date NOT NULL,
        description text NOT NULL,
        created_at date NOT NULL,
        updated_at date NOT NULL
        )

### Create Enviroment Variable

    $ cp .env.example .env
    $ nano .env

### Start Development Server

    $ npm start

### Other Depedencies

-   bcryptjs
-   cors
-   jsonwebtoken
-   passport
-   passport-jwt
-   mysql
-   redis
-   multer
-   morgan
