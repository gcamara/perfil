[1mdiff --git a/index.html b/index.html[m
[1mindex 967057c..8121425 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -19,7 +19,7 @@[m
 		<meta property="og:image:width" content="210">[m
 		<meta property="og:image:height" content="250">[m
 		<link rel="image_src" href="http://gcamara.github.io/imgs.png">[m
[31m-		<meta name="viewport" content="width=device-width, user-scalable=no	">[m
[32m+[m		[32m<meta name="viewport" content="width=device-width, user-scalable=no">[m
 	</head>[m
 [m
 	<body>[m
[1mdiff --git a/js/main.js b/js/main.js[m
[1mindex 7abea98..369dc36 100644[m
[1m--- a/js/main.js[m
[1m+++ b/js/main.js[m
[36m@@ -65,6 +65,9 @@[m
 [m
 	$('.menu').on('click', function() {[m
 		if (window.matchMedia('(max-width: 767px)').matches) {[m
[32m+[m			[32mvar menuOpcoes = $('.menu > ul');[m
[32m+[m			[32mmenuOpcoes.css('display', 'none');[m
[32m+[m[41m			[m
 			var display = menuOpcoes.css('display');[m
 [m
 			setTimeout(function() {[m
