
$(document).ready(function()
{
    $(".owl-carousel").each(function(){
        $(this).owlCarousel({
            center:true,
            
            loop:true,
            margin:10,
            navText: ['<i class="bx bx-chevron-left"></i>','<i class="bx bx-chevron-right"></i>'],
            // navContainer: '.bbb_slider_nav',
            dots:false,
            autoplayHoverPause:true,
            autoplay:true,
            responsive:{
                0:{items:2},
                575:{items:2},
                630:{items:3},
                768:{items:3},
                991:{items:3,
                    nav:true,
                    stagePadding: 30
                },
                1010:{items:3,
                    nav:true,stagePadding: 30
                },
                 1200:{items:4,
                    nav:true,stagePadding: 30
                    
                }
            }
        });
      });
   
//         if($('.bbb-slider1').length)
//         {
//             var trendsSlider = $('.bbb-slider1');
//             trendsSlider.owlCarousel(
//             {
//                 loop:true,
//                 margin:10,
//                 nav:false,
//                 dots:false,
//                 autoplayHoverPause:true,
//                 autoplay:true,
//                 responsive:
//                 {
//                     0:{items:2},
//                     575:{items:2},
//                     630:{items:2},
//                     768:{items:3},
//                     991:{items:2},
//                     1010:{items:2},
//                      1200:{items:3}
//                 }
//             });

//             trendsSlider.on('click', '.bbb_fav', function (ev)
//             {
//                 $(ev.target).toggleClass('active');
//             });
// //first slider

//             if($('.bbb_prev1').length)
//             {
//                 var prev = $('.bbb_prev1');
//                 prev.on('click', function()
//                 {
//                     trendsSlider.trigger('prev.owl.carousel');
//                 });
//             }

//             if($('.bbb_next1').length)
//             {
//                 var next = $('.bbb_next1');
//                 next.on('click', function()
//                 {
//                     trendsSlider.trigger('next.owl.carousel');
//                 });
//             }
//         }
    

    });


//     $(document).ready(function()
// {

   
//         if($('.bbb_slider2').length)
//         {
//             var trendsSlider = $('.bbb_slider2');
//             trendsSlider.owlCarousel(
//             {
//                 loop:true,
//                 margin:10,
//                 nav:false,
//                 dots:false,
//                 autoplayHoverPause:true,
//                 autoplay:true,
//                 responsive:
//                 {
//                     0:{items:2},
//                     575:{items:2},
//                     630:{items:2},
//                     768:{items:3},
//                     800:{items:3},
//                     992:{items:2},
//                     1010:{items:2},
//                      1200:{items:3}
//                 }
//             });

//             trendsSlider.on('click', '.bbb_fav', function (ev)
//             {
//                 $(ev.target).toggleClass('active');
//             });
// //second slider

//             if($('.bbb_prev2').length)
//             {
//                 var prev = $('.bbb_prev2');
//                 prev.on('click', function()
//                 {
//                     trendsSlider.trigger('prev.owl.carousel');
//                 });
//             }

//             if($('.bbb_next2').length)
//             {
//                 var next = $('.bbb_next2');
//                 next.on('click', function()
//                 {
//                     trendsSlider.trigger('next.owl.carousel');
//                 });
//             }
//         }
    

//     });



//         $(document).ready(function()
// {

   
//         if($('.bbb_slider3').length)
//         {
//             var trendsSlider = $('.bbb_slider3');
//             trendsSlider.owlCarousel(
//             {
//                 loop:true,
//                 margin:10,
//                 nav:false,
//                 dots:false,
//                 autoplayHoverPause:true,
//                 autoplay:true,
//                 responsive:
//                 {
//                     0:{items:2},
//                     575:{items:2},
//                     630:{items:2},
//                     768:{items:3},
//                     991:{items:2},
//                     1010:{items:2},
//                      1200:{items:3}
                     
//                 }
//             });

//             trendsSlider.on('click', '.bbb_fav', function (ev)
//             {
//                 $(ev.target).toggleClass('active');
//             });
// //third slider

//             if($('.bbb_prev3').length)
//             {
//                 var prev = $('.bbb_prev3');
//                 prev.on('click', function()
//                 {
//                     trendsSlider.trigger('prev.owl.carousel');
//                 });
//             }

//             if($('.bbb_next3').length)
//             {
//                 var next = $('.bbb_next3');
//                 next.on('click', function()
//                 {
//                     trendsSlider.trigger('next.owl.carousel');
//                 });
//             }
//         }
    

//     });
 


// $(document).ready(function()
// {

   
//         if($('.bbb_slider4').length)
//         {
//             var trendsSlider = $('.bbb_slider4');
//             trendsSlider.owlCarousel(
//             {
//                 loop:true,
//                 margin:10,
//                 nav:false,
//                 dots:false,
//                 autoplayHoverPause:true,
//                 responsive:
//                 {
//                     0:{items:2,
//                         stagePadding: 20},
//                     480:{items:2,
//                         stagePadding: 20},
//                     575:{items:2,
//                         stagePadding: 20},
//                     630:{items:2,
//                         stagePadding: 20},
//                     768:{items:3,
//                         stagePadding: 30},
//                     992:{items:3,
//                         stagePadding: 30},
//                     1010:{items:3,
//                         stagePadding: 30},
//                      1200:{items:4,
//                         stagePadding: 30}
//                 }
//             });

