/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;--t>=0&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===r?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?i(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var m,h,g,w,p,v,y,b={};b.cancelScroll=function(){cancelAnimationFrame(y)},b.animateScroll=function(t,i,a){var d=o(m||n,a||{}),f="[object Number]"===Object.prototype.toString.call(t),h=f||!t.tagName?null:t;if(f||h){var g=e.pageYOffset;d.header&&!w&&(w=document.querySelector(d.header)),p||(p=l(w));var v,y,A,E=f?t:c(h,p,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),S=E-g,I=u(),q=0,F=function(n,o){var a=e.pageYOffset;if(n==o||a==o||(g<o&&e.innerHeight+a)>=I)return b.cancelScroll(),s(t,o,f),d.after(t,i),v=null,!0},O=function(t){v||(v=t),q+=t-v,y=q/parseInt(d.speed,10),y=y>1?1:y,A=g+S*r(d,y),e.scrollTo(0,Math.floor(A)),F(A,E)||(e.requestAnimationFrame(O),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),b.cancelScroll(),e.requestAnimationFrame(O)}};var A=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),b.animateScroll(h,g),h=null,g=null)},E=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(i))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=a(decodeURIComponent(g.hash))}catch(e){n=a(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?A():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),A()))}},S=function(e){v||(v=setTimeout((function(){v=null,p=l(w)}),66))};return b.destroy=function(){m&&(document.removeEventListener("click",E,!1),e.removeEventListener("resize",S,!1),b.cancelScroll(),m=null,h=null,g=null,w=null,p=null,v=null,y=null)},b.init=function(i){t&&(b.destroy(),m=o(n,i||{}),w=m.header?document.querySelector(m.header):null,p=l(w),document.addEventListener("click",E,!1),e.addEventListener("hashchange",A,!1),w&&e.addEventListener("resize",S,!1))},b.init(f),b}}));

