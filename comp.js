let html = `<html>
<head>
<link>
<meta/>
</link>
</head>
<body>
<header>
<h1></h1>
</header>
<nav>
<input />
</nav>
</body>
</html>
`
let root = html.split('>').join('>,').split(',');;

let roottemp = [];
root.map((m)=>{
let a = '';
	a = m.replace('\n', '');
	roottemp.push(a);
})
console.log(roottemp);

components = {};
compoments.citems = ['nav', 'aside', 'section'];