//             trendsSlider.on('click', '.bbb_fav', function (ev)
//             {
//                 $(ev.target).toggleClass('active');
//             });
// //fourth slider

//             if($('.bbb_prev4').length)
//             {
//                 var prev = $('.bbb_prev4');
//                 prev.on('click', function()
//                 {
//                     trendsSlider.trigger('prev.owl.carousel');
//                 });
//             }

//             if($('.bbb_next4').length)
//             {
//                 var next = $('.bbb_next4');
//                 next.on('click', function()
//                 {
//                     trendsSlider.trigger('next.owl.carousel');
//                 });
//             }
//         }
    

//     });


    // $(document).ready(function()
    // {
    
       
    //         if($('.bbb_slider5').length)
    //         {
    //             var trendsSlider = $('.bbb_slider5');
    //             trendsSlider.owlCarousel(
    //             {
    //                 loop:true,
    //                 margin:10,
    //                 nav:false,
    //                 dots:false,
    //                 autoplayHoverPause:true,
    //                 autoplay:true,
    //                 responsive:
    //                 {
    //                     0:{items:2},
    //                     575:{items:2},
    //                     630:{items:2},
    //                     768:{items:2},
    //                     992:{items:2},
    //                     1010:{items:2},
    //                      1200:{items:2},
    //                      1366:{items:3},
    //                      1400:{items:3},
    //                      1500:{items:3},
    //                      1600:{items:3},
    //                      1800:{items:4}

    //                 }
    //             });
    
    //             trendsSlider.on('click', '.bbb_fav', function (ev)
    //             {
    //                 $(ev.target).toggleClass('active');
    //             });
    // //fourth slider
    
    //             if($('.bbb_prev5').length)
    //             {
    //                 var prev = $('.bbb_prev5');
    //                 prev.on('click', function()
    //                 {
    //                     trendsSlider.trigger('prev.owl.carousel');
    //                 });
    //             }
    
    //             if($('.bbb_next5').length)
    //             {
    //                 var next = $('.bbb_next5');
    //                 next.on('click', function()
    //                 {
    //                     trendsSlider.trigger('next.owl.carousel');
    //                 });
    //             }
    //         }
        
    
    //     });



  //MultiCarousel

  $(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


  //client story

   $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


  
  
  
  //selcet dropdown of store by name 
  
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  
  
// store enqury form script

 // Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


    
   //Talk To Our Furniture Expert  section 

$(document).ready(function(){
  $("#hide").click(function(){
    $(".con-text").hide();
    $(".hide3").hide();
    $(".show3").show();
  });
  $("#show").click(function(){
    $(".con-text").show();
    $(".show3").hide();
    $(".hide3").show();
  });
});
  

$(document).ready(function(){
    $("#hide2").click(function(){
      $(".con-text").hide();
      $(".hide2").hide();
      $(".show2").show();
    });
    $("#show2").click(function(){
      $(".con-text").show();
      $(".show2").hide();
      $(".hide2").show();
    });
  });

//top scroll 
$(document).ready(function(){ 
    $('.SmoothmyTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });
});



    //eye check password script

    // const togglePassword = document.querySelector('.togglePassword');
    // const password = document.querySelector('.id_password');
    
    // togglePassword.addEventListener('click', function (e) {
    //   // toggle the type attribute
    //   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    //   password.setAttribute('type', type);
    //   // toggle the eye slash icon
    //   this.classList.toggle('fa-eye-slash');
    // });
    
 


// top cuppon offer head 
$(document).ready(function(){
  $(".close-offer").click(function(){
    $(".top-offer-sec").slideToggle();
  }); 
});
// accordian of footer n mobile menu
$(function() {
   var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
       
      var links = this.el.find('.link');

      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
   }

   Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
         $this = $(this),
         $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
         $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
   }  

   var accordion = new Accordion($('#accordion_mob1'), false);

});


  $(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown({
                duration: 300,
                easing: 'easeInCubic'
            });
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp({
                duration: 0,
                easing: 'easeOutCubic'
            });
            $(this).toggleClass('open');       
        }
    );
});

 $( document ).ready(function() {
     $('.leftmenutrigger').on('click', function(e) {
     $('.side-nav').toggleClass("open");
     e.preventDefault();
    });
}); 



//home slider 

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

 

  //mobile bottom navigation bar code

const ndicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active")
    })
    anchor.classList.add("active")
  }
})


//mobile bottom navigation bar code end

//mobile bottom navigation bar code

const indicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active2")
    })
    anchor.classList.add("active2")
  }
})

//mobile bottom navigation bar code end



