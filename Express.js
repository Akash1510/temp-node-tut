// // const express =require('express')()   //we can write like this 
// const express  =require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     console.log(" user Hit The resources")
// res.send('Hompage')
// })
// app.get('/about',(req,res)=>{
//     console.log("Server is hitting")
//     res.send('About Page')
// })
// app.all('*',(req,res)=>{
//     res.status(200).send('<h1>Resourcs not working </h1>')
// })
// app .listen (7000, ()=>{
//     console.log('server is listening on port 5000 ..')
    
// })

// Http Method

// app.get   Read  data
// app.post  insert data
// app.put  update data
// app.delete  Delete Data
// app.all
// app.use
// app.listen


// const express =require('express')
// const path =require('path')

// const app =express()
// // setup the static nad middleware
// // app.use(express.static('.Folder name'))  //through this method we can All our file in folder direct can access and html and css and js all type of file
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./index.html'))
//     //adding to static Assets
//     //SSR
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('resource not Found')
// })
// app.listen (5000,()=>{
//     console.log("Servver is listenng 5000 port ...")
// })


// SSR  Serversite rendering 
// API vs SSR
// ApI -json              // SSR -template
// Send data/             // Send Template
// res.json()             // RES.Render()8     



// const express = require('express')
// const peace = express()
// const {products}=require(./file name)  // we can Access the all json data and display on screen throught we can make changes in it 

// peace.get('/',(req,res)=>{
//     res.json(products)
// })

// app.listen(5000,()=>{
//     console.log('Server is listening on port 5000.....')
// })


// USind Json

// NOw params And Query String 
// const express =require('express')
// const { middleware } = require('modules')
// const { start } = require('repl')

// const app=express()
// app.get('/',(req,res)=>{
//     res.send('<h1>Home Page</h1><a href="/HTTP/Express">CliCk</a>')   //Using this we can Go Next page and user can Access the data
// })
// // Route  paramms   using this we can json file 
// app.get('/api/products',(req,res)=>{
//     const newProducts =products.map((product)=>{
//         const {id ,name ,image}=product
//         return {id,name,image}      //make Display as we want display on screen can make changes in Json file
//     })
//     res.json(newProducts)
// })

// app.get('/api/products/:productID',(req,res)=>{
//     console.log(req)
//     // console.log(req.params)

//     // Query String

//     const singleproduct =product.find(
//         (product)=> product.id== Number(productID)
//     )
//     if(!singleproduct){
//         return res.status(404).send('Producut Does Not Exist')
//     }
//     console.log(singleProduct)
//     res.json(singleProduct)
    
// })
// app.get('/api/product/:productId/reviews/:reviewId')
// // console.log(req.params)
// // res.send('Hello World')

// app.get('/api/v1/query',(req,res)=>{
//     const {search,limit}=req.query
//     let sortedProducts =[...products]
//     if(search){
//         sortedProducts=sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })

//     }
//     if(limit){
//         sortedProducts =sortedProducts.slice(0,Number(limit))
//     }

//     res.status(200).json(sortedProducts)
// })
// app.listen (5000,()=>{
//     console.log("Server is Listening on port  5000...")
// })


// middleware setup


// const express=require('express')

// const app=express()

// req > middleware > res
// const Done =require('./function')
// app.use([Done])   //middleware Multiple Function setup 
// app.get('/',(req,res)=>{
// const method=req.method;
// const url=req.url;
// const time =new Date().getFullYear();
// console.log(method,url,time);
// res.send('home')
// })
// app.get('/about',(req,res)=>{
//     res.send('About')
//     console.log(req.user)
//     res.send('items')
// })

// app.post('/login',(req,res)=>{
//     console.log(req.body)
//     res.send('post')
// })
// app.put('/file name:id',(req,res)=>{
//     const {id}=rq.params
//     const {name}=req.body   //to change purpose that we have to do
//     const person = people.find((person)=> person.id === Number(id))
// if(!person){
//     return res
//     .status(404)
//     .json({success : false ,msg:`no person with id ${id}`})
// }
// const newPeople =people.map((person)=>{
//     if(person.id===Number(id)){
//         person.name=name
//     }
//     return person
// })
    
// res.status(200).json({success:true,data:newPeople  })
// })

// app.delete('/api/people/:id',(req,res)=>{
//     const person = people.find((person)=>person.id===Number(req.params.id))
//     if(!person){
//         return res
//         .status(404)
//         .json({success:false,msg:'No person with id ${id}'})
//     }
// })
// app.listen(2000,()=>{
//     console.log('server is LIstening on port 2000..' )
// })