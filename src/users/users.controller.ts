import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserdto } from './dto/create-users.dto';
import { UpdateUserdto } from './dto/update-users.dto';
import { query } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {


    constructor (private usersservice:UsersService){}


    @ApiTags('users')
    @ApiOperation({summary:'get all users'})
    @Get()
    getalluser(@Query() query:any){
        console.log(query)
        return this.usersservice.getUsers();
    }
    @ApiTags('users')
    @Get('/:id')
    getuser(@Param('id') id:string){
        console.log(id)
        return this.usersservice.getuser(parseInt(id))
    }

    @UsePipes(new ValidationPipe({whitelist:true}))
    @ApiTags('users')
    @Post()
    createUser(@Body() task: CreateUserdto){

     
        return this.usersservice.createUser(task);
    }

    @Put()
    UpdateTask(@Body() task: UpdateUserdto){
        return this.usersservice.updateUsers(task)
    }

    @Delete()
    deleteTask(){
        return this.usersservice.deleteUsers();
    }

    @Patch()
    updateStatus(){
        return 'Actualizando dat'
    }

    @Get('ticked/:num')
    getNumber(@Param('num', ParseIntPipe) num:number){
        console.log(typeof num)
        return 2+num;
    }

    @Get('active/:status')
    activeStatus(@Param('status', ParseBoolPipe) status:boolean){

        return status;

    }

   

}
