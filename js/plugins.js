// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

/*
jquery.animate-enhanced plugin v0.98
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(c,I,J){function O(a,b,c,e,l,k,f,p,q){var t=!1,f=!0===f&&!0===p,b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};for(var p=b.meta,m=b.original,g=b.properties,P=b.secondary,B=r.length-1;0<=B;B--){var D=r[B]+"transition-property",E=r[B]+"transition-duration",h=r[B]+"transition-timing-function",c=f?r[B]+"transform":c;t&&(m[D]=a.css(D)||"",m[E]=a.css(E)||"",m[h]=a.css(h)||"");P[c]=f?(!0===q||!0===y&&!1!==q)&&K?"translate3d("+p.left+"px, "+p.top+
"px, 0)":"translate("+p.left+"px,"+p.top+"px)":k;g[D]=(g[D]?g[D]+",":"")+c;g[E]=(g[E]?g[E]+",":"")+e+"ms";g[h]=(g[h]?g[h]+",":"")+l}return b}function z(a){for(var c in a)return!1;return!0}function G(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function L(a){var c=!0;a.each(function(a,e){return c=c&&e.ownerDocument});return c}var Q="top right bottom left opacity height width".split(" "),H=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],R=["avoidTransforms","useTranslate3d","leaveTransforms"],
S=/^([+-]=)?([\d+-.]+)(.*)$/,T=/([A-Z])/g,U={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},M=null,F=!1,A=(document.body||document.documentElement).style,N=void 0!==A.WebkitTransition||void 0!==A.MozTransition||void 0!==A.OTransition||void 0!==A.transition,K="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=K;c.expr&&c.expr.filters&&(M=c.expr.filters.animated,c.expr.filters.animated=function(a){return c(a).data("events")&&c(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?
!0:M.call(this,a)});c.extend({toggle3DByDefault:function(){return y=!y},toggleDisabledByDefault:function(){return F=!F}});c.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),c={x:0,y:0};if(a)for(var n=r.length-1;0<=n;n--){var e=a.getPropertyValue(r[n]+"transform");if(e&&/matrix/i.test(e)){a=e.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return c};c.fn.animate=function(a,b,n,e){var a=a||{},l=!("undefined"!==
typeof a.bottom||"undefined"!==typeof a.right),k=c.speed(b,n,e),f=this,p=0,q=function(){p--;0===p&&"function"===typeof k.complete&&k.complete.apply(f,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:F)))if(!(t=!N))if(!(t=z(a))){var m;a:{for(m in a)if(("width"==m||"height"==m)&&("show"==a[m]||"hide"==a[m]||"toggle"==a[m])){m=!0;break a}m=!1}t=m||0>=k.duration||!0===c.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms}return t?I.apply(this,arguments):
this[!0===k.queue?"queue":"each"](function(){var g=c(this),b=c.extend({},k),f=function(b){var e=g.data("jQe")||{original:{}},d={};if(2==b.eventPhase){if(!0!==a.leaveTransforms){for(b=r.length-1;0<=b;b--)d[r[b]+"transform"]="";if(l&&"undefined"!==typeof e.meta)for(var b=0,f;f=H[b];++b)d[f]=e.meta[f+"_o"]+"px",c(this).css(f,d[f])}g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(d).data("jQe",null);"hide"===a.opacity&&g.css({display:"none",opacity:""});q.call(this)}},
e={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",
easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},m={},e=e[b.easing||"swing"]?e[b.easing||"swing"]:b.easing||"swing",h;for(h in a)if(-1===c.inArray(h,R)){var n=-1<c.inArray(h,H),i;var j=g,w=a[h],u=h,s=n&&!0!==
a.avoidTransforms;if("d"==u)i=void 0;else if(L(j)){var d=S.exec(w);i="auto"===j.css(u)?0:j.css(u);i="string"==typeof i?G(i):i;"string"==typeof w&&G(w);var s=!0===s?0:i,t=j.is(":hidden"),v=j.translation();"left"==u&&(s=parseInt(i,10)+v.x);"right"==u&&(s=parseInt(i,10)+v.x);"top"==u&&(s=parseInt(i,10)+v.y);"bottom"==u&&(s=parseInt(i,10)+v.y);!d&&"show"==w?(s=1,t&&j.css({display:"block",opacity:0})):!d&&"hide"==w&&(s=0);d?(j=parseFloat(d[2]),d[1]&&(j=("-="===d[1]?-1:1)*j+parseInt(s,10)),i=j):i=s}else i=
void 0;if(d=!0!==a.avoidTransforms)if(d=h,j=i,w=g,L(w)){u=-1<c.inArray(d,Q);if(("width"==d||"height"==d||"opacity"==d)&&parseFloat(j)===parseFloat(w.css(d)))u=!1;d=u}else d=!1;if(d){d=g;j=h;w=b.duration;u=e;i=n&&!0===a.avoidTransforms?i+"px":i;var n=n&&!0!==a.avoidTransforms,s=l,t=!0===a.useTranslate3d,v=(v=d.data("jQe"))&&!z(v)?v:c.extend(!0,{},U),x=i;if(-1<c.inArray(j,H)){var C=v.meta,A=G(d.css(j))||0,y=j+"_o",x=i-A;C[j]=x;C[y]="auto"==d.css(j)?0+x:A+x||0;v.meta=C;s&&0===x&&(x=0-C[y],C[j]=x,C[y]=
0)}d.data("jQe",O(d,v,j,w,u,x,n,s,t))}else m[h]=a[h]}g.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((h=g.data("jQe"))&&!z(h)&&!z(h.secondary)){p++;g.css(h.properties);var F=h.secondary;setTimeout(function(){g.bind("webkitTransitionEnd oTransitionEnd transitionend",f).css(F)})}else b.queue=!1;z(m)||(p++,I.apply(g,[m,{duration:b.duration,easing:c.easing[b.easing]?b.easing:c.easing.swing?"swing":"linear",complete:q,queue:b.queue}]));return!0})};c.fn.animate.defaults={};c.fn.stop=function(a,
b,n){if(!N)return J.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var e=c(this),l=e.data("jQe");if(l&&!z(l)){var k,f={};if(b){if(f=l.secondary,!n&&void 0!==typeof l.meta.left_o||void 0!==typeof l.meta.top_o){f.left=void 0!==typeof l.meta.left_o?l.meta.left_o:"auto";f.top=void 0!==typeof l.meta.top_o?l.meta.top_o:"auto";for(k=r.length-1;0<=k;k--)f[r[k]+"transform"]=""}}else if(!z(l.secondary)){var p=window.getComputedStyle(e[0],null);if(p)for(var q in l.secondary)if(l.secondary.hasOwnProperty(q)&&
(q=q.replace(T,"-$1").toLowerCase(),f[q]=p.getPropertyValue(q),!n&&/matrix/i.test(f[q]))){k=f[q].replace(/^matrix\(/i,"").split(/, |\)$/g);f.left=parseFloat(k[4])+parseFloat(e.css("left"))+"px"||"auto";f.top=parseFloat(k[5])+parseFloat(e.css("top"))+"px"||"auto";for(k=r.length-1;0<=k;k--)f[r[k]+"transform"]=""}}e.unbind("webkitTransitionEnd oTransitionEnd transitionend");e.css(l.original).css(f).data("jQe",null)}else J.apply(e,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);


/* ==========================================================================
   Spin.js
   ========================================================================== */

