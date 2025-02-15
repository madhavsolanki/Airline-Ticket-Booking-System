const express = require('express');
const {ServerConfig, Logger} =  require('./config');
const apiRoutes = require('./routes')


const app = express();

// Routes
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
  console.log(`Server is Running on PORT: ${ServerConfig.PORT}`);
});

// 1 : 05 : 44