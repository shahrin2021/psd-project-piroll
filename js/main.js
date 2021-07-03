
$(document).ready(function(){

            /* Preloader Css */
            $('#preloader').fadeOut('slow',function(){
                $(this).remove();
            });
    
    
    		// init Isotope
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'masonry'
            });
            // filter items on button click
            $('.portfolio-nav').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter:filterValue });
            });


            $('body').scrollspy({
                target:'.navbar-collapse',
                offset:200,
            });
        
        
        
        
            // Magnific Popup
            $('.image-link').magnificPopup({
                type:'image',
                gallery: {
                    enabled: true
                },
            });


            $('.count').countUp({

                time: 2000,
            
                delay: 10,

            });


            $("#testi").owlCarousel({
                items: 1,
                margin: 20,
                loop: true,
                mouseDrag: true,
                autoplay:true,
                nav: true,
                navText: ['', ''],
                responsive:{
                    0:{
                        items:1,
                    },
                    767:{
                        items:1,
                    },
                    991:{
                        items:1,
                    },
                    1199:{
                        items:1,
                    }
                }
            });


            
            $("#slide").owlCarousel({
                items: 5,
                margin: 20,
                loop: true,
                mouseDrag: true,
                autoplay:true,
                nav: true,
                navText: ['', ''],
                responsive:{
                    0:{
                        items:1,
                    },
                    767:{
                        items:3,
                    },
                    991:{
                        items:4,
                    },
                    1199:{
                        items:5,
                    }
                }
            });

                    
        
            // Magnific Popup
            $('.image-video').magnificPopup({
                type:'iframe',
                gallery: {
                    enabled: false
                },
            });



            

   
    
      
});    