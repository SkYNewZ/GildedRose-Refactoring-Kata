export class Item {
    name: string
    sellIn: number
    quality: number

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name
        this.sellIn = sellIn
        this.quality = quality
    }
}

export class GildedRose {
    items: Array<Item>
    public static SULFURAS: string = "Sulfuras, Hand of Ragnaros"
    public static AGED_BRIE: string = "Aged Brie"
    public static CONJURED: string = "Conjured Mana Cake"
    public static BACKSTAGE_PASSES: string = "Backstage passes to a TAFKAL80ETC concert"
    public static SPECIAL_ITEMS: Array<String> = [GildedRose.SULFURAS, GildedRose.AGED_BRIE, GildedRose.CONJURED, GildedRose.BACKSTAGE_PASSES]

    constructor(items = [] as Array<Item>) {
        this.items = items
    }

    isSpecialItem(item: Item): boolean {
        return GildedRose.SPECIAL_ITEMS.indexOf(item.name) != -1
    }

    updateQuality() {
        this.items.forEach((item: Item) => {

            // SULFURAS never change, by pass it
            if (item.name == GildedRose.SULFURAS) {
                return
            }

            if (item.name == GildedRose.BACKSTAGE_PASSES) {
                if (item.sellIn < 11 && item.quality < 50) {
                    item.quality++
                }
                if (item.sellIn < 6 && item.quality < 50) {
                    item.quality++
                }
            }

            // Special case for BACKSTAGE_PASSES and AGED_BRIE
            if ((item.name == GildedRose.AGED_BRIE || item.name == GildedRose.BACKSTAGE_PASSES) && item.quality < 50) {
                item.quality++
            }

            if ((!this.isSpecialItem(item)) && item.quality > 0) item.quality--
            if (item.name == GildedRose.CONJURED && item.quality > 0) item.quality -= 2 // Special case for CONJURED

            // To finish, each element except SULFURAS loose one sellIn per day
            if (item.sellIn > 0) {
                item.sellIn--
            }

            // it expired, decrease quality again
            if (item.sellIn <= 0 && item.quality > 0) {
                if ((!this.isSpecialItem(item))) item.quality--
                if (item.name == GildedRose.CONJURED) item.quality -= 2 // Special case for CONJURED
            }

            // Special quality case for BACKSTAGE_PASSES
            if (item.name == GildedRose.BACKSTAGE_PASSES && item.sellIn == 0) item.quality = 0
        })

        return this.items
    }
}
