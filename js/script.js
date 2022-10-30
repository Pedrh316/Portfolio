let carousel = document.querySelector('.projects-carousel');
        let cards = document.querySelectorAll('.projects-carousel article');


        let translateConfig = 0
        let carouselDotLeft = document.querySelector('.carousel-dot-left');
        let carouselDotRight = document.querySelector('.carousel-dot-right');

        carouselDotRight.addEventListener('click', setRoll);
        carouselDotLeft.addEventListener('click', setRoll);

        let qtdTranslate = 0;
        let rolagens = 0;
        

        function setRoll(e) {

            let carouselWidth = carousel.offsetWidth;
            let cardWidth = carouselWidth / cards.length;
            let patternColor = 'hsl(50,100%,50%)';
            let limitRollColor = 'hsl(50,100%,80%)';
                                                  
            e.target === carouselDotRight ? rolagens += 1 : rolagens -= 1;

            if (rolagens > cards.length - 1) {
                rolagens = 0;
            }
            if (rolagens < 0) {
                rolagens = cards.length - 1;
            }

            qtdTranslate = cardWidth * rolagens
            applySettedRoll(qtdTranslate);

        }

        function applySettedRoll(translateWidth) {
            carousel.style.transform = `translateX(-${translateWidth}px)`;
        }

        let accordions = document.querySelectorAll('.accordion .drop-btn');
        accordions.forEach((element) => {
            element.addEventListener("click", accordion)
        })

        function accordion(e) {
            let dropper = this.nextElementSibling;
            let dropperMaxHeight = getComputedStyle(dropper).getPropertyValue('max-height')
            if (dropperMaxHeight == '0px') {
                dropper.style.maxHeight = dropper.scrollHeight + 'px';
            } else {
                dropper.style.maxHeight = '0px';
            }
        }
        