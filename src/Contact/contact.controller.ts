import { Controller ,Post,Body, Get, Param, Patch,Res, Delete,UseGuards,Request} from "@nestjs/common";
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController{
   constructor(private readonly contactService : ContactService){}

@Post()
async addProfile( @Request() req:any,@Res() res:any){  
            return this.contactService.insertInfo(req)
            //return res.json({data:all})
    }

@Get()
getAllProfile(@Request() req:any){
    
    return this.contactService.getInfo()
}

@Get(':id')
async getSingleProduct(@Param('id') proId: string){
    return await this.contactService.getSingleInfo(proId)
}

// @Patch(':id')
// updateSingleProfile(@Param('id') proId: string,@Request() req:any){
//     this.contactService.updateInfo(proId,req)
//     return null
// }

@Delete(':id')
deleteSingleProfile(@Param('id') prodId:string,){
    this.contactService.deleteProfile(prodId)
    return null
}
    
}