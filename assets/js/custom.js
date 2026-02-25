    /* Multiple Offcanvas Start */


    // NEXT button handler
    document.querySelectorAll('[data-offcanvas-next]').forEach(btn => {
      btn.addEventListener('click', function () {
        const currentOffcanvas = bootstrap.Offcanvas.getInstance(this.closest('.offcanvas'));
        const nextSelector = this.getAttribute('data-offcanvas-next');
        const nextOffcanvasEl = document.querySelector(nextSelector);

        if (!nextOffcanvasEl) return;

        // Hide current offcanvas, then show next
        currentOffcanvas.hide();
        currentOffcanvas._element.addEventListener('hidden.bs.offcanvas', () => {
          const nextOffcanvas = new bootstrap.Offcanvas(nextOffcanvasEl);
          nextOffcanvas.show();
        }, { once: true });
      });
    });

    // BACK button handler
    document.querySelectorAll('[data-offcanvas-prev]').forEach(btn => {
      btn.addEventListener('click', function () {
        const currentOffcanvas = bootstrap.Offcanvas.getInstance(this.closest('.offcanvas'));
        const prevSelector = this.getAttribute('data-offcanvas-prev');
        const prevOffcanvasEl = document.querySelector(prevSelector);

        if (!prevOffcanvasEl) return;

        // Hide current offcanvas, then show previous
        currentOffcanvas.hide();
        currentOffcanvas._element.addEventListener('hidden.bs.offcanvas', () => {
          const prevOffcanvas = new bootstrap.Offcanvas(prevOffcanvasEl);
          prevOffcanvas.show();
        }, { once: true });
      });
    });

    // FINAL submit button (optional, no alert)
    const finalSubmit = document.getElementById('offcanvas-submit');
    if (finalSubmit) {
      finalSubmit.addEventListener('click', function () {
        const currentOffcanvas = bootstrap.Offcanvas.getInstance(this.closest('.offcanvas'));
        if (currentOffcanvas) currentOffcanvas.hide();
        // You can place your actual form submission logic here
      });
    }

    /* Multiple Offcanvas End */



    /* Apple Switch Start */

    $('#atoggle').on('change', function () {
      if ($(this).is(':checked')) {
          $('.recurr-timing-content').slideDown(200);
      } else {
          $('.recurr-timing-content').slideUp(200);
      }
    });

    $('#atoggle2').on('change', function () {
      if ($(this).is(':checked')) {
          $('.recurr-timing-content').slideDown(200);
      } else {
          $('.recurr-timing-content').slideUp(200);
      }
    });

    $('#atoggle3').on('change', function () {
      if ($(this).is(':checked')) {
          $('.recurr-timing-content').slideDown(200);
      } else {
          $('.recurr-timing-content').slideUp(200);
      }
    });    

    /* Apple Switch End */



/* horizontal-scroll Start */

let isDown = false;
let startX;
let scrollLeft;

$('.horizontal-scroll')
    .on('mousedown', function (e) {
        isDown = true;
        startX = e.pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
    })
    .on('mouseleave mouseup', function () {
        isDown = false;
    })
    .on('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - this.offsetLeft;
        const walk = (x - startX) * 1; // speed
        this.scrollLeft = scrollLeft - walk; // reversed scroll
    });

/* horizontal-scroll End */



/* generated password Start  */

    
$(document).ready(function() {
    function genPass(len = 12) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let pass = "";
        for (let i = 0; i < len; i++) {
            pass += chars[Math.floor(Math.random() * chars.length)];
        }
        return pass;
    }

    // Use dynamic binding for elements inside offcanvas
    $(document).on('click', '#ao-ged', function() {
        $('#pass-piuesfwde').val(genPass(12));
    });
});


$(document).ready(function() {
    function genPass(len = 12) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let pass = "";
        for (let i = 0; i < len; i++) {
            pass += chars[Math.floor(Math.random() * chars.length)];
        }
        return pass;
    }

    // Use dynamic binding for elements inside offcanvas
    $(document).on('click', '#ao-ged1', function() {
        $('#pass-piuesfwde1').val(genPass(12));
    });
});


/* generated password Start  */


/* edit profile Start  */

$(function () {
    $(".edit-proe-btn-wrap .btn").on("click", function () {

        // Hide these with animation
        $(".myproe-wrap, .contdetls-wrap").slideUp(300);

        // Show form as inline-block
        $(".editpro-form-wrap")
            .css("display", "block")   // force inline-block
            .hide()                           // reset for animation
            .fadeIn(300);                     // animate show
    });
});


