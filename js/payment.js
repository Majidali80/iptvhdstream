document.getElementById('confirm-payment').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    const packageName = document.getElementById('package-name').value;
    const subscription = document.getElementById('subscription').value;
    const totalAmount = document.getElementById('total').value;

    // Create a form to redirect to the selected payment gateway
    let form = document.createElement('form');
    form.method = 'POST';

    if (paymentMethod === 'easypaisa') {
        form.action = 'https://easypaisa-api-url.com/payment';
    } else if (paymentMethod === 'jazzcash') {
        form.action = 'https://jazzcash-api-url.com/payment';
    } else if (paymentMethod === 'nayapay') {
        form.action = 'https://nayapay-api-url.com/payment';
    }

    // Append hidden fields with necessary data
    const fields = [
        { name: 'packageName', value: packageName },
        { name: 'subscription', value: subscription },
        { name: 'totalAmount', value: totalAmount },
    ];

    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });

    // Append form to body and submit
    document.body.appendChild(form);
    form.submit();
});
