

/*
JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Meera Mishra
      Date:  5-1-2018 

      Filename: script.js
*/
 "use strict";
function   processCookie(){
	console.log("creating cookie");
	document.cookie = "username=" + document.getElementById("usernameinput").value 
	+ ";path=/meeraassign/";

	console.log("cookie - " + document.cookie);
}
	
function populateInfo() {

	if (document.cookie){
		var uname = document.cookie;
		uname = uname.substring(uname.lastIndexOf("=") + 1);
		document.getElementById("usernameinput").value = uname;

		}
}

function  handleSubmit(){

console.log("handle submit");
processCookie();
	if (evt.preventDefault) {
		evt.preventDefault();

	}else{
		evt.returnValue = false;

	}
  
  document.getElementsByTagName("form")[0].submit();

}

function createEventListener() {
	console.log("creating event lster");
		var loginForm = document.getElementsByTagName("form")[0];
		if(loginForm.addEventListener) {
			loginForm.addEventListener("submit", handleSubmit,false);
		} else if (loginForm.attachEvent) {
			loginForm.attachEvent("onsubmit", handleSubmit);

		}

}

function setUpPage(){
	 populateInfo(); 
	 createEventListener();

}

if (window.addEventListener) {
	 window.addEventListener("load", setUpPage, false);

	}else if (window.attachEvent){
		window.attachEvent("onload", setUpPage);

	}