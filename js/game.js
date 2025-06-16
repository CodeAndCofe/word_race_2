
function	is_alphabet(c)
{
	if (c >= 'a' && c <= 'z')
		return (1);
	else if (c >= 'A' && c <= 'Z')
		return (1);
	return (-1);
}

function	text_swaper(i)
{
	let	previous = document.getElementById(i - 1);
	let	current = document.getElementById(i);
	let c = previous.innerHTML;
	
	previous.innerHTML = current.innerHTML;
	current.innerHTML = c;
}

function text_swaper_r(i) {

    let previous = document.getElementById(i);
    let current = document.getElementById(i - 1);
    let c = previous.innerHTML;

    previous.innerHTML = current.innerHTML;
    current.innerHTML = c;
    current.style.color = "gold";
}

function	game_start(k)
{
	let text = text_generated;
	if (is_alphabet(text[index]) != 1 && text[index] != ' ' && k != "Backspace")
	{
		text_swaper(index);
		document.getElementById(index).style.color = "gold";
		index++;
	}
	if (k == text[index])
	{
		keys++;
		text_swaper(index);
		document.getElementById(index).style.color = "gold";
		index++;
	}
	else if (k == "Backspace")
	{
		if (index > 1)
		{
			if (keys > 0)
				keys--;
			index --;
			text_swaper_r(index);
			document.getElementById(index).style.color = "grey";
		}
	}
	else
	{
		text_swaper(index);
		document.getElementById(index - 1).style.color = "red";
		index++;
	}
}