
import { Item } from "./item";
import { modifyQualityByAged, modifyQualityByBackstage, modifyQualityBySulfuras, modifyQualityByConjured, modifyQuality } from "./modify-quality";

export class GildedRose {
    items: Array<Item>;
    
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    tick() {
        this.items.forEach(item => {
            switch (item.name) {
                case 'Aged Brie': {
                    item = modifyQualityByAged(item);
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    item = modifyQualityByBackstage(item);
                    break;
                }
                case  'Sulfuras, Hand of Ragnaros':  {
                    item = modifyQualityBySulfuras(item);
                    break;
                }
                case 'Conjured':  {
                    item = modifyQualityByConjured(item);
                    break;
                }
                default: {
                    item = modifyQuality(item);
                    break;
                }
            }
        });
        return this.items;
    }
}
