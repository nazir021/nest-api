import { CustomerModel } from './../customer/customer.model';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';



@ObjectType()
@Entity()
export class InvoiceModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column({ length: 500, nullable: false })
  invoiceNo: string;
  @Field()
  @Column('text')
  description: string;
  @Field(type => CustomerModel)
  @ManyToOne(type => CustomerModel, customer => customer.invoices)
  customer: CustomerModel;
}