import { Injectable } from "@nestjs/common";
import { Product } from '../entities/product.entity';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private readonly ProductRepo: Repository<Product>,
    ) {}

    async create(CreateProductDto: CreateProductDto) {
        const Product = this.ProductRepo.create(CreateProductDto);
        await this.ProductRepo.save(Product);

        return Product;
    }
//encontrar registro
findOne(id: number){
    return this.ProductRepo.findOneBy({id})
}
//mostrar registro
findAll(){
    return this.ProductRepo.find({
        order: {id: 'ASC'},
    });
}
// eliminar 

async remove(id:number){
    const Product =await this.findOne(id);
    await this.ProductRepo.remove(Product);
    return 'producto eliminado';
}
//actualizar
async update(id: number, cambios: CreateProductDto){
    const oldProduct = await this.findOne(id);
    const updateProduct = await this.ProductRepo.merge(oldProduct,cambios)
         
}

}