

            $(window).on('load',function() {

                $("#flexiselDemo3").flexisel({
                    visibleItems: 6,
                    animationSpeed: 300,
                    autoPlay: {
                            enable: true,
                            interval: 5000,
                            pauseOnHover: true
                        }  ,
                    enableResponsiveBreakpoints: true,
                    responsiveBreakpoints: {
                        portrait: {
                            changePoint: 480,
                            visibleItems: 1,
                        },
                        landscape: {
                            changePoint: 640,
                            visibleItems: 2
                        },
                        tablet: {
                            changePoint: 768,
                            visibleItems: 3
                        },
                        desktop: {
                            changePoint: 991,
                            visibleItems: 4
                        },
                        wider: {
                            changePoint: 1200,
                            visibleItems: 5
                        }
                    }
                });
                

            });
        $(function () {
    // This assumes that you have placed the cross.svg file inside /img in your project
    $(".slb").simplebox();
});