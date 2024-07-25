document.addEventListener('DOMContentLoaded', function() {
    console.log('checkout.js')
    var intervalID = setInterval(function() {
        // Select the ZIP code input field
        var zipInput = document.querySelector('input[name="checkout[shipping_address][zip]"], input[name="checkout[billing_address][zip]"]');
        
        if (zipInput) {
            // Remove the 'required' attribute to make it optional
            zipInput.removeAttribute('required');
            
            // Clear the interval once the field is found and modified
            clearInterval(intervalID);
        }
    }, 100); // Check every 100ms until the element is found
});