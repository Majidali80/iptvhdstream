let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});



// Fetch package details from URL (passed from the packages.html page)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageName = urlParams.get('package');
    const packageAmount = urlParams.get('amount');

    // Update form fields with the selected package details
    if (packageName && packageAmount) {
        document.getElementById('package-name').value = packageName;
        document.getElementById('amount').value = packageAmount + " PKR";
        document.getElementById('total').value = packageAmount + " PKR";
    }
});

// Update total amount based on subscription selection
document.getElementById('subscription').addEventListener('change', function() {
    const baseAmount = parseInt(document.getElementById('amount').value.replace(" PKR", ""));
    let totalAmount = baseAmount;

    switch (this.value) {
        case '1-month':
            totalAmount = baseAmount;
            break;
        case '3-months':
            totalAmount = baseAmount * 3;
            break;
        case '6-months':
            totalAmount = baseAmount * 6;
            break;
    }

    document.getElementById('total').value = totalAmount + " PKR";
});


document.getElementById('confirm-payment').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    const packageName = document.getElementById('package-name').value;
    const amount = document.getElementById('amount').value;
    const total = document.getElementById('total').value;

    // Prepare the payload to send to the payment gateway
    const paymentData = {
        packageName: packageName,
        amount: total,
        paymentMethod: paymentMethod
    };

    // Call the respective payment gateway function
    if (paymentMethod === 'easypaisa') {
        processEasyPaisaPayment(paymentData);
    } else if (paymentMethod === 'jazzcash') {
        processJazzCashPayment(paymentData);
    } else if (paymentMethod === 'nayapay') {
        processNayaPayPayment(paymentData);
    }
});

// EasyPaisa payment integration
function processEasyPaisaPayment(paymentData) {
    // Send payment request to EasyPaisa API (this requires you to use the EasyPaisa API documentation)
    alert(`Processing EasyPaisa payment for ${paymentData.amount} PKR`);
    // Example: Replace with actual API request
    // You would use something like fetch or axios to make API requests here
}

// JazzCash payment integration
function processJazzCashPayment(paymentData) {
    // Send payment request to JazzCash API
    alert(`Processing JazzCash payment for ${paymentData.amount} PKR`);
    // Example: Replace with actual API request
}

// NayaPay payment integration
function processNayaPayPayment(paymentData) {
    // Send payment request to NayaPay API
    alert(`Processing NayaPay payment for ${paymentData.amount} PKR`);
    // Example: Replace with actual API request
}
