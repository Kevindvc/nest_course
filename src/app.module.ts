import { Module } from '@nestjs/common';
import {Taskmodule   } from './task/Task.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';
import { TaskService } from './task/Task.service';
import { TaskController } from './task/Task.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PaymentModule } from './payment/payment.module';


@Module({
  
  controllers: [TaskController,UsersController,HelloController],
  providers:[TaskService,UsersService],
  imports: [PaymentModule]
  
})
export class AppModule {}
