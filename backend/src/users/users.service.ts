import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const emailExist = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (emailExist) {
      throw new BadRequestException('O E-MAIL já esta em uso!');
    }

    const userExist = await this.prisma.user.findUnique({
      where: { email: data.username },
    });

    if (userExist) {
      throw new BadRequestException('O USERNAME já esta em uso!');
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashPassword,
      },
    });
    const { password, ...filteredUser } = user;

    return filteredUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
