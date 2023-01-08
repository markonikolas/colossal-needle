import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Hash {
  @PrimaryColumn()
  userID: number;

  @Column()
  hash: string;
}
