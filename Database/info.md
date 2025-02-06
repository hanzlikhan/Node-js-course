# What is Database
=====================
it is a collection of data in a format that can be easily accessed.

## Why database?

- can store large data 
- features like security , scalability
- Easier to insert , update or delete data 

### Types of database
- relational database (MySQL, Oracle , PostgreSQL)
- NoSQL database (MongoDB, Cassandra , Neo4j, etc)

# SQL (Structual Query Language)

a programming language used to interact with relational database

## Table in SQL
| Column1 | Column2 | Column3 |
|----------|---------|---------|   row called tuple which is single person information
| value1   | value2  | value3  |
| value4   | value5  | value6  |  
| value7   | value8  | value9  |


### database queries 
#### Tables 
- SELECT : to select data from database
- INSERT : to insert data into database
- UPDATE : to update data in database
- DELETE : to delete data from database
- CREATE : to create table in database
- DROP : to delete table from database
- ALTER : to modify table in database
- TRUNCATE : to delete all data from table in database

#### for database queries
- CREATE DATABASE 
- DROP DATABASE 
- USE DATABASE
- SHOW DATABASE
CREATE IF NOT EXISTS TABLE


## CONSTRAINTS

Not null -> cannot be empty

UNIQUE 
- cannot be duplicate

check ->  
      CONSTRAINTS age_check CHECK (age > 18 AND city = 'delhi')

## Constraints 

### Primary key -> makes a column unique and not nullbut only for one 

eg:  Primary key (id)
id int not null

###

