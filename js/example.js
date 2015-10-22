var G = require('./global.js');

var $div1 = $("#div1"),
	$div2 = $("#div2"),
	$div3 = $("#div3");

$div1.find('span').text(G.url());
$div2.find('span').text(G.testIfMobile());
$div3.find('span').text(G.windowWidth());


$(function(){ 
	G.limit();
}); 
