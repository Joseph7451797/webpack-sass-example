var Global = {
	windowWidth: window.innerWidth,
	_url: function() {
		
		var	apiPath = location.origin + '/' + 'api.php',
			finalPath = location.host === 'localhost:8080' ? 'http://test-hostname/api.php' : apiPath;

		return finalPath;
	},
	_limit: function() {

		var self = $('p[data-limit]'); 
			  
	  	self.each(function() {
	    
	    	var $this = $(this);
	    	var objString = $this.text();
	    	var objOriBBtext = $this.val();
	    	var objLength = objString.length; 
	    	var num = Number($this.data("limit")); 
	    
	    	if( objLength > num) { 
	    		$this.attr("data-text",objOriBBtext); 
	      		objString = $this.text(objString.substring(0, num) + "..."); 
	     	}
	    
	  	});
	},
	_testIfMobile: function() {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return true;
		}else {
			return false;
		}
	},
	_testIfOldIE: function() {

		var isIE7 = navigator.userAgent.search("MSIE 7") > -1; 
		var isIE8 = navigator.userAgent.search("MSIE 8") > -1;
		var isIE9 = navigator.userAgent.search("MSIE 9") > -1;
		var isIE10 = navigator.userAgent.search("MSIE 10") > -1;


		if(isIE7 || isIE8 || isIE9 || isIE10) {
			alert("小提醒：建議大家使用 IE11 以上版本，或是支援度更佳的 Chrome 瀏覽器");
		}else {
			console.log('Modern Browser!!!');
		}
	},
	_log: function(arg) {

		if( arg !== undefined ) {
			console.log(arg);
		}else {
			console.warn('It seems that you forgot argument(s)!!!');
		}
	}
};

module.exports = Global;
