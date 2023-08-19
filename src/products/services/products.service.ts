import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  //Crear un registro
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    await this.productRepo.save(product);

    return product;
  }

  //Encontrar un registro
  findOne(id: number) {
    return this.productRepo.findOneBy({ id });
  }

  //Mostrar todos los registros
  findAll() {
    return this.productRepo.find({
      order: { id: 'ASC' },
    });
  }

  //Eliminar un registro
  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepo.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  //Actualizar un producto
  async update(id: number, cambios: CreateProductDto) {
    const oldProduct = await this.findOne(id);
    const updatedProduct = await this.productRepo.merge(oldProduct, cambios);
    return this.productRepo.save(updatedProduct);
  }
}
