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