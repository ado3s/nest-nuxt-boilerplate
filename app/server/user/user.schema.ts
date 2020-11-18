import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '@/server/shared';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  lastName: string;

  @Prop()
  firstName: string;

  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
