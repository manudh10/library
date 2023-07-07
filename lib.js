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

var cardContainer = document.getElementById('main-content');

myLibrary.forEach(function(card, index) {
  var cardElement = document.createElement('div');
  cardElement.classList.add('card');

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('btnDel');
  deleteButton.addEventListener('click', function() {
    // Remove the corresponding myLibrary object from the array
    myLibrary.splice(index, 1);
    // Remove the card element from the DOM
    cardContainer.removeChild(cardElement);
  });

  var titleElement = document.createElement('h1');
  titleElement.classList.add('title');
  titleElement.textContent = card.title;

  var authorElement = document.createElement('h4');
  authorElement.classList.add('author');
  authorElement.textContent = card.author;

  var pagesElement = document.createElement('p');
  pagesElement.textContent = "Total Pages: "+ card.pages;
  pagesElement.style.marginBottom = "3px";
  pagesElement.style.marginTop = "3px";

  var readElement = document.createElement('p');
  readElement.textContent = "Have your read it: ";
  readElement.style.marginBottom = "3px";
  readElement.style.marginTop = "3px";

  var sliderElement = document.createElement('input');
  sliderElement.classList.add('slider');
  sliderElement.type = 'range';
  sliderElement.min = '0';
  sliderElement.max = '1';
  sliderElement.step = '1';
  
  
  var labelElement = document.createElement('label');
  labelElement.textContent = card.read;
  if(card.read === 'Yes'){
    sliderElement.value = '1';
    labelElement.classList.add('yes-label');
  } else {
    sliderElement.value = '0';
    labelElement.classList.add('no-label');
  }
  

  sliderElement.addEventListener('input', function() {
    if (sliderElement.value === '0') {
      card.read = 'No';
      labelElement.textContent = card.read;
      labelElement.classList.remove('yes-label');
      labelElement.classList.add('no-label');
      updateStats();
    } else {
      card.read = 'Yes';
      labelElement.textContent = card.read;
      labelElement.classList.remove('no-label');
      labelElement.classList.add('yes-label');
      updateStats();
    }
  });

  cardElement.appendChild(deleteButton);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(authorElement);
  cardElement.appendChild(document.createElement('hr'));
  cardElement.appendChild(pagesElement);
  cardElement.appendChild(document.createElement('hr'));
  cardElement.appendChild(readElement);

  cardElement.appendChild(sliderElement);
  cardElement.appendChild(labelElement);  

  cardContainer.appendChild(cardElement);
});

function readBook(){
    let readCount =0;
    for (let i=0; i<myLibrary.length;i++){
        if(myLibrary[i].read === "Yes")
            readCount++;
    }
    return readCount;
}
function unreadBook(){
    let unreadCount =0;
    for (let i=0; i<myLibrary.length;i++){
        if(myLibrary[i].read === "No")
            unreadCount++;
    }
    return unreadCount;
}

updateStats();
function updateStats(){
    const totalBook = document.getElementById('numberBook');
    totalBook.innerHTML = myLibrary.length;
    const totalRead = document.getElementById('numberRead');
    totalRead.innerHTML = readBook();
    const totalUnread = document.getElementById('numberUnread');
    totalUnread.innerHTML = unreadBook();
}




/******************** 
function addBookToLibrary(){
    //take value from various inputbox and then use push function with those value to insert data in library
    myLibrary.push(new Library("The Hobbit", "J.R.R. Tolkein", 295, "No"));
}

*/
var openModalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];
var form = document.getElementById('myForm');
var titleInput = document.getElementById('titleInput');
var descriptionInput = document.getElementById('descriptionInput');
var cardContainer = document.getElementById('cardContainer');

// Open the modal when the button is clicked
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Add a new record when the form is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the input values
  var title = titleInput.value;
  var description = descriptionInput.value;
  
  // Create a new record object
  var newRecord = { title: title, description: description };
  
  // Add the new record to the array
  cardData.push(newRecord);
  
  // Create a new card element and append it to the container
  var cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;
  cardContainer.appendChild(cardElement);
  
  // Reset the form and close the modal
  form.reset();
  modal.style.display = 'none';
});