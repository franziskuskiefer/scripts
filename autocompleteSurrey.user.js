// ==UserScript==
// @name SurreyPasswords
// @description enable auto complete at Surrey learn website for login form
// @namespace https://www.franziskuskiefer.de
// @include *surreylearn.surrey.ac.uk/*
// @include https://remote.surrey.ac.uk/*
// @version 1
// ==/UserScript==

// redirect surrey learn to https
if (document.URL == "http://surreylearn.surrey.ac.uk/")
	window.location.replace("https://surreylearn.surrey.ac.uk");
	
// enable autocomplete at surrey learn
if (document.URL == "https://surreylearn.surrey.ac.uk/") {
	document.getElementById("Username").autocomplete = "on";
	document.getElementById("Password").autocomplete = "on";
}

// enable autocomplete at remote surrey
if (document.URL.indexOf("https://remote.surrey.ac.uk") == 0) {
	document.getElementsByName("frmLogin")[0].autocomplete = "on";
}
