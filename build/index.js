(window.webpackJsonp_wordpress_thankyou_meter=window.webpackJsonp_wordpress_thankyou_meter||[]).push([[1],{4:function(e,r,t){}}]),function(e){function r(r){for(var o,p,s=r[0],c=r[1],i=r[2],l=0,f=[];l<s.length;l++)p=s[l],Object.prototype.hasOwnProperty.call(n,p)&&n[p]&&f.push(n[p][0]),n[p]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(a&&a(r);f.length;)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],o=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(o=!1)}o&&(u.splice(r--,1),e=p(p.s=t[0]))}return e}var o={},n={0:0},u=[];function p(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=e,p.c=o,p.d=function(e,r,t){p.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,r){if(1&r&&(e=p(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)p.d(t,o,function(r){return e[r]}.bind(null,o));return t},p.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(r,"a",r),r},p.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p.p="";var s=window.webpackJsonp_wordpress_thankyou_meter=window.webpackJsonp_wordpress_thankyou_meter||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var i=0;i<s.length;i++)r(s[i]);var a=c;u.push([5,1]),t()}([function(e,r){e.exports=window.wp.element},function(e,r){e.exports=window.wp.i18n},function(e,r){e.exports=window.wp.blockEditor},function(e,r){e.exports=window.wp.blocks},,function(e,r,t){"use strict";t.r(r);var o=t(3),n=(t(4),t(0)),u=t(1),p=t(2);Object(o.registerBlockType)("create-block/wordpress-thankyou-meter",{edit:function(){return Object(n.createElement)("p",Object(p.useBlockProps)(),Object(u.__)("Wordpress Thankyou Meter – hello from the editor!","wordpress-thankyou-meter"))},save:function(){return Object(n.createElement)("p",p.useBlockProps.save(),Object(u.__)("Wordpress Thankyou Meter – hello from the saved content!","wordpress-thankyou-meter"))}})}]);