function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validateHuman(honeypot) {
  if (honeypot) {  //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
}

// get all data in form and return object
function getFormData() {
  var form = document.getElementById("contact-form");
  var elements = form.elements; // all form elements
  var fields = Object.keys(elements).filter(function(k) {
    return (elements[k].name != 'honeypot');
  }).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append
                                              // the current checked value to
                                              // the end of it, along with
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space
                                  // from the  string to make the output
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  data.formDataNameOrder = JSON.stringify(fields);
  data.formGoogleSheetName = form.dataset.sheet || "Raja Website - Contact Form"; // default sheet name
  data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form

  /* OPTION: Remove this comment to enable SPAM prevention, see README.md
  if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
    return false;
  }
  */

  if( !validEmail(data.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('contact-form').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('contact-form');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);

// Get elements
var navbar       = document.querySelector('.navbar'),
    navbarBurger = document.querySelectorAll('.navbar-burger'),
    navbarMenu   = document.querySelector('.navbar-menu'),
    navMenuItems = document.querySelectorAll('.navbar-menu .navbar-item');
var hamburger = document.querySelector('.navbar-burger'); // get hamburger


// Declare functions
function toggleMenu() {
  if(navbarBurger.length > 0) { //  Check if there are any navbar burgers

    // Add a click event on each item
    navbarBurger.forEach(function($el) {
      $el.addEventListener('click', function() {

        var target = $el.dataset.target; // data-target="navMenu"
        var $target = document.getElementById(target); // id="navMenu"

        $el.classList.toggle('is-active'); // toggle nav icon
        $target.classList.toggle('is-active'); // toggle nav menu
      });

    });

  }
}

function closeMenuOnLinkClick() {
  navMenuItems[i].addEventListener('click', function() {

    if (this.parentNode.classList.contains('is-active')) {
      this.parentNode.classList.remove('is-active'); // hide menu

      hamburger.classList.remove('is-active'); // change x to hamburger
    }

  });
}

//Close menu with click outside of menu
document.addEventListener('touchstart', function(event) {
  var isClickInside = navbar.contains(event.target);

  if (!isClickInside) {
    // console.log("outside!");
    hamburger.classList.remove('is-active');
    navbarMenu.classList.remove('is-active');
  }
});


// Close menu when clicking a list item
for (i = 0; i < navMenuItems.length; i++) {
  closeMenuOnLinkClick();
}



// Event listeners
// Add navbar hamburger functionality and 'X' animation
document.addEventListener('DOMContentLoaded', function() {
  toggleMenu();
});

// Close menu when open using ESC key, toggle X
document.onkeydown = function(evt) {
  evt = evt || window.event;

  if (navbarBurger.length > 0) {
    navbarBurger.forEach(function($el) {
      if (evt.keyCode == 27) {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        if ($el.classList.contains('is-active') && $target.classList.contains('is-active')) {
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        }
      }
    });
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  offset: 0,
  easing: 'easeOutQuad'
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtb290aC1zY3JvbGwucG9seWZpbGxzLm1pbi5qcyIsImZvcm0tc3VibWlzc2lvbi1oYW5kbGVyLmpzIiwibmF2LWhhbWJ1cmdlci5qcyIsInNjcm9sbC10by10b3AuanMiLCJ0aGFua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgc21vb3RoLXNjcm9sbCB2MTIuMS41IHwgKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvc21vb3RoLXNjcm9sbCAqL1xud2luZG93LkVsZW1lbnQmJiFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0JiYoRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdD1mdW5jdGlvbihlKXt2YXIgdCxuPSh0aGlzLmRvY3VtZW50fHx0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSksbz10aGlzO2Rve2Zvcih0PW4ubGVuZ3RoOy0tdD49MCYmbi5pdGVtKHQpIT09bzspO313aGlsZSh0PDAmJihvPW8ucGFyZW50RWxlbWVudCkpO3JldHVybiBvfSksKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD1bXCJtc1wiLFwibW96XCIsXCJ3ZWJraXRcIixcIm9cIl0sbj0wO248dC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbil3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1t0W25dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbdFtuXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbdFtuXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0LG4pe3ZhciBvPShuZXcgRGF0ZSkuZ2V0VGltZSgpLGk9TWF0aC5tYXgoMCwxNi0oby1lKSksYT13aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0KG8raSl9KSxpKTtyZXR1cm4gZT1vK2ksYX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZSl9KX0pKCksKGZ1bmN0aW9uKGUsdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSwoZnVuY3Rpb24oKXtyZXR1cm4gdChlKX0pKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KGUpOmUuU21vb3RoU2Nyb2xsPXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cInF1ZXJ5U2VsZWN0b3JcImluIGRvY3VtZW50JiZcImFkZEV2ZW50TGlzdGVuZXJcImluIGUmJlwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJpbiBlJiZcImNsb3Nlc3RcImluIGUuRWxlbWVudC5wcm90b3R5cGUsbj17aWdub3JlOlwiW2RhdGEtc2Nyb2xsLWlnbm9yZV1cIixoZWFkZXI6bnVsbCxzcGVlZDo1MDAsb2Zmc2V0OjAsZWFzaW5nOlwiZWFzZUluT3V0Q3ViaWNcIixjdXN0b21FYXNpbmc6bnVsbCxiZWZvcmU6ZnVuY3Rpb24oKXt9LGFmdGVyOmZ1bmN0aW9uKCl7fX0sbz1mdW5jdGlvbigpe2Zvcih2YXIgZT17fSx0PTAsbj1hcmd1bWVudHMubGVuZ3RoO3Q8bjt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTshKGZ1bmN0aW9uKHQpe2Zvcih2YXIgbiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJihlW25dPXRbbl0pfSkobyl9cmV0dXJuIGV9LGk9ZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlSW50KGUuZ2V0Q29tcHV0ZWRTdHlsZSh0KS5oZWlnaHQsMTApfSxhPWZ1bmN0aW9uKGUpe1wiI1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc3Vic3RyKDEpKTtmb3IodmFyIHQsbj1TdHJpbmcoZSksbz1uLmxlbmd0aCxpPS0xLGE9XCJcIixyPW4uY2hhckNvZGVBdCgwKTsrK2k8bzspe2lmKDA9PT0odD1uLmNoYXJDb2RlQXQoaSkpKXRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlcjogdGhlIGlucHV0IGNvbnRhaW5zIFUrMDAwMC5cIik7dD49MSYmdDw9MzF8fDEyNz09dHx8MD09PWkmJnQ+PTQ4JiZ0PD01N3x8MT09PWkmJnQ+PTQ4JiZ0PD01NyYmNDU9PT1yP2ErPVwiXFxcXFwiK3QudG9TdHJpbmcoMTYpK1wiIFwiOmErPXQ+PTEyOHx8NDU9PT10fHw5NT09PXR8fHQ+PTQ4JiZ0PD01N3x8dD49NjUmJnQ8PTkwfHx0Pj05NyYmdDw9MTIyP24uY2hhckF0KGkpOlwiXFxcXFwiK24uY2hhckF0KGkpfXJldHVyblwiI1wiK2F9LHI9ZnVuY3Rpb24oZSx0KXt2YXIgbjtyZXR1cm5cImVhc2VJblF1YWRcIj09PWUuZWFzaW5nJiYobj10KnQpLFwiZWFzZU91dFF1YWRcIj09PWUuZWFzaW5nJiYobj10KigyLXQpKSxcImVhc2VJbk91dFF1YWRcIj09PWUuZWFzaW5nJiYobj10PC41PzIqdCp0Oig0LTIqdCkqdC0xKSxcImVhc2VJbkN1YmljXCI9PT1lLmVhc2luZyYmKG49dCp0KnQpLFwiZWFzZU91dEN1YmljXCI9PT1lLmVhc2luZyYmKG49LS10KnQqdCsxKSxcImVhc2VJbk91dEN1YmljXCI9PT1lLmVhc2luZyYmKG49dDwuNT80KnQqdCp0Oih0LTEpKigyKnQtMikqKDIqdC0yKSsxKSxcImVhc2VJblF1YXJ0XCI9PT1lLmVhc2luZyYmKG49dCp0KnQqdCksXCJlYXNlT3V0UXVhcnRcIj09PWUuZWFzaW5nJiYobj0xLSAtLXQqdCp0KnQpLFwiZWFzZUluT3V0UXVhcnRcIj09PWUuZWFzaW5nJiYobj10PC41PzgqdCp0KnQqdDoxLTgqLS10KnQqdCp0KSxcImVhc2VJblF1aW50XCI9PT1lLmVhc2luZyYmKG49dCp0KnQqdCp0KSxcImVhc2VPdXRRdWludFwiPT09ZS5lYXNpbmcmJihuPTErLS10KnQqdCp0KnQpLFwiZWFzZUluT3V0UXVpbnRcIj09PWUuZWFzaW5nJiYobj10PC41PzE2KnQqdCp0KnQqdDoxKzE2Ki0tdCp0KnQqdCp0KSxlLmN1c3RvbUVhc2luZyYmKG49ZS5jdXN0b21FYXNpbmcodCkpLG58fHR9LHU9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpfSxjPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz0wO2lmKGUub2Zmc2V0UGFyZW50KWRve28rPWUub2Zmc2V0VG9wLGU9ZS5vZmZzZXRQYXJlbnR9d2hpbGUoZSk7cmV0dXJuIG89TWF0aC5tYXgoby10LW4sMCl9LGw9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/aShlKStlLm9mZnNldFRvcDowfSxzPWZ1bmN0aW9uKHQsbixvKXtvfHwodC5mb2N1cygpLGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQhPT10LmlkJiYodC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdC5mb2N1cygpLHQuc3R5bGUub3V0bGluZT1cIm5vbmVcIiksZS5zY3JvbGxUbygwLG4pKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4hIShcIm1hdGNoTWVkaWFcImluIGUmJmUubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uKVwiKS5tYXRjaGVzKX07cmV0dXJuIGZ1bmN0aW9uKGksZil7dmFyIG0saCxnLHcscCx2LHksYj17fTtiLmNhbmNlbFNjcm9sbD1mdW5jdGlvbigpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKHkpfSxiLmFuaW1hdGVTY3JvbGw9ZnVuY3Rpb24odCxpLGEpe3ZhciBkPW8obXx8bixhfHx7fSksZj1cIltvYmplY3QgTnVtYmVyXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLGg9Znx8IXQudGFnTmFtZT9udWxsOnQ7aWYoZnx8aCl7dmFyIGc9ZS5wYWdlWU9mZnNldDtkLmhlYWRlciYmIXcmJih3PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZC5oZWFkZXIpKSxwfHwocD1sKHcpKTt2YXIgdix5LEEsRT1mP3Q6YyhoLHAscGFyc2VJbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgZC5vZmZzZXQ/ZC5vZmZzZXQoKTpkLm9mZnNldCwxMCkpLFM9RS1nLEk9dSgpLHE9MCxGPWZ1bmN0aW9uKG4sbyl7dmFyIGE9ZS5wYWdlWU9mZnNldDtpZihuPT1vfHxhPT1vfHwoZzxvJiZlLmlubmVySGVpZ2h0K2EpPj1JKXJldHVybiBiLmNhbmNlbFNjcm9sbCgpLHModCxvLGYpLGQuYWZ0ZXIodCxpKSx2PW51bGwsITB9LE89ZnVuY3Rpb24odCl7dnx8KHY9dCkscSs9dC12LHk9cS9wYXJzZUludChkLnNwZWVkLDEwKSx5PXk+MT8xOnksQT1nK1MqcihkLHkpLGUuc2Nyb2xsVG8oMCxNYXRoLmZsb29yKEEpKSxGKEEsRSl8fChlLnJlcXVlc3RBbmltYXRpb25GcmFtZShPKSx2PXQpfTswPT09ZS5wYWdlWU9mZnNldCYmZS5zY3JvbGxUbygwLDApLGQuYmVmb3JlKHQsaSksYi5jYW5jZWxTY3JvbGwoKSxlLnJlcXVlc3RBbmltYXRpb25GcmFtZShPKX19O3ZhciBBPWZ1bmN0aW9uKGUpe2gmJihoLmlkPWguZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaWRcIiksYi5hbmltYXRlU2Nyb2xsKGgsZyksaD1udWxsLGc9bnVsbCl9LEU9ZnVuY3Rpb24odCl7aWYoIWQoKSYmMD09PXQuYnV0dG9uJiYhdC5tZXRhS2V5JiYhdC5jdHJsS2V5JiYoZz10LnRhcmdldC5jbG9zZXN0KGkpKSYmXCJhXCI9PT1nLnRhZ05hbWUudG9Mb3dlckNhc2UoKSYmIXQudGFyZ2V0LmNsb3Nlc3QobS5pZ25vcmUpJiZnLmhvc3RuYW1lPT09ZS5sb2NhdGlvbi5ob3N0bmFtZSYmZy5wYXRobmFtZT09PWUubG9jYXRpb24ucGF0aG5hbWUmJi8jLy50ZXN0KGcuaHJlZikpe3ZhciBuO3RyeXtuPWEoZGVjb2RlVVJJQ29tcG9uZW50KGcuaGFzaCkpfWNhdGNoKGUpe249YShnLmhhc2gpfWlmKFwiI1wiPT09bil7dC5wcmV2ZW50RGVmYXVsdCgpLGg9ZG9jdW1lbnQuYm9keTt2YXIgbz1oLmlkP2guaWQ6XCJzbW9vdGgtc2Nyb2xsLXRvcFwiO3JldHVybiBoLnNldEF0dHJpYnV0ZShcImRhdGEtc2Nyb2xsLWlkXCIsbyksaC5pZD1cIlwiLHZvaWQoZS5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKT09PW8/QSgpOmUubG9jYXRpb24uaGFzaD1vKX1oPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobiksaCYmKGguc2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwtaWRcIixoLmlkKSxoLmlkPVwiXCIsZy5oYXNoPT09ZS5sb2NhdGlvbi5oYXNoJiYodC5wcmV2ZW50RGVmYXVsdCgpLEEoKSkpfX0sUz1mdW5jdGlvbihlKXt2fHwodj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3Y9bnVsbCxwPWwodyl9KSw2NikpfTtyZXR1cm4gYi5kZXN0cm95PWZ1bmN0aW9uKCl7bSYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEUsITEpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLFMsITEpLGIuY2FuY2VsU2Nyb2xsKCksbT1udWxsLGg9bnVsbCxnPW51bGwsdz1udWxsLHA9bnVsbCx2PW51bGwseT1udWxsKX0sYi5pbml0PWZ1bmN0aW9uKGkpe3QmJihiLmRlc3Ryb3koKSxtPW8obixpfHx7fSksdz1tLmhlYWRlcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG0uaGVhZGVyKTpudWxsLHA9bCh3KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixFLCExKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsQSwhMSksdyYmZS5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsUywhMSkpfSxiLmluaXQoZiksYn19KSk7IiwiXG5mdW5jdGlvbiB2YWxpZEVtYWlsKGVtYWlsKSB7IC8vIHNlZTpcbiAgdmFyIHJlID0gL14oW1xcdy1dKyg/OlxcLltcXHctXSspKilAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJC9pO1xuICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSHVtYW4oaG9uZXlwb3QpIHtcbiAgaWYgKGhvbmV5cG90KSB7ICAvL2lmIGhpZGRlbiBmb3JtIGZpbGxlZCB1cFxuICAgIGNvbnNvbGUubG9nKFwiUm9ib3QgRGV0ZWN0ZWQhXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSBIdW1hbiFcIik7XG4gIH1cbn1cblxuLy8gZ2V0IGFsbCBkYXRhIGluIGZvcm0gYW5kIHJldHVybiBvYmplY3RcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1mb3JtXCIpO1xuICB2YXIgZWxlbWVudHMgPSBmb3JtLmVsZW1lbnRzOyAvLyBhbGwgZm9ybSBlbGVtZW50c1xuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXMoZWxlbWVudHMpLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIChlbGVtZW50c1trXS5uYW1lICE9ICdob25leXBvdCcpO1xuICB9KS5tYXAoZnVuY3Rpb24oaykge1xuICAgIGlmKGVsZW1lbnRzW2tdLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRzW2tdLm5hbWU7XG4gICAgLy8gc3BlY2lhbCBjYXNlIGZvciBFZGdlJ3MgaHRtbCBjb2xsZWN0aW9uXG4gICAgfWVsc2UgaWYoZWxlbWVudHNba10ubGVuZ3RoID4gMCl7XG4gICAgICByZXR1cm4gZWxlbWVudHNba10uaXRlbSgwKS5uYW1lO1xuICAgIH1cbiAgfSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIHBvcywgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT0gcG9zICYmIGl0ZW07XG4gIH0pO1xuICB2YXIgZGF0YSA9IHt9O1xuICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbihrKXtcbiAgICBkYXRhW2tdID0gZWxlbWVudHNba10udmFsdWU7XG4gICAgdmFyIHN0ciA9IFwiXCI7IC8vIGRlY2xhcmUgZW1wdHkgc3RyaW5nIG91dHNpZGUgb2YgbG9vcCB0byBhbGxvd1xuICAgICAgICAgICAgICAgICAgLy8gaXQgdG8gYmUgYXBwZW5kZWQgdG8gZm9yIGVhY2ggaXRlbSBpbiB0aGUgbG9vcFxuICAgIGlmKGVsZW1lbnRzW2tdLnR5cGUgPT09IFwiY2hlY2tib3hcIil7IC8vIHNwZWNpYWwgY2FzZSBmb3IgRWRnZSdzIGh0bWwgY29sbGVjdGlvblxuICAgICAgc3RyID0gc3RyICsgZWxlbWVudHNba10uY2hlY2tlZCArIFwiLCBcIjsgLy8gdGFrZSB0aGUgc3RyaW5nIGFuZCBhcHBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY3VycmVudCBjaGVja2VkIHZhbHVlIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiBpdCwgYWxvbmcgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgY29tbWEgYW5kIGEgc3BhY2VcbiAgICAgIGRhdGFba10gPSBzdHIuc2xpY2UoMCwgLTIpOyAvLyByZW1vdmUgdGhlIGxhc3QgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgIHN0cmluZyB0byBtYWtlIHRoZSBvdXRwdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV0dGllciBpbiB0aGUgc3ByZWFkc2hlZXRcbiAgICB9ZWxzZSBpZihlbGVtZW50c1trXS5sZW5ndGgpe1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzW2tdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZWxlbWVudHNba10uaXRlbShpKS5jaGVja2VkKXtcbiAgICAgICAgICBzdHIgPSBzdHIgKyBlbGVtZW50c1trXS5pdGVtKGkpLnZhbHVlICsgXCIsIFwiOyAvLyBzYW1lIGFzIGFib3ZlXG4gICAgICAgICAgZGF0YVtrXSA9IHN0ci5zbGljZSgwLCAtMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIGFkZCBmb3JtLXNwZWNpZmljIHZhbHVlcyBpbnRvIHRoZSBkYXRhXG4gIGRhdGEuZm9ybURhdGFOYW1lT3JkZXIgPSBKU09OLnN0cmluZ2lmeShmaWVsZHMpO1xuICBkYXRhLmZvcm1Hb29nbGVTaGVldE5hbWUgPSBmb3JtLmRhdGFzZXQuc2hlZXQgfHwgXCJSYWphIFdlYnNpdGUgLSBDb250YWN0IEZvcm1cIjsgLy8gZGVmYXVsdCBzaGVldCBuYW1lXG4gIGRhdGEuZm9ybUdvb2dsZVNlbmRFbWFpbCA9IGZvcm0uZGF0YXNldC5lbWFpbCB8fCBcIlwiOyAvLyBubyBlbWFpbCBieSBkZWZhdWx0XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7ICAvLyBoYW5kbGVzIGZvcm0gc3VibWl0IHdpdGh0b3V0IGFueSBqcXVlcnlcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgIC8vIHdlIGFyZSBzdWJtaXR0aW5nIHZpYSB4aHIgYmVsb3dcbiAgdmFyIGRhdGEgPSBnZXRGb3JtRGF0YSgpOyAgICAgICAgIC8vIGdldCB0aGUgdmFsdWVzIHN1Ym1pdHRlZCBpbiB0aGUgZm9ybVxuXG4gIC8qIE9QVElPTjogUmVtb3ZlIHRoaXMgY29tbWVudCB0byBlbmFibGUgU1BBTSBwcmV2ZW50aW9uLCBzZWUgUkVBRE1FLm1kXG4gIGlmICh2YWxpZGF0ZUh1bWFuKGRhdGEuaG9uZXlwb3QpKSB7ICAvL2lmIGZvcm0gaXMgZmlsbGVkLCBmb3JtIHdpbGwgbm90IGJlIHN1Ym1pdHRlZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAqL1xuXG4gIGlmKCAhdmFsaWRFbWFpbChkYXRhLmVtYWlsKSApIHsgICAvLyBpZiBlbWFpbCBpcyBub3QgdmFsaWQgc2hvdyBlcnJvclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnZhbGlkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHZhciB1cmwgPSBldmVudC50YXJnZXQuYWN0aW9uOyAgLy9cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwpO1xuICAgIC8vIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQgKVxuICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGhpZGUgZm9ybVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhhbmt5b3VfbWVzc2FnZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICAvLyB1cmwgZW5jb2RlIGZvcm0gZGF0YSBmb3Igc2VuZGluZyBhcyBwb3N0IGRhdGFcbiAgICB2YXIgZW5jb2RlZCA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrXSlcbiAgICB9KS5qb2luKCcmJylcbiAgICB4aHIuc2VuZChlbmNvZGVkKTtcbiAgfVxufVxuZnVuY3Rpb24gbG9hZGVkKCkge1xuICBjb25zb2xlLmxvZygnY29udGFjdCBmb3JtIHN1Ym1pc3Npb24gaGFuZGxlciBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIC8vIGJpbmQgdG8gdGhlIHN1Ym1pdCBldmVudCBvZiBvdXIgZm9ybVxuICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQsIGZhbHNlKTtcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZGVkLCBmYWxzZSk7XG4iLCIvLyBHZXQgZWxlbWVudHNcbnZhciBuYXZiYXIgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyksXG4gICAgbmF2YmFyQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXJnZXInKSxcbiAgICBuYXZiYXJNZW51ICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1lbnUnKSxcbiAgICBuYXZNZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLW1lbnUgLm5hdmJhci1pdGVtJyk7XG52YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1idXJnZXInKTsgLy8gZ2V0IGhhbWJ1cmdlclxuXG5cbi8vIERlY2xhcmUgZnVuY3Rpb25zXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICBpZihuYXZiYXJCdXJnZXIubGVuZ3RoID4gMCkgeyAvLyAgQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuXG4gICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBpdGVtXG4gICAgbmF2YmFyQnVyZ2VyLmZvckVhY2goZnVuY3Rpb24oJGVsKSB7XG4gICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gJGVsLmRhdGFzZXQudGFyZ2V0OyAvLyBkYXRhLXRhcmdldD1cIm5hdk1lbnVcIlxuICAgICAgICB2YXIgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7IC8vIGlkPVwibmF2TWVudVwiXG5cbiAgICAgICAgJGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpOyAvLyB0b2dnbGUgbmF2IGljb25cbiAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTsgLy8gdG9nZ2xlIG5hdiBtZW51XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNZW51T25MaW5rQ2xpY2soKSB7XG4gIG5hdk1lbnVJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7IC8vIGhpZGUgbWVudVxuXG4gICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7IC8vIGNoYW5nZSB4IHRvIGhhbWJ1cmdlclxuICAgIH1cblxuICB9KTtcbn1cblxuLy9DbG9zZSBtZW51IHdpdGggY2xpY2sgb3V0c2lkZSBvZiBtZW51XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmFyIGlzQ2xpY2tJbnNpZGUgPSBuYXZiYXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblxuICBpZiAoIWlzQ2xpY2tJbnNpZGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm91dHNpZGUhXCIpO1xuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICB9XG59KTtcblxuXG4vLyBDbG9zZSBtZW51IHdoZW4gY2xpY2tpbmcgYSBsaXN0IGl0ZW1cbmZvciAoaSA9IDA7IGkgPCBuYXZNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgY2xvc2VNZW51T25MaW5rQ2xpY2soKTtcbn1cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuLy8gQWRkIG5hdmJhciBoYW1idXJnZXIgZnVuY3Rpb25hbGl0eSBhbmQgJ1gnIGFuaW1hdGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB0b2dnbGVNZW51KCk7XG59KTtcblxuLy8gQ2xvc2UgbWVudSB3aGVuIG9wZW4gdXNpbmcgRVNDIGtleSwgdG9nZ2xlIFhcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICBldnQgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuXG4gIGlmIChuYXZiYXJCdXJnZXIubGVuZ3RoID4gMCkge1xuICAgIG5hdmJhckJ1cmdlci5mb3JFYWNoKGZ1bmN0aW9uKCRlbCkge1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkZWwuZGF0YXNldC50YXJnZXQ7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcblxuICAgICAgICBpZiAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgJiYgJHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgJGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcbiAgc3BlZWQ6IDgwMCxcbiAgb2Zmc2V0OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbn0pO1xuIiwiIl19
