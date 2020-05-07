document.write("<style type='text/css'>");
document.write("div.edit {display: none;}");
document.write("div.fieldrow .exp-date {display: none;}");
document.write("div.fieldrow .csc {display: none;}");
document.write("p.addCardLink {display: block;}");
document.write("</style>");


// Takes a comma-separated argument and creates an array out of it.
function createArray(myval) {
   var a = [];
   var input = myval;

   if (input.constructor.toString().indexOf("Array") == -1) {
      a = input.split(",");
   } else {
      a = input;
   }
   return a;
}

// Disables a form field by setting an attribute "disabled" so the field will not be sent to the server
function toggleDisabledAttribute(myDiv,field,action){
   var a = createArray(myDiv);

   for (var i=0; i<a.length; i++) {
      if (document.getElementById(a[i])) {
         var myField = document.getElementById(a[i]).getElementsByTagName(field);
			
         for (var x = 0; x<myField.length; x++) {
            if (action == 'set') myField[x].setAttribute('disabled','true');
            else myField[x].removeAttribute('disabled');
         }
      }
   }
}

// Changes the class to hidden which is defined in the css                                                        
function toggleDisplayProperty(tag, display) {
   var a = createArray(tag);

   var id = "";
   var show = (display == "show") ? true : false;

   for (var i=0; i<a.length; i++) {
      id = document.getElementById(a[i]);
	if (id) {
		if (show) YAHOO.util.Dom.setStyle(id, 'display', 'block');
		else YAHOO.util.Dom.setStyle(id, 'display', 'none');
      	}
   }
}


// Used in hostedpayments/Billing.aml to hide/show credit card and bank form fields
function showMoreFieldsPayment(obj, isSelect) {
	if (!obj && !isSelect) {
		toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCSC','show');
		toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,','hide');
	} else if (obj && isSelect) {
                        var selCCType = "";
                        if (obj.nodeName == "SELECT"){
                                selCCType = obj.options[obj.selectedIndex].value;
                        } else {
                                for (var i=0; i<obj.length; i++) {
                                        selCCType = (obj[i].checked) ? obj[i].value : selCCType;
                                }
                        }
                        switch (selCCType) {
                                case "V": case "D": case "M": case "C":
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate,fieldrowCCDOB','input','set');
                                        toggleDisabledAttribute('fieldrowCCExpDate,fieldrowCSC','input','remove');
                                        toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,fieldrowCCDOB','hide');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCSC','show');
                                        break;
                                case"A":
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate,fieldrowCCDOB','input','set');
                                        toggleDisabledAttribute('fieldrowCCExpDate,fieldrowCSC','input','remove');
                                        toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,fieldrowCCDOB','hide');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCSC','show');
                                        break;
                                case "O": case "S":
                                        toggleDisabledAttribute('fieldrowStartDate','select','remove');
                                        toggleDisabledAttribute('fieldrowStartDate,fieldrowCCExpDate,fieldrowCSC','input','remove');
                                        toggleDisabledAttribute('fieldrowCCDOB','input','set');
                                        toggleDisplayProperty('fieldrowCSC','show');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,cardIssueInformation','show');
                                        toggleDisplayProperty('fieldrowCCDOB','hide');
                                        break;
                                case "N":
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate,fieldrowCSC','input','set');
                                        toggleDisabledAttribute('fieldrowCCExpDate,fieldrowCCDOB','input','remove');
                                        toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,fieldrowCSC','hide');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCCDOB','show');
                                        var cc_country_code = "";
                                        if (document.getElementById('cc_country_code')) {
                                                cc_country_code = document.getElementById('cc_country_code').value;
                                        } else {
                                                cc_country_code = document.getElementById('country_code').value;
					}
                                        if (cc_country_code == 'IT' || cc_country_code == 'ES') {
                                                toggleDisabledAttribute('fieldrowCSC','input','remove');
                                                toggleDisplayProperty('fieldrowCSC','show');
                                        }
                                        break;
                                case "Q":
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate,fieldrowCSC','input','set');
                                        toggleDisabledAttribute('fieldrowCCExpDate,fieldrowCCDOB','input','remove');
                                        toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,fieldrowCSC','hide');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCCDOB','show');
                                        break;
                                case "L":
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate','input','set');
                                        toggleDisabledAttribute('fieldrowCSC,fieldrowCCExpDate','input','set');
                                        toggleDisabledAttribute('fieldrowCCDOB','input','remove');
                                        toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,fieldrowCSC,fieldrowCCExpDate','hide');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCDOB','show');
                                        break;

                                default:
                                        toggleDisabledAttribute('fieldrowStartDate','select','set');
                                        toggleDisabledAttribute('fieldrowStartDate','input','set');
                                        toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,cardIssueInformation,fieldrowCSC,fieldrowCCDOB','hide');
                                        if (obj.options[obj.selectedIndex].value == "")
                                                toggleDisplayProperty('bank-fields,field-dob,dob-terms','hide');
                                        else
                                                toggleDisplayProperty('bank-fields,field-dob,dob-terms','show');
                                        if( document.getElementById( 'cc_number_update_mode' )){
                                                toggleDisplayProperty('fieldrowCCNumber','show');
                                        }
				
			}
	} else if( obj && !isSelect ){
		toggleDisplayProperty('fieldrowCCNumber,fieldrowCCExpDate,fieldrowCSC','show');
		toggleDisplayProperty('bank-fields,field-dob,dob-terms,cardIssueInformation,','hide');
	}
   if (document.getElementById('expdate_month') && document.getElementById('expdate_month').disabled)
	      toggleDisplayProperty('fieldrowCCExpDate', 'hide');
   if (document.getElementById('cvv2_number') && document.getElementById('cvv2_number').disabled)
	      toggleDisplayProperty('fieldrowCSC','hide')

 if((document.getElementById('country_code') && document.getElementById('country_code').value == 'AU')  || (document.getElementById('legal_entity_code') && document.getElementById('legal_entity_code').value =='P') || (document.getElementById('dob_country_code') && document.getElementById('dob_country_code').value == 'AU')){
          toggleDisplayProperty('field-dob','show');
          }

}

