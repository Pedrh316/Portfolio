(function(){
    
    let cube = document.querySelector('.cube'); 

    let mousePositionY = 0;
    let scrollPositionY = 0;
    let clientY_Plus_Scroll = 0;

    window.addEventListener('resize', enableCubeAnimation);
    function enableCubeAnimation(){
        if(innerWidth > 750){
            window.addEventListener('mousemove', adjustSquare);
            window.addEventListener('scroll', adjustSquareWithScroll);
            return
        }
        window.removeEventListener('mousemove', adjustSquare);
        window.removeEventListener('scroll', adjustSquareWithScroll);

        cube.style.cssText = ' top: 65%; left: calc(50% - 50px); z-index: 3;'
    }

    enableCubeAnimation();


    function adjustSquare(e){
        mousePositionY = e.clientY;
        clientY_Plus_Scroll = scrollPositionY + mousePositionY;
        cube.style.top = clientY_Plus_Scroll - 30 + 'px';
        cube.style.left = e.clientX + 50 + 'px';
    }

    function adjustSquareWithScroll(e){
        scrollPositionY = window.pageYOffset;
        clientY_Plus_Scroll = scrollPositionY + mousePositionY;
        cube.style.top = clientY_Plus_Scroll - 30 + 'px'
    }
        
})();
