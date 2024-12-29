/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var apppilo_all_pages = {
		init: function() {
			this.Basic.init();
		},

		Basic: {
			init: function() {
				this.allDemoPages();
				this.menuLiPositionRelative();
				this.newText();
			},


			allDemoPages: function (){
				$('.side-demo').on("click", function() {
					$('.demo-page-landing').toggleClass("active");
				});
			},

			menuLiPositionRelative: function (){
				if(($("li").hasClass("side-demo"))){
					$("li.side-demo").addClass('position-relative');
				}
			},

			newText: function (){
				if(($("li").hasClass("side-demo"))){
					$("li.side-demo a").append('<span class="new-demo-badge">New</span>');
				}
			},


		}
	}
	jQuery(document).ready(function (){
		apppilo_all_pages.init();
		console.log('appilo demo pages');
	});

})();
