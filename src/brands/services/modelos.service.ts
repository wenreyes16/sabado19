import { Injectable } from "@nestjs/common";
import { Modelo } from '../entities/modelo.entity';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { createModeloDto } from "../dto/modelo.dto";

@Injectable()
export class ModelosService {
    constructor(
        @InjectRepository(Modelo)
        private  readonly modeloRepo: Repository<Modelo>
    ) {}

    async create(createModeloDto: createModeloDto){
        const modelo = this.modeloRepo.create(createModeloDto);
        await this.modeloRepo.save(modelo);
        return modelo;

    }

    findOne(id: number) {
        return this.modeloRepo.findOneBy({id});
    }
    findAll(){
        return this.modeloRepo.find({
            order: { id: 'ASC' },
          });
    }

    async remove(id: number){
        const modelo  = await this.findOne(id);
        await this.modeloRepo.remove(modelo)
        return 'Modelos eliminado satisfactoriamente';
    }

    async update(id: number,cambios: createModeloDto ){
        const oldModelo = await this.findOne(id);
        const updateModelo  = await this.modeloRepo.merge(oldModelo,cambios);
        return this.modeloRepo.save(updateModelo);
    }
}