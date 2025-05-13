import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import UserModel from "@/app/models/model";

export async function GET() {
    await dbConnect()
    
    try {
       const user = await UserModel.find()
       return NextResponse.json({user})
    
    } catch (error) {
       console.log('There was an error ' , error.meessage)
       throw error
    }
 }
 

export async function POST(req) {
    await dbConnect()
 
    try {
       const {username , email , password} = await req.json()
       const user = await UserModel.create({username , email , password})
 
       if (!user) {
          return NextResponse.json({message : 'user not created'})
       }
 
       return NextResponse.json({message : 'user created' , user : user})
 
    } catch (err) {
       return NextResponse.json({error : `there was an error :${err} `})
    }
 
}
 

export async function PUT(req) {
    await dbConnect()
 
    try {
       const {_id , username , email , password} = await req.json()
       const user = await UserModel.findById(_id)
 
       if (!user) {
          return NextResponse.json({message : 'user not found'})
       }
       
       await UserModel.findByIdAndUpdate(_id , {username , email , password})
       return NextResponse.json({message : 'user updated'})
 
    } catch (error) {
       return NextResponse.json({message : 'there are some error ' , error})
    }
 
}
 
 export async function DELETE(req) {
    await dbConnect()
    try {   
       const {id} = await req.json()
       await UserModel.findByIdAndDelete(id)
       return NextResponse.json({message : 'user deleted'})
    
    } catch (error) {
       return NextResponse.json({message : 'there are some error ' , error})
    }
}