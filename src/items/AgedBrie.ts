import { Item } from "./Item";

export class AgedBrie extends Item {
  public update() {
    this.updateSellIn();
    this.increaseQuality();
  }
}
