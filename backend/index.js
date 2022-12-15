const express=require("express");
require("./db/config");
const User=require("./db/User");
const User_Info=require("./db/UserInfo")
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.post("/register", async (req,resp)=>{
    let user = new User(req.body);

    let result=await user.save();
    resp.send(result);
})


app.post("/updateBatch",async(req,resp)=>{
    let value=req.body.email;
    let mail={
        "email":value
    }

    let user_info=await User_Info.findOne(mail)
    user_info.batch=req.body.batch
    let result=await user_info.save()
    resp.send(result)

    

})

app.post("/insert", async (req,resp)=>{
    let user_info = new User_Info();
    user_info.email=req.body.email;
    user_info.prev_enrollment=false;
    user_info.enrollment_date=new Date();
    user_info.dues=false;
    user_info.batch=""
    
    let result=await user_info.save()
    resp.send(result);
})

app.post("/getinfo",async(req,resp)=>{
    let user_info=await User_Info.findOne(req.body);
    if(user_info){
        resp.send(user_info)
    }else{
        resp.send({result:"WRONG CREDENTIALS."})
    }

})

app.post("/login", async (req,resp)=>{
    let user=await User.findOne(req.body);
    if(user){
        resp.send(user)
    }
    else{
        resp.send({result:"WRONG CREDENTIALS"})
    }
    
})

app.post("/acceptPayment",async(req,resp)=>{
    let user_info=await User_Info.findOne(req.body);
    user_info.prev_enrollment=true;
    user_info.enrollment_date=new Date();
    let result=await user_info.save()
    resp.send(result);

})


app.listen(5000);