const flightPath = {
    curviness: 2.25,
    autoRotate: true,
    values:[
       {x:80, y:-100},
       {x:280, y:30},
       {x:480, y:100},
       {x:750, y:-90},
       {x:350, y:-20},
       {x:650, y:100},
       {x:900, y:0},
       {x: window.innerWidth, y:-250}
    ]
}
       
const tween = new TimelineLite();

tween.add(
    TweenLite.to(".plane", 1, {
        bezier:flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement:".animation",
    duration: 5000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)