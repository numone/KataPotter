function getPrice(arrayOfBooks) {
    var numberOfBooksOrdered = {};

    for (var i = 0; i < arrayOfBooks.length; i++) {
        if (numberOfBooksOrdered[arrayOfBooks[i]]) {
            numberOfBooksOrdered[arrayOfBooks[i]]++;
        } else {
            numberOfBooksOrdered[arrayOfBooks[i]] = 1;
        }
    }

    var total = 0;
    while (Object.keys(numberOfBooksOrdered).length > 0) {
        var differentBooks = [];
        for (var book in numberOfBooksOrdered) {
            differentBooks.push(book);
            numberOfBooksOrdered[book]--;
            if (numberOfBooksOrdered[book] === 0) {
                delete numberOfBooksOrdered[book];
            }
        }

        if (differentBooks.length < 2) {
            total += 8 * differentBooks.length;
        } else if (differentBooks.length === 2) {
            total += 8 * 2 * 0.95;
        } else if (differentBooks.length === 3) {
            total += 8 * 3 * 0.9;
        } else if (differentBooks.length === 4) {
            total += 8 * 4 * 0.8;
        } else if (differentBooks.length === 5) {
            total += 8 * 5 * 0.75;
        }
    }

    return total;
}

module.exports = {
    getPrice: getPrice
};
