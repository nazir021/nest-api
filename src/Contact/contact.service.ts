import { Injectable } from "@nestjs/common";
import { Contact } from "./contact.entity";
import {MongoRepository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {ObjectId, ObjectID} from "mongodb";
import * as jwt_decode from 'jwt-decode'

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: MongoRepository<Contact>,
      ) {}

    async insertInfo( pro){
        console.log(pro.body);
        
        return await this.contactRepository.save(pro.body)
    }

    async getInfo(){
        const result = await this.contactRepository.find()
        return result
    }

    async getSingleInfo(profileId:string){
        return await this.contactRepository.findOne(profileId)
    }

    
    deleteProfile(profileId:string){
        return this.contactRepository.deleteOne({id:profileId})
    }
}