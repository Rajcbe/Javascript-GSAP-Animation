(function($) {
    
	var ball1=$('#ball1'),
	 ball2=$('#ball2'),
	spring=$('#spring'),
	car=$('#car'),
	stick=$('#lvrs'),
	wheel=$('#wheel'),
	wheel1=$('#wheel1'),
	message=$('#message'),

	tl=new TimelineLite();

	tl
	.fromTo(ball1, 2.5, {x:-100},{ rotation:360,ease: Bounce.easeOut,x:30, y: 85,delay:1})
	.fromTo(car, 2.5, {x:40,y:45},{ ease: Power1.easeOut,x: 250},'-=1.5')
	.fromTo(stick, 1, {x:90,y:8},{x:90,y:-25,rotation:90},'-=2.5')
	.fromTo(ball2, 1.5, {x:175,y:-73},{ rotation:360,x:0, y: -30,transformOrigin:'50% 50%',onUpdate:onUpdate,onComplete:onComplete},'-=2.5')
	
function onUpdate(){
	TweenLite.fromTo(wheel, 2, {x:0,y:0},{ rotation:360,x:0, y: 0,delay:1 });

}
function onComplete(){
	TweenLite.fromTo(ball2, 2.5,{x:0,y:8},{ rotation:180,x:220, y: 120,transformOrigin:'50% 10%',onComplete:onComplete});
	function onComplete(){
	TweenLite.fromTo(ball2, 2, {x:230,y:150},{ rotation:360,x:80, y: 240});
	TweenLite.fromTo(wheel1, 2, {x:0,y:0},{ rotation:-360,x:0, y: 0});
    TweenLite.fromTo(ball2, 2,{x:80,y:240},{rotation:360,x:-40, y: 240,delay:1.9});
     TweenLite.fromTo(ball2, 2,{x:-40,y:240},{rotation:360,x:-70, y: 340,delay:2.6});
    
     TweenLite.fromTo(message, 2.5,{x:100,y:-190},{ease: Bounce.easeOut,x:100, y: -220,delay:2.7});
    }


}
$(function () { 
							var flightpath = {
								entry : {
									curviness: 1.25,
									autoRotate: true,
									values: [
											{x: 100,	y: -20},
											{x: 300,	y: 10}
										]
								},
								looping : {
									curviness: 1.25,
									autoRotate: true,
									values: [
											{x: 510,	y: 60},
											{x: 620,	y: -60},
											{x: 500,	y: -100},
											{x: 380,	y: 20},
											{x: 500,	y: 60},
											{x: 580,	y: 20},
											{x: 620,	y: 15}
										]
								},
								leave : {
									curviness: 1.25,
									autoRotate: true,
									values: [
											{x: 660,	y: 20},
											{x: 800,	y: 130},
											{x: $(window).width() + 300,	y: -100},
										]
								}
							};
					
							var controller = new ScrollMagic.Controller();

							
							var tween = new TimelineMax()
								.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
								.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
								.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

							
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: -60})
											.setPin("#target")
											.setTween(tween)
										
											.addTo(controller);
						});

})(jQuery);