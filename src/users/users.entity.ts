import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Auth{
  @ObjectIdColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
}