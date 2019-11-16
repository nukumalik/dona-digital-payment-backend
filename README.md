﻿﻿## Introduction

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