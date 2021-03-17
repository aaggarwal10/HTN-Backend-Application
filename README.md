# HTN - Backend Challenge
Hi there! Here is my Backend Challenge Project for HTN Applications. 

## Part 1 - Build Setup and Run Project

To get my project up and running, first clone this repository to your local computer. Then, navigate to the root directory of the repository in a Terminal of your choice and enter the following commands:

```bash
# install dependencies
$ npm install

# build for production and launch server
$ npm run build
$ npm run start
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
Now you should be able to to run requests to localhost:4000. Simply follow the instructions in the documentation.

## Part 2 - Build Setup and Run Project

I used the Sequelize ORM for this project. So instead of having pre-built schemas, I was able to define instances of rows in each table to put values into the table. Thus, all I had to to was to create empty tables, and assign instances to them. Here is how my final table looked after inputting data using the ORM into the database. 
<img src="Tables.png" alt="table-structure" class="inline"/>

## Part 3 - Documentation

I used a nifty tool called apidocs to create my Documentation. It has a standard for documentation, and allows my comments of the code to stay side by side with my documentation. It really helps as it reminds me to mak sure that all my routes will have documentation when I create them. Here is the [documentation link](https://aaggarwal10.github.io/HTN-Backend-Application/) I have generated using apidocs.
