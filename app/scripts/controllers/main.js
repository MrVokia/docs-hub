'use strict';

/**
 * @ngdoc function
 * @name docsHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the docsHubApp
 */
angular.module('docsHubApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	var iconData = [
	    {name: 'icon-home'        , color: "#777" },
	    {name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
	    {name: 'icon-google-plus2', color: "#A00" },
	    {name: 'icon-youtube4'    , color:"#00A" },
	     // Use theming to color the font-icon
	    {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
	  ];
	// Create a set of sizes...
	$scope.sizes = {size:48,padding:10};
	$scope.fonts = [].concat(iconData);
  });
