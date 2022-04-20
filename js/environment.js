var CFG = { 'ssl' : window.location.protocol.toString() === 'https:' ? true : false };
var PATH = {};
var RDR = {};

/* Website base paths ------------------------------------*/
PATH.cdnRoot = 'http://localhost:8011/media';
PATH.cdnRootSecure = 'https://cdn.cars.dolimg.com/worldofcars';
PATH.cdn = ( CFG.ssl ? PATH.cdnRootSecure : PATH.cdnRoot ) +'/1.1';
PATH.css = PATH.cdn +'/css';
PATH.img = PATH.cdn +'/img';
PATH.js = PATH.cdn +'/js';
PATH.swf = PATH.cdn +'/swf';
PATH.xml = PATH.cdn +'/xml';
PATH.siteRoot = 'http://localhost:8011';
PATH.siteRootSecure = 'https://worldofcars.go.com';
PATH.apiRoot = 'http://localhost:8014'
/*--------------------------------------------------------*/

/* Config ------------------------------------------------*/
CFG.appsSecure = 'https://apps.worldofcars.go.com'; // http on dev, https on qa/live
CFG.apps = CFG.ssl ? CFG.appsSecure : 'http://localhost:8013';
CFG.appsProxy = ( CFG.ssl ? PATH.siteRootSecure : PATH.siteRoot ) + '/apps';
CFG.carsDSSecure = CFG.appsSecure + '/carsds';
CFG.carsDS = CFG.apps + '/carsds';
CFG.carsDSProxy =  CFG.appsProxy + '/carsds';
CFG.apiSecure = CFG.carsDSSecure + '/api/';
CFG.api = CFG.carsDS + '/api/';
CFG.apiProxy = CFG.carsDSProxy + '/api/';
CFG.dxdSecure = 'https://apps.dxd.go.com/dxd'; // live = apps.dxd.go.com
CFG.dxd = CFG.ssl ? CFG.dxdSecure : 'http://apps.dxd.go.com/dxd'; // live = apps.dxd.go.com
CFG.swfBaseUrl = '';
CFG.clientVersion = '1.1'; // TODO: Real version

CFG.ajaxLogin = CFG.carsDS + 'AccountLoginRequest'; // same-domain login request for AJAX apps
CFG.ajaxLogout = CFG.apiProxy +'AccountLogoutRequest'; // same-domain logout request for AJAX apps
CFG.assetsBaseUrl = PATH.cdnRoot +'/game/assets/';
CFG.assetServiceHost = CFG.carsDS +'/messagebroker/amf';
CFG.chatPermissionUrl = CFG.dxd +'/flashAPI/sendChatPermissionEmails';
CFG.dxdLogin = CFG.dxdSecure +'/flashAPI/login';
CFG.blogRSS = '/blog/cars/feed2/entries/rss';
CFG.commerce = 'https://register.go.com/commerce/flashapi';
CFG.eventum = CFG.apps +'/logsubmit/post.php';
CFG.flashExpressInstall = 'http://a.dolimg.com/swf/dcom/expressInstall.swf';
CFG.locale = 'en_US';
CFG.login = PATH.apiRoot + '/carsds/api/AccountLoginRequest';
CFG.newsletterID = 'Disney_WorldofCars_NLO_102008,WDIGFamilySites';
CFG.promotionName = 'World_Of_Cars_Online_Virtual_World';
CFG.register = 'https://register.go.com/global/cars';
CFG.templateId = 851;
CFG.whoAmI = PATH.apiRoot + '/carsds/api/WhoAmIRequest';

/* Account Linking */
CFG.psn = 'https://store.playstation.com/external'; // Playstation Network
CFG.wlid = 'https://wlid.disneyis.com/cars2'; // Windows Live ID Title Server
/*--------------------------------------------------------*/

/* Redirect URLs -----------------------------------------*/
RDR.afk = PATH.siteRoot +'/afk/';
RDR.accountHold = CFG.dxd +'/guestservices/your_account/account_hold';
RDR.blog = PATH.siteRoot +'/blog/';
RDR.community = PATH.siteRoot +'/community/';
RDR.manageAccount = PATH.siteRootSecure +'/membership/manage-account/';
RDR.connectFailure = PATH.siteRoot +'/help/frequently-asked-questions/cant-connect/';
RDR.dNameSelect = RDR.manageAccount;
RDR.enterCodes = PATH.siteRoot +'/';
RDR.feedback = PATH.siteRoot +'/help/contact-us/';
RDR.flashUpgrade = PATH.siteRoot +'/flash-upgrade/';
RDR.help = PATH.siteRoot +'/help/';
RDR.home = PATH.siteRoot +'/';
RDR.logOff = RDR.community;
RDR.openChat = RDR.manageAccount;
RDR.parents = PATH.siteRoot +'/parents/';
RDR.play = PATH.siteRoot +'/play/login.html';
RDR.purchase = PATH.siteRootSecure +'/membership/purchase/';
RDR.reportabug = PATH.siteRoot +'/help/contact-us/report-a-bug/';
RDR.signUpNow = PATH.siteRoot +'/membership/';
RDR.sponsorship = PATH.siteRoot +'/membership/';
RDR.survey = PATH.siteRoot +'/thank-you/';
/*--------------------------------------------------------*/

