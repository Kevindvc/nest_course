import{     IsString, IsNumber, MinLength, IsEmail, IsEmpty, IsNotEmpty }  from  'class-validator'


export class CreateUserdto{
    @IsString()
    @MinLength(1)
    name: string
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string
    @IsNumber()
    phone: number
}