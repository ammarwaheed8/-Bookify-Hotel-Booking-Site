// Attach a submit event listener to the form
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Get the modal element
    const modal = document.getElementById('successModal');
    if (modal) {
      // Display the modal
      modal.style.display = 'block';
    } else {
      console.error('Modal element not found!');
      return; // Exit if modal is not found
    }
  
    // Add event listener to close button
    const closeModalButton = document.getElementById('closeModal');
    if (closeModalButton) {
      closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    } else {
      console.error('Close button not found!');
    }
  
    // Close modal when user clicks outside of it
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Optionally clear the form after submission
    document.getElementById('bookingForm').reset();
  });
  