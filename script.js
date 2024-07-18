// scroll DOWN 

$(window).scroll(function() {

    $(".section").each(function() {

        var x = $(window).scrollTop() + $(window).height();
        var y = $(this).offset().top + $(this).height() / 2;

        if (x >= y) {
            $(this).addClass('activeSec');

        };

    });


});


// ------------------------------------------------------------------------------------

// scroll//

let text = document.getElementById('text1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 0.5 + 'px';
    leaf.syyle.top = value * -1.5 + 'px';
    leaf.syyle.left = value * 1.5 + 'px';



});

// ---------------------------------------------

var but = document.getElementById("btn1")


function myfun() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        but.style.display = 'block';
    } else {
        // but.style.display = 'none'; 
    }
}

window.onscroll = function() {
    myfun()
}

function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// gallery



// stugel uxxel

// $(".myimg").on("click", function() {
//     $(".modal").addClass("activemodal");
// });


// $(".modalclose").on("click", function() {
//     $(".overlay, .modal").removeClass("active");
// });



// -----------------------------------------------------


// gallery


var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("overlay");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



// ---------------------------------------------------------


// menu fixed --------------------------------------

$(window).on("scroll", function() {
    var position = $("#begin").offset();

    if ($(window).scrollTop() > position.top - 80) {
        $("nav").addClass("active");
    } else {
        $("nav").removeClass("active");
    };
});

// --------------------------------------------------------------------


// ------ SCROLL TOP ----------------------

var but1 = document.getElementById("btn2")

function myfun() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        but1.style.display = 'block';
    } else {
        but1.style.display = 'none';
    }
}

window.onscroll = function() {
    myfun()
}

function scrolltop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// -------------------------------------------------------------