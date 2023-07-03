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
let myLibrary = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 250,
        read: "Yes",
        info : function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        }
    },
    {
        title: "Twelve Red Herrings",
        author: "Jeffrey Archer",
        pages: 649,
        read: "Yes",
        info : function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        }
    },
    {
        title: "The Day of the Jackal",
        author: "Fredrick Fordsyth",
        pages: 435,
        read: "Yes",
        info : function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        }
    },
    {
        title: "The Day of the Jackal",
        author: "Fredrick Fordsyth",
        pages: 435,
        read: "Yes",
        info : function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        }
    }
];

function addBookToLibrary(){
    //take value from various inputbox and then use push function with those value to insert data in library
    myLibrary.push(new Library("The Hobbit", "J.R.R. Tolkein", 295, "No"));
}

//const theHobbit = new Library("The Hobbit", "J.R.R. Tolkein", 295, "Not read yet");
//console.log(theHobbit.info());

addBookToLibrary(); // call this function to add data to library
//console.log(myLibrary[0].info()); // use this structure to view data

function loadBooks(){
    const inpEl = document.getElementById("main-content");
    let divItems = "";
    for (let i=0; i < myLibrary.length; i++){
        divItems += 
        `<div class='card' id='card'+i>
            <div>
                <button class='btnDel'>X</button>
            </div>
            <div>
                <label class='title'>${myLibrary[i].title}</label>
                <p>by <p>
                <label class='author'>${myLibrary[i].author}</label>
                <hr>
                <label class='pages'>No. of pages: ${myLibrary[i].pages}</label>
                <hr>
                <label class='read'>Have you read it? 
                    <label class="switch">                
                    ${readCheck(i)}
                    <span class="slider round"></span>
                </label>            
                ${myLibrary[i].read}
                </label>
            </div>
        </div>`;
    }
    inpEl.innerHTML = divItems;
}

function readCheck(indx){
    const cardEl = document.getElementById('card'+indx);
    if (myLibrary[indx].read === "Yes"){        
        return "<input type='checkbox' checked></input>";
    }else{
        return "<input type='checkbox' unchecked></input>";
    }
}

loadBooks()