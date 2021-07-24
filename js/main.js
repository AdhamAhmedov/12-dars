

var elList = document.querySelector('.list');

var newLi = document.createElement("li");






for (var film of films) {
	var newLi = document.createElement("li");

	var newParagraph = document.createElement("p");
	newParagraph.textContent = film.id;

	var newTitle = document.createElement("h3");
	newTitle.textContent = film.title;

	var newImg = document.createElement("img");
	newImg.setAttribute("width", "400",);
	newImg.setAttribute("height", "300",);
	newImg.setAttribute("src", film.poster);

	var newDiscription = document.createElement("i");
	newDiscription.textContent = film.overview;

	var newSpan = document.createElement("span");

	var data = new Date(film.release_date);
	var day = data.getDate();
	var month = data.getMonth() + 1;
	var year = data.getFullYear();
	var aaaa = day + "." + month + "." + year + ".";
	newSpan.textContent = aaaa;


	var newInfo = document.createElement("h5");
	newInfo.textContent = film.genres;



	newLi.appendChild(newParagraph);
	newLi.appendChild(newTitle);
	newLi.appendChild(newImg);
	newLi.appendChild(newDiscription);
	newLi.appendChild(newSpan);
	newLi.appendChild(newInfo);

	elList.appendChild(newLi);
	newLi.classList.add("list-item");

};


