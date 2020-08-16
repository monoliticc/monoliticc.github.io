
//	GLOBAL VARIABLES
	var
		TotalPodcast = 0 ,
		TotalVideo   = 0 ,
		TotalTexto   = 2 ,

		PostSlug		= null,
		PostDescription	= false,
		PostKeywords	= false,
		PostDisqus		= false,
		GlobalDisqus	= true,

		CurrentURL	= window.location.href,
		CurrentPath	= window.location.pathname,
		BaseHost	= "monoliticc.github.io/",
		BaseURL		= "https://monoliticc.github.io/";

//	LOCALHOST — GLOBAL VARIABLES
	// if (BaseHost != window.location.host) {
	// 	BaseURL = "http://localhost:8000/";
	// };


////////////////////////////////////////////////////////////////////////////////////////////////////
	// ITEM FOR TESTS
	// $("main").css({"background-color": "green"});
	// REMOVE LAST CHAR FROM STRING: StringVarName.slice(0, -1)

$(document).ready(function(){

// 	HIDE PAGE BEFORE LOADINGS
	$("body").hide();
	$("main").hide();

//	DEPLOYED — GOOGLE ANALYTICS LOADING
	// if (BaseHost == window.location.host) {
	// 	$("head").append("<script async src='https://www.googletagmanager.com/gtag/js?id=UA-121641981-1'>");	
	// 	$("head").append("<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-121641981-1');");	
	// };

//	GLOBAL LOADINGS
	$("html").prop("lang", "pt-BR");
	// $("html").attr("manifest", BaseURL+"monoliticc.appcache");
	$("head").append("<meta name='theme-color' content='#112'>");
	$("head").append("<meta name='viewport' content='width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=2.0'>");
	$("head").append("<link rel='stylesheet' href='"+BaseURL+"base/css/monoliticc-font.css'>");
	$("head").append("<link rel='stylesheet' href='"+BaseURL+"base/css/row900.css'>");
	$("head").append("<link rel='stylesheet' href='"+BaseURL+"base/css/monoliticc-style-dark.css'>");	
	// $("head").append("<link rel='stylesheet' href='"+BaseURL+"base/css/monoliticc-style-light.css'>");	
	$("header").prepend(		).load(BaseURL+"base/global/header.txt");
	$("main").prepend($("<span>").load(BaseURL+"base/global/main.txt"));
	$("footer").prepend(		).load(BaseURL+"base/global/footer.txt");

//	FORCE REMOTION OF "INDEX.HTML"
	if (CurrentURL.includes(".html")) {
		CurrentURL = CurrentURL.replace(".html", "");
		history.replaceState(null, null, CurrentURL);
	};
	if (CurrentURL.includes("index")) {
		CurrentURL = CurrentURL.replace("index", "");
		history.replaceState(null, null, CurrentURL);
	};

//	FORCE FRIENDLY URL
	if (PostSlug != null) {
		CurrentURL = CurrentURL+PostSlug;
		history.replaceState(null, null, CurrentURL);
	};

//	FORCE H1 LINKING POST — EXCEPT 404 PAGE
	if ((CurrentURL != BaseURL) && ($("#erro-404").length) != true) {
		$("h1:first").wrapInner("<a href='"+CurrentURL+"'></a>");
	};

//	SET PAGE TITLE
	if ((CurrentURL == BaseURL)) {
		$(document).prop("title", "Monoliti.cc • Análises & Histórias");
	}
	else {
		$(document).prop("title", $("main h1:first").text()+" • Monoliti.cc");
	};

//	SET META DESCRIPTION
	if (PostDescription == false) {
		$("head").append("<meta name='description' content='Análises de grandes obras da humanidade, histórias sobre a vida de grandes autores.'>");
	} else {
		$("head").append("<meta name='description' content='"+PostDescription+"'>");
	};

//	SET META KEYWORDS (TAGS)
	if (PostKeywords == false) {
		$("head").append("<meta name='keywords' content='análises, vídeo ensaio, texto ensaio, podcast, cinema, seriado, diretores, atores, filosofia'>");
	} else {
		$("head").append("<meta name='keywords' content='"+PostKeywords+"'>");
	};

//	DISQUS LOADING
	if ((GlobalDisqus == true) || (PostDisqus == true)) {

	};

//	PODCAST PAGE LOADINGS


//	VIDEO PAGE LOADINGS


//	TEXTO PAGE — POST LOADING
	if ((CurrentURL == BaseURL+"texto") || (CurrentURL == BaseURL+"texto/")) {
		var CountdownTexto = TotalTexto;
		while (CountdownTexto > 0) {
			$("main").append($("<span class='post-item-"+CountdownTexto+"'>").load(CurrentURL+CountdownTexto+"/index.html h1:first"));
			CountdownTexto--;
		};
	};

//	FORCE 404 REDIRECTIONS
	// ASSINATURA
	if ((CurrentURL == BaseURL+"assinatura") || (CurrentURL == BaseURL+"assinatura/")) {
		window.location.replace(BaseURL+"info/assinatura");
	};

	// ASSINE
	if ((CurrentURL == BaseURL+"assine") || (CurrentURL == BaseURL+"assine/")) {
		window.location.replace(BaseURL+"info/assinatura");
	};

	// INFO/ASSINE
	if ((CurrentURL == BaseURL+"info/assine") || (CurrentURL == BaseURL+"info/assine/")) {
		window.location.replace(BaseURL+"info/assinatura");
	};

	// CONTATO
	if ((CurrentURL == BaseURL+"contato") || (CurrentURL == BaseURL+"contato/")) {
		window.location.replace(BaseURL+"info/contato");
	};

	// SOBRE
	if ((CurrentURL == BaseURL+"sobre") || (CurrentURL == BaseURL+"sobre/")) {
		window.location.replace(BaseURL+"info/sobre");
	};

	// EQUIPE
	if ((CurrentURL == BaseURL+"equipe") || (CurrentURL == BaseURL+"equipe/")) {
		window.location.replace(BaseURL+"info/equipe");
	};

});


