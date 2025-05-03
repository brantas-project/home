
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

  //Submit Pesan Sekarang (navbar)
  document.getElementById("scheduleFormPage2").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScuEhk96p1J-FU7f21mh7OzJE4owHLabm-V5K5Z0gwP6_FEYw/formResponse";
  
    const formData = new FormData();
    formData.append("entry.1853691105", document.getElementById("nama-lengkap-2").value);
    formData.append("entry.1127619978", document.getElementById("nomor-kontak-2").value);
    formData.append("entry.1409568411", document.querySelector('input[name="jenis-muatan-2"]:checked').value);
    formData.append("entry.529116528", document.getElementById("lokasi-muat-2").value);
    formData.append("entry.1080973138", document.getElementById("alamat-tujuan-2").value);
    formData.append("entry.18885194", document.getElementById("tanggal-muat-2").value);
    formData.append("entry.1671582908", document.getElementById("asuransi-2").checked ? "Ya" : "Tidak");
  
    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      document.getElementById("scheduleFormPage2").style.display = "none";
      document.getElementById("scheduleThanksPage2").style.display = "block";
    }).catch(() => {
      alert("Maaf, terjadi kesalahan saat mengirim formulir.");
    });
  });
  
