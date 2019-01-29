$("#project-more").click(function(){
	$(".popup").fadeIn(200,function(){
		$(this).addClass("visibility-popup");
		$("#project-more").delay(3000).queue(function(){
			var url="https://github.com/SohelRaja?tab=repositories";
			$(location).prop("href",url);
		});
	});
});
$(".popupclose").click(function(){
	$(".popup").fadeOut(200,function(){
		$(this).removeClass("visibility-popup");
	});
});
$(window).on("scroll",function(){
	if($(window).scrollTop()){
		$('header').addClass('navcolor');
	}else{
		$('header').removeClass('navcolor');
	}
});
function menuToggle(){
	var toggle = document.querySelector(".menu-toggle");
	toggle.classList.toggle("active");
	var sidebar = document.querySelector(".sidebar");
	sidebar.classList.toggle("active");
	var nav = document.querySelector(".nav-block");
	nav.classList.toggle("active");
	var socail = document.querySelector(".nav-social");
	socail.classList.toggle("active");
}
function preloader(){
	var preload = document.querySelector("#preloader");
	preload.style.opacity = 0;
}
