const express=require('express');
require("./db/data");
const Student=require("./models/student");
const studentRouter = require ("./routers/students")

const app=express();
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(studentRouter);
app.listen(port,()=>{
    console.log(`connections is done ${port} on express `)
})

// create new router  //this is only the process purpose 
// const router =new express.Router();

// // we need to define the router
// router.get("/student",(req,res)=>{
//   res.send("hello guys ")

// });
// now the we need to register the router




//create the New studen data
// app.post("/student" ,(req,res)=>{
//     // res.send("hello form the other side");
//     console.log(req.body);
//     const user =new Student (req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
 


// })
// app.post("/student",async(req,res)=>{
//     try{
//         const user = Student (req.body);
//         const CreateUser= await user.save();
//         res.status(201).send(CreateUser);

//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// app.get("/about",(req,res)=>{
//       res.send("Hello i am  good   i am the Akash ");
// })



//update the database by the http method patch

// app.patch("/student/:id",async(req,res)=>{
//   try {
//     const _id=req.params.id;
//     console.log(_id);
//     const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
//     res.send(updateStudents);
//     console.log(updateStudents);



//   }catch(e){
//     res.status(400).send(e);
//   }
// })


// read the data using the restful Api

// app.get("/student",async(req,res)=>{
//     try{
//       const studentdata=await  Student.find();
//       res.send(studentdata);
//     }catch(e){
//         res.send(e);

//     }
// })

// indivisual data fetching by the RestfulApi

// app.get("/student/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id;
//        const studentdata=await Student.findById({_id});
//        console.log(studentdata);
//     //    res.send(studentdata);
       
//        if(!studentdata){
//         return res.status(404).send();
//        }else{
//         res.send(studentdata);
//        }
//         // console.log(req.params.id);
//         // res.send(req.params);
//     }catch(e){
//         res.send(e);
//     }
// })



// Delete student data

// app.delete("/student/:id",async(req,res)=>{
//     try{
//         const id= await Student.findByIdAndDelete(req.params.id)
//         if(!req.params.id){
//             return res.status(404).send();
//         }
//         res.send(deleteStudent);
//         }catch(e){
//         res.send(e);
//     }

// })


//you Do not need express.json and express.urlencoded()
// for get requests or delete requests .we only need it for pst and put req.

// express.json() is a method inbuilt in express to recognize the Incoming 
// request Object as a JSON objects .this method is called as a middleware
// in your application using the code: app.use(express.json());