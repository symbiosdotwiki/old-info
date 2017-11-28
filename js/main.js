/*! skinny-bones-jekyll - v0.0.1 - 2015-03-02 */!function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var head=document.head||document.getElementsByTagName("head")[0],css=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+"</style>",head.appendChild(div.childNodes[1])}return options&&$.extend(settings,options),this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];settings.customSelector&&selectors.push(settings.customSelector);var ignoreList=".fitvidsignore";settings.ignore&&(ignoreList=ignoreList+", "+settings.ignore);var $allVideos=$(this).find(selectors.join(","));$allVideos=$allVideos.not("object object"),$allVideos=$allVideos.not(ignoreList),$allVideos.each(function(){var $this=$(this);if(!($this.parents(ignoreList).length>0||"embed"===this.tagName.toLowerCase()&&$this.parent("object").length||$this.parent(".fluid-width-video-wrapper").length)){$this.css("height")||$this.css("width")||!isNaN($this.attr("height"))&&!isNaN($this.attr("width"))||($this.attr("height",9),$this.attr("width",16));var height="object"===this.tagName.toLowerCase()||$this.attr("height")&&!isNaN(parseInt($this.attr("height"),10))?parseInt($this.attr("height"),10):$this.height(),width=isNaN(parseInt($this.attr("width"),10))?$this.width():parseInt($this.attr("width"),10),aspectRatio=height/width;if(!$this.attr("id")){var videoID="fitvid"+Math.floor(999999*Math.random());$this.attr("id",videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*aspectRatio+"%"),$this.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function($){var $w=$(window);$.fn.visible=function(partial,hidden,direction){if(!(this.length<1)){var $t=this.length>1?this.eq(0):this,t=$t.get(0),vpWidth=$w.width(),vpHeight=$w.height(),direction=direction?direction:"both",clientSize=hidden===!0?t.offsetWidth*t.offsetHeight:!0;if("function"==typeof t.getBoundingClientRect){var rec=t.getBoundingClientRect(),tViz=rec.top>=0&&rec.top<vpHeight,bViz=rec.bottom>0&&rec.bottom<=vpHeight,lViz=rec.left>=0&&rec.left<vpWidth,rViz=rec.right>0&&rec.right<=vpWidth,vVisible=partial?tViz||bViz:tViz&&bViz,hVisible=partial?lViz||lViz:lViz&&rViz;if("both"===direction)return clientSize&&vVisible&&hVisible;if("vertical"===direction)return clientSize&&vVisible;if("horizontal"===direction)return clientSize&&hVisible}else{var viewTop=$w.scrollTop(),viewBottom=viewTop+vpHeight,viewLeft=$w.scrollLeft(),viewRight=viewLeft+vpWidth,offset=$t.offset(),_top=offset.top,_bottom=_top+$t.height(),_left=offset.left,_right=_left+$t.width(),compareTop=partial===!0?_bottom:_top,compareBottom=partial===!0?_top:_bottom,compareLeft=partial===!0?_right:_left,compareRight=partial===!0?_left:_right;if("both"===direction)return!!clientSize&&viewBottom>=compareBottom&&compareTop>=viewTop&&viewRight>=compareRight&&compareLeft>=viewLeft;if("vertical"===direction)return!!clientSize&&viewBottom>=compareBottom&&compareTop>=viewTop;if("horizontal"===direction)return!!clientSize&&viewRight>=compareRight&&compareLeft>=viewLeft}}}}(jQuery),$(document).ready(function(){$("#js-menu-trigger,#js-menu-screen").on("click touchstart",function(e){$("#js-menu, #js-menu-screen").toggleClass("is-visible"),$("#js-menu-trigger").toggleClass("slide close"),e.preventDefault()})}),$(document).ready(function(){$("#main").fitVids()}),$("#markdown-toc").prepend("<li><h6>Overview</h6></li>");

var imgLoaded = [];
$( document ).ready(function() {
    $("img.lazy").Lazy();

    $(".teaser-square").click(function() {
    	(function (b, c, d, e) {
    		setTimeout(function(){
	    		d = setInterval(function(){
	    			if(c){
			          	$('#picture-loader').removeClass('shown');
			          	setTimeout(function(){
			          		$("#side-display-img").addClass('shown');
			          		$('#side-display-info').addClass('shown');
			          	}, 1500);
			          	clearInterval(d);
	    			}
	    		}, 50);
	    		$("#side-display-img").show();
	    		$('#side-display-info').show();
	    	}, 2000);
	        $('#picture-loader').addClass('shown');


      		$("#side-display-img").hide().removeClass('shown') //Hide it
		        .one('load', function() { //Set something to run when it finishes loading
		         	c = true;
		         	e = $(this);
		        })
		        .attr('src', b.attr('fulres')) //Set the source so it begins fetching
		        .each(function() {
		          //Cache fix for browsers that don't trigger .load()
		          if(this.complete) $(this).trigger('load');
		        });

		    $('#side-display-info').hide();
		    $('#side-display-info').removeClass('shown');
		    $('#side-display-showmore').hide();

	        var infoAttr = ['title', 'blurb', 'client'];
	        for(var i = 0; i < infoAttr.length; i++){
	        	$('#side-display-' + infoAttr[i]).html(b.attr(infoAttr[i]));
	        }
	        if(b.attr('showmore') =='true'){
	        	$('#side-display-showmore a').attr('href', b.attr('url'));
	        	$('#side-display-showmore').show();
	        }

	    })($(this), false, 0, null);
    });
    $(".teaser-square:first").click();
});

$('.loader-wait').toggleClass('rotate-loading');
setTimeout(function(){
	$('.loader-wait').toggleClass('rotate-loading');
}, 200);
setInterval(function(){
	$('.loader-wait').toggleClass('rotate-loading');
}, 2000);
$(window).on("load", function() {
  setTimeout(function(){
  	$('#page-wrapper').addClass('shown');
  	$('#full-page-wrapper').addClass('shown');
  },2000);
  $('.loader-wait').removeClass('shown');
});