// Active Navigation Link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});

// Interactive Feature 1: Program Filter
const programFilter = document.querySelectorAll('[data-filter]');
if (programFilter.length > 0) {
    programFilter.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            const cards = document.querySelectorAll('.program-card');

            programFilter.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Interactive Feature 2: FAQ/Accordion Auto-close
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        if (!expanded) {
            this.classList.add('fade-in');
        }
    });
});

// Registration Form Validation
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const program = document.getElementById('program');
        const intake = document.getElementById('intake');
        const studyMode = document.querySelector('input[name="studyMode"]:checked');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const terms = document.getElementById('terms');

        // Reset validation
        registrationForm.classList.remove('was-validated');

        // Validate Full Name
        if (fullName.value.trim().length < 3) {
            fullName.classList.add('is-invalid');
            fullName.classList.remove('is-valid');
            isValid = false;
        } else {
            fullName.classList.add('is-valid');
            fullName.classList.remove('is-invalid');
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        // Validate Phone
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone.value.replace(/\s/g, ''))) {
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
            isValid = false;
        } else {
            phone.classList.add('is-valid');
            phone.classList.remove('is-invalid');
        }

        // Validate Program
        if (!program.value) {
            program.classList.add('is-invalid');
            program.classList.remove('is-valid');
            isValid = false;
        } else {
            program.classList.add('is-valid');
            program.classList.remove('is-invalid');
        }

        // Validate Intake
        if (!intake.value) {
            intake.classList.add('is-invalid');
            intake.classList.remove('is-valid');
            isValid = false;
        } else {
            intake.classList.add('is-valid');
            intake.classList.remove('is-invalid');
        }

        // Validate Study Mode
        const studyModeError = document.getElementById('studyModeError');
        if (!studyMode) {
            studyModeError.textContent = 'Please select a study mode.';
            isValid = false;
        } else {
            studyModeError.textContent = '';
        }

        // Validate Password
        if (password.value.length < 8) {
            password.classList.add('is-invalid');
            password.classList.remove('is-valid');
            isValid = false;
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        }

        // Validate Confirm Password
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
            confirmPassword.classList.remove('is-valid');
            isValid = false;
        } else {
            confirmPassword.classList.add('is-valid');
            confirmPassword.classList.remove('is-invalid');
        }

        // Validate Terms
        if (!terms.checked) {
            terms.classList.add('is-invalid');
            isValid = false;
        } else {
            terms.classList.remove('is-invalid');
        }

        // If all valid, show success
        if (isValid) {
            registrationForm.style.display = 'none';
            document.getElementById('successMessage').classList.remove('d-none');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Real-time password match validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    confirmPassword.addEventListener('input', function () {
        if (this.value === password.value && this.value.length >= 8) {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
        } else if (this.value.length > 0) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        }
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const subject = document.getElementById('contactSubject');
        const message = document.getElementById('contactMessage');
        const math = document.getElementById('contactMath');

        // Validate Name
        if (name.value.trim().length < 2) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        }

        // Validate Subject
        if (subject.value.trim().length < 3) {
            subject.classList.add('is-invalid');
            isValid = false;
        } else {
            subject.classList.add('is-valid');
            subject.classList.remove('is-invalid');
        }

        // Validate Message
        if (message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.add('is-valid');
            message.classList.remove('is-invalid');
        }

        // Validate Anti-spam (5 + 3 = 8)
        if (math.value.trim() !== '8') {
            math.classList.add('is-invalid');
            isValid = false;
        } else {
            math.classList.add('is-valid');
            math.classList.remove('is-invalid');
        }

        // Show success message
        const messageDiv = document.getElementById('contactFormMessage');
        if (isValid) {
            messageDiv.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent successfully. We will contact you soon.</div>';
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        } else {
            messageDiv.innerHTML = '<div class="alert alert-danger">Please correct the errors above.</div>';
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});