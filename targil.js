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

function editItem(e) {
	div1 = e.target.parentElement.children[0];
	if (div1.) //check for child
    newEdit = document.createElement("input");
	newEdit.setAttribute("id", "newEdit");
	newEdit.setAttribute("type", "text");
	newEdit.setAttribute("value", div1.innerHTML);
	newEdit.setAttribute("", div1.innerHTML);
    div1.innerHTML = '';
	div1.appendChild(newEdit);
    document.getElementById("newEdit").focus();
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
		var editItem = document.createElement("span");
		editItem.innerHTML = "Edit";
		editItem.setAttribute("onclick", "editItem(event)");
		var x = document.createElement("span");
		x.innerHTML = "X";
		x.setAttribute("onclick", "removeItem(event)");
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		newElement.appendChild(editItem);
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

