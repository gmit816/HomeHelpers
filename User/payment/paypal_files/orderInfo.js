// Disable the button in FireFox
function isFireFox()
{
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=parseFloat(b_version);
if ((browser=="Netscape") && (version>=4))
  	{return true;}
	else
	{return false;}	
}

/* Used so that for JS enabled browsers the seller-notes box doesn't appear */
document.write("<style type='text/css'>");

/* 16555 starts here */

document.write("a#col_calculate-total-link {display: inline;}");
document.write("a#col_outside-us-link {display: inline;}");
document.write("a#col_inside-us-link {display: inline;}");

document.write("a#exp_calculate-total-link {display: inline;}");
document.write("a#exp_outside-us-link {display: inline;}");
document.write("a#exp_inside-us-link {display: inline;}");
document.write("a#exp_zip-change-link {display: inline;}");
document.write("span.change-link-wrapper {display: inline;}");

//document.write("#col_shipping-info-row {display: none;}");
document.write("div#col_inside-us {display:none;}");
document.write("div#col_outside-us {display:none;}");

document.write("div#exp_inside-us {display:none;}");
document.write("div#exp_outside-us {display:none;}");

document.write("span#col_zipcode-us{display:none;}");
document.write("span#exp_zipcode-us{display:none;}");

/* 16555 ends here */

document.write("table#cart td#notes div#sellerNotesCont { display: none;}");
document.write("table#cart td#notes div#giftNotesCount { display: none;}");
document.write("table#cart td#notes div textarea#seller-notes { display: none;}");

document.write("</style>");

/* CONSTANTS */
/* variables are commented #PPSCR00629723 title are not getting localised
var TITLE_TAG_COLLAPSED = "Click to view purchase details";
var TITLE_TAG_EXPANDED = "Click to close purchase details"; */
/**
 * Original From: Dustin Diaz - Vitamin
 * Modified by: Emanuele Fabrizio
 */
YAHOO.widget.Effect = function(el) {
	this.oEl = YAHOO.util.Dom.get(el);
	this.height = parseInt(YAHOO.util.Dom.getStyle(this.oEl,'height'));
	this.width = parseInt(YAHOO.util.Dom.getStyle(this.oEl,'width'));
};

/**
 * Performs the closing of the widget towards the top. The iTimer takes
 * an integer in seconds. The onComplete callback function it's not used
 */
YAHOO.widget.Effect.prototype.BlindUp = function(iTimer, onComplete) {
	var timer = iTimer || 1;
	// Make sure TO NOT SPECIFY a unit of percentage or Firefox will be confused
	var blind = new YAHOO.util.Anim(this.oEl, { height: { to:0 } }, timer, YAHOO.util.Easing.easeOut);

	if ( onComplete ) {
		blind.onComplete.subscribe(onComplete);
	}
	blind.animate();
};

/**
 * Performs the opening of the widget towards the bottom. The iTimer takes
 * an integer in seconds. The onComplete callback function it's not used
 */
YAHOO.widget.Effect.prototype.BlindDown = function(iTimer, onComplete) {
	var timer = iTimer || 1;

	this.oEl.style.visibility = 'hidden';
	this.oEl.style.overflow = 'hidden';
	this.oEl.style.height = '';

	var finalHeight = parseInt(YAHOO.util.Dom.getStyle(this.oEl,'height'));

	this.oEl.style.height = '0';
	this.oEl.style.visibility = 'visible';

	//Make sure TO SPECIFY a unit of percentage or IE will not expand the item completely
	var blind = new YAHOO.util.Anim(this.oEl, { height: { to:finalHeight, from:0, unit: '%'} }, timer, YAHOO.util.Easing.easeOut);

	if ( onComplete ) {
		blind.onComplete.subscribe(onComplete);
	}
	blind.animate();
};

/**
 * This controller applies to the container with ID purchase-detail which in
 * turn will execute the animation on the container with ID of cover
 */
toggle = function() {
	var $D = YAHOO.util.Dom;
	var $E = YAHOO.util.Event;
	var $ = $D.get;
	var objExpando = null;
	var TITLE_TAG_COLLAPSED;
	var TITLE_TAG_EXPANDED;
	
	return {
		init : function() {
			objExpando = $('expander');
			if( !isOrderEditable() ){
				$D.addClass('purchase-detail','collapsed');
			}
			$E.on('expander','click',this.controller,$('cover'),true);
		},
		controller : function(e) {
			var z = new YAHOO.widget.Effect(this);
			if ( !$D.hasClass('purchase-detail','collapsed') ) {
				$D.addClass('purchase-detail','collapsed')
				z.BlindUp(2);
				if( objExpando )
				{
				TITLE_TAG_COLLAPSED =document.getElementById('expander') ? document.getElementById('expander').innerHTML: "";
					objExpando.title = TITLE_TAG_COLLAPSED
					//document.getElementById("expander").style.position ="relative";
					document.getElementById("expander").style.top = "5px";
				}
			}
			else {
				$D.removeClass('purchase-detail','collapsed')
				z.BlindDown(2);
				if( objExpando )
				{
				TITLE_TAG_EXPANDED = document.getElementById('titleExpanded') ? document.getElementById('titleExpanded').innerHTML: "";
					objExpando.title = TITLE_TAG_EXPANDED; 
					document.getElementById("expander").style.position ="";
					document.getElementById("expander").style.top = 0;
				}
			}
			$E.stopEvent(e);
		}
	};
}();

/**
 * Method used to check whether there are any fields in the order details
 * component which are editable. If so the method returns true
 */
function isOrderEditable(){
	var result = false;
	var objValue = document.getElementById( 'editable-order' );
	if( objValue ){
		result = ( objValue.value == '1' ) ? true : false;
	}
	return result;
};

/**
 * Method invoked to display all textarea tags which are within the container
 * with ID of notes. It also toggles the controller link seller-notes-toggle
 * to add the appropriate CSS class
 */

