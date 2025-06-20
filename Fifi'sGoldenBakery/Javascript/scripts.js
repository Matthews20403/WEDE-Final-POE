// Contact us form.
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset(); 
        }
    });

    function validateForm() {
        let isValid = true;

        //Name
        const name = document.getElementById('Name');
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        // Surname
        const surname = document.getElementById('Surname');
        if (surname.value.trim() === '') {
            showError(surname, 'Surname is required');
            isValid = false;
        } else {
            clearError(surname);
        }

        //Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        } else {
            clearError(message);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector('.error-message') || document.createElement('small');
        errorMsg.className = 'error-message';
        errorMsg.textContent = message;
        formControl.appendChild(errorMsg);
        input.classList.add('error');
    }

    function clearError(input) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
        input.classList.remove('error');
    }
});
//Interactive map


// store page so it can load products first.
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('productGrid');
    
    productGrid.innerHTML = '';
    
    setTimeout(() => {
        const products = [
            {
                img: '_img/Chocolate Chip Muffins.PNG',
                alt: 'Picture of muffins',
                name: 'Chocolate Chip Muffins',
                price: 'R59,99'
            },
            {
                img: '_img/Grilled Blueberry Galette.PNG',
                alt: 'Picture of Grilled Blueberry Galette',
                name: 'Grilled Blueberry Galette',
                price: 'R39,99'
            },
            {
                img: '_img/Crispy Cookie Bark.PNG',
                alt: 'Picture of Crispy Cookie Bark',
                name: 'Crispy Cookie Bark',
                price: 'R29,99'
            }
        ];
        
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'Product';
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.alt}" width="160">
                <h2>${product.name}</h2>
                <h3>${product.price}</h3>
                <button class="storebtn">Add to cart</button>
            `;
            productGrid.appendChild(productElement);
        });
    }, 1500);
});
//higlight current page
