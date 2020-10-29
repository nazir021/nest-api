// import { InvoiceModel } from './../invoice/invoice.model';
// import { InvoiceService } from './../invoice/invoice.service';
// import { CustomerService } from './customer.service';
// import { CustomerModel } from './customer.model';
// import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
// import { Inject } from '@nestjs/common';
// @Resolver(of => CustomerModel)
// export class CustomerResolver {
//   constructor(
//     @Inject(CustomerService) private customerService: CustomerService,
//     @Inject(InvoiceService) private invoiceService: InvoiceService
//   ) { }
//   @Query(returns => CustomerModel)
//   async customer(@Args('id') id: string): Promise<CustomerModel> {
//     return await this.customerService.findOne(id);
//   }
//   @ResolveField(returns => [InvoiceModel])
//   async invoices(@Parent() customer) {
//     const { id } = customer;
//     console.log(customer);
//     return this.invoiceService.findByCustomer(id);
//   }
//   @Query(returns => [CustomerModel])
//   async customers(): Promise<CustomerModel[]> {
//     return await this.customerService.findAll();
//   }
// }