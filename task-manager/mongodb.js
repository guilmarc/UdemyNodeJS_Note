// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require("mongodb");  //Utilisation de la méthode de déconstruring


const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const connectionOptions = {
    useNewUrlParser : true,
    useUnifiedTopology: true
};

MongoClient.connect( connectionURL, connectionOptions, (error, client)=> {

    if(error) return console.log(error.message);

    console.log("Connected to MongoDB !");

    const db = client.db(databaseName);

    // db.collection("tasks").findOne( {_id : new ObjectID("5d8e1500d6e629562ac1f47f")}, (error, user) => {
    //
    //     if(error) return console.log(error.message)
    //
    //     console.log(user)
    //
    // }  );



    // db.collection("tasks").find( {completed : false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // });
    //
    // db.collection("tasks").find( {completed : false}).count((error, count) => {
    //     console.log(count)
    // });

    db.collection("tasks").updateMany( { completed : false } , { $set: { completed : true }})
        .then((result) =>{console.log(result.modifiedCount)})
        .catch( error => console.log(error.log) )
});