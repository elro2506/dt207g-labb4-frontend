//Kollar om det finns en token - annars skickas man till inloggningssidan
"use strict";

if(!localStorage.getItem("website_token")) {
    window.location.href ="login.html";
}