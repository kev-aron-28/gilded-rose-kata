import { Item } from "./items/Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const current = this.items[i]
      current.increaseQuality();
    }

    return this.items;
  }
}
