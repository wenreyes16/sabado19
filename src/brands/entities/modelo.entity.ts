import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modelo {
    @PrimaryGeneratedColumn({type: 'int4'})
    id?: number;

    @Column({ type: 'int4', nullable: false })
    marca_id: number;

   @Column({ type: 'varchar', length: 100, nullable: false })
   nombre: string;

   @Column({ type: 'int4', nullable: false })
    user_id: number;
   
  
}