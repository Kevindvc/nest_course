import { Module } from '@nestjs/common';
import {TaskController} from './Task.controller'

 @Module({controllers:[TaskController]})
export class Taskmodule {}
