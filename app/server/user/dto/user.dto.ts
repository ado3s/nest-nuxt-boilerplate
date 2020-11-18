import { Role } from '@/server/shared';
import { User } from '../user.schema';

export class UserDto {
  username: string;
  lastName: string;
  firstName: string;
  role: Role;

  constructor (user: User) {
    this.username = user.username;
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.role = user.role;
  }
}
