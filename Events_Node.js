// Event Driven Programming
//used Heavily in Node js


// on === listen for event
// emit ----> Emit an event
// const EventEmitter=require('events');
// const customEmitter= new EventEmitter 
// customEmitter.on('response',()=>{
//     console.log(`data is Recived`)   //we can listen then its Emit //order is matterd 
// });
// customEmitter.on('response',(name,id)=>{
//     console.log(`Some Other logic Here :name  ${name} with id is ${id}`);
    
// })
// customEmitter.emit('response','Akash',34);




// streams ::anything operation  Sequentially
// Writeable
// readable
// Duplex
// transform

// const {writeFileSync}=require ('fs')
// for(let i=0;i<20;i++){
//     writeFileSync('./content/big.txt',`Hello Akash ${i}\n `,{flag:'a'})
// }

//  default 64 kb
// last buffer--remainder
// highWaterMark-control size 
// const stream =craeteReadStream('./content/big.txt',{higWaterMark: 90000}) 
// const stream =craeteReadStream('./content/big.txt',{encoding: 'utf8'}) 
   





// const {createReadStream}=require('fs')
// // const stream =createReadStream('./content/big.txt')
// const stream =createReadStream('./content/big.txt',{highWaterMark:12})

// stream.on('data',(result)=>{
//     console.log(result)
// })
// stream.on('error',(err)=>console.log(err))


// stream with http example

// let http =require('http')
// let fs =require('fs');
// const { fileURLToPath } = require('url');
// http.createServer(function(req,res){
//     // const text =fs.readFileSync('./content/big.txt','utf8')
//     // res.end(text)
//     const FileStream=fs.createReadStream('./content/big.txt','utf8');
//     FileStream.on('open ',()=>{
//         FileStream.pipe(res)
//     })
//     FileStream.on('error',(err)=>{
//         res.end(err)
//     })
// })
// .listen(5000)


// Now Done the Node fundamentals

