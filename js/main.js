$(document).ready(function() {

  $('html').css("max-width", $('.content').width());


  $('.showlegal').click(function () {
    $('.legal').removeClass('hide');
    $('.legal').addClass('animated fadeIn');
    $('.iphone-wrapper').addClass('hide');
    $('.text').addClass('hide');
  });

  $('.iphone-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    cssEase: 'easeOutQuad',
    pauseOnHover: false,
    centerPadding: '33%'
  });

  $('.back').click(function () {
    $('.legal').addClass('hide');
    $('.iphone-wrapper').removeClass('hide');
    $('.text').removeClass('hide');
  });

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.stars').removeClass('rotating');
    $('.stars').addClass('toptwentie');
  }

  var stars=700;
  var $stars=$(".stars");
  var r=700;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
    });
  });
});
