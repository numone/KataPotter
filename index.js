function getPrice(arrayOfBooks) {
    var numberOfBooksOrdered = {};

    for (var i = 0; i < arrayOfBooks.length; i++) {
        if (numberOfBooksOrdered[arrayOfBooks[i]]) {
            numberOfBooksOrdered[arrayOfBooks[i]]++;
        } else {
            numberOfBooksOrdered[arrayOfBooks[i]] = 1;
        }
    }

    var lowestTotal;
    for (var maxDifferentBooksForDiscount = 5; maxDifferentBooksForDiscount > 0; maxDifferentBooksForDiscount--) {
        var total = 0;
        var booksForTotal = JSON.parse(JSON.stringify(numberOfBooksOrdered));
        while (Object.keys(booksForTotal).length > 0) {
            var differentBooks = [];
            for (var book in booksForTotal) {
                if (differentBooks.length < maxDifferentBooksForDiscount && booksForTotal.hasOwnProperty(book)) {
                    differentBooks.push(book);
                    booksForTotal[book]--;
                    if (booksForTotal[book] === 0) {
                        delete booksForTotal[book];
                    }
                }
            }

            if (differentBooks.length < 2) {
                console.log('one');
                total += 8 * differentBooks.length;
            } else if (differentBooks.length === 2) {
                console.log('two');
                total += 8 * 2 * 0.95;
            } else if (differentBooks.length === 3) {
                console.log('three');
                total += 8 * 3 * 0.9;
            } else if (differentBooks.length === 4) {
                console.log('four');
                total += 8 * 4 * 0.8;
            } else if (differentBooks.length === 5) {
                console.log('five');
                total += 8 * 5 * 0.75;
            }
        }
        console.log(total);
        //console.log(lowestTotal);
        if (!lowestTotal || total < lowestTotal) {
            lowestTotal = total;
        }
    }

    return lowestTotal;
}

module.exports = {
    getPrice: getPrice
};
