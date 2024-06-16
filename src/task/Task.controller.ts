 import { Controller, Get}from '@nestjs/common'
import { get } from 'http'
import { TaskService } from './Task.service'
 @Controller({})
export class TaskController{
    TaskService:TaskService
    constructor(TaskService:TaskService){
        this.TaskService=TaskService
    }

    @Get('/task')
   getALLTask(){
       return this.TaskService.testin()
   }
}