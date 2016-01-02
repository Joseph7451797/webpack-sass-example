var G = require('./global.js');

var $div1 = $("#div1"),
	$div2 = $("#div2"),
	$div3 = $("#div3");

$div1.find('span').text(G._url());
$div2.find('span').text(G._testIfMobile());
$div3.find('span').text(G.windowWidth);


G._log($div1);
G._limit();