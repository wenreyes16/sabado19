import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';
@Entity()
export class Category {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    categoria: string;

    @Column({type: 'int4', nullable: false})
    categoria_id: number;

    @Column({type: 'int4', nullable: false})
    user_id: number;

    @CreateDateColumn({  type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @ManyToOne(()=> User)
    @JoinColumn({
      name: 'user_id', //el campo que relaciona a mi tabla
      referencedColumnName: 'id' //este es el id del usuario
  
})

autor: User;

}