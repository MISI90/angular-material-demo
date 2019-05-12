export class HeroModel {
  id: number;
  name: string;
  age: number;
  bio: string;
  expanded?: boolean = false;
  heros: HeroModel[] = [];

}
