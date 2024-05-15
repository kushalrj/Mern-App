const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Kushal123@cluster0.1gp9lpj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = () => {

     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected");
            const fetched_data= await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err,data){          //empty curly braces kyonki saara data chaiye aur toarray de dia
                if (err) {
                    console.log(err);
                }
                else console.log(data);
            })
        }
    });
}

module.exports = mongoDB;


