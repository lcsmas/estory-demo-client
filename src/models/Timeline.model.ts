import { Like_Interface } from '../interfaces/Like.interface';
import { Timeline_Interface } from '../interfaces/Timeline.interface';
import { User_Interface } from '../interfaces/User.interface';

export class Timeline implements Timeline_Interface {
  id: bigint;
  title: string;
  category: string;
  img_background: string;
  step: number;
  status: string;
  nbLike: number;
  UserModels: [User_Interface];

  constructor(
    id: bigint,
    title: string,
    category: string,
    img_background: string,
    step: number,
    status: string,
    nbLike: number,
    UserModels: [User_Interface],
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.img_background = img_background;
    this.step = step;
    this.status = status;
    this.nbLike = nbLike;
    this.UserModels = UserModels;
  }
}
