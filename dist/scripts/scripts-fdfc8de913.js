"use strict";angular.module("docsHubApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngMaterial","ngMdIcons"]).config(["$mdThemingProvider",function(e){e.theme("default").primaryPalette("teal").accentPalette("orange")}]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]).controller("HeaderCtrl",["$scope","$timeout","$mdSidenav","$log",function(e,o,n,t){function l(n,t){var l;return function(){var r=e,i=Array.prototype.slice.call(arguments);o.cancel(l),l=o(function(){l=void 0,n.apply(r,i)},t||10)}}function r(e){return l(function(){n(e).toggle().then(function(){t.debug("toggle "+e+" is done")})},200)}e.toggleLeft=r("left")}]).controller("LeftCtrl",["$scope","$timeout","$mdSidenav","$log",function(e,o,n,t){e.close=function(){n("left").close().then(function(){t.debug("close LEFT is done")})}}]),angular.module("docsHubApp").controller("MainCtrl",["$scope",function(e){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var o=[{name:"icon-home",color:"#777"},{name:"icon-user-plus",color:"rgb(89, 226, 168)"},{name:"icon-google-plus2",color:"#A00"},{name:"icon-youtube4",color:"#00A"},{name:"icon-settings",color:"#A00",theme:"md-warn md-hue-5"}];e.sizes={size:48,padding:10},e.fonts=[].concat(o)}]),angular.module("docsHubApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]});