import { Like_Interface } from '../interfaces/Like.interface';

export class Like implements Like_Interface {
  id: number;
  id_user: number;
  id_timeline: number;

  constructor(id: number, id_user: number, id_timeline: number) {
    this.id = id;
    this.id_user = id_user;
    this.id_timeline = id_timeline;
  }
}
