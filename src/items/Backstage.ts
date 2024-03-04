import { Item } from "./Item";

export class Backstage extends Item {
  public update(): void {
    this.updateSellIn()
    if(this.sellIn == 0) {
      this.quality = 0;
    }
    
    if(this.sellIn <= 10) {
      this.updateQuality();
      this.updateQuality();
    } else if(this.sellIn <= 5) {
      this.updateQuality();
      this.updateQuality();
      this.updateQuality();
    } else {
      this.updateQuality();
    }
  }
}
