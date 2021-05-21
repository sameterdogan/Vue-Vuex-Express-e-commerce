import asyncErrorWrapper from '../helpers/error/asyncErrorWrapper'
import UserModel from   "../models/user"
import CustomError from '../helpers/error/CustomError'

export const getAllUsers=asyncErrorWrapper(async (req,res,next)=>{
       const allUsers= await UserModel.find()
    res.status(200).json({
        success:true,
        message:"All user successfully listed",
        allUsers
    })
})


export const makeAdmin =asyncErrorWrapper(async (req,res,next)=>{
    const editRole = await UserModel.findByIdAndUpdate(req.params.userId,{role:"admin"})
    if(!editRole) return next(new CustomError("User not found.",404))
    res.status(200).json({
        success:true,
        message:"The user's role has been successfully changed to admin.",
        editRole
    })
} )

export const makeUser =asyncErrorWrapper(async (req,res,next)=>{
    const editRole = await UserModel.findByIdAndUpdate(req.params.userId,{role:"user"})
    if(!editRole) return next(new CustomError("User not found.",404))
    res.status(200).json({
        success:true,
        message:"The user's role has been successfully changed to user.",
        editRole
    })
} )