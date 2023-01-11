import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class HashEntity {
  @PrimaryColumn()
  username: string;

  @Column()
  hash: string;
}
