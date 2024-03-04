import { MAX_QUALITY } from '../constants'


export class Item {
  name: string;
  sellIn: number;
  quality: number;
  constructor(
    name: string,
    sellIn: number,
    quality: number
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public update(): void {
    this.updateSellIn();
    this.updateQuality();
  }

  public updateQuality(): void {
    if(this.quality == MAX_QUALITY) return;

    if(this.sellIn == 0) {
      this.quality = this.quality - 2;
    } else {
      this.quality--;
    }
  }

  public updateSellIn(): void {
    if(this.sellIn == 0) return;
    this.sellIn--
  }

  public increaseQuality(){
    if(this.quality == MAX_QUALITY) return;
    this.quality++;
  }
}
