import{Injectable} from '@nestjs/common'

@Injectable()
export class TaskService{


    getTask(){
        return ['Hola','Kevin','Valladares']
    }

    testin(){
        return 'hola hola'
    }
}