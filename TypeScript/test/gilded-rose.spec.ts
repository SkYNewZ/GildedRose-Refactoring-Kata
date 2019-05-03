import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

const SULFURAS = "Sulfuras, Hand of Ragnaros"
const AGED_BRIE = "Aged Brie"
const CONJURED = "Conjured Mana Cake"
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert"

describe('Standard item', () => {
    it('should loose 1 quality and 1 sellIn', () => {
        const gildedRose = new GildedRose([new Item('foo', 3, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(3);
    });

    it('should loose 2 quality because sellIn = 0', () => {
        const gildedRose = new GildedRose([new Item('foo', 0, 4)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(2);
    })

    it('should not change', () => {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
    })

});

describe(SULFURAS, () => {
    it('should not change', () => {
        const gildedRose = new GildedRose([new Item(SULFURAS, 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(SULFURAS);
        expect(items[0].sellIn).to.equal(5);
        expect(items[0].quality).to.equal(20);
    })
})

describe(AGED_BRIE, () => {
    it('should decrease sellIn and increase quality', () => {
        const gildedRose = new GildedRose([new Item(AGED_BRIE, 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(AGED_BRIE);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(21);
    })

    it('quality should not be higher than 50', () => {
        const gildedRose = new GildedRose([new Item(AGED_BRIE, 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(AGED_BRIE);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    })
})

describe(BACKSTAGE_PASSES, () => {

    it('should decrease sellIn and increase quality normally', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 20, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(19);
        expect(items[0].quality).to.equal(21);
    })

    it('should decrease sellIn and increase quality by 2', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(22);
    })

    it('should decrease sellIn and increase quality by 3', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 6, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(5);
        expect(items[0].quality).to.equal(22);
    })

    it('should decrease sellIn and increase quality by 3', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(23);
    })

    it('quality should not be higher than 50', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 5, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    })

    it('quality should be equal to 0', () => {
        const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(BACKSTAGE_PASSES);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
    })
})

describe(CONJURED, () => {
    it('should loose 1 quality and 1 sellIn', () => {
        const gildedRose = new GildedRose([new Item(CONJURED, 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(CONJURED);
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(3);
    });

    it('should loose 4 quality because sellIn = 0', () => {
        const gildedRose = new GildedRose([new Item(CONJURED, 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(CONJURED);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(6);
    })

    it('should not change', () => {
        const gildedRose = new GildedRose([new Item(CONJURED, 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(CONJURED);
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
    })
})
