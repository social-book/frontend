export class PostImg { // get references of images from endpoint get images for album
  imgref: string;
  seq: number;

  constructor(imgref: string, seq: number) {
    this.imgref = imgref;
    this.seq = seq;
  }
}
