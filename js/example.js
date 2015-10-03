var global = require('./global.js');
var G = new global();
var obj;

var $div1 = $("#div1"),
	$div2 = $("#div2"),
	$div3 = $("#div3");

$div1.find('span').text(G.url());
$div2.find('span').text(G.testIfMobile());
$div3.find('span').text(G.windowWidth());


function _changeFavicon() {

	var link = document.createElement('link');

	    link.type = 'image/x-icon';
	    link.rel = 'shortcut icon';
	    link.href = 'http://www.google.com/s2/favicons?domain=http://www.arsentikharitonov.com/~media/elements/PostAFile/blank.gif';

	    document.getElementsByTagName('head')[0].appendChild(link);
}

window.addEventListener('popstate', function(e){
	var state = e.state;
	console.log(state);
});


$('button').on('click', function() {

	// obj = {
	// 	state: "goback!",
	// 	title: "new title"
	// };

	history.pushState({"content": "data"}, 'title', '/content.html');

	// document.title = obj.title;

	// document.title = "changed title!"
	//_changeFavicon();
});

