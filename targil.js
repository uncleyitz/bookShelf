function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function reset(){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function addBook(){
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);
	addToList(book);
	reset();
}

function clearList() {
    var theList = document.getElementById("bookList");
    theList.innerHTML = '';
}

function removeItem(e) {
	e.target.parentElement.remove();
}

function addToList(book) {
		var newElement = document.createElement("li");
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		var x = document.createElement("span");
		x.innerHTML = "X";
		//x.onclick = removeItem;
		x.setAttribute("onclick", "removeItem(event)");
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		newElement.appendChild(x);
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement);
}


function validate() {
        var err = '';
        var bookName = document.getElementById('bookName').value;
        var authorName = document.getElementById('authorName').value;
        var score = document.getElementById('score').value;
        if (bookName=='' | authorName=='' | score=='') {
            err = "You must fill in all fields";
        }
        if (isNaN(score)) {
            err += "\n score must be a number";
        }
        if (score > 10 | score < 1 ){
            err += "\n Score must be between 1 and 10";
        }
        if (err=='') {
            return true;
        } else {
                alert(err);
                return false;
        }
}

