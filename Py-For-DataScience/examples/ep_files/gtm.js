
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"174",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",7],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",14]],["map","index","1","group",["macro",15]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",6]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]],["map","index","2","dimension",["macro",17]],["map","index","3","dimension",["macro",14]],["map","index","4","dimension",["macro",18]],["map","index","5","dimension",["macro",19]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"eventNonInteract"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",22],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)","value",["macro",23]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)get.oreilly.com(.*)","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com\\\/(ideas(\\\/.*)*|learning(\\\/.*)*|topics(\\\/.*)*|people(\\\/.*)*|feed\\\/four\\-short\\-links\\\/?|all)(\\?(.*))?","value","UA-39014713-6"],["map","key","((.*)oreilly.com\\\/(.*\\\/)*free\\\/)(.*)","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com\\\/online-learning(\\\/?(\\?(.*))?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)(\\?(.*))?","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com(\\\/?(\\?(.*))?$|\\\/about\\\/approach.html|\\\/sign-in\\.html)(\\?(.*))?","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com\\\/conferences\\\/radar2018\\\/","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com\\\/conferences\\\/.*?","value","UA-112091926-1"],["map","key","(.*)www.oreilly.com\\\/nexteconomy\/newsletter.html","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",5]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*amazon.*","value","true"],["map","key",".*aws.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*sre.*","value","true"],["map","key",".*devops.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*containers.*","value","true"],["map","key",".*distributed.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*software-architecture.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*serverless.*","value","true"],["map","key",".*software-engineering.*","value","true"],["map","key",".*chaos-engineering.*","value","true"],["map","key",".*evolutionary-architecture.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"],["map","key",".*databases.*","value","true"],["map","key",".*analytics.*","value","true"],["map","key",".*data-show-podcast.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*nueral-networks.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*bots.*","value","true"],["map","key",".*agents.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*GANS.*","value","true"],["map","key",".*NLP.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*NSTM.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*open-source.*","value","false"],["map","key",".*cloud-native.*","value","false"],["map","key",".*software-development.*","value","false"],["map","key",".*blockchain.*","value","false"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",7],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*devops.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*site-reliability-engineering.*","value","true"],["map","key",".*systems-engineering.*","value","true"],["map","key",".*configuration-management.*","value","true"],["map","key",".*containerization.*","value","true"]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "live_only":true,
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",10],
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",10],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",24],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",25],
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",21],
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",29]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":"Card",
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",29]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",24],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",25],
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",35],
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",35],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv2po",
      "tag_id":86
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",36],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"926848715",
      "vtp_conversionLabel":"Lb0LCIvGqpABEMut-rkD",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":112
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":113
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",36],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"vCakCOu-148BEI3f8PsD",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":114
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":115
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv3z2",
      "tag_id":122
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",10],
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",36],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"u_1aCI6GipMBEI3f8PsD",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":132
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":133
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",36],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804958955",
      "vtp_conversionLabel":"JiwyCPH8jZUBEOvl6v8C",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":155
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":156
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",36],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"voGZCImi7ZQBELOysOID",
      "vtp_url":["macro",10],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":157
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":158
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",7],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":161
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1669222_90",
      "tag_id":162
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":163
    },{
      "function":"__cl",
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",12],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",37],12],"\u0026amp;TYPE=",["escape",["macro",38],12],"\u0026amp;CURRENCY=",["escape",["macro",39],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",9],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!1,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isFooter(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(a){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(a){return\"\"!=socSites?null!=a.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(a){return\"\"!=folders_to_track?null!=a.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(a){for(var d=0,b=0;b\u003CextDoc.length;b++){var c=a.split(\".\");c=c[c.length-1].split(\/[#?\u0026?]\/);if(\".\"+c[0].toLowerCase()==extDoc[b])return!0;d++;if(d==extDoc.length)return!1}}\nfunction _setDownloadData(a,d){var b=a.toLowerCase().split(\".\");b=b[b.length-1].split(\/[#?\u0026?]\/);var c=a.toLowerCase().split(d);c=c[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=b;eValues.downloads.label=eValues.outbound_downloads.label=c}\nfunction _tagLinks(a,d,b,c,g,e,f){isGTM?a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+d+\"', 'eventAct':'\"+b+\"', 'eventLbl': '\"+c+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+d+\"', '\"+b+\"', '\"+c+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isFooter(a){var d=document.getElementsByTagName(\"footer\")[0];for(a=a.parentNode;null!=a;){if(a==d)return!0;a=a.parentNode}return!1};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setData\",ui_strata:\"VLNY18\"},{event:\"viewHome\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AIUK2018\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username;window.medalliaUserIDvsg=window.__INITIAL_STATE__.user.user_identifier;console.log(\"This ran\")})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"conferenceID\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nyjdi\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"11004156\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"497295923798472\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=497295923798472\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-926848715\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-926848715\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-926848715\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-926848715\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-926848715\/Lb0LCIvGqpABEMut-rkD\",transaction_id:",["escape",["macro",36],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.San Francisco Registration Confirmation\",orderid:",["escape",["macro",36],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.London 2019 Registration Confirmation\",orderid:\"INSERT+ORDER+ID\",event:\"refresh\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"strata19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1065103245\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1065103245\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewHome\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BUYJ3NIIJFFQJIFHTF6V72\";adroll_pix_id=\"DITK2PSWM5FXBNEB3QXQRH\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":159
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"www.oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",12],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"VPTracker"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"src-Card-coverAnchor"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(^$|((^|,)1669222_90($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)www.oreilly.com(\\\/?(\\?(.*))?$|\\\/about\\\/approach.html(\\?(.*))?|\\\/sign-in\\.html(\\?(.*))?|(.*\\\/)*free(\\?(.*))?\\\/(.*)*|\\\/ideas(\\?(.*))?(\\\/.*)*|\\\/learning(\\?(.*))?(\\\/.*)*|\\\/topics(\\?(.*))?(\\\/.*)*|\\\/people(\\?(.*))?(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?(\\?(.*))?|\\\/all(\\?(.*))?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?(\\?(.*))?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)(\\?(.*))?",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"www.oreilly.com\\\/conferences\\\/.*?"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/nexteconomy\/newsletter.html"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"artificial-intelligence\/ai-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/www.qa.safariflow.com\/home\/"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(.*))",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",7],
      "arg1":"https:\/\/www.oreilly.com\/topics\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"get.oreilly.com"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(.*))"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(^$|((^|,)1669222_110($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)learning.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(.*)qa.safariflow.com(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/signup\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"cybermonday-2018.html"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-eu"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/about"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"artificial-intelligence\/ai-ny"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"strata-ca"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"invoice"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/about"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/schedule\/speakers"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/schedule\/2019-04-15"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"purchased"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/sponsors"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/schedule\/topic\/2913"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"http:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/register\/purchased"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/sponsors"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/resources"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/resources"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,1],["add",3,14]],
    [["if",1,2],["add",3,14]],
    [["if",1],["add",4,9,28,35,40,38]],
    [["if",1,3],["add",5]],
    [["if",1,4],["add",5]],
    [["if",1,5,6],["add",6,39,41,44]],
    [["if",1],["unless",7],["add",7,20]],
    [["if",8,9],["add",8,10,21,43]],
    [["if",1,10,11],["add",11]],
    [["if",1,12],["add",11]],
    [["if",10,13],["add",12]],
    [["if",13,14],["add",12]],
    [["if",10,15],["add",13]],
    [["if",16,17,18],["add",15]],
    [["if",1,19],["add",16]],
    [["if",15,20],["add",17]],
    [["if",15,21],["add",17]],
    [["if",15,22],["add",17]],
    [["if",13,21],["add",18]],
    [["if",13,23],["add",18]],
    [["if",13,24],["add",18]],
    [["if",1,21],["add",19]],
    [["if",1,23],["add",19]],
    [["if",1,24],["add",19]],
    [["if",1,25],["add",19]],
    [["if",1,26],["add",19]],
    [["if",1,27],["add",22]],
    [["if",1,28],["add",23,70]],
    [["if",1,29],["add",24,57,69]],
    [["if",1,30],["add",25,68,71]],
    [["if",1,31],["add",26,61]],
    [["if",1,32],["add",27,32,104]],
    [["if",1,33],["add",29,77,83]],
    [["if",1,34],["add",30]],
    [["if",1,35],["add",31,91]],
    [["if",1,36],["add",33,97,100,102,107]],
    [["if",1,37],["add",34,98,99,101]],
    [["if",1,38],["add",36]],
    [["if",1,39],["add",37]],
    [["if",1,40],["add",40]],
    [["if",1,41],["unless",42],["add",0,2]],
    [["if",43,44],["add",42]],
    [["if",45,46,47],["add",42]],
    [["if",1,48],["add",1]],
    [["if",1,49],["add",1,49]],
    [["if",1,50],["add",45]],
    [["if",1,51],["add",46]],
    [["if",1,52],["add",46]],
    [["if",1,53],["add",46]],
    [["if",1,54],["add",47]],
    [["if",1,55],["add",48]],
    [["if",1,56],["add",50]],
    [["if",1,57],["add",51]],
    [["if",1,58],["add",52]],
    [["if",1,59],["add",53]],
    [["if",1,60],["add",54]],
    [["if",1,61],["add",55,56]],
    [["if",1,62],["add",58,59,60,74,92]],
    [["if",1,63,64],["unless",65],["add",62]],
    [["if",1,66],["add",63]],
    [["if",1,67],["add",64]],
    [["if",1,68],["add",65]],
    [["if",1,69],["add",65]],
    [["if",1,70],["add",66]],
    [["if",1,71],["add",67]],
    [["if",1,72],["add",71]],
    [["if",1,73],["add",72]],
    [["if",1,74],["add",73]],
    [["if",1,75],["add",73]],
    [["if",1,76],["add",74]],
    [["if",1,77],["add",74]],
    [["if",1,78],["add",74]],
    [["if",1,79],["add",74]],
    [["if",1,80],["add",75]],
    [["if",1,81],["add",76]],
    [["if",1,82],["add",77]],
    [["if",1,83],["unless",65,84],["add",78,84]],
    [["if",1,85],["add",79]],
    [["if",1,86],["add",80]],
    [["if",1,87],["add",80]],
    [["if",1,88],["add",81]],
    [["if",1,89],["add",82]],
    [["if",1,90],["add",85]],
    [["if",1,91],["add",86]],
    [["if",1,92],["add",86]],
    [["if",1,93],["add",87]],
    [["if",1,94],["add",88]],
    [["if",1,95],["add",88]],
    [["if",1,96],["add",89]],
    [["if",1,97],["add",90]],
    [["if",1,98],["add",93]],
    [["if",1,99],["add",94]],
    [["if",1,100],["add",94]],
    [["if",1,101],["add",95]],
    [["if",1,102],["add",96]],
    [["if",1,103],["add",103]],
    [["if",1,104],["add",105]],
    [["if",1,105],["add",106]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,fa=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.Rg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ag=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var la=function(){},ma=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},na=function(a){return"number"==typeof a&&!isNaN(a)},oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},pa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},qa=function(a,b){if(a&&oa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ra=function(a,b){if(!na(a)||
!na(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values=
{}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Aa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ba=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Fa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Fa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},p=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=p(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=p(e,c[d])):c[d]=e}return c};var t=window,x=document,Ja=navigator,Ka=x.currentScript&&x.currentScript.src,La=function(a,b){var c=t[a];t[a]=void 0===c?b:c;return t[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=x.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===fa)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){fa=k;break b}}fa=""}e=fa;e&&d.setAttribute("nonce",e);var l=x.getElementsByTagName("script")[0]||x.body||x.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=x.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=x.body&&x.body.lastChild||
x.body||x.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){t.setTimeout(a,0)},Va=function(a){var b=
x.getElementById(a);if(b&&Ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c];return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=x.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,ab=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},C=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=bb(a.protocol)||bb(t.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:t.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||t.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=bb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=cb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
pa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=ab(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},bb=function(a){return a?a.replace(":","").toLowerCase():""},cb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},D=function(a){var b=x.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var db=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gb=function(a,b,c,d){var e=eb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=fb(e,function(a){return a.xb},b);if(1===e.length)return e[0].id;e=fb(e,function(a){return a.Ta},c);return e[0]?e[0].id:void 0}};
function hb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=db(b,e).indexOf(c)}
var kb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,r=void 0,u;for(u in h)if(h.hasOwnProperty(u)){var v=h[u];if(null!=v)switch(u){case "secure":v&&(m+="; secure");break;case "domain":q=v;break;default:"path"==u&&(r=v),"expires"==u&&v instanceof Date&&(v=
v.toUTCString()),m+="; "+u+"="+v}}if("auto"===q){for(var w=ib(),y=0;y<w.length;++y){var E="none"!=w[y]?w[y]:void 0;if(!jb(E,r)&&hb(m+(E?"; domain="+E:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!jb(q,r)&&hb(m,a,l)}return k};function fb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function eb(a,b){for(var c=[],d=db(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),xb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mb=/(^|\.)doubleclick\.net$/i,jb=function(a,b){return mb.test(document.location.hostname)||"/"===b&&lb.test(a)},ib=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return ob[a]},qb=/[\x00\x22\x26\x27\x3c\x3e]/g;var vb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(vb,xb)+"'"}};var Db=/['()]/g,Eb=function(a){return"%"+a.charCodeAt(0).toString(16)};nb[12]=function(a){var b=
encodeURIComponent(String(a));Db.lastIndex=0;return Db.test(b)?b.replace(Db,Eb):b};var Fb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ib=function(a){return Hb[a]};nb[16]=function(a){return a};var Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Qb,Rb,Sb,Tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ub=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Pb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Pb[c](e):(void 0)(c,e,b)},Wb=function(a,b,c,d){c=c||[];d=d||la;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vb(a[g],b,
c,d));return e},Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pb[b];return c?c.b||0:0},Vb=function(a,b,c,d){if(oa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kb[h];if(!k||b(k))return;c[h]=!0;try{var l=Wb(k,b,c,d);e=Ub(l,d);Sb&&(e=Sb.df(e,l))}catch(E){d(E,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Vb(a[m],b,c,d)]=Vb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,q=1;q<a.length;q++){var r=Vb(a[q],b,c,d);Rb&&(n=n||r===Rb.nb);e.push(r)}return Rb&&n?Rb.ff(e):e.join("");case "escape":e=Vb(a[1],b,c,d);if(Rb&&oa(a[1])&&"macro"===a[1][0]&&Rb.Jf(a))return Rb.Uf(e);e=String(e);for(var u=2;u<a.length;u++)nb[a[u]]&&(e=nb[a[u]](e));return e;case "tag":var v=a[1];if(!Nb[v])throw Error("Unable to resolve tag reference "+v+".");return e={ud:a[2],index:v};case "zb":var w={arg0:a[2],arg1:a[3],
ignore_case:a[5]};w["function"]=a[1];var y=Yb(w,b,c,d);a[4]&&(y=!y);return y;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yb=function(a,b,c,d){try{return Qb(Wb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zb=null,bc=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];Zb=$b(a,b||function(){});for(var g=0;g<Lb.length;g++){var h=Lb[g],k=ac(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],q=0;q<Nb.length;q++)d[q]&&!e[q]&&(n[q]=!0);return n},ac=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Zb(e[g]);if(null===
h)return null;if(h)return!1}return!0},$b=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yb(Mb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var G={},J=null,ec=Math.random();G.o="GTM-5P4V6Z";G.rb="241";var fc="www.googletagmanager.com/gtm.js";var gc=fc,hc=null,ic=null,jc=null,kc="//www.googletagmanager.com/a?id="+G.o+"&cv=174",lc={},mc={},nc=function(){var a=J.sequence||0;J.sequence=a+1;return a};var L=function(a,b,c,d){return(2===oc()||d||"http:"!=t.location.protocol?a:b)+c},oc=function(){var a=Qa(),b;if(1===a)a:{var c=gc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=x.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var pc=!1;var M=function(){var a=function(a){return{toString:function(){return a}}};return{Tc:a("convert_case_to"),Uc:a("convert_false_to"),Vc:a("convert_null_to"),Wc:a("convert_true_to"),Xc:a("convert_undefined_to"),oa:a("function"),ue:a("instance_name"),ve:a("live_only"),we:a("malware_disabled"),xe:a("once_per_event"),kd:a("once_per_load"),ld:a("setup_tags"),ye:a("tag_id"),md:a("teardown_tags")}}();var rc=new za,sc={},tc={},xc={set:function(a,b){p(uc(a,b),sc);vc()},get:function(a){return wc(a,2)},reset:function(){rc=new za;sc={};vc()}},wc=function(a,b){return 2!=b?rc.get(a):yc(a)},yc=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Ac(d)},Ac=function(a){for(var b=
sc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Dc=function(a,b){tc.hasOwnProperty(a)||(rc.set(a,b),p(uc(a,b),sc),vc())},uc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},vc=function(a){ta(tc,function(b,c){rc.set(b,c);p(uc(b,void 0),sc);p(uc(b,c),sc);a&&delete tc[b]})};var Ec=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Fc={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Gc={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Ic=function(a){var b=wc("gtm.whitelist");var c=b&&Ea(wa(b),Fc),d=wc("gtm.blacklist")||wc("tagTypeBlacklist")||[];
Hc()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Ea(wa(d),Gc),g={};return function(h){var k=h&&h[M.oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=mc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>pa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>pa(c,l[q])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var u;if(!(u=0<=pa(e,k)))a:{for(var v=l||[],w=new za,
y=0;y<e.length;y++)w.set(e[y],!0);for(var E=0;E<v.length;E++)if(w.get(v[E])){u=!0;break a}u=!1}r=u}return g[k]=!m||r}},Hc=function(){return Ec.test(t.location&&t.location.hostname)};var Kc=function(a){return function(b,c){if(na(c))a(b,c);else{b instanceof Jc||(b=new Jc(b));var d=b;c&&d.fc.push(c);throw d;}}},Jc=function(a){this.Pf=a;this.fc=[]};ha(Jc,Error);var Lc={df:function(a,b){b[M.Tc]&&"string"===typeof a&&(a=1==b[M.Tc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(M.Vc)&&null===a&&(a=b[M.Vc]);b.hasOwnProperty(M.Xc)&&void 0===a&&(a=b[M.Xc]);b.hasOwnProperty(M.Wc)&&!0===a&&(a=b[M.Wc]);b.hasOwnProperty(M.Uc)&&!1===a&&(a=b[M.Uc]);return a}};var Mc={active:!0,isWhitelisted:function(){return!0}},Nc=function(a){var b=J.zones;!b&&a&&(b=J.zones=a());return b};var Oc=!1,Pc=0,Qc=[];function Rc(a){if(!Oc){var b=x.createEventObject,c="complete"==x.readyState,d="interactive"==x.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oc=!0;for(var e=0;e<Qc.length;e++)A(Qc[e])}Qc.push=function(){for(var a=0;a<arguments.length;a++)A(arguments[a]);return 0}}}function Sc(){if(!Oc&&140>Pc){Pc++;try{x.documentElement.doScroll("left"),Rc()}catch(a){t.setTimeout(Sc,50)}}}var Tc=function(a){Oc?a():Qc.push(a)};var Uc=function(){function a(a){return!na(a)||0>a?0:a}if(!J._li&&t.performance&&t.performance.timing){var b=t.performance.timing.navigationStart,c=na(xc.get("gtm.start"))?xc.get("gtm.start"):0;J._li={cst:a(c-b),cbt:a(ic-b)}}};var Yc=!1,Zc=function(){return t.GoogleAnalyticsObject&&t[t.GoogleAnalyticsObject]},$c=!1;var ad=function(a){t.GoogleAnalyticsObject||(t.GoogleAnalyticsObject=a||"ga");var b=t.GoogleAnalyticsObject;if(!t[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);t[b]=c}Uc();return t[b]},bd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Zc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var dd=function(){},cd=function(){return t.GoogleAnalyticsObject||"ga"},ed=!1;var ld=function(a){};
function kd(a,b){a.containerId=G.o;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};
var md=function(){return"&tc="+Nb.filter(function(a){return a}).length},vd=function(){nd&&(t.clearTimeout(nd),nd=void 0);void 0===od||pd[od]&&!qd||(rd[od]||sd.Kf()||0>=td--?rd[od]=!0:(sd.bg(),Sa(ud()),pd[od]=!0,qd=""))},ud=function(){var a=od;return void 0===a?"":[wd,pd[a]?"":"&es=1",xd[a],md(),qd,"&z=0"].join("")},yd=function(){return[kc,"&v=3&t=t","&pid="+ra(),"&rv="+G.rb].join("")},zd="0.005000">Math.random(),wd=yd(),Ad=function(){wd=yd()},pd={},qd="",od=void 0,xd={},rd={},nd=
void 0,sd=function(a,b){var c=0,d=0;return{Kf:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},bg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),td=1E3,Bd=function(a,b){if(zd&&!rd[a]&&od!==a){vd();od=a;qd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";xd[a]="&e="+c+"&eid="+a;nd||(nd=t.setTimeout(vd,500))}},Cd=function(a,b,c){if(zd&&!rd[a]&&b){a!==od&&(vd(),od=a);var d=c+String(b[M.oa]||"").replace(/_/g,"");qd=qd?qd+"."+d:"&tr="+d;nd||(nd=t.setTimeout(vd,500));2022<=ud().length&&
vd()}};function Dd(a,b,c,d,e,g){var h=Nb[a],k=Ed(a,b,c,d,e,g);if(!k)return null;var l=Vb(h[M.ld],g.Z,[],la);if(l&&l.length){var m=l[0];k=Dd(m.index,b,k,1===m.ud?e:k,e,g)}return k}
function Ed(a,b,c,d,e,g){function h(){if(k[M.we])d();else{var b=Wb(k,g.Z,[],Kc(function(a){ld(a)})),e=!1;b.vtp_gtmOnSuccess=function(){if(!e){e=!0;Cd(g.id,Nb[a],"5");c()}};b.vtp_gtmOnFailure=function(){if(!e){e=!0;Cd(g.id,Nb[a],"6");d()}};b.vtp_gtmTagId=k.tag_id;Cd(g.id,k,"1");var h=!1,
l=function(a,b){if(!h){a instanceof Jc||(a=new Jc(a));var c=a;b&&c.fc.push(b);throw c;}ld(a);Cd(g.id,k,"7");e||(e=!0,d())};try{Ub(b,l)}catch(I){try{h=!0,l(I)}catch(W){}}}}var k=
Nb[a];if(g.Z(k))return null;var l=Vb(k[M.md],g.Z,[],la);if(l&&l.length){var m=l[0],n=Dd(m.index,b,c,d,e,g);if(!n)return null;c=n;d=2===m.ud?e:n}if(k[M.kd]||k[M.xe]){var q=k[M.kd]?Ob:b,r=c,u=d;if(!q[a]){h=Ba(h);var v=Fd(a,q,h);c=v.T;d=v.xa}return function(){q[a](r,u)}}return h}function Fd(a,b,c){var d=[],e=[];b[a]=Gd(d,e,c);return{T:function(){b[a]=Hd;for(var c=0;c<d.length;c++)d[c]()},xa:function(){b[a]=Id;for(var c=0;c<e.length;c++)e[c]()}}}
function Gd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hd(a){a()}function Id(a,b){b()};function Jd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ba(function(){b++;d&&b>=c&&a()})},Ne:function(){d=!0;b>=c&&a()}}}var Md=function(a){for(var b=Jd(a.callback),c=[],d=[],e=0;e<Nb.length;e++)if(a.Va[e]){var g=Nb[e];var h=b.add();try{var k=Dd(e,c,h,h,h,a);k?d.push({Ud:e,b:Xb(g),qf:k}):(Kd(e,a),h())}catch(m){h()}}b.Ne();d.sort(Ld);for(var l=0;l<d.length;l++)d[l].qf();return 0<d.length};
function Ld(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Ud,k=b.Ud;g=h>k?1:h<k?-1:0}return g}function Kd(a,b){if(!zd)return;var c=function(a){var d=b.Z(Nb[a])?"3":"4",g=Vb(Nb[a][M.ld],b.Z,[],la);g&&g.length&&c(g[0].index);Cd(b.id,Nb[a],d);var h=Vb(Nb[a][M.md],b.Z,[],la);h&&h.length&&c(h[0].index)};c(a);}
var Nd=!1,Od=function(a,b,c,d){if("gtm.js"==b){if(Nd)return!1;Nd=!0}Bd(a,b);var e=Ic(c),g={id:a,name:b,callback:d||la,Z:e,Va:[]};g.Va=bc(e,Kc(function(a){ld(a)}));var h=Md(g);"gtm.js"!==b&&"gtm.sync"!==b||dd();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Nb[l];if(m&&!k[m[M.oa]])return!0}return!1};var N={Mb:"event_callback",Ob:"event_timeout"};var Qd={};var Rd=/[A-Z]+/,Sd=/\s/,Td=function(a){if(f(a)&&(a=xa(a),!Sd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Rd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],Y:d}}}}},Vd=function(a){for(var b={},c=0;c<a.length;++c){var d=Td(a[c]);d&&(b[d.id]=d)}Ud(b);var e=[];ta(b,function(a,b){e.push(b)});return e};
function Ud(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.Y[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Wd=null,Xd={},Yd={},Zd,$d=function(a,b){var c={event:a};b&&(c.eventModel=p(b),b[N.Mb]&&(c.eventCallback=b[N.Mb]),b[N.Ob]&&(c.eventTimeout=b[N.Ob]));return c};
var ee={config:function(a){},event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ia(a[2]))return;
c=a[2]}var d=$d(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Qd[b]||(Qd[b]=[]);Qd[b].push(c)}},set:function(a){var b;2==a.length&&Ia(a[1])?b=p(a[1]):3==a.length&&f(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=p(b),b.event="gtag.set",b._clear=!0,b}},fe={policy:!0};var ge=function(){return!1};var le=function(a){this.pg=a};le.prototype.wf=function(){return this.pg};var me=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};le.prototype.getUntrustedUpdateValue=le.prototype.wf;var ne=!1,oe=[];function pe(){if(!ne){ne=!0;for(var a=0;a<oe.length;a++)A(oe[a])}}var qe=function(a){ne?A(a):oe.push(a)};var re=[],se=!1;function te(a){var b=a.eventCallback,c=Ba(function(){ma(b)&&A(function(){b(G.o)})}),d=a.eventTimeout;d&&t.setTimeout(c,Number(d));return c}
var ue=function(a){return t["dataLayer"].push(a)},we=function(a){var b=a._clear;ta(a,function(a,c){"_clear"!==a&&(b&&Dc(a,void 0),Dc(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=nc(),a["gtm.uniqueEventId"]=d,Dc("gtm.uniqueEventId",d));jc=c;var e=ve(a);jc=null;if(!hc){hc=a["gtm.start"];}return e};
function ve(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=J.zones;d=e?e.checkState(G.o,c):Mc;if(!d.active)return!1;var g=te(a);return Od(c,b,d.isWhitelisted,g)?!0:!1}
var xe=function(){for(var a=!1;!se&&0<re.length;){se=!0;delete sc.eventModel;vc();var b=re.shift();if(null!=b){var c=me(b);if(c){var d=b;b=me(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=wc(h,1);if(oa(k)||Ia(k))k=p(k);tc[h]=k}}try{if(ma(b))try{b.call(xc)}catch(w){}else if(oa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),r=wc(m.join("."),2);if(void 0!==r&&null!==r)try{r[n].apply(r,q)}catch(w){}}}else{var u=b;if(u&&("[object Arguments]"==Object.prototype.toString.call(u)||Object.prototype.hasOwnProperty.call(u,"callee"))){a:{if(b.length&&f(b[0])){var v=ee[b[0]];if(v&&(!c||!fe[b[0]])){b=v(b);break a}}b=void 0}if(!b){se=!1;continue}}a=we(b)||a}}finally{c&&vc(!0)}}se=!1}
return!a},ye=function(){var a=xe();try{var b=G.o,c=t["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},ze=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Tc(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});qe(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b;
if(0<J.SANDBOXED_JS_SEMAPHORE){b=[];for(var e=0;e<arguments.length;e++)b[e]=new le(arguments[e])}else b=[].slice.call(arguments,0);c.apply(a,b);for(re.push.apply(re,b);300<this.length;)this.shift();return xe()};re.push.apply(re,a.slice(0));A(ye)};var Be=function(a){return Ae?x.querySelectorAll(a):null},Ce=function(a,b){if(!Ae)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!x.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},De=!1;if(x.querySelectorAll)try{var Ee=x.querySelectorAll(":root");Ee&&1==Ee.length&&Ee[0]==x.documentElement&&(De=!0)}catch(a){}var Ae=De;var Fe;var af={};af.nb=new String("undefined");
var bf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===af.nb?b:a[d]);return c.join("")}};bf.prototype.toString=function(){return this.resolve("undefined")};bf.prototype.valueOf=bf.prototype.toString;af.ze=bf;af.Yb={};af.ff=function(a){return new bf(a)};var cf={};af.cg=function(a,b){var c=nc();cf[c]=[a,b];return c};af.rd=function(a){var b=a?0:1;return function(a){var c=cf[a];if(c&&"function"===typeof c[b])c[b]();cf[a]=void 0}};af.Jf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};af.Uf=function(a){if(a===af.nb)return a;var b=nc();af.Yb[b]=a;return'google_tag_manager["'+G.o+'"].macro('+b+")"};af.Nf=function(a,b,c){a instanceof af.ze&&(a=a.resolve(af.cg(b,c)),b=la);return{kc:a,T:b}};var df=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},ef=function(a){J.hasOwnProperty("autoEventsSettings")||(J.autoEventsSettings={});var b=J.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ff=
function(a,b,c,d){var e=ef(a),g=Aa(e,b,d);e[b]=c(g)},gf=function(a,b,c){var d=ef(a);return Aa(d,b,c)};var hf=function(){for(var a=Ja.userAgent+(x.cookie||"")+(x.referrer||""),b=a.length,c=t.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},lf=function(a,b,c,d){var e=jf(b);return gb(a,e,kf(c),d)},mf=function(a,b,c,d){var e=""+jf(c),g=kf(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},jf=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},kf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var nf=["1"],of={},rf=function(a,b,c){var d=pf(a);if(!of[d]&&!qf(d,b,c)){var e=hf(),g=mf(e,"1",b,c);kb(d,g,c,b,new Date(ya()+7776E6));qf(d,b,c)}};function qf(a,b,c){var d=lf(a,b,c,nf);d&&(of[a]=d);return d}function pf(a){return(a||"_gcl")+"_au"};var sf=function(){for(var a=[],b=x.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Jc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Jc]||(g[a[h].Jc]=[]),g[a[h].Jc].push({timestamp:k[1],tf:k[2]}))}return g};function tf(){for(var a=uf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function vf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var uf,wf,xf=function(a){uf=uf||vf();wf=wf||tf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(uf[l],uf[m],uf[n],uf[q])}return b.join("")},yf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=wf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}uf=uf||vf();wf=wf||
tf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var zf;function Af(a,b){if(!a||b===x.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Bf=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Cf=/(.*?)\*(.*?)\*(.*)/,Df=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ef=/^(?:www\.|m\.|amp\.)+/,Ff=/([^?#]+)(\?[^#]*)?(#.*)?/,Gf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,If=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(xf(String(d))))}var e=b.join("*");return["1",Hf(e),e].join("*")},Hf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=zf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}zf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^zf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Kf=function(){return function(a){var b=D(t.location.href),c=b.search.replace("?",""),d=ab(c,"_gl",!0)||"";a.query=Jf(d)||{};var e=C(b,"fragment").match(Gf);a.fragment=Jf(e&&e[3]||
"")||{}}},Jf=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Cf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Hf(k,n)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],u=0;u<r.length;u+=2)q[r[u]]=yf(r[u+1]);return q}}}}catch(v){}};
function Lf(a,b,c){function d(a){var b=a,c=Gf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Ff.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Mf(a,b,c){for(var d={},e={},g=Bf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Af(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=If(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,r=0;r<n.length;r++){var u=n[r];if("_gl"===u.name){u.setAttribute("value",l);q=!0;break}}if(!q){var v=x.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var w=Lf(l,a.action);Za.test(w)&&(a.action=w)}}}else Nf(l,a,!1)}if(!c&&Da(e)){var y=If(e);Nf(y,a,!0)}}function Nf(a,b,c){if(b.href){var d=Lf(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var Of=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Mf(e,e.hostname,!1)}}catch(h){}},Pf=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=C(D(b.action),"host");Mf(b,c,!0)}}catch(d){}},Qf=function(a,b,c,d){var e=Bf();e.init||(z(x,"mousedown",Of),z(x,"keyup",Of),z(x,"submit",Pf),e.init=!0);var g={callback:a,domains:b,
fragment:"fragment"===c,forms:!!d};Bf().decorators.push(g)},Rf=function(){var a=x.location.hostname,b=Df.exec(x.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Ef,"")===e.replace(Ef,"")},Sf=function(a,b){return!1===a?!1:a||b||Rf()};var Tf=/^\w+$/,Uf=/^[\w-]+$/,Vf=/^~?[\w-]+$/,Wf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Xf(a){return a&&"string"==typeof a&&a.match(Tf)?a:"_gcl"}var Zf=function(){var a=D(t.location.href),b=C(a,"query",!1,void 0,"gclid"),c=C(a,"query",!1,void 0,"gclsrc"),d=C(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ab(e,"gclid",void 0);c=c||ab(e,"gclsrc",void 0)}return Yf(b,c,d)};
function Yf(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(Uf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function $f(a,b,c){function d(a,b){var c=ag(a,e);c&&kb(c,b,h,g,l,!0)}b=b||{};var e=Xf(b.prefix),g=b.domain||"auto",h=b.path||"/",k=c||ya(),l=new Date(k+7776E6),m=Math.round(k/1E3),n=function(a){return["GCL",m,a].join(".")};a.aw&&(!0===b.Wg?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ag=function(a,b){var c=Wf[a];if(void 0!==c)return b+c},bg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function cg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var dg=function(a,b,c,d,e){if(oa(b)){var g=Xf(e);Qf(function(){for(var b={},c=0;c<a.length;++c){var d=ag(a[c],g);if(d){var e=db(d,x.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},eg=function(a){return a.filter(function(a){return Vf.test(a)})},fg=function(a,b){for(var c=Xf(b&&b.prefix),d={},e=0;e<a.length;e++)Wf[a[e]]&&(d[a[e]]=Wf[a[e]]);ta(d,function(a,d){var e=db(c+d,x.cookie);if(e.length){var g=e[0],h=bg(g),n={};n[a]=[cg(g)];$f(n,b,h)}})};var gg=/^\d+\.fls\.doubleclick\.net$/;function hg(a){var b=D(t.location.href),c=C(b,"host",!1);if(c&&c.match(gg)){var d=C(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ig(a,b){if("aw"==a||"dc"==a){var c=hg("gcl"+a);if(c)return c.split(".")}var d=Xf(b);if("_gcl"==d){var e;e=Zf()[a]||[];if(0<e.length)return e}var g=ag(a,d),h;if(g){var k=[];if(x.cookie){var l=db(g,x.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=cg(l[m]);n&&-1===k.indexOf(n)&&k.push(n)}h=eg(k)}else h=k}else h=k}else h=[];return h}
var jg=function(){var a=hg("gac");if(a)return decodeURIComponent(a);var b=sf(),c=[];ta(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].tf);d=eg(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},kg=function(a,b,c){rf(a,b,c);var d=of[pf(a)],e=Zf().dc||[];if(d&&0<e.length){var g=J.joined_au=J.joined_au||{},h=a||"_gcl";if(!g[h]){for(var k=!1,l=0;l<e.length;l++){var m="https://adservice.google.com/ddm/regclk",n=m+="?gclid="+e[l]+"&auiddc="+d;Ja.sendBeacon&&Ja.sendBeacon(n)||Sa(n);k=!0}if(k){var q=
pf(a);if(of[q]){var r=mf(of[q],"1",b,c);kb(q,r,c,b,new Date(ya()+7776E6))}g[h]=!0}}}};var lg;if(3===G.rb.length)lg="g";else{var mg="G";lg=mg}
var ng={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:lg},og=function(a){var b=G.o.split("-"),c=b[0].toUpperCase(),d=ng[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===G.rb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+G.rb+e};var vg=!!t.MutationObserver,wg=void 0,xg=function(a){if(!wg){var b=function(){var a=x.body;if(a)if(vg)(new MutationObserver(function(){for(var a=0;a<wg.length;a++)A(wg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;z(a,"DOMNodeInserted",function(){b||(b=!0,A(function(){b=!1;for(var a=0;a<wg.length;a++)A(wg[a])}))})}};wg=[];x.body?b():A(b)}wg.push(a)};var Pg=t.clearTimeout,Qg=t.setTimeout,Q=function(a,b,c){if(ge()){b&&A(b)}else return Pa(a,b,c)},Rg=function(){return new Date},Sg=function(){return t.location.href},Tg=function(a){return C(D(a),"fragment")},R=function(a,b){return wc(a,b||2)},Ug=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return ue(a)},Vg=function(a,b){t[a]=b},T=function(a,b,c){b&&(void 0===t[a]||c&&!t[a])&&(t[a]=b);return t[a]},Wg=
function(a,b,c){return db(a,b,void 0===c?!0:!!c)},Xg=function(a,b,c){var d={prefix:a,path:b,domain:c},e=Zf();$f(e,d);},Yg=function(a,b,c,d){var e=Kf(),g=Bf();g.data||(g.data={query:{},fragment:{}},e(g.data));var h={},
k=g.data;k&&(Ca(h,k.query),Ca(h,k.fragment));for(var l=Xf(b),m=0;m<a.length;++m){var n=a[m];if(void 0!==Wf[n]){var q=ag(n,l),r=h[q];if(r){var u=Math.min(bg(r),ya()),v;b:{for(var w=u,y=db(q,x.cookie),E=0;E<y.length;++E)if(bg(y[E])>w){v=!0;break b}v=!1}v||kb(q,r,c,d,new Date(u+7776E6),!0)}}}var B={prefix:b,path:c,domain:d};$f(Yf(h.gclid,h.gclsrc),B);},Zg=function(a,b,c,d,e){dg(a,b,c,d,e);},
$g=function(a,b){if(ge()){b&&A(b)}else Ra(a,b)},ah=function(a){return!!gf(a,"init",!1)},bh=function(a){ef(a).init=!0},ch=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":gc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});Q(L("https://","http://",d))};
var eh=af.Nf;var fh=new za;function gh(a,b){function c(a){var b=D(a),c=C(b,"protocol"),d=C(b,"host",!0),e=C(b,"port"),g=C(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function hh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&oa(c)){for(var d=0;d<c.length;d++)if(hh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=pa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var u=String(c)+r,v=fh.get(u);v||(v=new RegExp(c,r),fh.set(u,v));q=v.test(b)}catch(w){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return gh(b,c)}return!1};var jh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var kh=encodeURI,U=encodeURIComponent,lh=Sa;var mh=function(a,b){if(!a)return!1;var c=C(D(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var X=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};var Wh=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Xh=function(){this.c=1;this.e=[];this.p=null};function Yh(a){var b=J,c=b.gss=b.gss||{};return c[a]=c[a]||new Xh}var Zh=function(a,b){Yh(a).p=b},$h=function(a){var b=Yh(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(a){for(var b=0;b<a.length;b++)try{var d=a[b];d.d?(d.d=!1,e.push(d)):c(d.n,d.t,d.p)}catch(m){}};g(d);g(e)}};var bi=function(){var a=t.gaGlobal=t.gaGlobal||{};a.hid=a.hid||ra();return a.hid};var qi=window,ri=document,si=function(a){var b=qi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===qi["ga-disable-"+a])return!0;try{var c=qi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=db("AMP_TOKEN",ri.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var zi=function(a,b,c){yi(a);var d=Math.floor(ya()/1E3);Yh(a).e.push(new Wh(b,d,c,void 0));$h(a)},Ai=function(a,b,c){yi(a);var d=Math.floor(ya()/1E3);Yh(a).e.push(new Wh(b,d,c,!0))},yi=function(a){if(1===Yh(a).c){Yh(a).c=2;var b=encodeURIComponent(a);Pa(("http:"!=t.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Ci=function(a,b){},Bi=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Uc();Q("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=T("google_trackConversion");if(ma(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=X(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:og()})||b()}else b()},b)})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return jc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=R("gtm.referrer",1)||x.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?C(D(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):cb(D(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=df(b,"gtm.click");Ug(d)}}(function(a){Z.__cl=a;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.b=0})(function(b){if(!ah("cl")){var c=T("document");z(c,"click",a,!0);bh("cl")}A(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.b=0})(function(a){return Wg(a.vtp_name,R("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:R("gtm.url",1))||Sg();var d=b[a("vtp_component")];if(!d||"URL"==d)return cb(D(String(c)));var e=D(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=oa(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=C(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=C(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=R(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.tl=["google"],function(){function a(a){return function(){if(a.vc&&a.wc>=a.vc)a.mc&&T("self").clearInterval(a.mc);else{a.wc++;var b=Rg().getTime();Ug({event:a.K,"gtm.timerId":a.mc,"gtm.timerEventNumber":a.wc,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.vc,"gtm.timerStartTime":a.Td,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Td,"gtm.triggers":a.ng})}}}(function(a){Z.__tl=a;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.b=0})(function(b){A(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={K:b.vtp_eventName,
wc:0,interval:Number(b.vtp_interval),vc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ng:String(b.vtp_uniqueTriggerId||"0"),Td:Rg().getTime()};c.mc=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;p(X(l.vtp_fieldsToSet,"fieldName","value"),e);p(X(l.vtp_contentGroup,"index","group"),g);p(X(l.vtp_dimension,"index","dimension"),h);p(X(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=p(l);b=p(b,m)}p(X(b.vtp_fieldsToSet,"fieldName","value"),e);p(X(b.vtp_contentGroup,"index",
"group"),g);p(X(b.vtp_dimension,"index","dimension"),h);p(X(b.vtp_metric,"index","metric"),k);var n=ad(b.vtp_functionName);if(ma(n)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+nc(),q=r+".");var u={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];n.apply(window,b)},y=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&w("set",a+c,b[c])},B=function(){
var a=function(a,b,c){if(!Ia(b))return!1;for(var d=Aa(Object(b),c,[]),e=0;d&&e<d.length;e++)w(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=R("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ia(c))return;c=Object(c);var d=Aa(e,"currencyCode",c.currencyCode);void 0!==d&&w("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){w("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");w("ec:setAction",g[h],k.actionField);break}}},I=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&u[e]||!c&&void 0===u[e])){var g=v[e]?va(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},W={name:r};I(e,W,!0);n("create",b.vtp_trackingId||
c.trackingId,W);w("set","&gtm",og(!0));b.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&w("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",g);E("dimension",h);E("metric",k);var O={};I(e,O,!1)&&w("set",O);var F;b.vtp_enableLinkId&&w("require","linkid","linkid.js");
w("set","hitCallback",function(){var a=e&&e.hitCallback;ma(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:y(String,b.vtp_eventLabel||c.label),eventValue:y(ua,b.vtp_eventValue||c.value)};I(F,S,!1);w("send",S);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:Ma})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var ba=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:ba})}F?w("send","pageview",F):w("send","pageview");}if(!a){var sa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(sa="internal/"+sa);a=!0;Q(L("https:","http:","//www.google-analytics.com/"+sa,e&&e.forceSSL),function(){var a=Zc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else A(b.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();



Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Z.__gclidw=a;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.b=100})(function(b){A(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Rf())&&Yg(a,g,h,k));Xg(e,c,d);kg(e,d,c);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Zg(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=R(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Sg()),d;d=oa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!mh(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return C(D(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return R("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=R("gtm.element",1),m=R("event",1),u=Number(Rg());a===l&&b===m&&c>u-250?k=d:(d=k=l?Wa(l):"",a=l,b=m);c=u;return k||e.vtp_defaultValue;case "URL":var v;a:{var w=String(R("gtm.elementUrl",1)||e.vtp_defaultValue||""),y=D(w);switch(e.vtp_component||"URL"){case "URL":v=w;break a;case "IS_OUTBOUND":v=h(w,e);break a;default:v=C(y,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var E;if(void 0===e.vtp_attribute)E=
g(e);else{var B=R("gtm.element",1);E=Ua(B,e.vtp_attribute)||e.vtp_defaultValue||""}return E;default:return g(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=p(a),c=b;c[M.oa]=null;c[M.ue]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=T("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){Uc();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:og()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?R(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Q("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.g="bzi";Z.__bzi.h=!0;Z.__bzi.b=0})(function(a){try{t._bizo_data_partner_id=a.vtp_id,t._bizo_data_partner_title=a.vtp_title,t._bizo_data_partner_domain=a.vtp_domain,t._bizo_data_partner_company=a.vtp_company,t._bizo_data_partner_location=a.vtp_location,t._bizo_data_partner_employee_range=a.vtp_employeeRange,t._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,t._bizo_data_partner_email=a.vtp_email,Q(L("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){A(a.vtp_gtmOnFailure)}})}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(a){Z.__baut=a;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(a,c){void 0!==b[a]&&(e[c]=b[a])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{Q("//bat.bing.com/bat.js",function(){var a=jh(T("UET"),{ti:b.vtp_tagId,q:d});t[c]=a;a.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){A(b.vtp_gtmOnFailure)}})}();



Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.g="twitter_website_tag";Z.__twitter_website_tag.h=!0;Z.__twitter_website_tag.b=0})(function(a){(function(a,b){a.twq||(b=a.twq=function(){b.exe?b.exe.apply(b,arguments):b.queue.push(arguments)},b.version="1",b.queue=[],Q("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=X(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");
b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);A(a.vtp_gtmOnSuccess)})}();
Z.a.zone=[],function(){function a(a){for(var b=a.vtp_boundaries||[],c=0;c<b.length;c++)if(!b[c])return!1;return!0}function b(b){var d=G.o,e=d+":"+b.vtp_gtmTagId,g=R("gtm.uniqueEventId")||0,l=Nc(function(){return new k}),m=a(b),n=b.vtp_enableTypeRestrictions?b.vtp_whitelistedTypes.map(function(a){return a.typeId}):null;n=n&&Ea(n,h);if(l.registerZone(e,g,m,n))for(var E=b.vtp_childContainers.map(function(a){return a.publicId}),B=0;B<E.length;B++){var I=String(E[B]);if(l.registerChild(I,d,e)){var W=0!==
I.indexOf("GTM-"),O=0===I.indexOf("SB-")?c():void 0;if(W){var F=function(a,b){Ug(arguments)};F("js",new Date);F("config",I)}ch(I,O,W)}}}function c(){var a=Wg("_oid")[0];if(a)return{oid:a,namespace:"cookie"}}var d={active:!1,isWhitelisted:function(){return!1}},e={active:!0,isWhitelisted:function(){return!0}},g={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},h={cl:["ecl"],ecl:["cl"]},k=function(){this.tb={};this.Rc={}};k.prototype.checkState=function(a,b){var c=this.tb[a];
if(!c)return e;var g=this.checkState(c.Md,b);if(!g.active)return d;for(var h=[],k=0;k<c.Qc.length;k++){var l=this.Rc[c.Qc[k]];l.Sa(b)&&h.push(l)}return h.length?{active:!0,isWhitelisted:function(a){if(!g.isWhitelisted(a))return!1;for(var b=0;b<h.length;++b)if(h[b].isWhitelisted(a))return!0;return!1}}:d};k.prototype.unregisterChild=function(a){delete this.tb[a]};k.prototype.registerZone=function(a,b,c,d){var e=this.Rc[a];if(e)return e.ag(b,c),!1;if(!c)return!1;this.Rc[a]=new l(b,d);return!0};k.prototype.registerChild=
function(a,b,c){var d=this.tb[a];if(!d&&J[a]||d&&d.Md!==b)return!1;if(d)return d.Qc.push(c),!1;this.tb[a]={Md:b,Qc:[c]};return!0};var l=function(a,b){this.P=[{gc:a,Sa:!0}];this.Ib=null;if(b){this.Ib={};for(var c=0;c<b.length;c++)this.Ib[b[c]]=!0}};l.prototype.ag=function(a,b){var c=this.P[this.P.length-1];a<=c.gc||c.Sa!=b&&this.P.push({gc:a,Sa:b})};l.prototype.Sa=function(a){if(!this.P||0==this.P.length)return!1;for(var b=this.P.length-1;0<=b;b--)if(this.P[b].gc<=a)return this.P[b].Sa;return!1};l.prototype.isWhitelisted=
function(a){return this.Ib?g[a]||!!this.Ib[a]:!0};var m=function(a){b(a);A(a.vtp_gtmOnSuccess)};Z.__zone=m;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.b=0}();
Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=x.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){A(h)}}}var c=function(d){if(x.body){var e=
d.vtp_gtmOnFailure,g=eh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.kc,k=g.T;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(x.body,Xa(h),k,e)()}else Qg(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();


Z.a.lcl=[],function(){function a(){var a=T("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=Ya(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=gf("lcl",g?"nv.mwt":"mwt",0),m;m=g?gf("lcl","nv.ids",[]):gf("lcl","ids",[]);if(m.length){var n=df(e,"gtm.linkClick",m);if(b(c,e,a)&&!g&&l&&e.href){var q=T((e.target||"_self").substring(1)),r=!0;if(Ug(n,function(){r&&q&&(q.location.href=e.href)},l))r=
!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Ug(n,function(){},l||2E3);return!0}}};z(a,"click",e,!1);z(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=cb(D(b.href)),l=cb(D(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?
!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};ff("lcl","mwt",k,0);e||ff("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};ff("lcl","ids",l,[]);e||ff("lcl","nv.ids",l,[]);ah("lcl")||(a(),bh("lcl"));A(b.vtp_gtmOnSuccess)})}();

var Di={};Di.macro=function(a){if(af.Yb.hasOwnProperty(a))return af.Yb[a]},Di.onHtmlSuccess=af.rd(!0),Di.onHtmlFailure=af.rd(!1);Di.dataLayer=xc;Di.callback=function(a){lc.hasOwnProperty(a)&&ma(lc[a])&&lc[a]();delete lc[a]};Di.Se=function(){J[G.o]=Di;mc=Z.a;Rb=Rb||af;Sb=Lc};
Di.Ff=function(){J=t.google_tag_manager=t.google_tag_manager||{};if(J[G.o]){var a=J.zones;a&&a.unregisterChild(G.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nb.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=
Array.prototype.slice.call(n[r],1);Lb.push(q)}Pb=Z;Qb=hh;Di.Se();ze();Oc=!1;Pc=0;if("interactive"==x.readyState&&!x.createEventObject||"complete"==x.readyState)Rc();else{z(x,"DOMContentLoaded",Rc);z(x,"readystatechange",Rc);if(x.createEventObject&&x.documentElement.doScroll){var u=!0;try{u=!t.frameElement}catch(E){}u&&Sc()}z(t,"load",Rc)}ne=!1;"complete"===x.readyState?pe():z(t,"load",pe);a:{if(!zd)break a;t.setInterval(Ad,864E5);}ic=(new Date).getTime();}};(0,Di.Ff)();

})()
