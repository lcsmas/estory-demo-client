import { User_Interface } from './User.interface';

export interface Timeline_Interface {
  nbLike: number;
  id: bigint;
  title: string;
  category: string;
  img_background: string;
  step: number;
  status: string;
  UserModels: [User_Interface];
}