YAHOO.util.Event.addListener( window, 'load', BE2NotesChanges);

YAHOO.util.Event.addListener('cancelNote', 'click', cancelNotesTextArea);
YAHOO.util.Event.addListener('saveNote', 'click', saveNotesTextArea);

YAHOO.util.Event.addListener('cancelGiftNote', 'click', cancelGiftTextArea);
YAHOO.util.Event.addListener('applyGiftNote', 'click', applyGiftNotes);

function BE2NotesChanges(){
	var truncaedDescriptionToogle = YAHOO.util.Dom.getElementsByClassName('truncatedDescriptionHide', 'div');
	if(truncaedDescriptionToogle){
		for(var i = 0; i < truncaedDescriptionToogle.length; i++ ){
			YAHOO.util.Dom.setStyle(truncaedDescriptionToogle[i],'display','block');
		}
	}
	YAHOO.util.Dom.removeClass('addInstructions', 'opened')
	YAHOO.util.Dom.removeClass('changeInstructions', 'opened')
	
	YAHOO.util.Dom.removeClass('addGiftOptions', 'opened')
	YAHOO.util.Dom.removeClass('changeGiftOptions', 'opened')
	
	YAHOO.util.Event.onAvailable( "sellerNotesCont", saveNotesTextArea, this);
	YAHOO.util.Event.onAvailable( "sellerNotesCont", textAreaOperations);

	YAHOO.util.Event.onAvailable( "giftNotesCount", applyGiftNotes, this);
	YAHOO.util.Event.onAvailable( "giftNotesCount", giftTextAreaOperations);
}

//Notes textarea operation
function textAreaOperations(){
	YAHOO.util.Event.addListener('sellerNotesNew', 'keyup', charactersCount);
	YAHOO.util.Event.addListener('sellerNotesNew', 'paste', pastecharactersCount("sellerNotesNew"));
	YAHOO.util.Event.addListener('sellerNotesNew', 'cut', cutcharactersCount("sellerNotesNew"));
}

function giftTextAreaOperations(){
	YAHOO.util.Event.addListener('inputGiftMessage', 'keyup', giftNoteCharCnt);
	YAHOO.util.Event.addListener('inputGiftMessage', 'paste', pastecharactersCount("inputGiftMessage"));
	YAHOO.util.Event.addListener('inputGiftMessage', 'cut', cutcharactersCount("inputGiftMessage"));
}

//Global Variables
var giftWrapBol = false;
var giftReceiptBol = false;
var giftMsg = false;

//Can be used to ascertain the checkbox is checked or unchecked
function checkboxCheckUncheck(chkBox){
	var chkBol;
	chkBol = false;
	if(document.getElementById(chkBox)){
		chkBol = (document.getElementById(chkBox).checked)?true:false;
	}
	return chkBol;
}

