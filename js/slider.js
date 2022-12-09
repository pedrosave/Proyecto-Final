(function () {
    const sliders = [...document.querySelectorAll('.testimonio_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimonio = document.querySelector('.testimonio_body--show').dataset.id;
        value = Number(currentTestimonio);
        value += add;

        sliders[Number(currentTestimonio) - 1].classList.remove(('testimonio_body--show'))
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value - 1].classList.add('testimonio_body--show');
    }

})();