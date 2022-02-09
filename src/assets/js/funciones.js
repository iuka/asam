window.onload = function() {
    let header = document.querySelector('#un');

    window.addEventListener('scroll', function() {

        let windowPosition = window.scrollY;
        if (windowPosition > 0) {

            header.classList.add('scrolling-active');

        } else {
            header.classList.remove('scrolling-active');

        }


    })
}