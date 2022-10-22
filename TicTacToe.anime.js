const getDefaultTranslateXStyle = function(el) {
var style = window.getComputedStyle(el);
var matrix = new WebKitCSSMatrix(style.webkitTransform);
    return [matrix.m41, matrix.m41];
};

const updateTranslateYStyle = function(el) {
var style = window.getComputedStyle(el);
var matrix = new WebKitCSSMatrix(style.webkitTransform);
var rate;
    if (el.classList.contains('one')) {
    rate = 20;
    } else if (el.classList.contains('two')) {
      rate = -20;
    } else {
      rate = -10;  
    }
    return [matrix.m42, matrix.m42+rate];

};
  
anime({
    targets: "#test",
    translateX: getDefaultTranslateXStyle,
    translateY: updateTranslateYStyle,
    opacity: 0.8,
    direction: "alternate",
    easing: 'easeInOutQuad',
    duration: 4000,
    loop: true
});
anime({
    targets: '#svgGrou',
    strokeDashoffset: [2000, 0],
    easing: 'easeInOutSine',
    elasticity:300,
    duration: 4000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
});









window.onload = function() {loading()};

function loading() {

    var nav = document.querySelectorAll(".nav");

    nav.forEach(nav => 
    {
        nav.addEventListener("click", function() {
        anime({
            targets:".load-bg",
            duration:1,
            easing:'linear',
            left:'0',
            delay:1,
            endDelay:2000,
            direction:'alternate',
        })
        anime({
            targets: '#load',
            left:'0',
            duration: 2000,
            easing: 'easeOutExpo',
            direction:'alternate',
            endDelay:1000,
        });
        anime({
            targets: '#svgGroup',
            strokeDashoffset: [2000,0],
            easing: 'easeInOutSine',
            elasticity:300,
            duration:4000,
            delay: 1500,
            direction: 'alternate',
            loop: false,
        });
    });
    })
}