//Cancel operation for gift notes
 function cancelGiftTextArea(e, clckId){
	YAHOO.util.Event.preventDefault(e);
	
	//Gift option PAYPAL.merchant.giftOptionHandler
	PAYPAL.merchant.giftOptionHandler.setGiftOptionAttributes();
	
	var giftMsgPresent;
	giftMsgPresent=false;

	if(document.getElementById('inputGiftMessage')){
		if(this.id == "cancelGiftNote" || clckId == "sellerNotesToggleNew"){
		var giftNote = document.getElementById('inputGiftMessage').value;
		giftNote = giftNote.replace(/^\s+|\s+$/g,"");
		savedGiftNotes = savedGiftNotes.replace(/^\s+|\s+$/g,"");
		}
		if(savedGiftNotes != ""){
			document.getElementById('giftNotesShown').innerHTML = savedTruncatedGiftNotes;
			document.getElementById('inputGiftMessage').value = savedGiftNotes;
			document.getElementById('giftNotesCharacterCount').innerHTML = savedGiftNotesCount;
			YAHOO.util.Dom.removeClass('giftNotesTxt', 'hide');
			giftMsgPresent=true;
		}
		else{
			document.getElementById('inputGiftMessage').value = "";
			document.getElementById('giftNotesShown').innerHTML = "";
			document.getElementById('giftNotesCharacterCount').innerHTML = "150";
		}
	}
	
	if(giftMsgPresent == false && checkboxCheckUncheck('gift_wrap_required') == false && checkboxCheckUncheck('gift_receipt') == false){
		YAHOO.util.Dom.removeClass('addGiftOptions', 'hide')
		YAHOO.util.Dom.addClass('addGiftOptions', 'show');
		YAHOO.util.Dom.removeClass('changeGiftOptions', 'show')
		YAHOO.util.Dom.addClass('changeGiftOptions', 'hide');
		YAHOO.util.Dom.addClass('giftNotesTxt', 'hide');
	}
	
	if(checkboxCheckUncheck('gift_receipt') == false){
		YAHOO.util.Dom.addClass('giftReceipt', 'hide');
	}
	else{
		YAHOO.util.Dom.removeClass('giftReceipt', 'hide');
	}

	PAYPAL.reset.margin.orderInfo.cancelInstructions();
	YAHOO.util.Dom.setStyle('giftNotesCount', 'display', 'none');
	YAHOO.util.Dom.removeClass('addGiftOptions', 'opened')
	YAHOO.util.Dom.removeClass('changeGiftOptions', 'opened')
	YAHOO.util.Dom.removeClass('sellerNotesWrapper','sNotesWrapper');
 }

  //Save operation for notes
 function applyGiftNotes(e){
	YAHOO.util.Event.preventDefault(e);

	if(document.getElementById('inputGiftMessage')){
		var giftNote = document.getElementById('inputGiftMessage').value;
		giftNote = giftNote.replace(/^\s+|\s+$/g,"");
	}

	var bolGiftNote;
	bolGiftNote=false;
	if(typeof giftNote!="undefined"){if(giftNote!=""){bolGiftNote=true;}}

	if (bolGiftNote == true || checkboxCheckUncheck('gift_wrap_required') == true || checkboxCheckUncheck('gift_receipt') == true){
		if(document.getElementById('inputGiftMessage') && giftNote != ""){
			document.getElementById('inputGiftMessage').value = giftNote;
			truncatedGiftNotes(giftNote);
			giftMsg = true;
		}
		YAHOO.util.Dom.removeClass(document.getElementById("changeGiftOptions"), 'hide')
		YAHOO.util.Dom.addClass(document.getElementById('changeGiftOptions'), 'show');
		YAHOO.util.Dom.removeClass(document.getElementById("addGiftOptions"), 'show')
		YAHOO.util.Dom.addClass(document.getElementById('addGiftOptions'), 'hide');
	}
	else{
		if(document.getElementById('inputGiftMessage')){document.getElementById('inputGiftMessage').value=""};
		YAHOO.util.Dom.removeClass('changeGiftOptions', 'show')
		YAHOO.util.Dom.addClass('changeGiftOptions', 'hide');
		YAHOO.util.Dom.removeClass('addGiftOptions', 'hide')
		YAHOO.util.Dom.addClass('addGiftOptions', 'show');
		YAHOO.util.Dom.addClass('giftNotesTxt', 'hide');
		if(document.getElementById('giftNotesCharacterCount')){document.getElementById('giftNotesCharacterCount').innerHTML="150";}
		YAHOO.util.Dom.setStyle('giftNotesCount', 'display', 'none');
		YAHOO.util.Dom.removeClass('addGiftOptions', 'opened')
		YAHOO.util.Dom.removeClass('changeGiftOptions', 'opened')
		YAHOO.util.Dom.removeClass('sellerNotesWrapper','sNotesWrapper');
		if(bolGiftNote == true ){YAHOO.util.Dom.removeClass('giftNotesTxt','hide');}else{YAHOO.util.Dom.addClass('giftNotesTxt','hide');}
	}
	
	//When Apply button is clicked and Gift wrap and Gift receipt is present
	if((e.type == "click" && e.type != undefined)){
		if(giftMsg == true || checkboxCheckUncheck('gift_wrap_required') == true || giftWrapBol == true || checkboxCheckUncheck('gift_receipt') == true || giftReceiptBol == true){

			var reviewForm = document.getElementById("reviewForm");
			if(giftWrapAmtBol == true){
				if(checkboxCheckUncheck('gift_wrap_required') == true || giftWrapBol == true){
					YAHOO.util.Dom.removeClass('gift_wrap_amt', 'hide');
					YAHOO.util.Dom.addClass('gift_wrap_remove', 'hide');
					
					var giftWrapNode = document.getElementById('gw_amount');
					var getLastChild = giftWrapNode.lastChild;
					if(document.getElementById('gw_amount')){
						var getLastChild = giftWrapNode.lastChild;
						if(getLastChild.nodeType == 3){
							getLastChild.nodeValue = "";
						}
					}
					YAHOO.util.Dom.removeClass('loading_gift_wrap', 'hide');
				}
			}
			
			//Send cgi with Ajax Form submit
			var hiddenVar = document.createElement('input');
			hiddenVar.id = "applyGNote";
			hiddenVar.type = "hidden";
			hiddenVar.name = "apply_gift_option";
			reviewForm.appendChild(hiddenVar);

			var beAjaxSubmitHidden = document.createElement('input');
			beAjaxSubmitHidden.id = "beAjaxSubmit";
			beAjaxSubmitHidden.type = "hidden";
			beAjaxSubmitHidden.name = "be_ajax_submit";
			reviewForm.appendChild(beAjaxSubmitHidden);
			
			enablePayButtons(false);
			
			//Remove gift wrap in box
			if(giftWrapBol == true && checkboxCheckUncheck('gift_wrap_required') == false){
				disableShipHndlgInsrncDpd(true);
				disableGiftOptionButtns(true);
				YAHOO.util.Dom.addClass('gift_wrap_remove', 'hide');
				PAYPAL.util.Connect.submitForm(reviewForm, {callback : PAYPAL.merchant.buyerExperience.removeGiftWrapOption, method: "POST"});
			}
			//Add gift wrap in box and Add gift receipt or gift message
			else if(giftWrapBol == false && checkboxCheckUncheck('gift_wrap_required') == true){
				disableShipHndlgInsrncDpd(true);
				disableGiftOptionButtns(true);
				YAHOO.util.Dom.addClass('gift_wrap_remove', 'hide');
				PAYPAL.util.Connect.submitForm(reviewForm, {callback : PAYPAL.merchant.buyerExperience.updateGiftWrapOpt, method: "POST"});
			}
			//Add gift receipt or gift message
			else{
				disableShipHndlgInsrncDpd(true);
				disableGiftOptionButtns(true);
				YAHOO.util.Dom.addClass('gift_wrap_remove', 'hide');
				PAYPAL.util.Connect.submitForm(reviewForm, {callback : PAYPAL.merchant.buyerExperience.updateGiftWrapOpt, method: "POST"});
			}
			
			//Remove cgi sent for Ajax Form submit
			var hVar = document.getElementById('applyGNote');
			if(document.getElementById('applyGNote')){
				reviewForm.removeChild(hVar);												
			}

			var hBeAjaxSubmit = document.getElementById('beAjaxSubmit');
			if(document.getElementById('beAjaxSubmit')){
				reviewForm.removeChild(hBeAjaxSubmit);												
			}
			
		}
	}
	
	PAYPAL.reset.margin.orderInfo.saveInstructions();
	YAHOO.util.Dom.setStyle('giftNotesCount', 'display', 'none');
	YAHOO.util.Dom.removeClass('addGiftOptions', 'opened')
	YAHOO.util.Dom.removeClass('changeGiftOptions', 'opened')
	YAHOO.util.Dom.removeClass('sellerNotesWrapper','sNotesWrapper');

	if(!giftNote == ""){
		YAHOO.util.Dom.removeClass('giftNotesTxt','hide');
	}
	else{
		YAHOO.util.Dom.addClass('giftNotesTxt','hide');
	}

	if(checkboxCheckUncheck('gift_receipt') == true){ 
		YAHOO.util.Dom.removeClass('giftReceipt','hide');
	}
	else{
		YAHOO.util.Dom.addClass('giftReceipt','hide');
	}
}
 
