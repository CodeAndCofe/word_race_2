const	text_home = document.querySelector(".texts");
const	seconds = document.querySelector(".counter");
const 	load = document.getElementById("l");
const	body = document.querySelector("body");
const	screen = document.querySelector(".screen");
const	button = document.querySelector(".button");
const	last = document.querySelector(".last_card");
const	kps = document.querySelector(".k");
let		keys = 0;
let		count_seconds = 35;
let		text_generated;
let		interval = null;
let		index = 1;
let		gameOver = false;

function	start(e)
{
	if (gameOver)
		return ;
	let k = e.key;
	start_counting();
	game_start(k);
}
function resize_check()
{
	console.log(window.innerWidth);
	if (window.innerWidth > 670)
		screen.classList.add("hide");
	else
		screen.classList.remove("hide");
}
window.addEventListener("resize", resize_check);

document.addEventListener("DOMContentLoaded", () => {
    reload_wait();
});

load.addEventListener("click", () => {
    window.location.reload();
});

text_generated = generateText();
console.log(text_generated);
text_show(text_generated);
text_generated = text_generated.toLowerCase()
	
body.addEventListener("keydown", start)


