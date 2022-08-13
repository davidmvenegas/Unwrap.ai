import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class FeedbackSentences extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    sentence_text!: string

    @Column()
    order_within_feedback_entry!: number

    @Column()
    feedback_date!: string
}