/* edit profile End  */

   
$(document).ready(function(){


  /* Password Show Hide Start */
  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash ");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  /* Password Show Hide End */


  /* TM Password Show Hide Start */

  $(".toggle-shpassword").click(function () {

      $(this).toggleClass("fa-eye fa-eye-slash");

      let wrapper = $(this).closest(".shpassword");
      let pwdSpan = $(this).siblings(".pwd-text");

      let currentText = pwdSpan.text();                 // visible text
      let currentData = pwdSpan.attr("data-password");  // stored text (mask or real)

      if ($(this).hasClass("fa-eye-slash")) {
          // Password is visible → active class ON
          wrapper.addClass("shpassword-active");

          // Show real password
          pwdSpan.text(currentData);
          pwdSpan.attr("data-password", currentText);   // store ******
      } else {
          // Password is hidden → active class OFF
          wrapper.removeClass("shpassword-active");

          // Show masked version
          pwdSpan.text(currentData);
          pwdSpan.attr("data-password", currentText);   // store real password
      }
  });

  /* TM Password Show Hide End */  



  /* team Management tabbing start */ 


$(document).on("click", ".post-njob-statd-main", function () {

    // Remove active from all child nav links
    $(".post-njob-statd-main").removeClass("active");

    // Add active to clicked nav link
    $(this).addClass("active");

    // Get target pane ID
    let target = $(this).data("bs-target");

    // Remove active+show from all child tab panes
    $("#childTabsContent .tab-pane").removeClass("active show");

    // Add active+show to target tab pane
    $(target).addClass("active show");
});


  /* team Management tabbing end */ 



// Upload Start

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});

// Upload End




// Upload Fleet image Start


function previewImage(input) {
    const wrapper = $(input).closest(".truck-upload-main");
    const preview = wrapper.find(".imagepreview");
    const defaultImg = preview.data("default");

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            preview
                .css("background-image", "url(" + e.target.result + ")")
                .addClass("uploaded")
                .hide()
                .fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Upload handler
$(".imageUpload").change(function () {
    previewImage(this);
});

// Remove button
$(".remove-img-btn").click(function (e) {
    e.preventDefault();

    const wrapper = $(this).closest(".truck-upload-main");
    const preview = wrapper.find(".imagepreview");
    const input = wrapper.find(".imageUpload");
    const defaultImg = preview.data("default");

    preview
        .css("background-image", "url(" + defaultImg + ")")
        .removeClass("uploaded")
        .fadeIn(300);

    input.val("");
});

// Optional: click on image to remove
$(".imagepreview").click(function () {
    if (!$(this).hasClass("uploaded")) return;

    const wrapper = $(this).closest(".truck-upload-main");
    const preview = wrapper.find(".imagepreview");
    const input = wrapper.find(".imageUpload");
    const defaultImg = preview.data("default");

    preview
        .css("background-image", "url(" + defaultImg + ")")
        .removeClass("uploaded");

    input.val("");
});


function previewImage(input) {
    const wrapper = $(input).closest(".truck-upload-main");
    const preview = wrapper.find(".imagepreview");

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview
                .css("background-image", "url(" + e.target.result + ")")
                .addClass("uploaded");

            // add class when imagepreview has uploaded
            if (preview.hasClass("uploaded")) {
                wrapper.addClass("truck-up-m");
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}


// Upload Fleet image End


// Team Member Details & Activity Active Class Start

$(".td-detail-box-tm-card-wp").on("click", function () {
    $(".team-member-de-act-wrp").removeClass("active"); // remove from all
    $(this).closest(".team-member-de-act-wrp").addClass("active"); // add to its wrapper
});


$(document).on("click", ".team-member-back-arrw-btn", function () {
    // Find the related wrapper
    const wrapper = $(this).closest(".team-member-de-act-wrp");

    // Remove active class only from this wrapper
    wrapper.removeClass("active");
});


// Team Member Details & Activity Active Class End



// mobile number START

$('.mobile-num').on('input', function () {
    let input = $(this).val().replace(/\D/g, ''); // Remove non-numeric characters
    let formatted = '';

    // Format the input as #### ### ###
    if (input.length > 0) formatted += input.substring(0, 4);
    if (input.length > 4) formatted += ' ' + input.substring(4, 7);
    if (input.length > 7) formatted += ' ' + input.substring(7, 10);

    $(this).val(formatted);
});

// mobile number END



// ABN number START

$('.abn-num').on('input', function () {
	let input = $(this).val().replace(/\D/g, ''); // Remove non-numeric characters
	let formatted = '';

	// Format the input as ## ### ### ###
	if (input.length > 0) formatted += input.substring(0, 2);
	if (input.length > 2) formatted += ' ' + input.substring(2, 5);
	if (input.length > 5) formatted += ' ' + input.substring(5, 8);
	if (input.length > 8) formatted += ' ' + input.substring(8, 11);

	$(this).val(formatted);

});

// ABN number END



// Sidebar toggle JS START

    $(".sidebar-toggle").click(function (event) {
        event.preventDefault(); // Prevent default anchor action
        $("body").toggleClass("sidebar-show-hide");
    });

// Sidebar toggle JS END




});

$(document).ready(function(){
  // selected truck slider js
  $(".selectedTruckSlider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.8,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.4,
            slidesToScroll: 1,
        },
      },
    ],
  });
});