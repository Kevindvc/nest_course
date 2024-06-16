import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserdto } from './dto/create-users.dto';
import { UpdateUserdto } from './dto/update-users.dto';

@Injectable()
export class UsersService {

    private users2=[]


    getUsers(){
        return this.users2
    }

    getuser(id:number){
        const taskfound=this.users2.find(user=> user.id===id)
        if(!taskfound){
            return new NotFoundException(`el usuario con el ${id} no fue encontrado`)
        }
        return taskfound;
    }

    createUser(user: CreateUserdto){
        console.log(user)
        this.users2.push({
            ...user,
            id: this.users2.length + 1
        })
        return user;
    }

    updateUsers(task:UpdateUserdto){
        return 'actualizando usuarios'
    }

    deleteUsers(){
        return 'eliminando usuarios'
    }
}
