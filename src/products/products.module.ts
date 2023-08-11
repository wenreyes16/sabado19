import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [],
  providers: [],
})
export class ProductsModule {}
