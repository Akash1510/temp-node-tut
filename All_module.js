// Operating system module

// const { readFile, write } = require("fs")

// const { Module } = require("module")

// const os=require("os");

// // info about current user

// const user=os.userInfo();
// console.log(user);

// // this method return the uptime in seconds

// console.log(`the system uptiem is ${os.uptime()} seconds  `);   //method to check

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }   //their are more also the method are their explore them

// console.log(currentOs);


//Path Module

// const path=require("path");
// console.log(path.sep);

// const filepath=path.join("/content/","subfolder","text.txt");
// console.log(filepath);   //join the all arguments and build the path

// const base=path.basename(filepath)
// console.log(base)  //which is the base name in folder 

// // Absolute path method path

// const Absolute=path.resolve(__dirname,"content","subfolder","text.txt");
// console.log(Absolute)    //Complte path for perticualr file or folder



// File system Module -- FS (sync)
// const {readFileSync,writeFileSync, writeFile} = require('fs')

// const first=readFileSync("./content/first.txt","utf8");
// const second =readFileSync("./content/second.txt","utf8");
// writeFileSync("./content/result.txt",`Here is the result:${first},${second}`,{flag:"a"});

// console.log(first,second)


// Asynchronus method

// const {readFile,writeFile} =require ('fs');
// console.log("start")

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return 
//     }
//     const first =result
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return 

//         }
//         const second =result
//         writeFile("./content/result1.txt",`here is the result : ${first},${second}`,(err,result)=>{
//             if (err){
//                 console.log(err)
//                 return 
//             }
//             console.log("done with  this task")
//         })
//     })

// })
// console.log("straing next task")

// HTTP modules

// const http=require("http")
// const server =http.createServer((req,res)=>{
//     // console.log(req)
//     if(req.url==='/'){
//         res.end("welcome to my web page")
//     }
//     if(req.url==='/about'){
//         res.end("here is our short history")
//     }
//     // res.write("hey I am Akash")
//     res.end(`
//          <h1>Hi Am the Akash</h1>
//         <p>We cantseem to find the page you are ooking for</p>
//         <a href="/">back to home</a>
//         `)

// })
// server.listen(7000)

// npm is gobal command ,comes with the node/
// npm --v for the version

// local dependency -use it in any project
// npm i<packagename>
// global dependency -use it in any project


// package.json ---manifest file (stores important info about project /pacakage)
// manul approach(craete package.json in the root ,creates properties etc )
// npm init (step by step ,press tos skip )
// npm init -y (everything default)
// npm i pacakge_name  to way to download the packages

const _ =require('lodash');
const items =[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)                        //resolve the nested array into simple array
console.log(newItems);


