//ini adalah class bernama book
class Book{
    //properties
    title: string;
    pages: number;
    author: string;
    types: string;
    stock: number;

    constructor(title: string, pages: number, author: string, type: string, stock: number) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.types = type;
        this.stock = stock;
    }
    //ini adalah method dar class Book
    borrow() : void {
            if (this.stock === 0) {
                throw new Error("Book is out of stcok");
            }
            this.stock--;
            console.log(
                `You have borrowed "${this.title}", Remaining stock: ${this.stock}`,
            );
        }
    return() { this.stock++
        console.log

    }
    }

    
//new Book{} adalah object, untuk membuat object baru dari class book
const novelBook = new Book("Laskar Pelangi", 529, "Andrea Hirata", "Novel", 6);
const comicBook = new Book("Naruto", 1000, "Uchiha Tegar", "Comic", 7)

novelBook.return();
comicBook.return();
