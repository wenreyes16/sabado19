import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entities';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository <Product>
    ) {}

    async create(createProductDto: CreateProductDto){
        return this.productRepository.save(createProductDto);
    }
}