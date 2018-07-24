var tiles = [
	{
		'name' : '140 Social Network',
		'shortname' : 'cc',
		'tilebg' : '#E91E63',
		'tech' : ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Illustrator']
	},
	{
		'name' : 'Tweetdrafter App',
		'shortname' : 'tweetdrafter-app',
		'tilebg' : '#1E88E5',
		'tech' : ['jQuery', 'Cordova', 'HTML', 'CSS', 'Illustrator', 'jQuery Mobile', 'Sketch', 'Git']
	},
	{
		'name' : 'Tweetdrafter Landing Page',
		'shortname' : 'tweetdrafter-landing',
		'tilebg' : '#EEEEEE',
		'tech' : ['HTML', 'CSS', 'Responsive Design', 'Illustrator', 'JavaScript', 'Premiere']
	},
	{
		'name' : 'Turistic Brochure Design',
		'shortname' : 'si-brochure',
		'tilebg' : '#4CAF50',
		'tech' : ['InDesign', 'Illustrator', 'Photoshop']
	},
	{
		'name' : 'DV Store E-Commerce Mockup',
		'shortname' : 'dvstore',
		'tilebg' : '#F44336',
		'tech' : ['HTML', 'CSS', 'JavaScript', 'Illustrator']
	},
	{
		'name' : 'Music Festival Poster Design',
		'shortname' : 'lineup',
		'tilebg' : '#607D8B',
		'tech' : ['Illustrator']
	},
	{
		'name' : 'Dota XHTML-Strict Web',
		'shortname' : 'dota',
		'tilebg' : '#795548',
		'tech' : ['XHTML', 'CSS', 'PHP']
	},
	{
		'name' : 'San Isidro Web Design',
		'shortname' : 'sanisidro',
		'tilebg' : '#3F51B5',
		'tech' : ['Photoshop', 'Illustrator']
	},
	{
		'name' : '2B Vectorized Illustration',
		'shortname' : '2b',
		'tilebg' : '#E0E0E0',
		'tech' : ['Illustrator']
	},
	{
		'name' : 'Les Luthiers Template-based Web',
		'shortname' : 'luthiers',
		'tilebg' : '#FF9800',
		'tech' : ['HTML', 'CSS', 'PHP', 'JavaScript']
	},
	{
		'name' : 'Bojack Horseman Vectorized Illustration',
		'shortname' : 'bojack',
		'tilebg' : '#607D8B',
		'tech' : ['Illustrator']
	},
	{
		'name' : 'Faccinetti Telegram Bot',
		'shortname' : 'sergiobot',
		'tilebg' : '#009688',
		'tech' : ['NodeJS', 'Telegram API', 'Heroku', 'Git']
	},
	{
		'name' : 'Flexbox Helper',
		'shortname' : 'flexboxhelper',
		'tilebg' : '#B71C1C',
		'tech' : ['HTML', 'CSS', 'JavaScript']
	},
	{
		'name' : 'Tweetdrafter app 2',
		'shortname' : 'tweetdrafter-app',
		'tilebg' : '#1E88E5',
		'tech' : ['jQuery', 'Cordova', 'HTML', 'CSS', 'Illustrator', 'AngularJS', 'JavaScript', 'Sketch', 'Git']
	}
]

// Dibujos vectoriales (Incluido el muñequito de maruco?)
// 	? Brezcafé
// 	? Iconos zoo

for(let i in tiles)
{
	let project = document.querySelectorAll("main > ul")[0].appendChild(document.createElement("li"));
	project.className = "project";
	project.style.backgroundColor = tiles[i].tilebg;
	let projectimg = project.appendChild(document.createElement("div"));
	projectimg.className = "project-img";
	projectimg.appendChild(document.createElement("img")).src = "./res/" + tiles[i].shortname + "/" + tiles[i].shortname + ".png";
	let projectinfo = project.appendChild(document.createElement("div"));
	projectinfo.className = "project-info";
	projectinfo.appendChild(document.createElement("h2")).innerHTML = tiles[i].name;
	let ul = projectinfo.appendChild(document.createElement("ul"));
	for(let j in tiles[i].tech)
	{
		ul.appendChild(document.createElement("li")).innerHTML = tiles[i].tech[j];
	}
}