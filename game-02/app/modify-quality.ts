import { Item } from './item';

const increaseQuality = quality => (quality < QUALITY_50) ? quality + 1 : quality;
const decreaseQuality = quality => (quality > QUALITY_0) ? quality - 1 :  quality;

const QUALITY_50 = 50
const QUALITY_0 = 0

export const modifyQualityByAged = (item) :Item =>  {
    item.quality = increaseQuality(item.quality);
    item.sellIn -= 1;
    if(item.sellIn < 0){
        item.quality = increaseQuality(item.quality);
    }
    return item;
}

export const modifyQualityByBackstage = (item) :Item => {
    item.quality = increaseQualityByBackstage(item);    
    item.sellIn -= 1
    if (item.sellIn < 0 ) {
        item.quality = 0;
    }
    return item;
}

const increaseQualityByBackstage = (item: Item): number => {
    let quality = increaseQuality(item.quality);
    if(item.sellIn < 11) {
        quality = increaseQuality(quality);
    }
    if(item.sellIn < 6) {
        quality = increaseQuality(quality);
    }
    return quality;
}

export const modifyQualityBySulfuras = (item) :Item => {
    return item;
}

export const modifyQualityByConjured = (item) :Item => {
    item = modifyQualityItem(item);
    item = modifyQualityItem(item);
    item.sellIn -= 1;

    return item;
}

const modifyQualityItem = (item): Item => {
    item.quality = decreaseQuality(item.quality);
    if(item.sellIn <= 0){
        item.quality = decreaseQuality(item.quality);
    }
    return item;
}

export const modifyQuality = (item) :Item => { 
    item = modifyQualityItem(item);
    item.sellIn -= 1;
    return item;
}