//fgnass.github.com/spin.js#v1.2.7
!function(window, document, undefined) {

  /**
   * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
   * Licensed under the MIT license
   */

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }()

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines*100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-'+prefix+'-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }
    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   **/
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  var defaults = {
    lines: 14,            // The number of lines to draw
    length: 5,            // The length of each line
    width: 3,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 2,           // Roundness (0..1)
    color: '#999999',        // #rgb or #rrggbb
    speed: 1.5,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  var Spinner = function Spinner(o) {
    if (!this.spin) return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  Spinner.defaults = {}

  merge(Spinner.prototype, {
    spin: function(target) {
      this.stop()
      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('aria-role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var s=o.lines; s; s--) {
            var alpha = Math.max(1-(i+s*astep)%f * ostep, o.opacity)
            self.opacity(el, o.lines-s, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    lines: function(el, o) {
      var i = 0
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, i, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })

  /////////////////////////////////////////////////////////////////////////
  // VML rendering for IE
  /////////////////////////////////////////////////////////////////////////

  /**
   * Check and init VML support
   */
  ;(function() {

    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    var s = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(s, 'transform') && s.adj) {

      // VML support detected. Insert CSS rule ...
      sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

      Spinner.prototype.lines = function(el, o) {
        var r = o.length+o.width
          , s = 2*r

        function grp() {
          return css(
            vml('group', {
              coordsize: s + ' ' + s,
              coordorigin: -r + ' ' + -r
            }),
            { width: s, height: s }
          )
        }

        var margin = -(o.width+o.length)*2 + 'px'
          , g = css(grp(), {position: 'absolute', top: margin, left: margin})
          , i

        function seg(i, dx, filter) {
          ins(g,
            ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
              ins(css(vml('roundrect', {arcsize: o.corners}), {
                  width: r,
                  height: o.width,
                  left: o.radius,
                  top: -o.width>>1,
                  filter: filter
                }),
                vml('fill', {color: o.color, opacity: o.opacity}),
                vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
              )
            )
          )
        }

        if (o.shadow)
          for (i = 1; i <= o.lines; i++)
            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

        for (i = 1; i <= o.lines; i++) seg(i)
        return ins(el, g)
      }

      Spinner.prototype.opacity = function(el, i, val, o) {
        var c = el.firstChild
        o = o.shadow && o.lines || 0
        if (c && i+o < c.childNodes.length) {
          c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
          if (c) c.opacity = val
        }
      }
    }
    else
      useCssAnimations = vendor(s, 'animation')
  })()

  if (typeof define == 'function' && define.amd)
    define(function() { return Spinner })
  else
    window.Spinner = Spinner

}(window, document);

$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};



/* ==========================================================================
   WaitForImages 1.4.1
   ========================================================================== */

/*
* waitForImages 1.4.1
* -----------------
* Provides a callback when all images have loaded in your given selector.
* http://alexanderdickson.com/
*
*
* Copyright (c) 2011-2012 Alex Dickson
* Licensed under the MIT licenses.
* See website for more info.
*
*/

;(function($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
'backgroundImage',
'listStyleImage',
'borderImage',
'borderCornerImage'
        ]
    };
    
    // Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function(obj) {
        // Ensure we are dealing with an `img` element with a valid `src` attribute.
        if ( ! $(obj).is('img[src!=""]')) {
            return false;
        }

        // Firefox's `complete` property will always be `true` even if the image has not been downloaded.
        // Doing it this way works in Firefox.
        var img = document.createElement('img');
        img.src = obj.src;
        return ! img.complete;
    };

    $.fn.waitForImages = function(finishedCallback, eachCallback, waitForAll) {

        var allImgsLength = 0;
        var allImgsLoaded = 0;

        // Handle options object.
        if ($.isPlainObject(arguments[0])) {
            finishedCallback = finishedCallback.finished;
            eachCallback = finishedCallback.each;
            waitForAll = finishedCallback.waitForAll;
        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if ( ! $.isFunction(finishedCallback) || ! $.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        return this.each(function() {
            // Build a list of all imgs, dependent on what images will be considered.
            var obj = $(this);
var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
// To match `url()` references.
// Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {
                
                // Get all elements (including the original), as any one of them could have a background image.
                obj.find('*').andSelf().each(function() {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
var match;

                        // If it doesn't contain this property, skip.
                        if ( ! propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        };
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj
                 .find('img:uncached')
                 .each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            };

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength == 0) {
                finishedCallback.call(obj[0]);
            }

            $.each(allImgs, function(i, img) {
                
                var image = new Image;
                
                // Handle the image loading and error with the same callback.
                $(image).bind('load.' + eventNamespace + ' error.' + eventNamespace, function(event) {
                    allImgsLoaded++;
                    
                    // If an error occurred with loading the image, set the third argument accordingly.
                    eachCallback.call(img.element, allImgsLoaded, allImgsLength, event.type == 'load');
                    
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        return false;
                    };
                    
                });

                image.src = img.src;
            });
        });
    };
})(jQuery)



