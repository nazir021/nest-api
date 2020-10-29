import {Entity,Column,ObjectIdColumn} from 'typeorm'
// var ObjectId = require('mongodb').ObjectID;
// import {ObjectID} from "mongodb";


@Entity()
export class Profile{
    @ObjectIdColumn()
    id: string;
    @Column()
    name:string;
    @Column()
    email:string
    @Column()
    age:number
    @Column()
    address:string
    @Column()
    createdAt:Date
    @Column()
    createdBy:string
    @Column()
    updatedAt:Date
    @Column()
    updatedBy:string

}
// export class Profile{
//     public id:string
//     public name:string
//     public email:string
//     public age:number
//     public address:string
// }