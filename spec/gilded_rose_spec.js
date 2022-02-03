var {Shop, Item} = require('../src/gilded_rose.js');

//const SULFURAS = 'Sulfuras, Hand of Ragnaros'
//const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert'

describe("Gilded Rose", function () {

  //TEST 1 
  it("adds item foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
