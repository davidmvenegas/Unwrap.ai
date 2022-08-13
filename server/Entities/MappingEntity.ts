import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SentenceClusterMapping extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    sentence_id!: number

    @Column()
    cluster_id!: number
}