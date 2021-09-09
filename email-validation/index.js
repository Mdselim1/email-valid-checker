document.getElementById('submit_email_btn').addEventListener('click', () => {
   
    const emailValue = document.getElementById('email_value');
    const email = emailValue.value;
    emailValue.value = '';
    const email_Validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid_Email = email_Validation.test(String(email).toLowerCase());
    const errorResult = document.getElementById('error_print');
    if (valid_Email === true) {
        errorResult.innerText = '✅ Your Email is Valid';
        errorResult.classList.add('green_color');
    }
    else if (email === '') {
        errorResult.innerText = '❌ Please Give A Email ?';
        errorResult.classList.add('red_color');
    }
    else {
        errorResult.innerText = '❌ Your Email is invalid . Please give a valid Email ?';
        errorResult.classList.add('red_color');
    };
    emailValue.addEventListener('focus', () => {
        errorResult.innerText = '';
    })
    
});