# Realtime Chat Application

## Required packages that we need to install:
* express@4.21.2,
* mongoose@8.10.1, 
* jsonwebtoken@9.0.2, 
* dotenv@16.4.7, 
* bcryptjs@2.4.3, 
* cookie-parser@1.4.7,  
* nodemon -D,  

## Commands :
* `npm init -y` >> for creating `package.json` file
* In `package.json` file added `"dev": "node --watch server.js"` // --watch > for live updates
* `npm run dev` >> this will run the `server.js` file which includes `dev`, means `node --watch server.js` // nodemon is a live update server runner
* Later we will change `node --watch` with `nodemon` >> the script becomes `"dev": "nodemon server.js"`

## Process of building :
- require `express`
- assign express to `app`
- incase of `import-export` syntax, we need to set the type in `package.json` file as "module"
- we use `app.get` to define a route for HTTP GET requests to the root URL ("`whatever path we wanna go`")
- then we will create `.env` and put all the secret variable there
- to import the variables from `.env` we need to import it like `import dotenv from 'dotenv'` then `dotenv.config()` to get the values, 
- `process.env.variable_name` to get the variable,
- for PORT we need to assign it in the variable PORT >> `const PORT = process.env.PORT || 3000;` to use later we only use 'PORT'
