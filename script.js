        // Mobile menu toggle
        document.getElementById('mobileMenuToggle').addEventListener('click', () => {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('active');
            const icon = document.getElementById('mobileMenuToggle').querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const icon = darkModeToggle.querySelector('i');

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // Toggle dark mode on click
        darkModeToggle.addEventListener('click', () => {
            console.log('Dark mode toggle clicked'); // Debugging
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('darkMode', 'disabled');
            }
        });

                // Services image popup
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const imageUrl = card.getAttribute('data-image');
                modalImage.src = imageUrl;
                modal.style.display = 'block';
            });
        });
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

                // Slideshow for service images
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.service-card');

            cards.forEach(card => {
                const images = card.querySelectorAll('.slide-image');
                let currentImage = 0;

                function switchImage() {
                    images[currentImage].classList.remove('active');
                    currentImage = (currentImage + 1) % images.length; // Loop back to first image
                    images[currentImage].classList.add('active');
                }

                // Set initial active image
                if (images.length > 0) {
                    images[0].classList.add('active');
                }

                // Switch images every 4 seconds if there are multiple images
                if (images.length > 1) {
                    setInterval(switchImage, 5000);
                }
            });
        });