const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});



// const {MongoClient} = require('mongodb');

// async function main(){
//   const uri = "mongodb+srv://arden0:data123@cluster0.mgyu9pc.mongodb.net/?retryWrites=true&w=majority";


//   const client = new MongoClient(uri);

//   try {
//       // Connect to the MongoDB cluster
//       await client.connect()
//       await listDatabases(client);

//       // Make the appropriate DB calls
//       await  listDatabases(client);

//   } catch (e) {
//       console.error(e);
//   } finally {
//       await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// ********************* Above is an alternative way to connect to mongoDB ***************************

// const express = require("express");
// const app = express();

// const lesson1Controller = require("./controllers/lesson1");
// app.get("/", (req, res) => {
//   res.send("Sarah Birch");
// });
// app.get("/", lesson1Controller.sarahRoute);

// const port =3000; 

// app.use('/', require('./routes/index'));

// app.listen(process.env.PORT || port, () => {
//   console.log("Web Server is listening at port " + (process.env.PORT || port));
// });

// *****************Above is the old code ****************
// MORE OLD CODE

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./db/connect');

// const port = process.env.PORT || 8080;
// const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', require('./routes'));

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });

