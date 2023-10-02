const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is Done on mongodb");

}).catch((err)=>{
    // console.log(err);
    console.log("No connection ");
})