import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserDto } from './dto/user.dto';

@Controller('api/users')
export class UserController {

  constructor (private readonly service: UserService) { }

  @Get(':id')
  findOne (@Param('id') id: string): Promise<UserDto> {
    return this.service.findOne(id)
      .then(x => { return new UserDto(x) });
  }

  @Post()
  create (@Body() userCreateDto: UserCreateDto): Promise<UserDto> {
    return this.service.create(userCreateDto)
      .then(x => { return new UserDto(x) });
  }
}
