// setInterval(() => {
//     console.log("hello world")
    
// }, 2000);
// console.log("i will run first");
//process stays alives unless
// kill the process control+c
// unexpected error

// setTimeout(()=>{
// console.log("hey i am AKash");

// },2000)
// console.log("hello")

// using the http request event loop

//  const http=require("http")

//  const server=http.createServer((req,res)=>{
//     console.log("request Event ")
//     res.end("hello world")
//  })

//  server.listen(5000,()=>{
//     console.log("server is on port : 5000....")
//  })


// const http=require("http")
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.end('hompage')
//     }
//     if(req.url=='/about'){
//         res.end('About page')

//     }
//     res.end('error page')

// })
// server.listen(5000,()=>{
//     console.log('server is listning in 5000....')
// })