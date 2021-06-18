const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb:localhost/workout-tracker-ze',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
