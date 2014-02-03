// ==UserScript==
// @name SSEPasswords
// @description enable auto complete at SSE website
// @namespace https://www.franziskuskiefer.de
// @include https://www.southern-electric.co.uk/*
// @version 1
// ==/UserScript==

// enable autocomplete at login page
if (document.URL == "https://www.southern-electric.co.uk/Login/") {
	document.getElementById("ctl00_ContentPlaceholder_login_txtUsername").autocomplete = "on";
	document.getElementById("ctl00_ContentPlaceholder_login_txtPassword").autocomplete = "on";
}

// remove annoying cookie popup
document.getElementsByClassName("cookies")[0].style.visibility="hidden"
