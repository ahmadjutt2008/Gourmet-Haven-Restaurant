document.addEventListener('DOMContentLoaded', () => {

    // --- Menu Data (Massive List) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // --- Filter Functionality ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active class toggle
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    // Re-trigger animation if needed, or just let it show
                    item.classList.add('animate-fade-up');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-fade-up');
                }
            });
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 1)'; // Solid color
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)'; // Slightly transparent
        }
    });

    // --- Reservation Form Handling ---
    const reservationForm = document.getElementById('reservationForm');
    const successMsg = document.getElementById('bookingSuccess');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation check (Bootstrap required handles most)
            // Show success message
            successMsg.classList.remove('d-none');

            // In a real app, send data to backend here

            // Reset form
            reservationForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.classList.add('d-none');
            }, 5000);
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                const navCollapse = document.getElementById('navbarNav');
                if (navCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

});
