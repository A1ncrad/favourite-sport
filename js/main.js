const menu = document.getElementById("menu-list");
const burger = document.getElementById("menu-button");
const header = document.getElementById("header");

let headerPosition = 0;


burger.addEventListener("click", toggleMenu);
document.addEventListener("scroll", toggleHeader);
document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");


function toggleMenu() {
	menu.classList.toggle("active");
	burger.classList.toggle("active");
}

function toggleHeader() {
	if ( header.offsetTop > headerPosition && header.offsetTop > 400 && !menu.classList.contains("active") ) {
		header.classList.add("hidden");
		headerPosition = header.offsetTop;
	} else if (headerPosition - header.offsetTop >= 100) {
		header.classList.remove("hidden");
		headerPosition = header.offsetTop;
	}
}