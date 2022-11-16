
import { JSON } from "sequelize";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage=async(req,res)=>{
    let data=await db.users.findAll();
    return res.render('homepage.ejs',{
        data:JSON.stringify(data)
    });

}

let getCRUD=(req,res)=>{
    return res.render('crud.ejs');
}

let postCRUD=async(req,res)=>{
    let message=await CRUDService.createNewUser(req.body);
    return res.redirect("/get-crud");
}

let displayGetCRUD=async(req,res)=>{
    let data= await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs',{
        dataTable:data
    });
}

let getEditCRUD=async(req,res)=>{
    let userId=req.query.id;
    if(userId)
    {
        let userData=await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs',{
            user:userData
        });
    }
    else{
        return res.send("Cannot found user");
    }
}

let putCRUD=async(req,res)=>{
    let data=req.body;
    await CRUDService.updateUserData(data);
    return res.redirect("/get-crud")
}

let deleteCRUD=async(req,res)=>{
    let userId=req.query.id;
    if(userId)
    {
        await CRUDService.deleteUserById(userId);
        return res.redirect("/get-crud");
    }
    else{
        return res.send('user not found');
    }
}

module.exports={
    getHomePage:getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}