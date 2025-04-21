const input = document.getElementById('name-input');  
const output = document.getElementById('name-output');  


const onInputWrite = () => {
    const trimmedValue = input.value.trim();

    if (trimmedValue.length > 0) {
        output.textContent = trimmedValue;
    } else {
        output.textContent = 'Anonymous';
    }
};

input.addEventListener('input', onInputWrite);  
