window.addEventListener('load',function(){console.log('2delta');
	window.addEventListener('scroll',scrollHeader ,false)
	function scrollHeader(){	 
		var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(ScrollTop>500){return}
		var heightImg =450;
		var koof = -100/heightImg;
		var header = document.getElementById('header');
		header.style.backgroundPosition = "100%"+ScrollTop*koof+"%";
	}
	
	window.addEventListener('scroll',scrollFooter ,false)
	function scrollFooter(){	 
		var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var heightHtml = getHeightHTML();
		var sizeImg = 450;	 
		var point = (ScrollTop+ window.innerHeight) - sizeImg;
		var positionWindow = sizeImg - heightHtml;
		var summit = positionWindow+point;
		if(summit>0){return}	
		footer.style.backgroundPosition = "50%"+summit+"px";
	}
	 
	window.addEventListener('scroll',scrollOnePage ,false)
	function scrollOnePage(){
		var onePage = document.getElementById('onePage');
		var ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var heightHtml = getHeightHTML() - window.innerHeight;
		var koof = 100/heightHtml;
		//console.log((100-ScrollTop*koof));
		onePage.style.backgroundPosition = "60%"+(100-ScrollTop*koof)+"%";
	}
	
	function getHeightHTML(){ 
			heightx = window.getComputedStyle(document.getElementsByTagName("html")[0]).height;	 
			var x = heightx.split("");
			 x.splice(-2);
			 return x.join("");
	}
		
 

},false);