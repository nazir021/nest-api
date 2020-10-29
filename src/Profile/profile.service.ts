import { Injectable } from "@nestjs/common";
import { Profile } from "./profile.entity";
import {MongoRepository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {ObjectId, ObjectID} from "mongodb";
import * as jwt_decode from 'jwt-decode'
// import { InjectEntityManager } from '@nestjs/typeorm';
// import { MongoRepository } from 'typeorm';
// import {MongoEntityManager} from "typeorm";
//var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class ProfileService {
    private profiles : Profile[] = []

    

    constructor(
        @InjectRepository(Profile)
        private readonly userRepository: MongoRepository<Profile>,
      ) {}
   
    
    dec (has){
        const header = has.headers.authorization
        const head_split = header.substr(7,header.length-7)
        const decoded = jwt_decode(head_split);
        return decoded
    }  
    async insertInfo( pro){
        //const message = 'Profile Created Successfully'
        //const proId = Math.random().toString(36).substr(2, 9)
        // const newProfile = new Profile(proId,name,email,age,address)
        // const newProfile = new Profile
        // newProfile.name = name
        // newProfile.email = email
        // newProfile.age = age
        // newProfile.address = address

        // const newPro = new Profile
        // newPro.name = name
        // newPro.email = email
        // newPro.age = age
        // newPro.address = address
        
        // console.log(pro);
        

        // const header = pro.headers.authorization
        // console.log(header);
        
        // const head_split = header.substr(7,header.length-7)
        // console.log(head_split);
        
        // const decoded = jwt_decode(head_split);

        const decoded = this.dec(pro)
        pro.body.createdBy = decoded['sub']
        pro.body.createdAt = new Date()

        return await this.userRepository.save(pro.body)
    }

    async getInfo(){
        // return this.profiles
        const result = await this.userRepository.find()
        // console.log(result);
        return result
    }

    async getSingleInfo(profileId:string){
        // const profile = this.profiles.find(char => char.id === profileId)
        // var hex = /[0-9A-Fa-f]{6}/g;
        // profileId = (hex.test(profileId))? ObjectId(profileId) : profileId;
        // profileId = ObjectId.createFromHexString('profileId')
        // console.log(this.userRepository);
        // profileId = JSON.parse(profileId);
        // console.log('profile id',typeof profileId)
        // console.log('profile id','5f8a6c02af0d7a0608bd62af')
       
        // const newProfile = new Profile
        // newProfile.id = profileId;
        // newProfile.id=newProfile.id.substr(0,newProfile.id.length-1)
        // console.log(newProfile);
        
        return await this.userRepository.findOne(profileId)
    }

    async updateInfo(profileId:string,pro){
        // const index = this.profiles.findIndex(char => char.id === profileId)
        // const profile = this.profiles[index]
        // const updateProfile = {...profile}
        const updateProfile = await this.userRepository.findOne(profileId)

        const header = pro.headers.authorization
        const head_split = header.substr(7,header.length-7)
        const decoded = jwt_decode(head_split);

        updateProfile['updatedBy'] = decoded['sub']
        updateProfile['updatedAt'] = new Date()
        console.log(updateProfile);
        
        if(pro.body.name){
            updateProfile.name = pro.body.name
        }
        if(pro.body.email){
            updateProfile.email = pro.body.email
        }
        if(pro.body.age){
            updateProfile.age = pro.body.age
        }
        if(pro.body.address){
            updateProfile.address = pro.body.address
        }
        await this.userRepository.save(updateProfile)
    }

    deleteProfile(profileId:string){
        console.log(profileId);
        
        return this.userRepository.deleteOne({id:profileId})
    }
}