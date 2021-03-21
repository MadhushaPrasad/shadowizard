function shadowizard(params) {
    let images = document.querySelectorAll('.shadowizard');

    if (params.shadow_type === 'hard')
        params.shadow_type = '0px';
    else
        params.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${params.shadow_type} 1px rgba(0,0,0,0,12)`;

        if (params.padding) {
            image.style.padding = `1em`;
        }
    })
}

module.exports.shadowizard = shadowizard;