import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('dishes')
export class Dishes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    @Column('text')
    description: string

    @Column('double')
    price: number

    @Column('double')
    review: number

    @Column("timestampz")
    @CreateDateColumn()
    created_at: Date;
  
    @Column("timestampz")
    @UpdateDateColumn()
    updated_at: Date;
}