/* ==========================================================================
   Mouse Wheel
   ========================================================================== */

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.6
*
* Requires: 1.2.2+
*/

;(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);



/* ==========================================================================
   Custom Scroll
   ========================================================================== */

;(function(b){var a={init:function(c){var e={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:550,scrollEasing:"easeOutCirc",mouseWheel:"auto",autoDraggerLength:true,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:20,scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false},callbacks:{onScroll:function(){},onTotalScroll:function(){},onTotalScrollOffset:0}},c=b.extend(true,e,c);b(document).data("mCS-is-touch-device",false);if(d()){b(document).data("mCS-is-touch-device",true)}function d(){return !!("ontouchstart" in window)?1:0}return this.each(function(){var m=b(this);if(c.set_width){m.css("width",c.set_width)}if(c.set_height){m.css("height",c.set_height)}if(!b(document).data("mCustomScrollbar-index")){b(document).data("mCustomScrollbar-index","1")}else{var s=parseInt(b(document).data("mCustomScrollbar-index"));b(document).data("mCustomScrollbar-index",s+1)}m.wrapInner("<div class='mCustomScrollBox' id='mCSB_"+b(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+b(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(c.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(c.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(c.scrollButtons.enable){if(c.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>")}}g.bind("scroll",function(){g.scrollTop(0).scrollLeft(0)});m.data({horizontalScroll:c.horizontalScroll,scrollInertia:c.scrollInertia,scrollEasing:c.scrollEasing,mouseWheel:c.mouseWheel,autoDraggerLength:c.autoDraggerLength,"scrollButtons-enable":c.scrollButtons.enable,"scrollButtons-scrollType":c.scrollButtons.scrollType,"scrollButtons-scrollSpeed":c.scrollButtons.scrollSpeed,"scrollButtons-scrollAmount":c.scrollButtons.scrollAmount,autoExpandHorizontalScroll:c.advanced.autoExpandHorizontalScroll,"onScroll-Callback":c.callbacks.onScroll,"onTotalScroll-Callback":c.callbacks.onTotalScroll,"onTotalScroll-Offset":c.callbacks.onTotalScrollOffset}).mCustomScrollbar("update");if(c.advanced.updateOnBrowserResize){var i;b(window).resize(function(){if(i){clearTimeout(i)}i=setTimeout(function(){m.mCustomScrollbar("update")},150)})}}else{var f=navigator.userAgent;if(f.indexOf("Android")!=-1){var r=parseFloat(f.slice(f.indexOf("Android")+8));if(r<3){j("mCSB_"+b(document).data("mCustomScrollbar-index"))}else{g.css({overflow:"auto","-webkit-overflow-scrolling":"touch"})}}else{g.css({overflow:"auto","-webkit-overflow-scrolling":"touch"})}o.addClass("mCS_no_scrollbar mCS_touch");m.data({horizontalScroll:c.horizontalScroll,scrollInertia:c.scrollInertia,scrollEasing:c.scrollEasing,autoExpandHorizontalScroll:c.advanced.autoExpandHorizontalScroll,"onScroll-Callback":c.callbacks.onScroll,"onTotalScroll-Callback":c.callbacks.onTotalScroll,"onTotalScroll-Offset":c.callbacks.onTotalScrollOffset});g.scroll(function(){m.mCustomScrollbar("callbacks",g,o)});function j(w){var t=document.getElementById(w),u=0,v=0;document.getElementById(w).addEventListener("touchstart",function(x){u=this.scrollTop+x.touches[0].pageY;v=this.scrollLeft+x.touches[0].pageX},false);document.getElementById(w).addEventListener("touchmove",function(x){if((this.scrollTop<this.scrollHeight-this.offsetHeight&&this.scrollTop+x.touches[0].pageY<u-5)||(this.scrollTop!=0&&this.scrollTop+x.touches[0].pageY>u+5)){x.preventDefault()}if((this.scrollLeft<this.scrollWidth-this.offsetWidth&&this.scrollLeft+x.touches[0].pageX<v-5)||(this.scrollLeft!=0&&this.scrollLeft+x.touches[0].pageX>v+5)){x.preventDefault()}this.scrollTop=u-x.touches[0].pageY;this.scrollLeft=v-x.touches[0].pageX},false)}}if(c.advanced.updateOnContentResize){var p;if(c.horizontalScroll){var n=o.outerWidth();if(d()){g.css({"-webkit-overflow-scrolling":"auto"})}}else{var n=o.outerHeight()}p=setInterval(function(){if(c.horizontalScroll){if(c.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var t=o.outerWidth()}else{var t=o.outerHeight()}if(t!=n){m.mCustomScrollbar("update");n=t}},300)}})},update:function(){var l=b(this),i=l.children(".mCustomScrollBox"),o=i.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){o.removeClass("mCS_no_scrollbar")}var w=i.children(".mCSB_scrollTools"),m=w.children(".mCSB_draggerContainer"),k=m.children(".mCSB_dragger");if(l.data("horizontalScroll")){var y=w.children(".mCSB_buttonLeft"),r=w.children(".mCSB_buttonRight"),d=i.width();if(l.data("autoExpandHorizontalScroll")){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var x=o.outerWidth()}else{var u=w.children(".mCSB_buttonUp"),e=w.children(".mCSB_buttonDown"),p=i.height(),g=o.outerHeight()}if(g>p&&!l.data("horizontalScroll")&&!b(document).data("mCS-is-touch-device")){w.css("display","block");var q=m.height();if(l.data("autoDraggerLength")){var s=Math.round(p/g*q),j=k.data("minDraggerHeight");if(s<=j){k.css({height:j})}else{if(s>=q-10){var n=q-10;k.css({height:n})}else{k.css({height:s})}}k.children(".mCSB_dragger_bar").css({"line-height":k.height()+"px"})}var z=k.height(),v=(g-p)/(q-z);l.data("scrollAmount",v);l.mCustomScrollbar("scrolling",i,o,m,k,u,e,y,r);var B=Math.abs(Math.round(o.position().top));l.mCustomScrollbar("scrollTo",B,{callback:false})}else{if(x>d&&l.data("horizontalScroll")&&!b(document).data("mCS-is-touch-device")){w.css("display","block");var f=m.width();if(l.data("autoDraggerLength")){var h=Math.round(d/x*f),A=k.data("minDraggerWidth");if(h<=A){k.css({width:A})}else{if(h>=f-10){var c=f-10;k.css({width:c})}else{k.css({width:h})}}}var t=k.width(),v=(x-d)/(f-t);l.data("scrollAmount",v);l.mCustomScrollbar("scrolling",i,o,m,k,u,e,y,r);var B=Math.abs(Math.round(o.position().left));l.mCustomScrollbar("scrollTo",B,{callback:false})}else{i.unbind("mousewheel");i.unbind("focusin");if(l.data("horizontalScroll")){k.add(o).css("left",0)}else{k.add(o).css("top",0)}w.css("display","none");o.addClass("mCS_no_scrollbar")}}},scrolling:function(h,p,m,j,v,c,y,s){var l=b(this);if(!j.hasClass("ui-draggable")){if(l.data("horizontalScroll")){var i="x"}else{var i="y"}j.draggable({axis:i,containment:"parent",drag:function(B,C){l.mCustomScrollbar("scroll");j.addClass("mCSB_dragger_onDrag")},stop:function(B,C){j.removeClass("mCSB_dragger_onDrag")}})}m.unbind("click").bind("click",function(D){if(l.data("horizontalScroll")){var B=(D.pageX-m.offset().left);if(B<j.position().left||B>(j.position().left+j.width())){var C=B;if(C>=m.width()-j.width()){C=m.width()-j.width()}j.css("left",C);l.mCustomScrollbar("scroll")}}else{var B=(D.pageY-m.offset().top);if(B<j.position().top||B>(j.position().top+j.height())){var C=B;if(C>=m.height()-j.height()){C=m.height()-j.height()}j.css("top",C);l.mCustomScrollbar("scroll")}}});if(l.data("mouseWheel")){var t=l.data("mouseWheel");if(l.data("mouseWheel")==="auto"){t=8;var n=navigator.userAgent;if(n.indexOf("Mac")!=-1&&n.indexOf("Safari")!=-1&&n.indexOf("AppleWebKit")!=-1&&n.indexOf("Chrome")==-1){t=1}}h.unbind("mousewheel").bind("mousewheel",function(E,J){E.preventDefault();var I=Math.abs(J*t);if(l.data("horizontalScroll")){var D=j.position().left-(J*I);j.css("left",D);if(j.position().left<0){j.css("left",0)}var H=m.width(),G=j.width();if(j.position().left>H-G){j.css("left",H-G)}}else{var B=j.position().top-(J*I);j.css("top",B);if(j.position().top<0){j.css("top",0)}var F=m.height(),C=j.height();if(j.position().top>F-C){j.css("top",F-C)}}l.mCustomScrollbar("scroll")})}if(l.data("scrollButtons-enable")){if(l.data("scrollButtons-scrollType")==="pixels"){var A;if(b.browser.msie&&parseInt(b.browser.version)<9){l.data("scrollInertia",0)}if(l.data("horizontalScroll")){s.add(y).unbind("click mousedown mouseup mouseout",k,g);s.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().left)+l.data("scrollButtons-scrollAmount");l.mCustomScrollbar("scrollTo",A)}});y.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().left)-l.data("scrollButtons-scrollAmount");if(p.position().left>=-l.data("scrollButtons-scrollAmount")){A="left"}l.mCustomScrollbar("scrollTo",A)}})}else{c.add(v).unbind("click mousedown mouseup mouseout",r,f);c.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().top)+l.data("scrollButtons-scrollAmount");l.mCustomScrollbar("scrollTo",A)}});v.bind("click",function(B){B.preventDefault();if(!p.is(":animated")){A=Math.abs(p.position().top)-l.data("scrollButtons-scrollAmount");if(p.position().top>=-l.data("scrollButtons-scrollAmount")){A="top"}l.mCustomScrollbar("scrollTo",A)}})}}else{if(l.data("horizontalScroll")){s.add(y).unbind("click mousedown mouseup mouseout",k,g);var x,e=m.width(),u=j.width();s.bind("mousedown",function(C){C.preventDefault();var B=e-u;x=setInterval(function(){var D=Math.abs(j.position().left-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({left:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var k=function(B){B.preventDefault();clearInterval(x);j.stop()};s.bind("mouseup mouseout",k);var d;y.bind("mousedown",function(C){C.preventDefault();var B=0;d=setInterval(function(){var D=Math.abs(j.position().left-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({left:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var g=function(B){B.preventDefault();clearInterval(d);j.stop()};y.bind("mouseup mouseout",g)}else{c.add(v).unbind("click mousedown mouseup mouseout",r,f);var o,q=m.height(),z=j.height();c.bind("mousedown",function(C){C.preventDefault();var B=q-z;o=setInterval(function(){var D=Math.abs(j.position().top-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({top:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var r=function(B){B.preventDefault();clearInterval(o);j.stop()};c.bind("mouseup mouseout",r);var w;v.bind("mousedown",function(C){C.preventDefault();var B=0;w=setInterval(function(){var D=Math.abs(j.position().top-B)*(100/l.data("scrollButtons-scrollSpeed"));j.stop().animate({top:B},D,"linear");l.mCustomScrollbar("scroll")},20)});var f=function(B){B.preventDefault();clearInterval(w);j.stop()};v.bind("mouseup mouseout",f)}}}h.unbind("focusin").bind("focusin",function(){h.scrollTop(0).scrollLeft(0);var C=b(document.activeElement);if(C.is("input,textarea,select,button,a[tabindex],area,object")){if(l.data("horizontalScroll")){var J=p.position().left,G=C.position().left,E=h.width(),H=C.outerWidth();if(J+G>=0&&J+G<=E-H){}else{var K=G/l.data("scrollAmount");if(K>=m.width()-j.width()){K=m.width()-j.width()}j.css("left",K);l.mCustomScrollbar("scroll")}}else{var I=p.position().top,F=C.position().top,B=h.height(),D=C.outerHeight();if(I+F>=0&&I+F<=B-D){}else{var K=F/l.data("scrollAmount");if(K>=m.height()-j.height()){K=m.height()-j.height()}j.css("top",K);l.mCustomScrollbar("scroll")}}}})},scroll:function(h){var k=b(this),p=k.find(".mCSB_dragger"),n=k.find(".mCSB_container"),e=k.find(".mCustomScrollBox");if(k.data("horizontalScroll")){var g=p.position().left,m=-g*k.data("scrollAmount"),o=n.position().left,d=Math.round(o-m)}else{var f=p.position().top,j=-f*k.data("scrollAmount"),l=n.position().top,c=Math.round(l-j)}if(b.browser.webkit){var q=(window.outerWidth-8)/window.innerWidth,i=(q<0.98||q>1.02)}if(k.data("scrollInertia")===0||i){if(k.data("horizontalScroll")){n.css("left",m)}else{n.css("top",j)}if(!h){k.mCustomScrollbar("callbacks",e,n)}}else{if(k.data("horizontalScroll")){n.stop().animate({left:"-="+d},k.data("scrollInertia"),k.data("scrollEasing"),function(){if(!h){k.mCustomScrollbar("callbacks",e,n)}})}else{n.stop().animate({top:"-="+c},k.data("scrollInertia"),k.data("scrollEasing"),function(){if(!h){k.mCustomScrollbar("callbacks",e,n)}})}}},scrollTo:function(g,m){var f={moveDragger:false,callback:true},m=b.extend(f,m),i=b(this),c,d=i.find(".mCustomScrollBox"),j=d.children(".mCSB_container");if(!b(document).data("mCS-is-touch-device")){var e=i.find(".mCSB_draggerContainer"),k=e.children(".mCSB_dragger")}var l;if(g){if(typeof(g)==="number"){if(m.moveDragger){c=g}else{l=g;c=Math.round(l/i.data("scrollAmount"))}}else{if(typeof(g)==="string"){var h;if(g==="top"){h=0}else{if(g==="bottom"&&!i.data("horizontalScroll")){h=j.outerHeight()-d.height()}else{if(g==="left"){h=0}else{if(g==="right"&&i.data("horizontalScroll")){h=j.outerWidth()-d.width()}else{if(g==="first"){h=i.find(".mCSB_container").find(":first")}else{if(g==="last"){h=i.find(".mCSB_container").find(":last")}else{h=i.find(g)}}}}}}if(h.length===1){if(i.data("horizontalScroll")){l=h.position().left}else{l=h.position().top}if(b(document).data("mCS-is-touch-device")){c=l}else{c=Math.ceil(l/i.data("scrollAmount"))}}else{c=h}}}if(b(document).data("mCS-is-touch-device")){if(i.data("horizontalScroll")){d.stop().animate({scrollLeft:c},i.data("scrollInertia"),i.data("scrollEasing"),function(){if(m.callback){i.mCustomScrollbar("callbacks",d,j)}})}else{d.stop().animate({scrollTop:c},i.data("scrollInertia"),i.data("scrollEasing"),function(){if(m.callback){i.mCustomScrollbar("callbacks",d,j)}})}}else{if(i.data("horizontalScroll")){if(c>=e.width()-k.width()){c=e.width()-k.width()}k.css("left",c)}else{if(c>=e.height()-k.height()){c=e.height()-k.height()}k.css("top",c)}if(m.callback){i.mCustomScrollbar("scroll")}else{i.mCustomScrollbar("scroll",true)}}}},callbacks:function(e,h){var i=b(this);if(!b(document).data("mCS-is-touch-device")){if(i.data("horizontalScroll")){var g=Math.round(h.position().left);if(g<0&&g<=e.width()-h.outerWidth()+i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}else{var f=Math.round(h.position().top);if(f<0&&f<=e.height()-h.outerHeight()+i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}}else{if(i.data("horizontalScroll")){var d=Math.round(e.scrollLeft());if(d>0&&d>=h.outerWidth()-i.width()-i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}else{var c=Math.round(e.scrollTop());if(c>0&&c>=h.outerHeight()-i.height()-i.data("onTotalScroll-Offset")){i.data("onTotalScroll-Callback").call()}else{i.data("onScroll-Callback").call()}}}}};b.fn.mCustomScrollbar=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method "+c+" does not exist")}}}})(jQuery);


/* ==========================================================================
   Masonry
   ========================================================================== */
/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var g=this;setTimeout(function(){g.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){g.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);

/*!
 * jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 * 
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
(function ($, undefined) {
  var PROP_NAME = 'selectbox',
    FALSE = false,
    TRUE = true;
  /**
   * Selectbox manager.
   * Use the singleton instance of this class, $.selectbox, to interact with the select box.
   * Settings for (groups of) select boxes are maintained in an instance object,
   * allowing multiple different settings on the same page
   */
  function Selectbox() {
    this._state = [];
    this._defaults = { // Global defaults for all the select box instances
      classHolder: "sbHolder",
      classHolderDisabled: "sbHolderDisabled",
      classSelector: "sbSelector",
      classOptions: "sbOptions",
      classGroup: "sbGroup",
      classSub: "sbSub",
      classDisabled: "sbDisabled",
      classToggleOpen: "sbToggleOpen",
      classToggle: "sbToggle",
      classFocus: "sbFocus",
      speed: 200,
      effect: "slide", // "slide" or "fade"
      onChange: null, //Define a callback function when the selectbox is changed
      onOpen: null, //Define a callback function when the selectbox is open
      onClose: null //Define a callback function when the selectbox is closed
    };
  }
  
  $.extend(Selectbox.prototype, {
    /**
     * Is the first field in a jQuery collection open as a selectbox
     * 
     * @param {Object} target
     * @return {Boolean}
     */
    _isOpenSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isOpen;
    },
    /**
     * Is the first field in a jQuery collection disabled as a selectbox
     * 
     * @param {HTMLElement} target
     * @return {Boolean}
     */
    _isDisabledSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isDisabled;
    },
    /**
     * Attach the select box to a jQuery selection.
     * 
     * @param {HTMLElement} target
     * @param {Object} settings
     */
    _attachSelectbox: function (target, settings) {
      if (this._getInst(target)) {
        return FALSE;
      }
      var $target = $(target),
        self = this,
        inst = self._newInst($target),
        sbHolder, sbSelector, sbToggle, sbOptions,
        s = FALSE, optGroup = $target.find("optgroup"), opts = $target.find("option"), olen = opts.length;
        
      $target.attr("sb", inst.uid);
        
      $.extend(inst.settings, self._defaults, settings);
      self._state[inst.uid] = FALSE;
      $target.hide();
      
      function closeOthers() {
        var key, sel,
          uid = this.attr("id").split("_")[1];
        for (key in self._state) {
          if (key !== uid) {
            if (self._state.hasOwnProperty(key)) {
              sel = $("select[sb='" + key + "']")[0];
              if (sel) {
                self._closeSelectbox(sel);
              }
            }
          }
        }
      }
      
      sbHolder = $("<div>", {
        "id": "sbHolder_" + inst.uid,
        "class": inst.settings.classHolder,
        "tabindex": $target.attr("tabindex")
      });
      
      sbSelector = $("<a>", {
        "id": "sbSelector_" + inst.uid,
        "href": "#",
        "class": inst.settings.classSelector,
        "click": function (e) {
          e.preventDefault();
          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
        }
      });
      
      sbToggle = $("<a>", {
        "id": "sbToggle_" + inst.uid,
        "href": "#",
        "class": inst.settings.classToggle,
        "click": function (e) {
          e.preventDefault();
          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
        }
      });
      sbToggle.appendTo(sbHolder);

      sbOptions = $("<ul>", {
        "id": "sbOptions_" + inst.uid,
        "class": inst.settings.classOptions,
        "css": {
          "display": "none"
        }
      });
      
      $target.children().each(function(i) {
        var that = $(this), li, config = {};
        if (that.is("option")) {
          getOptions(that);
        } else if (that.is("optgroup")) {
          li = $("<li>");
          $("<span>", {
            "text": that.attr("label")
          }).addClass(inst.settings.classGroup).appendTo(li);
          li.appendTo(sbOptions);
          if (that.is(":disabled")) {
            config.disabled = true;
          }
          config.sub = true;
          getOptions(that.find("option"), config);
        }
      });
      
      function getOptions () {
        var sub = arguments[1] && arguments[1].sub ? true : false,
          disabled = arguments[1] && arguments[1].disabled ? true : false;
        arguments[0].each(function (i) {
          var that = $(this),
            li = $("<li>"),
            child;
          if (that.is(":selected")) {
            sbSelector.text(that.text());
            s = TRUE;
          }
          if (i === olen - 1) {
            li.addClass("last");
          }
          if (!that.is(":disabled") && !disabled) {
            child = $("<a>", {
              "href": "#" + that.val(),
              "rel": that.val()
            }).text(that.text()).bind("click.sb", function (e) {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              var t = sbToggle,
                $this = $(this),
                uid = t.attr("id").split("_")[1];
              self._changeSelectbox(target, $this.attr("rel"), $this.text());
              self._closeSelectbox(target);
            }).bind("mouseover.sb", function () {
              var $this = $(this);
              $this.parent().siblings().find("a").removeClass(inst.settings.classFocus);
              $this.addClass(inst.settings.classFocus);
            }).bind("mouseout.sb", function () {
              $(this).removeClass(inst.settings.classFocus);
            });
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            if (that.is(":selected")) {
              child.addClass(inst.settings.classFocus);
            }
            child.appendTo(li);
          } else {
            child = $("<span>", {
              "text": that.text()
            }).addClass(inst.settings.classDisabled);
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            child.appendTo(li);
          }
          li.appendTo(sbOptions);
        });
      }
      
      if (!s) {
        sbSelector.text(opts.first().text());
      }

      $.data(target, PROP_NAME, inst);
      
      sbHolder.data("uid", inst.uid).bind("keydown.sb", function (e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
          $this = $(this),
          uid = $this.data("uid"),
          inst = $this.siblings("select[sb='"+uid+"']").data(PROP_NAME),
          trgt = $this.siblings(["select[sb='", uid, "']"].join("")).get(0),
          $f = $this.find("ul").find("a." + inst.settings.classFocus);
        switch (key) {
          case 37: //Arrow Left
          case 38: //Arrow Up
            if ($f.length > 0) {
              var $next;
              $("a", $this).removeClass(inst.settings.classFocus);
              $next = $f.parent().prevAll("li:has(a)").eq(0).find("a");
              if ($next.length > 0) {
                $next.addClass(inst.settings.classFocus).focus();
                $("#sbSelector_" + uid).text($next.text());
              }
            }
            break;
          case 39: //Arrow Right
          case 40: //Arrow Down
            var $next;
            $("a", $this).removeClass(inst.settings.classFocus);
            if ($f.length > 0) {
              $next = $f.parent().nextAll("li:has(a)").eq(0).find("a");
            } else {
              $next = $this.find("ul").find("a").eq(0);
            }
            if ($next.length > 0) {
              $next.addClass(inst.settings.classFocus).focus();
              $("#sbSelector_" + uid).text($next.text());
            }
            break;        
          case 13: //Enter
            if ($f.length > 0) {
              self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
            }
            self._closeSelectbox(trgt);
            break;
          case 9: //Tab
            if (trgt) {
              var inst = self._getInst(trgt);
              if (inst/* && inst.isOpen*/) {
                if ($f.length > 0) {
                  self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
                }
                self._closeSelectbox(trgt);
              }
            }
            var i = parseInt($this.attr("tabindex"), 10);
            if (!e.shiftKey) {
              i++;
            } else {
              i--;
            }
            $("*[tabindex='" + i + "']").focus();
            break;
          case 27: //Escape
            self._closeSelectbox(trgt);
            break;
        }
        e.stopPropagation();
        return false;
      }).delegate("a", "mouseover", function (e) {
        $(this).addClass(inst.settings.classFocus);
      }).delegate("a", "mouseout", function (e) {
        $(this).removeClass(inst.settings.classFocus);  
      });
      
      sbSelector.appendTo(sbHolder);
      sbOptions.appendTo(sbHolder);     
      sbHolder.insertAfter($target);
      
      $("html").live('mousedown', function(e) {
        e.stopPropagation();          
        $("select").selectbox('close'); 
      });
      $([".", inst.settings.classHolder, ", .", inst.settings.classSelector].join("")).mousedown(function(e) {    
        e.stopPropagation();
      });
    },
    /**
     * Remove the selectbox functionality completely. This will return the element back to its pre-init state.
     * 
     * @param {HTMLElement} target
     */
    _detachSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).remove();
      $.data(target, PROP_NAME, null);
      $(target).show();     
    },
    /**
     * Change selected attribute of the selectbox.
     * 
     * @param {HTMLElement} target
     * @param {String} value
     * @param {String} text
     */
    _changeSelectbox: function (target, value, text) {
      var onChange,
        inst = this._getInst(target);
      if (inst) {
        onChange = this._get(inst, 'onChange');
        $("#sbSelector_" + inst.uid).text(text).css({'color':'#FFF'});
      }
      value = value.replace(/\'/g, "\\'");
      $(target).find("option[value='" + value + "']").attr("selected", TRUE);
      if (inst && onChange) {
        onChange.apply((inst.input ? inst.input[0] : null), [value, inst]);
      } else if (inst && inst.input) {
        inst.input.trigger('change');
      }
      if(value == 0){
        $("#sbSelector_" + inst.uid).css({'color':'#666', 'font-weight':'normal'});
      }
    },
    /**
     * Enable the selectbox.
     * 
     * @param {HTMLElement} target
     */
    _enableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || !inst.isDisabled) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).removeClass(inst.settings.classHolderDisabled);
      inst.isDisabled = FALSE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Disable the selectbox.
     * 
     * @param {HTMLElement} target
     */
    _disableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || inst.isDisabled) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).addClass(inst.settings.classHolderDisabled);
      inst.isDisabled = TRUE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Get or set any selectbox option. If no value is specified, will act as a getter.
     * 
     * @param {HTMLElement} target
     * @param {String} name
     * @param {Object} value
     */
    _optionSelectbox: function (target, name, value) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      //TODO check name
      inst[name] = value;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Call up attached selectbox
     * 
     * @param {HTMLElement} target
     */
    _openSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || this._state[inst.uid] || inst.isDisabled) {
      if (!inst || inst.isOpen || inst.isDisabled) {
        return;
      }
      var el = $("#sbOptions_" + inst.uid),
        viewportHeight = parseInt($(window).height(), 10),
        offset = $("#sbHolder_" + inst.uid).offset(),
        scrollTop = $(window).scrollTop(),
        height = el.prev().height(),
        diff = viewportHeight - (offset.top - scrollTop) - height / 2,
        onOpen = this._get(inst, 'onOpen');
      
      var ulHeight = $("#sbOptions_" + inst.uid + " " + "a").length;
      var setHeight;

      if((ulHeight * 30) > diff){
        setHeight = (diff - height) + "px";
      }else {
        setHeight = "auto";
      }

      el.css({
        "top": height + "px",
        "height": setHeight
      });
      if(!el.hasClass('init')){
        el.addClass('init');
        el.mCustomScrollbar({advanced:{updateOnContentResize: true},scrollInertia: 0});
      }

      var mCSB_dragger = $("#sbOptions_" + inst.uid + " " + ".mCSB_draggerContainer");
      mCSB_dragger.css({'visibility': 'hidden'});            

      inst.settings.effect === "fade" ? el.fadeIn(inst.settings.speed) : el.slideDown(inst.settings.speed);
      $("#sbToggle_" + inst.uid).addClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = TRUE;
      inst.isOpen = TRUE;
      if (onOpen) {
        onOpen.apply((inst.input ? inst.input[0] : null), [inst]);
      }
      $.data(target, PROP_NAME, inst);

      setTimeout(function(){
        el.mCustomScrollbar("update");
        mCSB_dragger.css({'visibility': 'visible'});
      },250);
    },
    /**
     * Close opened selectbox
     * 
     * @param {HTMLElement} target
     */
    _closeSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || !this._state[inst.uid]) {
      if (!inst || !inst.isOpen) {
        return;
      }
      var onClose = this._get(inst, 'onClose');
      inst.settings.effect === "fade" ? $("#sbOptions_" + inst.uid).fadeOut(inst.settings.speed) : $("#sbOptions_" + inst.uid).slideUp(inst.settings.speed);
      $("#sbToggle_" + inst.uid).removeClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = FALSE;
      inst.isOpen = FALSE;
      if (onClose) {
        onClose.apply((inst.input ? inst.input[0] : null), [inst]);
      }
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Create a new instance object
     * 
     * @param {HTMLElement} target
     * @return {Object}
     */
    _newInst: function(target) {
      var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
      return {
        id: id, 
        input: target, 
        uid: Math.floor(Math.random() * 99999999),
        isOpen: FALSE,
        isDisabled: FALSE,
        settings: {}
      }; 
    },
    /**
     * Retrieve the instance data for the target control.
     * 
     * @param {HTMLElement} target
     * @return {Object} - the associated instance data
     * @throws error if a jQuery problem getting data
     */
    _getInst: function(target) {
      try {
        return $.data(target, PROP_NAME);
      }
      catch (err) {
        throw 'Missing instance data for this selectbox';
      }
    },
    /**
     * Get a setting value, defaulting if necessary
     * 
     * @param {Object} inst
     * @param {String} name
     * @return {Mixed}
     */
    _get: function(inst, name) {
      return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
    }
  });

  /**
   * Invoke the selectbox functionality.
   * 
   * @param {Object|String} options
   * @return {Object}
   */
  $.fn.selectbox = function (options) {
    
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == 'string' && options == 'isDisabled') {
      return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
    }
    
    if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') {
      return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
    }
    
    return this.each(function() {
      typeof options == 'string' ?
        $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this].concat(otherArgs)) :
        $.selectbox._attachSelectbox(this, options);
    });
  };
  
  $.selectbox = new Selectbox(); // singleton instance
  $.selectbox.version = "0.2";
})(jQuery);

