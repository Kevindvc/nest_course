import { Controller, Get, HttpCode, Param, ParseIntPipe, Req, Res,Query, UseGuards } from '@nestjs/common';
import { Request ,Response} from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';


@Controller('/')
export class HelloController {

    @Get('/')
    index(@Req() request:Request, @Res() response:Response){
        console.log(request.url)
        response.status(200).json({
            massage:'HOLA KEVIN'
        })
    }


    @Get('nofound')
    @HttpCode(400)
    notfoundPage(){
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorpage(){
        return 'error internal'
    }

    @Get('new')
    @HttpCode(201)
    somethingnew(){
        return 'error internal'
    }

    @Get('ticket/:num')
    Getnumber(@Param('num', ParseIntPipe)num:number){
        return 14+num
    }

    @Get('hola')
    @UseGuards(AuthGuard)
    Greet(@Query(ValidateuserPipe) query:{name: string, age:string}){

        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hello ${query.name}, your age es ${query.age}`

    }
}
