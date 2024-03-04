import { Item } from 'items/Item';
import { GildedRose } from '../src/gilded-rose';
import { AgedBrie } from 'items/AgedBrie';
import { Sulfuras } from 'items/Sulfuras';
import { Backstage } from 'items/Backstage';
import { Conjured } from 'items/Conjured';

console.log("OMGHAI!")

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new AgedBrie("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new Conjured("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
