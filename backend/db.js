const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Kushal123@cluster0.1gp9lpj.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err) => {
        if (err) {
            console.log("---" + err);
        } else {
            console.log("connected");
            try {
                const fetched_data = await mongoose.connection.db.collection("food_items");
                const data = await fetched_data.find({}).toArray();

                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                const catData = await foodCategory.find({}).toArray();

                global.food_items = data;
                global.foodCategory = catData;
            } catch (err) {
                console.log(err);
            }
        }
    });
};

module.exports = mongoDB;