function truncatedGiftNotes(giftNote){
	var	getGiftNote = giftNote;
	var giftNoteLen = getGiftNote.length;
	var dispGiftNote;
	if (giftNoteLen < 30 ){
		dispGiftNote = getGiftNote;
	}
	else{
		dispGiftNote = getGiftNote.substring(0,30)+" ...";
	}
	 giftNoteCharCnt();
	document.getElementById('giftNotesShown').innerHTML = dispGiftNote;
	YAHOO.util.Dom.removeClass('giftNotesTxt', 'hide');
}

//Count the Characters for notes
var giftNoteMaxCnt = "150"; 
function giftNoteCharCnt(){
	if(document.getElementById('inputGiftMessage')){
		var getGiftNote = document.getElementById('inputGiftMessage').value;
		getGiftNote = getGiftNote.replace(/^\s+|\s+$/g,"");
		var giftNoteLen = getGiftNote.length;
		if(giftNoteLen > giftNoteMaxCnt){
			getGiftNote = getGiftNote.substring(0,giftNoteMaxCnt);
			document.getElementById('inputGiftMessage').value = getGiftNote;
			document.getElementById('giftNotesCharacterCount').innerHTML = "0";
			return false;
		}
		document.getElementById('giftNotesCharacterCount').innerHTML = giftNoteMaxCnt-giftNoteLen;
	}
}

//Cancel operation for notes
 function cancelNotesTextArea(e, clckId){
 YAHOO.util.Event.preventDefault(e);
	if (this.id == "cancelNote" || clckId == "giftOptionsToggle"){
	var sellerNotesGot = document.getElementById('sellerNotesNew').value;
	sellerNotesGot = sellerNotesGot.replace(/^\s+|\s+$/g,"");
	savedSellerNotes = savedSellerNotes.replace(/^\s+|\s+$/g,"");
	var notesSpaceTest = /^\s+$/;
		if (savedSellerNotes == ""){
			document.getElementById('sellerNotesNew').value = "";
			document.getElementById('sellerNotesShown').innerHTML = "";
			document.getElementById('notesCharacterCount').innerHTML = "255";
			document.getElementById('addInstructions').title = document.getElementById('addInstructions').childNodes[0].nodeValue;
			YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'hide')
			YAHOO.util.Dom.addClass(document.getElementById('addInstructions'), 'show');
			YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'show')
			YAHOO.util.Dom.addClass(document.getElementById('changeInstructions'), 'hide');
		}
		else{
			document.getElementById('sellerNotesShown').innerHTML = savedTruncatedNotes;
			document.getElementById('sellerNotesNew').value = savedSellerNotes;
			document.getElementById('notesCharacterCount').innerHTML = savedNotesCount;
		}
	PAYPAL.reset.margin.orderInfo.cancelInstructions();
	document.getElementById('sellerNotesCont').style.display = "none";
	YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'opened')
	YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'opened')
	}
 }

//Save operation for notes
 function saveNotesTextArea(e){
	 YAHOO.util.Event.preventDefault(e);
	 var notesSpaceTest = /^\s+$/;
	 var sellerNotesGot = document.getElementById('sellerNotesNew').value;
	 sellerNotesGot = sellerNotesGot.replace(/^\s+|\s+$/g,"");
		if (notesSpaceTest.test(sellerNotesGot) || sellerNotesGot == ""){
			document.getElementById('sellerNotesNew').value = "";
			document.getElementById('addInstructions').title = document.getElementById('addInstructions').childNodes[0].nodeValue;
			YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'show')
			YAHOO.util.Dom.addClass(document.getElementById('changeInstructions'), 'hide');
			YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'hide')
			YAHOO.util.Dom.addClass(document.getElementById('addInstructions'), 'show');
			document.getElementById('notesCharacterCount').innerHTML = "255";
		}
		else{
			document.getElementById('sellerNotesNew').value = sellerNotesGot;
			document.getElementById('changeInstructions').title = document.getElementById('changeInstructions').childNodes[0].nodeValue;
			YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'hide')
			YAHOO.util.Dom.addClass(document.getElementById('changeInstructions'), 'show');
			YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'show')
			YAHOO.util.Dom.addClass(document.getElementById('addInstructions'), 'hide');
			truncatedInstructionShown(sellerNotesGot);
		}
	PAYPAL.reset.margin.orderInfo.saveInstructions();
	document.getElementById('sellerNotesCont').style.display = "none";
	YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'opened')
	YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'opened')
}

function truncatedInstructionShown(givenInstructions){
	var	sellerNotesGot = givenInstructions;
	var sellerNoteLength = sellerNotesGot.length;
	if (sellerNoteLength< 30 ){
		sellerNoteToDisp = sellerNotesGot;
	}
	else{
		sellerNoteToDisp = sellerNotesGot.substring(0,30)+" ...";
	}
	 charactersCount();
	document.getElementById('sellerNotesShown').innerHTML = sellerNoteToDisp;
}

//Count the Characters for notes
var sellerNotesMaxCount = "255"; 
function charactersCount(){
	var sellerNotesGot = document.getElementById('sellerNotesNew').value;
	sellerNotesGot = sellerNotesGot.replace(/^\s+|\s+$/g,"");
	var sellerNoteLength = sellerNotesGot.length;
	if(sellerNoteLength > sellerNotesMaxCount){
		sellerNotesGot = sellerNotesGot.substring(0,sellerNotesMaxCount);
		document.getElementById('sellerNotesNew').value = sellerNotesGot;
		document.getElementById('notesCharacterCount').innerHTML = "0";
		return false;
	}
	document.getElementById('notesCharacterCount').innerHTML = sellerNotesMaxCount-sellerNoteLength;
}

