import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({ name: 'user_email', type: 'varchar' })
  email: string;

  @Column({ name: 'user_password', type: 'varchar' })
  password: string;

  @Column({ name: 'user_libraryCard', type: 'varchar' })
  library_card: string;
}
