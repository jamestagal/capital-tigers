/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */(function(e){"use strict";function o(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}"classList"in document.documentElement?(t=function(e,t){return e.classList.contains(t)},n=function(e,t){e.classList.add(t)},s=function(e,t){e.classList.remove(t)}):(t=function(e,t){return o(t).test(e.className)},n=function(e,n){t(e,n)||(e.className=e.className+" "+n)},s=function(e,t){e.className=e.className.replace(o(t)," ")});function i(e,o){var i=t(e,o)?s:n;i(e,o)}var t,n,s,a={hasClass:t,addClass:n,removeClass:s,toggleClass:i,has:t,add:n,remove:s,toggle:i};typeof define=="function"&&define.amd?define(a):e.classie=a})(window)