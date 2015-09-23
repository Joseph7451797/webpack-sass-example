var G = require('./global');

$(document).ready(function() {

	var $div1 = $("#div1");

	console.log('test.js!!!');
	console.log(G.location);

	$div1.text(G.location);

});