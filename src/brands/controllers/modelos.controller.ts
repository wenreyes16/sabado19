
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ModelosService } from '../services/modelos.service';
  import { createModeloDto } from "../dto/modelo.dto";
 

  @Controller('modelos')
   export class ModeloController {
    constructor(private readonly ModelosServices) {}

    @Post()
    async create(@Body() modelosDto: createModeloDto) {
        return await this.ModelosServices.create(modelosDto);
    }

    @Get('id:')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.ModelosServices.findOne(id);

   }
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
     return this.ModelosServices.remove(id);

}
@Patch(':id')
update(
  @Param('id', ParseIntPipe) id: number,
  @Body() createModeloDto: createModeloDto,
) {
  return this.ModelosServices.update(id, createModeloDto);
}

}