function pastecharactersCount(textArea){
	if(textArea == "sellerNotesNew"){
		setTimeout("charactersCount();",200);
	}
	if(textArea == "inputGiftMessage"){
		setTimeout("giftNoteCharCnt();",200);
	}
}

function cutcharactersCount(textArea){
	if(textArea == "sellerNotesNew"){
		setTimeout("charactersCount();",200);
	}
	if(textArea == "inputGiftMessage"){
		setTimeout("giftNoteCharCnt();",200);
	}
}

PAYPAL.namespace("reset.margin.orderInfo");

PAYPAL.reset.margin.orderInfo = {
	addInstructions: function(){
		var classNameExists = YAHOO.util.Dom.hasClass('buyer-experience-spacer', 'order-summary-default-margin');
		if(classNameExists){
			YAHOO.util.Dom.removeClass('buyer-experience-spacer', 'order-summary-default-margin');
			YAHOO.util.Dom.addClass('buyer-experience-spacer', setPrimaryDivClass('addinstr'));
		}
		else{
			YAHOO.util.Dom.replaceClass('buyer-experience-spacer', getPresentPrimaryDivClass(), setPrimaryDivClass('addinstr'));
		}
	},
	saveInstructions: function(){
		YAHOO.util.Dom.removeClass('buyer-experience-spacer', getPresentPrimaryDivClass());
		YAHOO.util.Dom.addClass('buyer-experience-spacer', 'order-summary-default-margin');
	},
	cancelInstructions: function(){
		YAHOO.util.Dom.replaceClass('buyer-experience-spacer', getPresentPrimaryDivClass(), 'order-summary-default-margin');
	},
	addGiftOptions: function(){
		var classNameExists = YAHOO.util.Dom.hasClass('buyer-experience-spacer', 'order-summary-default-margin');
		if(classNameExists){
			YAHOO.util.Dom.removeClass('buyer-experience-spacer', 'order-summary-default-margin');
			YAHOO.util.Dom.addClass('buyer-experience-spacer', setPrimaryDivClass('giftopt'));
		}
		else{
			YAHOO.util.Dom.replaceClass('buyer-experience-spacer', getPresentPrimaryDivClass(), setPrimaryDivClass('giftopt'));
		}
	}
 };

 //Get the present class
 function getPresentPrimaryDivClass(){
	var getDivClass 
	if(document.getElementById('buyer-experience-spacer')){
		var allClasses = ["addinstr-shipping", "order-summary-default-margin", "addinstr-shipping-salestax", "addinstr-shipping-insuranceamt", "addinstr-shipping-insuranceamt-offerinsurance", "addinstr-shipping-salestax-insuranceamt", "addinstr-shipping-salestax-insuranceamt-offerinsurance", "addinstr-none", "addinstr-shippingamt", "addinstr-shippingamt-salestaxamt", "addinstr-shippingamt-insuranceamt", "addinstr-shippingamt-salestaxamt-insuranceamt", "giftopt-none", "giftopt-shipping", "giftopt-shipping-salestax", "giftopt-shipping-insuranceamt", "giftopt-shipping-insuranceamt-offerinsurance", "giftopt-shipping-salestax-insuranceamt", "giftopt-shipping-salestax-insuranceamt-offerinsurance", "giftopt-shippingamt", "giftopt-shippingamt-salestaxamt", "giftopt-shippingamt-insuranceamt", "giftopt-shippingamt-salestaxamt-insuranceamt", "addinstr-giftoption-shipping", "addinstr-giftoption-shipping-salestax", "addinstr-giftoption-shipping-insuranceamt", "addinstr-giftoption-shipping-insuranceamt-offerinsurance", "addinstr-giftoption-shipping-salestax-insuranceamt", "addinstr-giftoption-shipping-salestax-insuranceamt-offerinsurance", "addinstr-giftoption-none", "addinstr-giftoption-shippingamt", "addinstr-giftoption-shippingamt-salestaxamt", "addinstr-giftoption-shippingamt-insuranceamt", "addinstr-giftoption-shippingamt-salestaxamt-insuranceamt"]
		for(i=0; i<allClasses.length; i++){
			if(YAHOO.util.Dom.hasClass('buyer-experience-spacer', allClasses[i])){
				getDivClass = allClasses[i];
				break;
			}
		}
	}
	return getDivClass;
 }
 
 //Set the class
 function setPrimaryDivClass(clckId){
	var salesTax, shippingMethods, insuranceAmount, offerInsurance, setDivClass

	function checkClassStyle(whichcomponent){
		var classSytle
			switch(whichcomponent){
				case "salestax":
					if(document.getElementById('sTaxFlatRow')){
						if(YAHOO.util.Dom.hasClass('sTaxFlatRow', 'showtabrow')){
							classSytle = "showtabrow";
						}
						else{
							classSytle = YAHOO.util.Dom.getStyle('sTaxFlatRow', 'display');
						}
					}
					else if(document.getElementById('sTaxRow')){
						if(YAHOO.util.Dom.hasClass('sTaxRow', 'showtabrow')){
							classSytle = "showtabrow";
						}
					}
					break;
				case "insuranceamt":
					if(document.getElementById('insu_flat_row')){
						if(!(YAHOO.util.Dom.hasClass('insu_flat_row', 'hide'))){
							if(YAHOO.util.Dom.hasClass('insurance_opts_js', 'showinline')){
								classSytle = "showinline";
							}
							else{
								classSytle = YAHOO.util.Dom.getStyle('insu_flat_row', 'display');
							}
						}
					}
					else if(document.getElementById('insu_row')){
						if(YAHOO.util.Dom.hasClass('insu_row', 'showtabrow')){
							classSytle = "showtabrow";
						}
					}
					break;
			}
		
		return classSytle;
	}
	
	salesTax = checkClassStyle('salestax');
	shippingMethods = YAHOO.util.Dom.getStyle('exp_shipping-and-handling', 'display');
	insuranceAmount = checkClassStyle('insuranceamt');
	insuranceCallbackNo = YAHOO.util.Dom.hasClass('insu_flat_row', 'hide');
	offerInsurance = YAHOO.util.Dom.hasClass('insurance_opts_js', 'showinline');
	offerInsuranceOptions = YAHOO.util.Dom.hasClass('offer_insurance_options', 'accessAid');
	
	/* Gift message & Gift receipt */
	var GiftMsgRcpBol;
	giftMsgRcpBol = getGiftMsgRcpBol();
	function getGiftMsgRcpBol(){if(!YAHOO.util.Dom.hasClass('giftNotesTxt', "hide") || !YAHOO.util.Dom.hasClass('giftReceipt', "hide")){return true;}else{return false;}};
	
	/* Setting the Top Margin */
	if((salesTax == "table-row" || salesTax == "showtabrow" || salesTax == "block") && (shippingMethods == "table-row" || shippingMethods == "block") && (insuranceAmount == "table-row" || insuranceAmount == "block" || insuranceAmount == "showtabrow" || insuranceAmount == "showinline") && ((insuranceCallbackNo == false && offerInsurance == true) || (document.getElementById('offer_insurance_options') && (offerInsuranceOptions == false)))){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping-salestax-insuranceamt-offerinsurance";
			}
			else{
				setDivClass = clckId + "-shipping-salestax-insuranceamt-offerinsurance";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt-salestaxamt-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shippingamt-salestaxamt-insuranceamt";
			}
		}
	}
	else if((salesTax == "table-row" || salesTax == "showtabrow" || salesTax == "block") && (shippingMethods == "table-row" || shippingMethods == "block") && (insuranceAmount == "table-row" || insuranceAmount == "block" || insuranceAmount == "showtabrow" || insuranceAmount == "showinline")){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping-salestax-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shipping-salestax-insuranceamt";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt-salestaxamt-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shippingamt-salestaxamt-insuranceamt";
			}
		}
	}
	else if((salesTax == "table-row" || salesTax == "showtabrow" || salesTax == "block") && (shippingMethods == "table-row" || shippingMethods == "block")){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping-salestax";
			}
			else{
				setDivClass = clckId + "-shipping-salestax";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt-salestaxamt";
			}
			else{
				setDivClass = clckId + "-shippingamt-salestaxamt";
			}
		}
	}
	else if((shippingMethods == "table-row" || shippingMethods == "block") && (insuranceAmount == "table-row" || insuranceAmount == "block" || insuranceAmount == "showtabrow" || insuranceAmount == "showinline") && ((insuranceCallbackNo == false && offerInsurance == true) || (document.getElementById('offer_insurance_options') && (offerInsuranceOptions == false)))){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping-insuranceamt-offerinsurance";
			}
			else{
				setDivClass = clckId + "-shipping-insuranceamt-offerinsurance";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shippingamt-insuranceamt";
			}
		}
	}
	else if((shippingMethods == "table-row" || shippingMethods == "block") && (insuranceAmount == "table-row" || insuranceAmount == "block" || insuranceAmount == "showtabrow" || insuranceAmount == "showinline")){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shipping-insuranceamt";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt-insuranceamt";
			}
			else{
				setDivClass = clckId + "-shippingamt-insuranceamt";
			}
		}
	}
	else if(shippingMethods == "table-row" || shippingMethods == "block"){
		if(document.getElementById('shipping_method') || document.getElementById('shipping_opts_js')){
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shipping";
			}
			else{
				setDivClass = clckId + "-shipping";
			}
		}
		else{
			if(giftMsgRcpBol == true && clckId == 'addinstr'){
				setDivClass = "addinstr-giftoption-shippingamt";
			}
			else{
				setDivClass = clckId + "-shippingamt";
			}
		}
	}
	else{
		if(giftMsgRcpBol == true && clckId == 'addinstr'){
			setDivClass = "addinstr-giftoption-none";
		}
		else{
			setDivClass = clckId + "-none";
		}
	}
	
	return setDivClass;
 }
 
