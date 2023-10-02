const express= require('express');
const Student=require("../models/student");

const router =new express.Router;

router.get("/student",(req,res)=>{
    res.send("hello guys now in router ");
})


router.get("/student/about",(req,res)=>{
    res.send("Hello i am  good   i am the Akash ");
})


router.post("/student/about/final" ,(req,res)=>{
    // res.send("hello form the other side");
    console.log(req.body);
    const user =new Student (req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e)
    })
});

router.post("/student",async(req,res)=>{
    try{
        const user = Student (req.body)
        const CreateUser= await user.save();
        res.status(201).send(CreateUser);

    }catch(e){
        res.status(400).send(e);
    }
});
router.get("/student/about/final",async(req,res)=>{
    try{
      const studentdata=await  Student.find();
      res.send(studentdata);
    }catch(e){
        res.send(e);

    }
})

router.patch("/student/:id",async(req,res)=>{
    try {
      const _id=req.params.id;
      console.log(_id);
      const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
      res.send(updateStudents);
      console.log(updateStudents);
  
  
  
    }catch(e){
      res.status(400).send(e);
    }
  });

  router.delete("/student/:id",async(req,res)=>{
        try{
            const id= await Student.findByIdAndDelete(req.params.id)
            if(!req.params.id){
                return res.status(404).send();
            }
            res.send(deleteStudent);
            }catch(e){
            res.send(e);
        }
    
    })
    
  


module.exports = router;