/* Game client -------------------------------------------*/
var GAME = {
	'flashVars' : {
		'assetsBaseUrl' : CFG.assetsBaseUrl,
		'assetServiceHost' : CFG.assetServiceHost,
		'cacheBust' : true,
		'carsServiceHost' : CFG.assetServiceHost,
		'cast' : false,
		'chatPermissionUrl' : CFG.chatPermissionUrl,
		'cheats' : true,
		'clientVersion' : window.clientVersion || false,
		'customMsg' : '',
		'disableAssetService' : true,
		'errorReportUrl' : RDR.reportabug,
		'isoMapServiceHost' : CFG.carsDS,
		'live' : true,
		'loginURL' : CFG.login,
		'mapAssetsBaseUrl' : CFG.assetsBaseUrl,
		'minigameBaseUrl' : PATH.cdnRoot +'/game/games/',
		'otpLoginURL' : 'localhost',
		'otpTokenPort' : '8012',
		'otpTokenURL' : PATH.apiRoot + '/carsds/api/GenerateTokenRequest',
		'physicsAssetsBaseUrl' : PATH.apiRoot +'/game/assets/track_physics',
		'promotionName' : CFG.promotionName,
		'queueEntranceRequestUrl' : PATH.apiRoot + '/carsds/api/GameEntranceRequest',
		'queueStatusRequestUrl' : PATH.siteRoot + '/carsds/api/QueueStatsRequest',
		'rsnBaseUrl' : PATH.cdnRoot + '/config/',
		'rsnAssetBaseURL' : CFG.assetsBaseUrl + 'flash/gui/news/',
		'signUpNow' : RDR.signUpNow,
		'spriteStripRendererURL' : 'http://cdn.cars.dolimg.com/worldofcars/spriterender/sprite-renderer/renderer/',
		'templateId' : CFG.templateId,
		'vipWeekendTag' : true,
		'watchdog' : false,
		'watchdogMemoryLimit' : 500,
		'whoAmI' : CFG.api + '/WhoAmIRequest'
	},
	'params' : {
		'allowscriptaccess' : 'always',
		'bgcolor' : '#0A0C0E',
		'base' : PATH.cdnRoot +'/game/',
		'menu' : false
	}
};
/*--------------------------------------------------------*/

/* RAMP client common ------------------------------------*/
var RAMP = {
	'flashVars' : {
		'adultNewsletterID' : CFG.newsletterID,
		'api' : CFG.api,
		'assetsBaseUrl' : CFG.assetsBaseUrl,
		'assetServiceHost' : CFG.assetServiceHost,
		'autolog' : CFG.dxdLogin +'?loginType=swid$#$cacheBust=true',
		'carsServiceHost' : CFG.assetServiceHost,
		'chatPermissionUrl' : CFG.chatPermissionUrl,
		'childNewsletterID' : '',
		'countriesURL' : PATH.swf +'/common/countries.xml',
		'dontModifyCloseButton' : true,
		'dxdlogout' : CFG.dxd +'/flashAPI/logout',
		'DOBCookieTO' : 30,
		'loginTimeout' : 30,
		'forgotIDURL' : CFG.register +'/recoverMemberNames?affiliateName=Disney_Cars&appRedirect=http%3A%2F%2Fworldofcars.go.com',
		'forgotPasswordURL' : CFG.register +'/recoverPassword?affiliateName=Disney_Cars&appRedirect=http%3A%2F%2Fworldofcars.go.com',
		'gameLogin' : CFG.login,
		'IPDetectPath' : ( CFG.ssl ? 'https' : 'http' ) +'://tredir.go.com/capmon/GetDE',
		'loaderSwfUrl' : PATH.swf +'/car_f_gui_ldr_loader.swf',
		'loadingAnimationURL' : PATH.swf +'/car_f_gui_ldr_loader.swf',
		'locale' : CFG.locale,
		'login' : CFG.dxdLogin,
		'logout' : CFG.api +'AccountLogoutRequest',
		'newsletterID' : CFG.newsletterID,
		'parentGuide' : RDR.parents,
		'promotionName' : CFG.promotionName,
		'privacyPolicyURL' : 'http://disney.go.com/corporate/privacy/pp_wdig.html',
		'queueEntranceRequestUrl' : CFG.queueEntranceRequestUrl,
		'queueStatusRequestUrl' : CFG.queueStatusRequestUrl,
		'recoveryPasswordURL' : CFG.register +'/recoverPassword?appRedirect=' + PATH.siteRoot,
		'recoveryUsernameURL' : CFG.register +'/recoverMemberNames?appRedirect=' + PATH.siteRoot,
		'regConfig' : PATH.swf +'/common/registration.xml',
		'statesURL' : PATH.swf +'/common/states.xml',
		'templateId' : CFG.templateId,
		'termsOfUseURL' : 'http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig',
		'trackingManagerConfig' : PATH.swf +'/common/tracker.xml',
		'whoAmI' : CFG.whoAmI
	},
	'params' : {
		'allowFullscreen' : true,
		'allowScriptAccess' : 'always',
		'menu' : false,
		'quality' : 'high',
		'bgcolor' : '#0A0C0E',
		'scale' : 'noScale'
	}
};
/*--------------------------------------------------------*/