function enableNotesTextArea(e){
	var elements = null;
	if( document.getElementById('notes') ){
		var getGiftOptDispStyle = YAHOO.util.Dom.getStyle('giftNotesCount', 'display');
		if(getGiftOptDispStyle == "block"){
			cancelGiftTextArea(e, this.id);
		}
		if (document.getElementById('sellerNotesCont')){
			PAYPAL.reset.margin.orderInfo.addInstructions();
			YAHOO.util.Dom.addClass(document.getElementById('sellerNotesCont'), 'bluebox');
			document.getElementById('noteButtons').style.display = "block";
			savedTruncatedNotes = document.getElementById('sellerNotesShown').innerHTML;
			savedSellerNotes = document.getElementById('sellerNotesNew').value;
			savedNotesCount = document.getElementById('notesCharacterCount').innerHTML;
			document.getElementById('sellerNotesShown').innerHTML = "";
			YAHOO.util.Dom.removeClass(document.getElementById("notesCharacterCountTxtNonJs"), 'showinline')
			YAHOO.util.Dom.addClass(document.getElementById('notesCharacterCountTxtNonJs'), 'hide');
			YAHOO.util.Dom.removeClass(document.getElementById("notesCharacterCountTxtJs"), 'hide')
			YAHOO.util.Dom.addClass(document.getElementById('notesCharacterCountTxtJs'), 'showinline');
			document.getElementById('sellerNotesCont').style.display = "block";
		}
		elements = document.getElementById('notes').getElementsByTagName('textarea');
	}
	if( elements ){
		for( var i = 0; i < elements.length; i++ ){
			YAHOO.util.Dom.setStyle(elements[i],'display','block')
		}
		modifyLink( 'on' );
	}
};

