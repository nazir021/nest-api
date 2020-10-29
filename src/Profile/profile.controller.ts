import { Controller ,Post,Body, Get, Param, Patch, Delete,UseGuards,Request} from "@nestjs/common";
import { profileEnd } from "console";
import { ProfileService } from "./profile.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as jwt_decode from 'jwt-decode';
// import {ObjectID} from "mongodb";
// import jwt_decode from 'jwt-decode'
// @ts-ignore  
// import jwt_decode from "jwt-decode";


@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfileController{
   constructor(private readonly profileService : ProfileService){}
//    private profileService=new ProfileService
@Post()
async addProfile( @Request() req:any){  
            const all = await this.profileService.insertInfo(req)
            return {message:all}
    }

@Get()
getAllProfile(@Request() req:any){
    const header = req.headers.authorization
    const head_split = header.substr(7,header.length-7)
    const decoded = jwt_decode(head_split);
    // req.body.createdBy = decoded.sub
    // req.body.createdById = decoded.sub
    // req.body.createdAt = new Date()
    // console.log('kk',decoded.sub);
    
    return this.profileService.getInfo()
}

@Get(':id')
async getSingleProduct(@Param('id') proId: string){
    return await this.profileService.getSingleInfo(proId)
}

@Patch(':id')
updateSingleProfile(@Param('id') proId: string,@Request() req:any){
    this.profileService.updateInfo(proId,req)
    return null
}

@Delete(':id')
deleteSingleProfile(@Param('id') prodId:string,){
    this.profileService.deleteProfile(prodId)
    return null
}
    
}