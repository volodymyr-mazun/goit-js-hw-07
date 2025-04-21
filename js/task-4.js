const form = document.querySelector('.login-form');  

    const onFieldEvent =  (event) => {  
        event.preventDefault();
    
    const email = form.elements.email.value.trim();  
    const password = form.elements.password.value.trim();  

    if (!email || !password) {  
        alert('All form fields must be filled in');  
        return;  
    }  

    const formData = {  
        email,  
        password,  
    };  

    console.log(formData);  

    form.reset();  
    };  

form.addEventListener('submit', onFieldEvent);
