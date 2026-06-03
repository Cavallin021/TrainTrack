import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const exist = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (exist) {
      throw new BadRequestException('O e-mail já esta em uso!');
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashPassword,
      },
    });
    const { password, ...filteredUser } = user;

    return filteredUser;
  }
}
