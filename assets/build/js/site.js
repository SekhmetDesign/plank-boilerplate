var Site={};!function(t,i,n,e){"use strict";{var a=t(e);t(n)}i.init=function(){"undefined"==typeof n._gaq&&(n._gaq=[]),a.ready(s)};var s=function(){u.setup(".tabs, .tabs-vertical"),c()},c=function(){},u=function(){var i=function(i){return a.ready(function(){t(i).each(n)}),!0},n=function(){var i=t(this),n=i.find(".tabs-menu"),e=i.find(".tabs-content"),a=e.find(".tabs-title");n.addClass("visible"),a.remove(),e.not(".active").hide(),n.on("click","a",function(i){i.preventDefault();var a=t(this);a.hasClass("active")||(e.hide(),n.find(".active").removeClass("active"),e.eq(a.index()).show(),a.addClass("active"))})};return{setup:i}}();i.init()}(jQuery,Site,window,document);