import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
export const registerController = async(req,res)=>
{
    try{
        const {name,email,password,phone,address}=req.body
        //validations
        if(!name)
        return res.send({error:"name required"})
        if(!email)
        return res.send({error:"email required"})
        if(!password)
        return res.send({error:"password required"})
        if(!phone)
        return res.send({error:"phone required"})
        if(!address)
        return res.send({error:"address required"})

        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser)
        return res.status(200).send({
            success:true,
            message:"already registered. please login"
        })
        //registerUser
        const  hashedPassword= await hashPassword(password);
        //save
        const user = new userModel({name,
            email,
            phone,
            address,
            password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:"Registered successfully",
            user
        })
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:error in registration ,
            error
        })
    }
}