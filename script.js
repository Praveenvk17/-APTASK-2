// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'All fields are required.';
    formMessage.style.color = 'red';
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thanks for contacting us!';
  formMessage.style.color = 'green';
  document.getElementById('contactForm').reset();
});

// Updated: File Upload Image Gallery
document.getElementById('imageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const fileInput = document.getElementById('imageFile');
  const imageList = document.getElementById('imageList');

  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      imageList.appendChild(img);
    };
    reader.readAsDataURL(file);
    fileInput.value = ''; // Reset file input
  }
});