// RAMP Account Manager ----------------------------------*/
RAMP.acm = {
	'flashVars' : jQuery.extend( {}, RAMP.flashVars, {
		'cancelCompleteOkURL' : RDR.purchase,
		'contentSwfUrl' : 'car_f_gui_reg_accountManager.swf',
		'heightUsedByLoginDialog' : 580,
		'membershipCardURL' : RDR.purchase,
		'purchaseURL' : RDR.purchase,
		'regWidgetCallback' : 'WOC.launchGame()',
		'skinPath' : 'car_f_gui_reg_accountManager.swf',
		'stringtable' : 'stringtables/' + CFG.locale + '/global.json',
		'widgetURL' : RDR.manageAccount,
		'widthUsedByLoginDialog' : 870
	} ),
	'params' : jQuery.extend( {}, RAMP.params, {
		'base' : PATH.swf +'/acm/',
		'wmode' : 'transparent'
	} )
};
/*--------------------------------------------------------*/

// RAMP Purchase -----------------------------------------*/
RAMP.purchase = {
	'flashVars' : jQuery.extend( {}, RAMP.flashVars, {
		'congratsEmailPath' : CFG.dxd +'/util/beacon/purchaseEmailRedirect',
		'congratsExitURL' : PATH.siteRoot +'/welcome-member/',
		'congratsRedirectURL' : PATH.siteRoot +'/welcome-member/',
		'contentSwfUrl' : 'cars_purchasing_skin.swf',
		'giftPurchaseURL' : PATH.siteRoot +'/',
		'kidsRulesURL' : 'stringtables/en_US/kidsrules.xml',
		'linkColor' : '#FFFFFF',
		'memberServiceURL' : 'stringtables/'+ CFG.locale +'/memberServiceAgreement.html',
		'needParentExitURL' : RDR.community,
		'noCongratsRedirectURL' : true,
		'purConfirmCallback' : 'onPurchaseComplete',
		'playPageURL' : RDR.play,
		'regConfig' : PATH.swf +'/purchasing/registration.xml',
		'regWidgetURL' : 'javascript:WOC.launchGame()',
		'showPrepurchaseWarning' : true,
		'skipCongratsScreen' : true,
		'topDialogPadding' : 50,
		'topPadding' : 0,
		'width' : 915,
		'widgetURL' : PATH.siteRootSecure +'/membership/purchase/'
	} ),
	'params' : jQuery.extend( {}, RAMP.params, {
		'base' : PATH.swf +'/purchasing/',
		'wmode' : 'transparent'
	} )
};
/*--------------------------------------------------------*/

// RAMP Registration -------------------------------------*/
RAMP.registration = {
	'flashVars' : jQuery.extend( {}, RAMP.flashVars, {
		'contentSwfUrl' : 'gui/car_f_gui_reg_registration.swf',
		'disableAssetService' : true,
		'loginURL' : CFG.login,
		'registrationOnly' : '',
		'trackingManagerConfig' : PATH.swf +'/reg/tracker.xml'
	} ),
	'params' : jQuery.extend( {}, RAMP.params, {
		'base' : PATH.swf +'/reg/',
		'bgColor' : '#000000'
	} )
};
/*--------------------------------------------------------*/