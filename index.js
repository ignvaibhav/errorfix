const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('', {
    dbName: 'udemy' // Specify the database name if needed
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true,
        unique : false,
        trim : true
    },
    password : {
        type : String,
        required : true,
        unique : false,
        trim : true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true,
        unique : false,
        trim : true
    },
    password : {
        type : String,
        required : true,
        unique : false,
        trim : true
    },
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}