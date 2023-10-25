import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Michel Marinho' })
  name: string;

  @Column()
  @ApiProperty({ example: 'demo@marinhomich.dev' })
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  createdAt: Date;
}
