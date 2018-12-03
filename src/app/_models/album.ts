import {Category} from './category';
import {Image} from './image';

export class Album { // album
  id: number;
  title: string;
  userId: number;
  category: Category;
  images: Image[];
}
