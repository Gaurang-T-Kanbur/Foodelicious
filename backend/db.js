const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Foodelicious:Foodelicious@cluster0.tgaj9cp.mongodb.net/Foodeliciousmern?retryWrites=true&w=majority"
const mongoDB = async () => {
    try {
        await
            mongoose.connect(mongoURI);
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        let data = await
            fetched_data.find({}).toArray()
            const foodCategory = await mongoose.connection.db.collection("foodCategory")
            const catData = await
            foodCategory.find({}).toArray();
            global.food_items = data;
            global.foodCategory=catData;
            
    }
    catch (error) {
        console.log('err:', error)
    }



};
module.exports = mongoDB;