function enableGiftNotesTextArea(e){
	var getAddInstrDispStyle = YAHOO.util.Dom.getStyle('sellerNotesCont', 'display');
	if(getAddInstrDispStyle == "block"){
		cancelNotesTextArea(e, this.id);
	}
	YAHOO.util.Dom.addClass(document.getElementById('giftNotesCount'), 'bluebox');
	document.getElementById('giftNoteButtons').style.display = "block";
	
	if(document.getElementById('inputGiftMessage')){
		savedTruncatedGiftNotes = document.getElementById('giftNotesShown').innerHTML;
		savedGiftNotes = document.getElementById('inputGiftMessage').value;
		savedGiftNotesCount = document.getElementById('giftNotesCharacterCount').innerHTML;
		document.getElementById('giftNotesShown').innerHTML = "";
	}
	PAYPAL.reset.margin.orderInfo.addGiftOptions();
	YAHOO.util.Dom.addClass('giftNotesTxt', 'hide');
	YAHOO.util.Dom.addClass('giftReceipt', 'hide');
	YAHOO.util.Dom.removeClass('giftNotesCharacterCountNonJs', 'showinline')
	YAHOO.util.Dom.addClass('giftNotesCharacterCountNonJs', 'hide');
	YAHOO.util.Dom.removeClass('giftNotesCharacterCountJs', 'hide')
	YAHOO.util.Dom.addClass('giftNotesCharacterCountJs', 'showinline');
	YAHOO.util.Dom.setStyle('giftNotesCount', 'display', 'block');
	YAHOO.util.Dom.addClass('sellerNotesWrapper', 'sNotesWrapper');
	
	YAHOO.util.Dom.addClass(document.getElementById('changeGiftOptions'), 'opened');
	YAHOO.util.Dom.addClass(document.getElementById('addGiftOptions'), 'opened');
};

/**
 * Used so that for JS enabled browsers the seller-notes-toggle link appears
 * with the proper visual design. If toggle has a value then the class 'opened'
 * is added, otherwise it gets removed
 */
function modifyLink(toggle){

	/* Spec 16555 starts */
	if (document.getElementById("item-quantity")) {
		var itemQty = document.getElementById("item-quantity").value;
 		
		if(itemQty>=10)	{
			document.getElementById("col_shipping-table").style.marginLeft="-10px";
			document.getElementById("col_shipping-table").style.width="100%";
		 }
	}
	/* Spec 16555 end */

	if( toggle == 'on' ){
		YAHOO.util.Dom.addClass(document.getElementById('seller-notes-toggle'), 'opened');
		YAHOO.util.Dom.addClass(document.getElementById('changeInstructions'), 'opened');
		YAHOO.util.Dom.addClass(document.getElementById('addInstructions'), 'opened');
	} else {
		YAHOO.util.Dom.removeClass(document.getElementById("seller-notes-toggle"), 'opened')
		YAHOO.util.Dom.removeClass(document.getElementById("addInstructions"), 'opened')
		YAHOO.util.Dom.removeClass(document.getElementById("changeInstructions"), 'opened')
	}
	if(document.getElementById("expander")){
	document.getElementById("expander").style.position ="relative";
	document.getElementById("expander").style.top = "5px";
	}
};


/* 16555 starts here */

function colShowInsideUS(){

		if (document.getElementById("col_calculate-shipping")) {
			var calculateShipping = document.getElementById("col_calculate-shipping");
			calculateShipping.style.display = "none"; 
		}
		
		if (document.getElementById("col_shipping-info-row")) {
			var shippingInfoRow = document.getElementById("col_shipping-info-row");
			shippingInfoRow.style.display = "block";
		}

		var insideUS = document.getElementById("col_inside-us");
		var outsideUS = document.getElementById("col_outside-us");
	
		insideUS.style.display = (isFireFox()) ? "block" : "inline";
		outsideUS.style.display = "none"; 

		if (document.getElementById("exp_calculate-shipping")) {
			var calculateShipping = document.getElementById("exp_calculate-shipping");
			calculateShipping.style.display = "none"; 
		}

		var insideUS = document.getElementById("exp_inside-us");
		var outsideUS = document.getElementById("exp_outside-us");
		
		insideUS.style.display = (isFireFox()) ? "block" : "inline";
		outsideUS.style.display = "none"; 

		if (document.getElementById("exp_shipping-and-handling")) {
			var shippingAndHandling = document.getElementById("exp_shipping-and-handling");
			shippingAndHandling.style.display = "none";
		}

		/*if (document.getElementById("exp_tax"))
		{
			var tax = document.getElementById("exp_tax");
			tax.style.display = "none"; 
		}

		if (document.getElementById("exp_total"))
		{
			var total = document.getElementById("exp_total");
			total.style.display = "none"; 
		}*/

		if (document.getElementById("col_shipping-and-handling")) {
			var shippingAndHandling = document.getElementById("col_shipping-and-handling");
			shippingAndHandling .style.display = "none";
		}

		/* if (document.getElementById("col_tax"))
		{
			var tax = document.getElementById("col_tax");
			tax.style.display = "none";
		}

		if (document.getElementById("col_total"))
		{
			var total = document.getElementById("col_total");
			total.style.display = "none";
		} */
};


