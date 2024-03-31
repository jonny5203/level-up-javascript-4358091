// Stock status enum
const availability = {
  OUT: "out of stock",
  LOW: "low stock",
  IN: "in stock",
};

//Class for creating a booj object
class Book {
  //Private field
  #title;
  #author;
  #ISBN;
  #numCopies;

  //Constructor overload wasn't possible
  constructor(title, author, ISBN, numCopies) {
    this.#title = title;
    this.#author = author;
    this.#ISBN = ISBN;
    this.#numCopies = numCopies;
  }

  getAvailability() {
    if (this.#numCopies <= 0) {
      return availability.OUT;
    }
    if (this.#numCopies < 10) {
      return availability.LOW;
    }

    return availability.IN;
  }

  sellBook(amount = 1) {
    this.setAvailability(-amount);
  }

  restock(amount = 5) {
    this.setAvailability(amount);
  }

  setAvailability(amount) {
    this.#numCopies += amount;
  }
}

const book1 = new Book("Programming", "Jonny Mai", 12344963, 8);
const book2 = new Book("Programming 2", "Someone", 74234343, 3);

book1.sellBook(2);
book2.restock(2);
console.log(book1.getAvailability());
console.log(book2.getAvailability());

book1.restock(10);
book2.sellBook(5);
console.log(book1.getAvailability());
console.log(book2.getAvailability());
