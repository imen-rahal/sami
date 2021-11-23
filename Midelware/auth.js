var now = new Date();
var heure = now.getHours();

const day1 = now.getDay();

const auth=(req, res,next)=>{
    if(heure<22 && heure>= 9 && day1<6 && day1>0){
        console.log("auth")
        next()
    }else{
        res.send("si sami")
    }
}
module.exports=auth