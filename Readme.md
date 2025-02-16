This is a Base Node Js Project Temlplate , which can anyone can use it has been prepared, by keeping some of the most important 
code principles and project management recommendations. 


`src` -> Inside the src folder all actual project Source regarding the project will reside, this will not include any kind of 
tests . (You might want to make seperate tests folder)

Let's take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration or setup of a library or module will be done.
For example: setting up `dotenv` so that we can use the enviroment variables anywhere in a clear fasion, this is done in the
`server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, 
so configuration for this library should also be done here.

- `routes` -> In the routes folder we , register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators , authenticators etc.

- `controllers` ->  They are just kind of last middlewares as psot them you call you bussiness layer to execute bussiness logic.
In Controllers we just recieve the incoming requests and data and then pass it to the bussiness layer, and once business layer
return an output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB by writing Queries , all the raw quries 
or ORM will GO here

- `services` -> This folder contains the bussiness and interacts with repositories for data from the database.

- `utils` -> contains helpers methods , error classes etc.


### Setup The project
- Download this template from github and Open it in your favorite text editor.
- In the root Directory create a `.env` file and add the following env variables .
```
  PORT=<prot number of your choice>
``` 
ex:
```
 PORT=3000
```

- Inside the `src/config` folder create a file config.json and write the following code :

```
{
  "development": {
    "username": "root",
    "password": "<your_db_password>",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- If you are setting up your development enviroment, then write the username of you db and the password of your db and then 
dialect mention whatever DB you are using ex: mysql, mariadb etc.

- If you're setting up the test ot prod enviroment , make sure yu replace the configs of host url 