import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class createModeloDto{
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsNumber()
    marca_id?: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    user_id?: number;

}