$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$(document).ready(function(){
	var vw;
	$('#turn_on').hide(); 
    // Trigger the "turn on" functionality automatically when the page loads
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');

    // The #play button function will be the next user interaction
    $('#play').fadeIn('slow');  // Show the play button after "turn on" effect

    // Function for the #play button click event
    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();

        // Trigger glowing effect on bulbs after the audio plays
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');

        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');  // Show the banner after the play button
        });
    });
	$('#bannar_coming').click(function() {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function() {
			$('#balloons_flying').fadeIn('slow');
	
			// Slide and fade in images one by one
			$('#imageLeft').css({
				'left': '-200px', // Start from outside left
				'opacity': 0  // Start hidden
			}).animate({ 
				'left': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
	
			$('#imageRight').css({
				'right': '-200px', // Start from outside right
				'opacity': 0  // Start hidden
			}).animate({
				'right': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
	
			$('#imageTopLeft').css({
				'top': '-200px',  // Start from above
				'opacity': 0  // Start hidden
			}).animate({
				'top': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
	
			$('#imageTopRight').css({
				'top': '-200px',  // Start from above
				'opacity': 0  // Start hidden
			}).animate({
				'top': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
	
			// Animation for the new images
			$('#imageBottomLeft').css({
				'bottom': '-200px',  // Start from below
				'opacity': 0  // Start hidden
			}).animate({
				'bottom': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
	
			$('#imageBottomRight').css({
				'bottom': '-200px',  // Start from below
				'opacity': 0  // Start hidden
			}).animate({
				'bottom': '10px'  // Slide into position
			}, 1000, function() {
				$(this).css('opacity', 1);  // Fade in after sliding
			});
		});
	});
	

	
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}

	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
	
		var i;
	
		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function(){
				i = i + 1;
	
				// Show the next paragraph
				let nextParagraph = $("p:nth-child(" + i + ")");
				nextParagraph.fadeIn('slow').delay(1000);
	
				// If it's the last message and has id="stay", don't fade it out
				if (nextParagraph.attr("id") === "stay") {
					return; // Exit the loop
				}
	
				if (i == 50) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				} else {
					msgLoop(i);
				}
			});
		}
	
		msgLoop(0);
	});
	
});




//alert('hello');