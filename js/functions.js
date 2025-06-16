function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function reload_wait() {
    const loader = document.querySelector('.reload');
    loader.classList.remove("hide");
    await sleep(4000);
    loader.classList.add("hide");
}

function	start_counting(count_seconds)
{
	if (!interval)
	{
		interval = setInterval(()=>
		{
			count_seconds--;
			if (count_seconds <= 0)
			{
				clearInterval(interval);
				interval = null;
				// count_seconds = 50;
			}
			seconds.innerHTML = count_seconds;
		}, 1000);
	}
}

function text_show(text)
{
	let	p;
	let	i;
	let	id;

	i = 0;
	while (i < text.length)
	{
		p = document.createElement("p");
		if (text[i] == " ")
		{
			p.textContent = " ";
			p.classList.add("z");
		}
		else 
			p.innerHTML = text[i];
		p.id = i;
		text_home.appendChild(p);
		i++;
	}
	document.getElementById(0).style.color = "gold";
}



function generateText() {
	let	arr_texts = 
	[
		"|Summer' is a season of warmth and freedom. The long days are filled with outdoor adventures, family gatherings, and the joy of sunny weather. People often take vacations to relax, whether on a beach or in the mountains. It's a time for ice cream, beach balls, and laughter under the sky. Summer evenings bring a cool breeze, making it perfect for barbecues and stargazing. It's a time to recharge, enjoy nature, and embrace the carefree spirit.",
		"|Life is a beautiful and unpredictable journey, full of twists and turns. Every day brings new opportunities to grow, learn, and experience the world around us. While it can sometimes be challenging, the ups and downs shape who we are. The moments of happiness are sweet, but it's through adversity that we often find our true strength. Embracing life means living in the present, finding joy in small things, and having the courage to face whatever comes.",
		"|Gaming is more than just a pastime it's an escape, a way to explore new worlds, and a form of art. Whether playing solo, online with friends, or competing in eSports, gaming connects people across the globe. The thrill of a new level, the satisfaction of mastering a game, or the bond formed through multiplayer experiences are all part of what makes gaming so special. It's a community where everyone, from casual players to professional gamers, can find their place.",
		"|Work is often seen as the cornerstone of our adult lives. It provides a sense of purpose, structure, and financial stability. But work isn't just about earning money  it's about contributing to something larger, whether it's a company, a cause, or personal growth. In today's world, many are balancing the pressures of remote work, collaboration, and deadlines. However, finding fulfillment in what you do, aligning your work with your values, and maintaining work life balance are crucial to long term satisfaction.",
		"|Sports bring people together like nothing else. Whether it’s the adrenaline of a live football match or the focus of a solo sport like tennis, sports teach us discipline, teamwork, and perseverance. The power of competition, the thrill of victory, and the learning that comes from failure shape athletes and fans alike. From the Olympics to local leagues, sports unite people across cultures and give them a common passion to share, making them an essential part of global culture.",
		"|Children are the future of society, bringing joy, curiosity, and creativity into the world. Their laughter is infectious, and their imaginations are limitless. The early years of childhood are crucial for development, learning how to communicate, socialize, and explore their environment. As they grow, they bring new perspectives and energy to everything they touch. It's essential to nurture their dreams, encourage their questions, and give them the tools to succeed in a fast-changing world.",
		"|Travel is one of the most enriching experiences in life. It opens up a world of diverse cultures, languages, and landscapes. Whether exploring bustling cities, remote villages, or serene beaches, travel offers a chance to step outside of your daily routine and discover something new. It teaches us empathy, broadens our worldview, and often leads to lifelong memories and friendships. The beauty of travel lies not just in the destinations, but in the people and experiences we encounter along the way."
	];
	let rand = 0;

	rand = Math.floor(Math.random() * arr_texts.length);
	return (arr_texts[rand]);
}
  

  