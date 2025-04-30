
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  //Submit Berlangganan
  document.getElementById("subscribeForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah submit asli
  this.style.display = "none"; // sembunyikan form
  document.getElementById("thanksMessage").style.display = "block"; // tampilkan pesan
  });

  //Api - Lokasi
  fetch('api/lokasi.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('lokasi-t01').textContent = data["lokasi-t01"];
      document.getElementById('lokasi-t02').textContent = data["lokasi-t02"];
    })
    .catch(error => {
      console.error('Gagal mengambil data lokasi:', error);
    });