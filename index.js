function shadowizard(params) {
    let images = document.querySelectorAll('.shadowizard');

    if (params.shadow_type === 'hard')
        params.shadow_type = '0px';
    else
        params.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `0px 3px 21px 4px ${params.shadow_type} rgba(191, 191, 191, 1)`;

        if (params.padding) {
            image.style.padding = `1.5em`;
        }
    })
}

module.exports.shadowizard = shadowizard;