/*
	2006.06.15 pk
	Capture enter key and send form to proper place
	Login if user the login fields have focus - otherwise Continue through wax
	
	This is used exclusively on the wax Billing A and B pages

	2006.12.07 ef
	This script is also used on the EC Billing page hostedpayments/Billing
	
	ToDO - Fix Safari number pad enter
	Doesn't work on Safari using the enter key on the number pad
	The keyCode recorded for the number pad is 3 instead of 13

*/

function getKeyCode(e) {
	var key = e ? e.which : window.event.keyCode;
	return key;
};

function getField(e) {
	var elem;
	
	if (!e) {
		var e = window.event;
	}
	if (e.target) { // the w3c way
		elem = e.target;
	}
	else if (e.srcElement) { // the IE way
		 elem = e.srcElement;
	} else {
		elem = null;
	}
	if (elem && elem.nodeType == 3) { // defeat Safari bug
		elem = elem.parentNode;
	}

	return elem;
};

function dfltSubmit(e) {
	var key = getKeyCode(e);
	var field = "";	
	
	// if <Enter> key was used
	if (key == 13) {
		field = getField(e);

		if (field && document.getElementById("dfltButton")) 
		{
			if (field.id == "login_email" || field.id == "login_password" || field.id == "login.x") {
				document.getElementById("dfltButton").name = "login";
				document.getElementById("dfltButton").value = "Log In";
			}
			else if (field.id == "col_ship_to_zip" || field.id == "exp_ship_to_zip") {
				document.getElementById("dfltButton").name = "inside_update";
				document.getElementById("dfltButton").value = "Update";
			} else {
				document.getElementById("dfltButton").focus();
                                document.getElementById("dfltButton").name = "continue";
                                document.getElementById("dfltButton").value = "Continue";
			}
		}
	}
};

function displayHiddenByName(formName) {
	var elems = document.getElementsByTagName("*");

	for(var i = 0; i < elems.length; i++) {
		var elem = elems[i];
		var elemName = elem.getAttribute('name');
		var styleOpt = elem.getAttribute('style');
		if (elemName == formName) {
			styleOpt.visibility='visible';
		}
	}
};

document.onkeypress = dfltSubmit;