////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ajaxStop(function() {

//	LOCALHOST — SWAP ALL LINKS TO LOCALHOST
	if (BaseHost != window.location.host) {
		$("a").each(function() {
			$(this).attr("href", $(this).attr("href").replace("https://monoliti.cc/", BaseURL));
			$(this).attr("href", $(this).attr("href").replace("https://monoliti.cc", BaseURL));
		});
	};

//	FORCE BROWSER SCROLL TO ID
	if (CurrentURL.includes("#")) {
		setTimeout(function() {
			window.location.replace(CurrentURL);
		}, 199);
	};

//	ARTICLE ALIGN
	if (CurrentURL != BaseURL) {
		$("article").appendTo(".post");
	};

//	TEXTO PAGE — H1 LINKING 
	if ((CurrentURL == BaseURL+"texto") || (CurrentURL == BaseURL+"texto/")) {
		var CountdownTexto = TotalTexto;
		while (CountdownTexto > 0) {
			$(".post-item-"+CountdownTexto).appendTo("article");
			$(".post-item-"+CountdownTexto+" h1").wrapInner("<a href='"+CurrentURL+CountdownTexto+"/'></a>");
			CountdownTexto--;
		};
	};

//	PODCAST, VIDEO, TEXTO — SWAP H1 LOADING TO H3
	if ((CurrentURL == BaseURL+"podcast") || (CurrentURL == BaseURL+"podcast/") || 
		(CurrentURL == BaseURL+"video")   || (CurrentURL == BaseURL+"video/")   || 
		(CurrentURL == BaseURL+"texto")   || (CurrentURL == BaseURL+"texto/")) {
		$("h1").each(function() {
			$("h1:first").replaceWith("<h1>"+$("h1:first").html()+"</h1>");
			$(this).replaceWith("<h3>"+$(this).html()+"</h3>");
		});
	};

//	EXCLUDE SPAN USED ON GLOBAL LOADINGS
	$("span").find(".ROW900").unwrap();
	// $("span").find("h1").unwrap();

//	FACEBOOK OPEN GRAPH
	if (CurrentURL.includes("texto")) {
		$("head").append(
			"<meta property='og:locale' content='pt_BR'/>" +
			"<meta property='og:site_name' content='One, Two, Testando'/>" + 
			"<meta property='og:title' content='Aqui deveria ter o H1 da Página'/>" + 
			"<meta property='og:url' content='"+CurrentURL+"'/>" + 
			"<meta property='og:type' content='article'/>" + 
			"<meta property='og:description' content='"+PostDescription+"'/>" + 
			"<meta property='og:image' content='https://bolapresa.com.br/wp-content/uploads/2020/08/michael-porter-jr-vs-okc.jpg'/>" + 
			"<meta property='article:published_time' content='2020-08-14T02:16:53+00:00'/>" + 
			"<meta property='article:modified_time' content='2020-08-14T02:19:07+00:00' />" + 
			"<meta property='og:updated_time' content='2020-08-14T02:19:07+00:00' />" + 
			"<meta property='article:section' content='Classic'/>"
		);
	};

// 	SHOW PAGE AFTER ALL LOADINGS
	setTimeout(function() {
		$("body").fadeIn(50);
		$("main").fadeIn(185);
	}, 185);

});