/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function(a){a.fn.slides=function(b){return b=a.extend({},a.fn.slides.option,b),this.each(function(){function w(g,h,i){if(!p&&o){p=!0,b.animationStart(n+1);switch(g){case"next":l=n,k=n+1,k=e===k?0:k,r=f*2,g=-f*2,n=k;break;case"prev":l=n,k=n-1,k=k===-1?e-1:k,r=0,g=0,n=k;break;case"pagination":k=parseInt(i,10),l=a("."+b.paginationClass+" li."+b.currentClass+" a",c).attr("href").match("[^#/]+$"),k>l?(r=f*2,g=-f*2):(r=0,g=0),n=k}h==="fade"?b.crossfade?d.children(":eq("+k+")",c).css({zIndex:10}).fadeIn(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1)}):d.children(":eq("+l+")",c).fadeOut(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing)}):d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing,function(){a.browser.msie&&a(this).get(0).style.removeAttribute("filter")}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+k+")").css({left:r,display:"block"}),b.autoHeight?d.animate({left:g,height:d.children(":eq("+k+")").outerHeight()},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1}):d.animate({left:g},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1})),b.pagination&&(a("."+b.paginationClass+" li."+b.currentClass,c).removeClass(b.currentClass),a("."+b.paginationClass+" li:eq("+k+")",c).addClass(b.currentClass))}}function x(){clearInterval(c.data("interval"))}function y(){b.pause?(clearTimeout(c.data("pause")),clearInterval(c.data("interval")),u=setTimeout(function(){clearTimeout(c.data("pause")),v=setInterval(function(){w("next",i)},b.play),c.data("interval",v)},b.pause),c.data("pause",u)):x()}a("."+b.container,a(this)).children().wrapAll('<div class="slides_control"/>');var c=a(this),d=a(".slides_control",c),e=d.children().size(),f=d.children().outerWidth(),g=d.children().outerHeight(),h=b.start-1,i=b.effect.indexOf(",")<0?b.effect:b.effect.replace(" ","").split(",")[0],j=b.effect.indexOf(",")<0?i:b.effect.replace(" ","").split(",")[1],k=0,l=0,m=0,n=0,o,p,q,r,s,t,u,v;if(e<2)return a("."+b.container,a(this)).fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()}),a("."+b.next+", ."+b.prev).fadeOut(0),!1;if(e<2)return;h<0&&(h=0),h>e&&(h=e-1),b.start&&(n=h),b.randomize&&d.randomize(),a("."+b.container,c).css({overflow:"hidden",position:"relative"}),d.children().css({position:"absolute",top:0,left:d.children().outerWidth(),zIndex:0,display:"none"}),d.css({position:"relative",width:f*3,height:g,left:-f}),a("."+b.container,c).css({display:"block"}),b.autoHeight&&(d.children().css({height:"auto"}),d.animate({height:d.children(":eq("+h+")").outerHeight()},b.autoHeightSpeed));if(b.preload&&d.find("img:eq("+h+")").length){a("."+b.container,c).css({background:"url("+b.preloadImage+") no-repeat 50% 50%"});var z=d.find("img:eq("+h+")").attr("src")+"?"+(new Date).getTime();a("img",c).parent().attr("class")!="slides_control"?t=d.children(":eq(0)")[0].tagName.toLowerCase():t=d.find("img:eq("+h+")"),d.find("img:eq("+h+")").attr("src",z).load(function(){d.find(t+":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){a(this).css({zIndex:5}),a("."+b.container,c).css({background:""}),o=!0,b.slidesLoaded()})})}else d.children(":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()});b.bigTarget&&(d.children().css({cursor:"pointer"}),d.children().click(function(){return w("next",i),!1})),b.hoverPause&&b.play&&(d.bind("mouseover",function(){x()}),d.bind("mouseleave",function(){y()})),b.generateNextPrev&&(a("."+b.container,c).after('<a href="#" class="'+b.prev+'">Prev</a>'),a("."+b.prev,c).after('<a href="#" class="'+b.next+'">Next</a>')),a("."+b.next,c).click(function(a){a.preventDefault(),b.play&&y(),w("next",i)}),a("."+b.prev,c).click(function(a){a.preventDefault(),b.play&&y(),w("prev",i)}),b.generatePagination?(b.prependPagination?c.prepend("<ul class="+b.paginationClass+"></ul>"):c.append("<ul class="+b.paginationClass+"></ul>"),d.children().each(function(){a("."+b.paginationClass,c).append('<li><a href="#'+m+'">'+(m+1)+"</a></li>"),m++})):a("."+b.paginationClass+" li a",c).each(function(){a(this).attr("href","#"+m),m++}),a("."+b.paginationClass+" li:eq("+h+")",c).addClass(b.currentClass),a("."+b.paginationClass+" li a",c).click(function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$"),n!=q&&w("pagination",j,q),!1}),a("a.link",c).click(function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$")-1,n!=q&&w("pagination",j,q),!1}),b.play&&(v=setInterval(function(){w("next",i)},b.play),c.data("interval",v))})},a.fn.slides.option={preload:!1,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}},a.fn.randomize=function(b){function c(){return Math.round(Math.random())-.5}return a(this).each(function(){var d=a(this),e=d.children(),f=e.length;if(f>1){e.hide();var g=[];for(i=0;i<f;i++)g[g.length]=i;g=g.sort(c),a.each(g,function(a,c){var f=e.eq(c),g=f.clone(!0);g.show().appendTo(d),b!==undefined&&b(f,g),f.remove()})}})}})(jQuery)














