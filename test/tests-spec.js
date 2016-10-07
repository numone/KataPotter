var kata = require('../index'),
    expect = require('chai').expect;

describe('basic tests', function() {
    it('zero books costs zero dollars', function() {
        expect(kata.getPrice([])).to.eql(0);
    });

    it('one first book costs 8 dollars', function() {
        expect(kata.getPrice([0])).to.eql(8);
    });

    it('one second book costs 8 dollars', function() {
        expect(kata.getPrice([1])).to.eql(8);
    });

    it('one third book costs 8 dollars', function() {
        expect(kata.getPrice([2])).to.eql(8);
    });

    it('one fourth book costs 8 dollars', function() {
        expect(kata.getPrice([3])).to.eql(8);
    });

    it('one fifth book costs 8 dollars', function() {
        expect(kata.getPrice([4])).to.eql(8);
    });

    it('two of the first book costs (8*2) 16 dollars', function() {
        expect(kata.getPrice([0, 0])).to.eql(16);
    });

    it('three of the first book costs (8*3) 24 dollars', function() {
        expect(kata.getPrice([0, 0, 0])).to.eql(24);
    });
});

describe('simple discounts', function() {
    it('two different books gives a 5% discount (8*2*0.95) 15.2 dollars', function() {
        expect(kata.getPrice([0, 1])).to.eql(15.2);
    });

    it('three different books gives a 10% discount (8*3*0.9) 21.6 dollars', function() {
        expect(kata.getPrice([0, 1, 2])).to.eql(21.6);
    });

    it('four different books gives a 20% discount (8*4*0.8) 25.6 dollars', function() {
        expect(kata.getPrice([0, 1, 2, 3])).to.eql(25.6);
    });

    it('five different books gives a 25% discount (8*5*0.75) 30 dollars', function() {
        expect(kata.getPrice([0, 1, 2, 3, 4])).to.eql(30);
    });
});

describe('several discounts', function() {
    it('two of book 1 and 1 of book 2', function() {
        expect(kata.getPrice([0, 0, 1])).to.eql(8 + (8 * 2 * 0.95));
    });

    it('two of book 1 and 2 of book 2', function() {
        expect(kata.getPrice([0, 0, 1, 1])).to.eql(2 * (8 * 2 * 0.95));
    });

    it('two of book 1, one of book 2, two of book 3, and one of book 4', function() {
        expect(kata.getPrice([0, 0, 1, 2, 2, 3])).to.eql((8 * 4 * 0.8) + (8 * 2 * 0.95));
    });

    it('one of book 1, two of book 2, one of book 3, one of book 4, and one of book 5', function() {
        expect(kata.getPrice([0, 1, 1, 2, 3, 4])).to.eql(8 + (8 * 5 * 0.75));
    });
});

describe('edge cases', function() {
    it('two of book 1, two of book 2, two of book 3, one of book 4, one of book 5', function() {
        expect(kata.getPrice([0, 0, 1, 1, 2, 2, 3, 4])).to.eql(2 * (8 * 4 * 0.8));
    });

    it('lots of books', function() {
        expect(kata.getPrice([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4])).to.eql(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    });
});
