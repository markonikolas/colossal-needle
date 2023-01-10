import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Hash {
  @PrimaryColumn()
  username: string;

  @Column()
  hash: string;
}