//clears the mm/yy fields onClick
function clearField(thefield){
	if ( thefield.defaultValue == thefield.value){
		if (isNaN(thefield.value)){
			thefield.value = "";
			YAHOO.util.Dom.setStyle(thefield, 'color', '#000');
		}
	}
} 

//sets opacity, checked status for cards
function getCC(sourceObj) {
	if (document.getElementById('cc_disable_highlighting')) {
		if (document.getElementById('cc_disable_highlighting').value == 'true')
			return;
	}

	var visa = document.getElementById("pm-visa");
	var electron = document.getElementById("pm-electron");
	var mastercard = document.getElementById("pm-mastercard");
	var discover = document.getElementById("pm-discover");
	var amex = document.getElementById("pm-amex");
	var jcb = document.getElementById("pm-jcb");

	var isElectron = false;
	var electronPrefix4 = "4917,4913,4508,4844,";
	var electronPrefix6 = "417500,"	
	var electronPrefixArray4 = [];
	var electronPrefixArray6 = [];
	
	electronPrefixArray4 = electronPrefix4.split(",");
	electronPrefixArray6 = electronPrefix6.split(",");	
	
	var selCountry = "";

	if(document.getElementById('country_code')){
	var country = document.getElementById('country_code');
		if (country.options) {
			selCountry = country.options[country.selectedIndex].value;
		}
		else {
			selCountry = country.value;
		}
	}
	var enableHighlight = (selCountry == 'IT') ? false : true;
        if (document.getElementById("cc_disable_highlighting")) {
                 enableHighlight = (document.getElementById("cc_disable_highlighting").value == "true") ? false : enableHighlight;
        }

	if (sourceObj) {
		var formObj;
		
		if(document.getElementById(sourceObj.form.id)){
			formObj = document.getElementById(sourceObj.form.id);
		}else{
			formObj = document.forms[sourceObj.form.name];
		}

		function amexOff() {
			if (enableHighlight) {
				amex.style.opacity="0.13"; 
				amex.style.filter="alpha(opacity=20)"; 
			}
		}
		function amexOn() {
			amex.style.opacity="1"; 
			amex.style.filter="alpha(opacity=100)"; 
			formObj.amex.checked = true;
		}
	
		function discoverOff() {
			if (enableHighlight) {
				discover.style.opacity="0.13"; 
				discover.style.filter="alpha(opacity=20)"; 
			}
		}
		function discoverOn() {
			discover.style.opacity="1"; 
			discover.style.filter="alpha(opacity=100)"; 
			formObj.discover.checked = true;
		}
	
		function mastercardOff() {
			if (enableHighlight) {
				mastercard.style.opacity="0.13"; 
				mastercard.style.filter="alpha(opacity=20)";
			}
		}
		function mastercardOn() {
			mastercard.style.opacity="1"; 
			mastercard.style.filter="alpha(opacity=100)"; 
			formObj.mastercard.checked = true;
		}
	
		function visaOff() {
			if (enableHighlight) {
				visa.style.opacity="0.13"; 
				visa.style.filter="alpha(opacity=20)"; 
			}
		}
		function visaOn() {
			visa.style.opacity="1"; 
			visa.style.filter="alpha(opacity=100)"; 
			formObj.visa.checked = true;
		}
		function electronOff() {
			if (enableHighlight) {
				electron.style.opacity="0.13"; 
				electron.style.filter="alpha(opacity=20)"; 
			}
		}
		function electronOn() {
			electron.style.opacity="1"; 
			electron.style.filter="alpha(opacity=100)"; 
			formObj.visa.checked = true;
		}
		function jcbOff() {
			jcb.style.opacity="0.13";
			jcb.style.filter="alpha(opacity=20)";
		}
		function jcbOn() {
			jcb.style.opacity="1";
			jcb.style.filter="alpha(opacity=100)";
			formObj.jcb.checked = true;
		}
	
		if ( sourceObj.value.length > 1 ) {
	
		 switch (true) {
			case ( sourceObj.value.substring(0,1) == '3'): 
				if (sourceObj.value.substring(1,2) == '6') {
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
						}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (mastercard) {
						mastercardOn();
					}
					if (jcb) {
						jcbOff();
					}
				} else if ( sourceObj.value.substring(1,2) == '5') {
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
					}
					if (amex) {
						amexOff();
					}
					if (discover) {
						discoverOff();
					}
					if (mastercard) {
						mastercardOff();
					}
					if (jcb) {
						jcbOn();
					}
				} else {
					if (visa) {
						visaOff();
					}
					if (electron) {
						electronOff();
					}
					if (mastercard) {
						mastercardOff();
					}
					if (discover) { 
						discoverOff();
					}
					if (amex) {
						amexOn();
					}
					if (jcb) {
						jcbOff();
					}
				}
				break;
			
			case (sourceObj.value.substring(0,1) == '4'): 
				if (mastercard) { 
					mastercardOff();
				}
				if (amex) {
					amexOff();
				}
				if (discover) { 
					discoverOff();
				}
				if (visa) {
					visaOn();
				}
					if (electron) {
						electronOn();
					}
					if (jcb) {
						jcbOff();
					}
					
					if (sourceObj.value.length >= 4) {
						for (i=0; i<electronPrefixArray4.length; i++) {
							if (sourceObj.value.substring(0,4) == electronPrefixArray4[i]) {
								isElectron = true;
							}
						}						
						if (sourceObj.value.length >= 6 && !isElectron) {
							for (i=0; i<electronPrefixArray6.length; i++) {
								if (sourceObj.value.substring(0,6) == electronPrefixArray6[i]) {
									isElectron = true;
								}
							}
						}
						if (isElectron) {
							if (electron) {
								electronOn();
							}
							if (visa) {
								visaOff();
							}
						}
						else {
							if (electron) {
								electronOff();
							}
							if (visa) {
								visaOn();
							}
						}
	                        }
				break;
				
			case (sourceObj.value.substring(0,1) == '5'): 
				if (visa) { 
					visaOff();
				}
					if (electron) {
						electronOff();
					}
				if (amex) { 
					amexOff();
				}
				if (discover) { 
					discoverOff();
				}
				if (mastercard) { 
					mastercardOn();
				}
                  	     	if (jcb) {
                        	        jcbOff();
	                        }
				break;
			
			case (sourceObj.value.substring(0,1) == '6'): 
				if (visa) { 
					visaOff();
				}
					if (electron) {
						electronOff();
					}
				if (mastercard) { 
					mastercardOff();
				}
				if (amex) { 
					amexOff();
				}
				if (discover) { 
					discoverOn();
				}
                  	     	if (jcb) {
                        	        jcbOff();
	                        }
				break;
		 }
		} else {
			if( visa ){
				visa.style.opacity="1";
				visa.style.filter="alpha(opacity=100)";
			}
			if (electron) {
				electron.style.opacity="1";
				electron.style.filter="alpha(opacity=100)";
			}
			if( mastercard ){
				mastercard.style.opacity="1";
				mastercard.style.filter="alpha(opacity=100)";
			}
			if( amex ){
				amex.style.opacity="1";
				amex.style.filter="alpha(opacity=100)";
			}
			if( discover ){
				discover.style.opacity="1";
				discover.style.filter="alpha(opacity=100)";
			}
			if (jcb ){
				jcb.style.opacity="1";
				jcb.style.filter="alpha(opacity=100)";
			}
		}
	}
}

function initialize() {
	var cc = document.getElementById("cc_number");
        if (cc && !document.getElementById("cc_disable_highlighting")) {
		getCC(cc);
	}

	var month = document.getElementById("expdate_month"); 
	if (month) {
		month.style.color = (isNaN(month.value)) ? "#ccc" : "#000";
	}

	var year = document.getElementById("expdate_year"); 
	if (year) {
		month.style.color = (isNaN(month.value)) ? "#ccc" : "#000"; 
	}

        if (YAHOO.util.Dom.hasClass('cctype', 'radio')) {
                var objCCType;
                if (document.getElementById('cc_disable_highlighting') && document.getElementById('cc_disable_highlighting').value == 'true') {
                        objCCType = document.getElementById('cctype').getElementsByTagName('input');
                        YAHOO.util.Event.addListener(objCCType, 'click', function() {
                                showMoreFieldsPayment(objCCType, true);
                        });
                }
                showMoreFieldsPayment(objCCType, true);
        }
}

