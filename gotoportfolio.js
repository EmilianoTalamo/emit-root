function gotoportfolio()
{
	document.body.appendChild(document.createElement("div")).id = "overlay";
	document.getElementById("overlay").style.opacity = 0;
	document.getElementById("overlay").style.transition = "opacity 500ms ease";
	setTimeout(function()
	{
		document.getElementById("overlay").style.opacity = 1;
	}, 1);
	setTimeout(function()
	{
		window.location.href = "http://emilianotalamo.github.io/portfolio/";
	}, 500);
}
