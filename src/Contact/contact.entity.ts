import {Entity,Column,ObjectIdColumn} from 'typeorm'


@Entity()
export class Contact{
    @ObjectIdColumn()
    id: string;
    @Column()
    name:string;
    @Column()
    workId:string
    @Column()
    department:string
}
