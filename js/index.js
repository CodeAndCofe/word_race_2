const	text_home = document.querySelector(".texts");
const	seconds = document.querySelector(".counter");
const 	load = document.getElementById("l");
const	body = document.querySelector("body");

let		count_seconds = parseInt(seconds.textContent);
let		text_generated;
let		interval = null;
let		index = 1;





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
body.addEventListener("keydown", (e)=>
{
	let k = e.key;
	start_counting(count_seconds);
	game_start(k);
});

