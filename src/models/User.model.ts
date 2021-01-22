import { User_Interface } from '../interfaces/User.interface';

export class User implements User_Interface {
  id: number;
  firstname: string;
  lastname: string;

  constructor(id: number, firstname: string, lastname: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
