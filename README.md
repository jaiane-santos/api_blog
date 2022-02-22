# api_blog

<h4 align= 'center'>
    🧱 project under construction 🛠️</h4>

##> my first back-end project using javascript, node.js

### features

- register user
- login user account
- upload posts
- fetch posts
- delete posts

### Project creation

First we must create our project folder:

> mkdir blog - api

We will start the project with the following command:

> npm init -y

Now it will be necessary to define and install all our dependencies. Let's use express, sequelize, @faker-js/fake, and mysql2:

npm I express sequelize mysql2 @faker - js / faker
Let's initialize our app with express to validate with a Hello World! , with that we create in index.js:

### //index.js

const express = require( 'express' )
const app = express()

application . listen ( 3000 , ( ) => console . log ( 'Running...' ) )
Now let's run it to validate that the application is working:

> npm start

### Database

Let's add a "facilitator" to connect and use the database, Sequelize. We have already installed this package before, we can also install or sequelize-cli run functionality via command line or we can use npx.

### Settings

First let's create our sequelize configuration file to be able to organize the automatically generated files in their proper places. We start with the .sequelizerc file:

### // .sequelizerc

> const path = require( "path" );

> module . export = {
> 'config' : path . resolve ( 'config' , 'database.json' ),
> 'models-path' : path . resolve( 'db' , 'models' ),
> 'seeders-path' : path . resolve( 'db' , 'seeders' ),
> 'migrations-path' : path . resolve ( 'db' , 'migrations'

### Now let's run sequelize-cli:

> npx sequelize - cli init
