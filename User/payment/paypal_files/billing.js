document.write("<style type='text/css'>");
document.write(".edit {display: none;}");
document.write("body#billing a.change-link {display: block;}");
document.write("body#billing div#shopping-cart a.change-link {display: inline;}");
document.write("a#change-country {display: block;}");
//fix for non-js (logic below will display accordingly)
document.write("div.fieldrow .exp-date { display: none; }");
document.write("div.fieldrow .csc { display: none; }");
//end non-js fix
document.write("</style>");

 
 //Hosted Payments - Billing page
 YAHOO.namespace('unityBilling');
 
 /* 16762 - created so the mspf stuff can listen for password fields becoming visible */
 YAHOO.unityBilling.onShowFields = new YAHOO.util.CustomEvent("onShowFields");
 
 //Interaction for Country drop down
 YAHOO.unityBilling.creditCard = function(){
     var countryList = document.getElementById('country_code');
     var paymentList = document.getElementById('credit_card_type');
     var extraFieldsCCBlock = document.getElementById('fieldrowStartDate');
	
     /* The smart browser that is IE caused another problem. Now we have to traverse all the form elements
       * looking for the one that really has an ID of 'country_code' and it's a select box'
       */
     if( countryList && countryList.nodeName == "INPUT" ){
       for( var i=0; i < document.forms[0].elements.length; ++i ){
             var elem = document.forms[0].elements[i];
             if( elem.id == 'country_code' && elem.nodeName == 'SELECT' ){
                 countryList = elem;
                 break;
             }
         }
     }
 
    if( paymentList ){
         if( paymentList.nodeName == "INPUT" ){
             showMoreFieldsPayment( paymentList, false );
         } else {
             showMoreFieldsPayment( paymentList, true );
         }
     } else {
         showMoreFieldsPayment( paymentList, false );
     }
 
     var selectCountry = function( e ){
         //Iterate over all forms within the document, not just the first one because external components might
         //load multiple forms so there's no way to know how many forms there are on the page
         var allForms = document.getElementsByTagName('form');
         var formIndex = 0;
         if( allForms ){
             for( var i=0; i < allForms.length; ++i ){
                 for( var j=0; j < allForms[i].elements.length; j++ ) {
                     if ( allForms[i].elements[j].name == 'refresh_country_code' ) {
                         allForms[i].elements[j].value='1';
                         formIndex = i;
                     }
                 }
             }
         }
             document.forms[formIndex].submit();
         }
 
     var showCCExtraFields = function( e ){
         if( paymentList ){
             if( paymentList.nodeName == "INPUT" ){
                 showMoreFieldsPayment( paymentList, false );
             } else {
                 showMoreFieldsPayment( paymentList, true );
             }
         } else {
             showMoreFieldsPayment( paymentList, false );
         }
     }
 
     YAHOO.util.Event.addListener(countryList, 'change', selectCountry, countryList );
     YAHOO.util.Event.addListener(paymentList, 'change', showCCExtraFields, paymentList );
 }
 
 /**
  * Determines whether an INPUT element of type TEXT contains any text
  * @param {obj}  obj The INPUT object to test
  * @return {Boolean} A boolean value
 */
 function isFieldEmpty( obj ){
     if( obj ){
         if( obj.value.length > 0 ){
             return false;
         }
     }
     return true;
 }
 
 YAHOO.unityBilling.account = function(){
     var passwordBlockLink = document.getElementById('changeLinkAnchor');
     var giftCertLabel = document.getElementById('gift-certificate');
     var passwordFields = document.getElementById('block-password');
     var optionalLabel = document.getElementById('optionalTextLabel');
     var passwordInput = document.getElementById('password')
      var termsOfServiceText = document.getElementById('termsOfService');
      var termsOfServiceJS = document.getElementById('terms-of-service-js');
  
     if( document.getElementById('create-account') ){
         var toggleArrow = document.getElementById('create-account').getElementsByTagName('h2');
      }
  
      function arePasswordFieldsEmpty(){
          var result = true;
          if( passwordFields ){
              var fields = YAHOO.util.Dom.getElementsByClassName( 'fieldrow', 'div', 'block-password');
              for( var i=0; i < fields.length; i++ ){
                  if( !result ) break;
                  if( YAHOO.util.Dom.hasClass( fields[i], 'password-create') || YAHOO.util.Dom.hasClass( fields[i], 'password-confirm')){
                      var children = fields[i].childNodes;
                      for( var j=0; j < children.length; j++ ){
                          if( children[j].nodeName == 'INPUT' && !isFieldEmpty( children[j] )){
                              result = false;
                              break;
                          }
                      }
                  }
              }
          }
          return result;
      }
  
      YAHOO.util.Dom.setStyle( passwordBlockLink, 'display', 'inline' );
      YAHOO.util.Dom.addClass(toggleArrow, 'expanded');
      var makeAccountRequired = function( e ){
          if( giftCertLabel.checked ){
              YAHOO.util.Dom.setStyle( passwordFields, 'display', 'block' );
              YAHOO.util.Dom.setStyle( optionalLabel, 'display', 'none' );
              YAHOO.util.Dom.setStyle( passwordBlockLink, 'text-decoration', 'none' );
              YAHOO.util.Dom.removeClass(toggleArrow, 'expanded');
          } else {
              if( arePasswordFieldsEmpty() ){
                  YAHOO.util.Dom.setStyle( passwordFields, 'display', 'none' );
                  //YAHOO.util.Dom.setStyle( passwordBlockLink, 'text-decoration', 'underline' );
                  YAHOO.util.Dom.addClass(toggleArrow, 'expanded');
              }
              else{
                  YAHOO.util.Dom.removeClass(toggleArrow, 'expanded');
              }
              YAHOO.util.Dom.setStyle( optionalLabel, 'display', 'inline' );
          }
      }
  
      var showPasswordFields = function( e ){
          if( passwordFields ){
              var displayStatus = YAHOO.util.Dom.getStyle(passwordFields, 'display');
              if( displayStatus == 'block' ){
                  if( arePasswordFieldsEmpty() ){
                      YAHOO.util.Dom.setStyle(passwordFields, 'display', 'none');
                      YAHOO.util.Dom.addClass(toggleArrow, 'expanded');
                  }
              } else {
                  YAHOO.util.Dom.setStyle(passwordFields, 'display', 'block');
                  YAHOO.util.Dom.removeClass(toggleArrow, 'expanded');
              }            
  
  
              /* 16762 - fire the event, pass in whether the fields are showing or not */
              try {
                  if (typeof(e) != 'undefined') {
                      YAHOO.unityBilling.onShowFields.fire(YAHOO.util.Dom.getStyle(passwordFields, 'display')=='block');
                  }
              } catch(e) {}
          }
      }
  
  
      var showTermsOfService = function( e ){
          if( passwordFields ){
  
              var reviewBtnText = document.getElementById('review');
              var agreeBtnText = document.getElementById('agree');
  
              YAHOO.util.Dom.setStyle(termsOfServiceText, 'display', 'block');
  
              YAHOO.util.Dom.setStyle(reviewBtnText, 'display', 'none');
              YAHOO.util.Dom.setStyle(agreeBtnText, 'display', 'block');
  
              if (isFieldEmpty(passwordInput)) {
                  YAHOO.util.Dom.setStyle(termsOfServiceText, 'display', 'none');
                  termsOfServiceJS.value = undefined;
                  YAHOO.util.Dom.setStyle(reviewBtnText, 'display', 'block');
                  YAHOO.util.Dom.setStyle(agreeBtnText, 'display', 'none');
              } else {
                  termsOfServiceJS.value = true;
              }
          }
      }
  
      if( passwordBlockLink ){
          //This is the WPS flows
          showPasswordFields();
          YAHOO.util.Event.addListener(passwordBlockLink, 'click', showPasswordFields );
          YAHOO.util.Event.addListener(passwordInput, 'keyup', showTermsOfService );
      } else {
          //This is the EC flow where such block of markup doesn't exist the same way
          if( termsOfServiceJS){
              termsOfServiceJS.value = true;
          }
      }
  
      if ( giftCertLabel ){
          YAHOO.util.Dom.addClass(toggleArrow, 'expanded');
          if( giftCertLabel.checked ){
              YAHOO.util.Dom.setStyle( passwordFields, 'display', 'block' );
              YAHOO.util.Dom.setStyle( optionalLabel, 'display', 'none' );
          } else {
              YAHOO.util.Dom.setStyle( passwordFields, 'display', 'none' );
              YAHOO.util.Dom.setStyle( optionalLabel, 'display', 'inline' );
          }
          YAHOO.util.Event.addListener(giftCertLabel, 'click', makeAccountRequired );
      }
      else {
              YAHOO.util.Dom.setStyle( passwordFields, 'display', 'none' );
              YAHOO.util.Dom.setStyle( optionalLabel, 'display', 'inline' );
              YAHOO.util.Dom.addClass(toggleArrow, 'expanded');
      }
  }
  
  /**
  * Format the telephone number
  */
  YAHOO.unityBilling.phone = function(){
  
      var field = document.getElementById("H_PhoneNumber");
      var num = field.value.replace(/[^0-9]/g, "");
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
          else {
                  if (document.getElementsByName('country_code')) {
                      var country = document.getElementsByName('country_code')[0];
                      selCountry = country.value;
                  }
          }
  
      if( num.length == 10 && selCountry == "US" ){
          num = num.substring(0, 3) +"-"+ num.substring(3, 6) +"-"+ num.substring(6, 10);
      } else {
          num = field.value;
      }
  
      field.value = num;
  }
  
  function highlight(){
  
      var fieldrows=YAHOO.util.Dom.getElementsByClassName('fieldrow', 'div');
  
      for (var i=0; i<fieldrows.length;i++) {
          var fieldrow=fieldrows[i];
          var inputs=fieldrow.getElementsByTagName('input');
  
          for (var j=0; j<inputs.length;j++) {
              var input=inputs[j];
              input.onfocus=function() {YAHOO.util.Dom.addClass(this.parentNode,'selected');}
              input.onblur=function() {YAHOO.util.Dom.removeClass(this.parentNode,'selected');}
          }
  
          var dropdowns=fieldrow.getElementsByTagName('select');
  
          for (var k=0; k<dropdowns.length;k++) {
              var dropdown=dropdowns[k];
              dropdown.onfocus=function() {YAHOO.util.Dom.addClass(this.parentNode,'selected');}
              dropdown.onblur=function() {YAHOO.util.Dom.removeClass(this.parentNode,'selected');}
          }
  
          //fixes payment method row, which has a fieldset between fieldrow and select
          var fieldsets=fieldrow.getElementsByTagName('fieldset');
  
          for (var k=0; k<fieldsets.length;k++) {
              var fieldset=fieldsets[k];
              fieldset.onfocus=function() {YAHOO.util.Dom.addClass(this.parentNode,'selected');}
              fieldset.onblur=function() {YAHOO.util.Dom.removeClass(this.parentNode,'selected');}
          }
          //end fix
  
      }
  }
  
  function isIE() {
      if (navigator.userAgent.indexOf("MSIE") != -1)
          return true;
      else
          return false;
  }
  
  /* Used to trigger Credit Card type detection when Mouse is used */
  function detectCCType(e, id ){
      try {
          var ccNumber = document.getElementById('cc_number');
          var country = document.getElementById('country_code');
          var selCountry = country.options[country.selectedIndex].value;
          
          // getCC() is disabled for Italy 
          if (selCountry != 'IT' && getCC) {
              getCC(document.getElementById('cc_number'));
          }
      } catch(err) {} // just supressing errors
  }
  
  function displayInlineShow(e, id) {
      var id = (this.id) ? this.id : id;
      // kill the default behaviour
      // on all clicks except checkbox
  
      // Hover variables
      var cscHover = document.getElementById("csc-information");
      var saveInfoHover = document.getElementById("save-information");
      var onlycardInfoHover = document.getElementById("onlycard-information");
      //pfe2 hover start
      var ccOnFileInfo = document.getElementById("ccOnFile-information");
      var prePaidCardInfo = document.getElementById("prePaidCard-information");
      //pfe2 hover end
  
      switch (id){
          case "csc-hover":
              YAHOO.util.Dom.replaceClass('csc-def', 'quick-faq','quick-faq-hover');
              break;
          case "changeLinkAnchor":
              YAHOO.util.Dom.replaceClass('save-info-def', 'quick-faq','quick-faq-hover');
              break;
          case "onlycard-hover":
              YAHOO.util.Dom.replaceClass('onlycard-def', 'quick-faq','quick-faq-hover');
              break;
          //pfe2 hover start
          case "ccOnFile-hover":
              YAHOO.util.Dom.replaceClass('ccOnFileDef', 'ccOnFileNoHover','ccOnFileHover');
              break;
          case "prePaidCard-hover":
              YAHOO.util.Dom.replaceClass('prePaidCardDef', 'prePaidCardNoHover','prePaidCardHover');
              break;
          //pfe2 hover end
      }
  }
  
  function displayInlineHide(e, id) {
      var id = (this.id) ? this.id : id;
      // kill the default behaviour
      // on all clicks except checkbox
  
      // Hover variables
      var cscHover = document.getElementById("csc-information");
      var saveInfoHover = document.getElementById("save-information");
      var onlycardInfoHover = document.getElementById("onlycard-information");
      //pfe2 hover start
      var ccOnFileInfo = document.getElementById("ccOnFile-information");
      var prePaidCardInfo = document.getElementById("prePaidCard-information");
      //pfe2 hover end
  
      switch (id){
          case "csc-hover":
              YAHOO.util.Dom.replaceClass('csc-def', 'quick-faq-hover','quick-faq');
              break;
          case "changeLinkAnchor":
              YAHOO.util.Dom.replaceClass('save-info-def', 'quick-faq-hover','quick-faq');
              break;
          case "onlycard-hover":
              YAHOO.util.Dom.replaceClass('onlycard-def', 'quick-faq-hover','quick-faq');
              break;
          //pfe2 hover start
          case "ccOnFile-hover":
              YAHOO.util.Dom.replaceClass('ccOnFileDef', 'ccOnFileHover','ccOnFileNoHover');
              break;
          case "prePaidCard-hover":
              YAHOO.util.Dom.replaceClass('prePaidCardDef', 'prePaidCardHover','prePaidCardNoHover');
              break;
          //pfe2 hover end
      }
  }
	// WAX Booster Expand
	function showBillingFields(e) {
		YAHOO.util.Event.preventDefault(e);
		YAHOO.util.Dom.removeClass('billing-info-form','accessAid');
		YAHOO.util.Dom.addClass('billing-info-completed','accessAid');
		var expanded = document.createElement('input');
		expanded.setAttribute('type', 'hidden');
		expanded.setAttribute('name', 'expanded_billing_info');
		expanded.setAttribute('value', 'true');
		document.getElementById('billing-info-form').appendChild(expanded);
	}
	function showContactFields(e) {
		YAHOO.util.Event.preventDefault(e);
		YAHOO.util.Dom.removeClass('contact-info-form','accessAid');
		YAHOO.util.Dom.addClass('contact-info-completed','accessAid');
		var expanded = document.createElement('input');
		expanded.setAttribute('type', 'hidden');
		expanded.setAttribute('name', 'expanded_contact_info');
		expanded.setAttribute('value', 'true');
		document.getElementById('contact-info-form').appendChild(expanded);
	}
  
  
  //Bind all events
  YAHOO.util.Event.addListener(window, "load", YAHOO.unityBilling.creditCard);
  YAHOO.util.Event.addListener(window, "load", YAHOO.unityBilling.account);
  YAHOO.util.Event.addListener("H_PhoneNumber", "blur", YAHOO.unityBilling.phone);
  YAHOO.util.Event.addListener('phone-home', 'blur', YAHOO.unityBilling.phone);
  YAHOO.util.Event.addListener(window, "load", highlight);
  YAHOO.util.Event.addListener("csc-hover", "mouseover", displayInlineShow);
  YAHOO.util.Event.addListener("csc-hover", "mouseout", displayInlineHide);
  YAHOO.util.Event.addListener("changeLinkAnchor", "mouseover", displayInlineShow);
  YAHOO.util.Event.addListener("changeLinkAnchor", "mouseout", displayInlineHide);
  YAHOO.util.Event.addListener("onlycard-hover", "mouseover", displayInlineShow);
  YAHOO.util.Event.addListener("onlycard-hover", "mouseout", displayInlineHide);
  YAHOO.util.Event.addListener(document, 'click', detectCCType);
  //pfe2 hover start
  YAHOO.util.Event.addListener("ccOnFile-hover", "mouseover", displayInlineShow);
  YAHOO.util.Event.addListener("ccOnFile-hover", "mouseout", displayInlineHide);
  YAHOO.util.Event.addListener("prePaidCard-hover", "mouseover", displayInlineShow);
  YAHOO.util.Event.addListener("prePaidCard-hover", "mouseout", displayInlineHide);
  //pfe2 hover end
  // Wax Booster start
  YAHOO.util.Event.addListener("link-billing-information", "click", showBillingFields);
  YAHOO.util.Event.addListener("link-contact-information", "click", showContactFields);
  // Wax Booster end
