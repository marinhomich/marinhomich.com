import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const password = await hash(createUserDto.password, 12);
    return this.usersRepository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      password,
    });
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(userId: number): Promise<User> {
    const data = await this.usersRepository.findOne({
      where: { id: userId },

      // lock: { mode: 'optimistic', version: 1 },
    });
    if (!data) {
      throw new NotFoundException(`User ${userId} not found`);
    }
    return data;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
