module.exports = function() {

	this.url 	  		= function() {
		
		var	location = window.location,
			protocol = location.protocol,
			host = location.host,
			apiPath = protocol + "//" + host + "/" + "api.php",
			finalPath = (host === "localhost:8080") ? "http://movie.ck101.test/api.php" : apiPath;

		return finalPath;
	};
	this.testIfMobile 	= function(data) {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}else {
			return false;
		}
	};
	this.windowWidth          = function() {
		return window.innerWidth;
	};
	this.testIfIE = function() {

		var isIE7 = navigator.userAgent.search("MSIE 7") > -1; 
		var isIE8 = navigator.userAgent.search("MSIE 8") > -1;
		var isIE9 = navigator.userAgent.search("MSIE 9") > -1;
		var isIE10 = navigator.userAgent.search("MSIE 10") > -1;


		if(isIE7 || isIE8 || isIE9 || isIE10) {
			alert("小提醒：建議大家使用 IE11 以上版本，或是支援度更佳的 Chrome 瀏覽器");
		}

	};
	this.constants = {
		"a": "1",
		"b": "2"
	};
	this.constant = "1";
	this.arra = ["oh","yeah"];
}
