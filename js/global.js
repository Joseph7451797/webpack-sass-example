module.exports = function(param) {
	
	this.url 	  		= function() {
		return location.href;
	};
	this.testIfMobile 	= function() {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}else {
			return false;
		}
	};
	this.windowWidth          = function() {
		return window.innerWidth;
	};

}
