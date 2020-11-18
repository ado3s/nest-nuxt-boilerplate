import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {

  @InjectModel('User')
  private readonly model: Model<UserDocument>

  public findOne (id: string): Promise<User> {
    return this.model.findById(id).exec();
  }

  public create (dto: UserCreateDto): Promise<User> {
    const createdUser = new this.model(dto);
    return createdUser.save();
  }
}
