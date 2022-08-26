$(document).ready(function () {
    $(window).on("scroll",()=>{
        let position=$("#pr").offset();
        if($(window).scrollTop()>=position.top){
            $("header").removeClass("header-transparencia ")
        }
        else {
            $("header").addClass("header-transparencia ")
            
        }
    })
    
        $('#burger').click(function() {
            $('#burger').toggleClass('abierto');
            $('.menu').toggleClass('abierto');
        })

        $('a').on('click', function() {
            if (this.hash !== '') {
                let hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 5000)
            }
        })
    
});