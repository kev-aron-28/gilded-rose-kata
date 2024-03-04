import { Item } from "./Item";

export class Conjured extends Item {
  public update(): void {
    this.updateSellIn();
    this.updateQuality();
    this.updateQuality();
  }
}
