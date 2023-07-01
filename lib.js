class Library {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.info = function () {
            return `${title} by ${author}, ${pages} pages, ${read}`;
        };
    }
}
let myLibrary = [];

function addBookToLibrary(){
    //take value from various inputbox and then use push function with those value to insert data in library
    myLibrary.push(new Library("The Hobbit", "J.R.R. Tolkein", 295, "Not read yet"));
}

//const theHobbit = new Library("The Hobbit", "J.R.R. Tolkein", 295, "Not read yet");
//console.log(theHobbit.info());

addBookToLibrary(); // call this function to add data to library
console.log(myLibrary[0].info()); // use this structure to view data