
// const sayhi =(name)=>{
//     console.log(` the name of the person  is : ${name}`)
// }
// // export default
// module.exports = sayhi;


const Done =(req,res,next)=>{
    const {user}=req.query;
    if(user==='jhon'){
        req.user={name:'jhon',id:3}
        // next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    // console.log("the Done i working")
    // next()
}
// export default
module.exports = Done;