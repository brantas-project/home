
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
  document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const subscribeURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZlANGhkmfy27-9JcWHEr0lB9XJ47xAudP5W-pG_bWqMAZ7Q/formResponse";
    
    const formData = new FormData();
    formData.append("entry.675407950", document.getElementById("subscribe-email").value); 

    fetch(subscribeURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        document.getElementById("subscribeForm").style.display = "none";
        document.getElementById("subscribeThanks").style.display = "block";
    }).catch(() => {
        alert("Maaf, terjadi kesalahan saat mendaftar langganan.");
    });
  });

  //Submit Hubungi Kami
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe0S7svSkZ380K80IuoaECtMb-X_XRbb5N1yCbJlI3QR2uOag/formResponse";

    const formData = new FormData();
    formData.append("entry.6082727", document.getElementById("kontak-nama").value);
    formData.append("entry.470591906", document.getElementById("kontak-email").value);
    formData.append("entry.1025252983", document.getElementById("kontak-pesan").value);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thanksMessage").style.display = "block";
    }).catch(() => {
        alert("Maaf, terjadi kesalahan saat mengirim formulir.");
    }); 
  });

  //Submit Pesanan Terjadwal (Jasa)
  document.getElementById("jadwalForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScuEhk96p1J-FU7f21mh7OzJE4owHLabm-V5K5Z0gwP6_FEYw/formResponse"; 

    const formData = new FormData();
    formData.append("entry.1853691105", document.getElementById("jadwal-nama").value); 
    formData.append("entry.1127619978", document.getElementById("jadwal-telepon").value);
    formData.append("entry.1409568411", document.getElementById("jadwal-muatan").value);
    formData.append("entry.529116528", document.getElementById("jadwal-lokasi-muat").value);
    formData.append("entry.1080973138", document.getElementById("jadwal-alamat-tujuan").value);
    formData.append("entry.18885194", document.getElementById("jadwal-tanggal").value);
    formData.append("entry.1671582908", document.getElementById("jadwal-asuransi").checked ? "Ya" : "Tidak");

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      document.getElementById("jadwalForm").style.display = "none";
      document.getElementById("jadwalThanks").style.display = "block";
    }).catch(() => {
      alert("Terjadi kesalahan saat mengirim formulir.");
    });
  });

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