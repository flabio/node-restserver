const{request,response}=require('express');


const usersGet=(req=request, res=response)=>{
    const {q,name}=req.query;

    res.json({
        q,
        name,
        msg:"success get api-Controller"
    });
}
const userByIdGet=(req, res=response)=>{
    res.json({
        msg:"success get api-Controller"
    });
}
const userPost=(req, res=response)=>{
    const data=req.body;
    console.log(data);
    res.json({
        data: data,
        msg:"success post api-Controller"
    });
}
const userPut=(req, res=response)=>{
    const {id}=req.params;
    res.json({
        id: id,
        msg:"success put api-Controller"
    });
}
const userDelete=(req, res=response)=>{
    res.json({
        msg:"success delete api-Controller"
    });
}

module.exports={
    usersGet,
    userByIdGet,
    userPost,
    userPut,
    userDelete
}