function colShowOutsideUS(){

		if (document.getElementById("col_calculate-shipping")) {
			var calculateShipping = document.getElementById("col_calculate-shipping");
			calculateShipping.style.display = "none"; 
		}

		if (document.getElementById("col_shipping-info-row")) {
			var shippingInfoRow = document.getElementById("col_shipping-info-row");
			shippingInfoRow.style.display = "block";
		}

		var insideUS = document.getElementById("col_inside-us");
		var outsideUS = document.getElementById("col_outside-us");
	
		
		outsideUS.style.display = (isFireFox()) ? "block" : "inline";
		insideUS.style.display = "none";
		
		if (document.getElementById("exp_calculate-shipping")) {
			var calculateShipping = document.getElementById("exp_calculate-shipping");
			calculateShipping.style.display = "none"; 
		}

		var insideUS = document.getElementById("exp_inside-us");
		var outsideUS = document.getElementById("exp_outside-us");
	
		outsideUS.style.display = (isFireFox()) ? "block" : "inline";
		insideUS.style.display = "none";

		if (document.getElementById("exp_shipping-and-handling")) {
			var shippingAndHandling = document.getElementById("exp_shipping-and-handling");
			shippingAndHandling.style.display = "none";
		}

	/*	if (document.getElementById("exp_tax")) {
			var tax = document.getElementById("exp_tax");
			tax.style.display = "none";
		}

		if (document.getElementById("exp_total")) {
			var total = document.getElementById("exp_total");
			total.style.display = "none"; 
		} */

		if (document.getElementById("col_shipping-and-handling")) {
			var shippingAndHandling = document.getElementById("col_shipping-and-handling");
			shippingAndHandling .style.display = "none";

		}
	/*	if (document.getElementById("col_tax")) {
			var tax = document.getElementById("col_tax");
			tax.style.display = "none";
		}

		if (document.getElementById("col_total")) {
			var total = document.getElementById("col_total");
			total.style.display = "none";
		}  */
		
};

function colShowUSZipCodeField(){
	var zipCodeUS = document.getElementById("col_zipcode-us");
	var countryCode = document.getElementById("col_ship_to_country");

	var selIndex = countryCode.selectedIndex;
	zipCodeUS.style.display = (countryCode.options[selIndex].value == "US") ? "inline" : "none";

	var zipCodeUS = document.getElementById("exp_zipcode-us");
	var countryCode = document.getElementById("exp_ship_to_country");

	var selIndex = countryCode.selectedIndex;
	zipCodeUS.style.display = (countryCode.options[selIndex].value == "US") ? "inline" : "none";
};


function expShowUSZipCodeField(){
	var zipCodeUS = document.getElementById("exp_zipcode-us");
	var countryCode = document.getElementById("exp_ship_to_country");
	var selIndex = countryCode.selectedIndex;

	if (countryCode.options[selIndex].value=="US") {
		zipCodeUS.style.display = "inline"; 
	} else {
		zipCodeUS.style.display = "none"; 
	}
};


function submitTheForm() {
	var reviewForm = document.getElementById("reviewForm");
	reviewForm.submit();
};

function showShippingFields() {
	var shippingCalculatedBy = document.getElementById("shipping-calculated-by");
	if (shippingCalculatedBy.value == 'country') {
		colShowOutsideUS();
	} else {
		colShowInsideUS();
	}
};

function updateBothZipField() {
	var expShipToZip = document.getElementById("exp_ship_to_zip");
	var colShipToZip = document.getElementById("col_ship_to_zip");
	expShipToZip.value = colShipToZip.value;
};

function updateExpZipField() {
	if (document.getElementById("exp_ship_to_zip")) {
		var colShipToZip = document.getElementById("col_ship_to_zip");
		var expShipToZip = document.getElementById("exp_ship_to_zip");
		expShipToZip.value = colShipToZip.value;
	}
};

function updateColZipField() {
	if (document.getElementById("col_ship_to_zip")) {
		var colShipToZip = document.getElementById("col_ship_to_zip");
		var expShipToZip = document.getElementById("exp_ship_to_zip");
		colShipToZip.value = expShipToZip.value;
	}
};

/* 16555 ends here */


YAHOO.util.Event.addListener( window, 'load', modifyLink );
YAHOO.util.Event.addListener('seller-notes-toggle', 'click', enableNotesTextArea);
YAHOO.util.Event.addListener('sellerNotesToggleNew', 'click', enableNotesTextArea);
YAHOO.util.Event.addListener('giftOptionsToggle', 'click', enableGiftNotesTextArea);
YAHOO.util.Event.onAvailable('purchase-detail', toggle.init, toggle, true);


/* 16555 starts here */

YAHOO.util.Event.addListener('exp_calculate-total-link', 'click', colShowInsideUS);
YAHOO.util.Event.addListener('exp_outside-us-link', 'click', colShowOutsideUS);
YAHOO.util.Event.addListener('exp_inside-us-link', 'click', colShowInsideUS);

YAHOO.util.Event.addListener('col_calculate-total-link', 'click', colShowInsideUS);
YAHOO.util.Event.addListener('col_outside-us-link', 'click', colShowOutsideUS);
YAHOO.util.Event.addListener('col_inside-us-link', 'click', colShowInsideUS);

YAHOO.util.Event.addListener('col_ship_to_country', 'change', colShowUSZipCodeField);
YAHOO.util.Event.addListener('exp_ship_to_country', 'change', colShowUSZipCodeField);

YAHOO.util.Event.addListener('col_zip-change-link', 'click', showShippingFields);
YAHOO.util.Event.addListener('exp_zip-change-link', 'click', showShippingFields);

YAHOO.util.Event.addListener('col_ship_to_zip', 'keyup', updateExpZipField);
YAHOO.util.Event.addListener('exp_ship_to_zip', 'keyup', updateColZipField);


/* Widget Code added by Parthiban */

function getKeyCodeWidget(e) {
	var key = e ? e.which : window.event.keyCode;	
	return key;
};

function getFieldWidget(e) {
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

function dfltSubmitWidget(e) {
	var key = getKeyCodeWidget(e);
	var field = "";		
	
	// if <Enter> key was used
	if (key == 13) {
		field = getFieldWidget(e);		

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

document.onkeypress = dfltSubmitWidget;

/* 16555 ends here */
