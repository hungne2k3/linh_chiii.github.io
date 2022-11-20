const showSocial = (toggleCart, socialCart) => {
    const toggle = document.getElementById(toggleCart),
        social = document.getElementById(socialCart);
    
    toggle.addEventListener('click', () => {
        // if the animation class exits, we add the down-aniation
        if(social.classList.contains('animation')) {
            social.classList.add('down-animation');

            setTimeout(() => {
                social.classList.remove('down-animation');
            }, 1000)
        }

        // we add the animetion class to the div tag with the
        social.classList.toggle('animation')
    })
}

showSocial('cart-toggle', 'cart__social');