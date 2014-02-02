// ==UserScript==
// @name SurreyPasswords
// @description enable auto complete at Surrey learn website for login form
// @namespace https://surreylearn.surrey.ac.uk/
// @include https://surreylearn.surrey.ac.uk/*
// @version 1
// ==/UserScript==
document.getElementById("Username").autocomplete = "on"
document.getElementById("Password").autocomplete = "on"
