const mongoose=require('mongoose');
const validator=require('validator');
// connection creation and crate in new db
mongoose.connect("mongodb://127.0.1:27017/start",{    useNewUrlParser: true, 
useUnifiedTopology: true
})
.then(()=>console.log("Connection is successful ...."))
.catch((err)=>console.log(err));

// instadeof localhost we have to write (127.0.1) or (0.0.0.0)

// mongoose Schema and models



const playlistSchema=new mongoose.Schema({
    name:{

        type:String,
        // required:true,
      // unique:true,  
        uppercase:true,
        trim:true,
        minlength:[2,"Minimum two letter"],
        maxlength:30
        
    },
    type:{
        type:String,
        // //this is for the new data base limitation is given by us
        // required:true,
        uppercase:true,
        // enum:["frontend","backend","database","Analysis","problem_solving"]
    },
    version:{
        type:Number,
        // validate(value){
        //     if(value<0){
                
        //         throw new Error ("version should not be negative ");
        //     }
        // }

        // validate:{
        //     validator:function(value){
        //         return value.length<0
        //                 },
        //                 message:"version should not be negative"
        // }
        
    },

    active:Boolean,
    Author:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid");

            }
        }


    },
    // date:Date
    date:{
        type:Date,
        default:Date.now
    }
})




//collection creation in model any word becomes pural

// const playlist =new mongoose.model("playlist",playlistSchema);

// // create and Insert using mongoose
// const createDocument =async ()=>{
// try{

//     const reactPlaylist = new playlist({
//         name:"React js",
//         type:"Front end",
//         version:3.3,
//         active:true,
//         Author:"Akash Jadhav"
        
//     })
//     const result=await reactPlaylist.save();
//     console.log(result)
// }
// catch(err){
//     console.log(err)
// }
// }

// createDocument();



//Now inset the multiple Document we have write in array of Object


const playlist =new mongoose.model("playlist",playlistSchema);

// create and Insert using mongoose
const createDocument =async ()=>{
    try{
        
    //     const reactPlaylist = new playlist({
    //         name:"React js",
    //         type:"Front end",
    //         version:3,
    //         active:true,
    //         Author:"Akash_Jadhav"
    //     })
        
    //     const mongoPlaylist = new playlist({
    //         name:"Mongodb js",
    //         type:"Database",
    //         version:3,
    //         active:true,
    //         Author:"Akash_Jadhav"
    //     })

    // const mongoosePlaylist = new playlist({
    //     name:"mongoose",
    //     type:"Connector",
    //     version:1,
    //     active:true,
    //     Author:"Akash_Jadhav"
    //     })
        
    //     const pythonPlaylist = new playlist({
    //         name:"python",
    //         type:"Backend",
    //         version:4,
    //         active:true,
    //         Author:"Akash_Jadhav"
    //     })

    // const javatPlaylist = new playlist({
    //     name:"java",
    //     type:"Appdevelopment",
    //     version:5,
    //     active:true,
    //     Author:"Akash_Jadhav"
        
    // })
    
    // const Dsaplaylist = new playlist({
    //     name:"Dsa in Cppp",
    //     type:"problem solving",
    //     version:7,
    //     active:true,
    //     Author:"Akash Jadhav"
    // })
    
    // const AIPlaylist = new playlist({
    //     name:"Artifiial intilegence 1",
    //     type:"Analysis",
    //     version:9,
    //     active:true,
    //     Author:"Akash Jadhav"
    // })

    const mongoplaylist = new playlist({
        name:"mongoB",
        type:"database",
        version:4,
        active:true,
        Author:"Akash Jadhav",
        email:"akash@gmail.com"

    })

    // const result=await playlist.insertMany([reactPlaylist, mongoPlaylist,  mongoosePlaylist ,pythonPlaylist , javatPlaylist,Dsaplaylist])
    // console.log(result)
    const result=await playlist.insertMany([mongoplaylist])
    console.log(result)
}

catch(err){
    console.log(err)
}

}

createDocument();



// read the document by using mongoose
//Result in the form of array

// const getDocument  = async ()=>{
//     try{

//             const result = await playlist
//             .find({name:"mongoose"})
//             // .find({version:1}) 
            
//             // Using comparison Query Operator

//             // .find({version:{$gt : 3}})   //$gt --- this operator for greater value
//             // .find({version:{$in : [3,3,5,4]}}) 
//             // .find({version:{$nin : [3,3]}})
//             .select({name:1})    // give any key word with its pair value
//             .limit(1)
//             // .skip(1);
//             console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }


// }

// getDocument();



//logical Query operator


// const getDocument = async()=>{
//     try{
//         const final = await playlist
//         // .find({$and: [ {type:"Front end"},{Author:"Akash_Jadhav"}]})    // $nor and $not  Logical Operator
//         .find({$or: [{type:"Backend"}, {Author:"Akash_Jadhav"}]})
//         .select({name:1})
// sorting counting in the moongoose
//         // .countDocuments() //use for the total number of collections
//         // .count() // //for the onlygiven input
//         .sort({name:1});   // 1 gives priority to the capital lettrs and -1 gives the priority to the small letters  but both gives sort
//         console.log(final);
//     }
//     catch(err){ console.log(err);

//     }
// }

// getDocument();


// update the document by using the mongoose/



// const updateDocument =async(_id)=>{
//     try{

//         const result=await playlist
//         .findByIdAndUpdate({_id},{
//             $set :{name:"PYTHON"}

//         },{new:true,
//             useFindModify:false});
    
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }


    

// }

// updateDocument('65106ce39c1e6b6a40cc19b4');




// Delete the documents by using the Mongoose


// const deleteDocument = async (_id)=>{
//     try{

//         const result = await playlist
//         .findByIdAndDelete({_id})   //here the data is not previously i use the delete and delete it 
//                 // .deleteOne({_id}) //we can use the deleteMany here
//         console.log(result);
//     }
//     catch(err){
//         console.log(err)
//     }

//     }

// deleteDocument('65106ce39c1e6b6a40cc19b1');   id can be changed as per the update by user





