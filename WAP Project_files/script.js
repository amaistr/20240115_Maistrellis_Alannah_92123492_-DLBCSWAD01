document.addEventListener('DOMContentLoaded', function () {
    const deliveryOption = document.getElementById('delivery-option');
    const deliveryAddress = document.getElementById('delivery-address');
  
    deliveryOption.addEventListener('change', function () {
      if (deliveryOption.value === 'delivery') {
        deliveryAddress.style.display = 'block';
      } else {
        deliveryAddress.style.display = 'none';
      }
    });
  });
  