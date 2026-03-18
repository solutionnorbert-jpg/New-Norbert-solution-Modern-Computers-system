/* ===== Welcome Button Message ===== */
function showMessage() {
    alert("Welcome to Modern Computers 🚀");
}

/* ===== Dark Mode Toggle ===== */
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            // Update button text/icon
            this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }
});

/* ===== Card Scroll Animation ===== */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function() {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            card.classList.add("show");
        }
    });
});

/* ===== Contact Success Popup ===== */
function showSuccess() {
    let popup = document.getElementById("successPopup");

    if (popup) {
        popup.style.display = "block";
        popup.style.opacity = "1";

        setTimeout(function() {
            popup.style.opacity = "0";
            setTimeout(function() {
                popup.style.display = "none";
            }, 300);
        }, 3000);
    }

    // Reset form after submission
    const form = document.querySelector('.contact-form');
    if (form) {
        form.reset();
    }
}

/* ===== Scroll Reveal Animation ===== */
window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

/* ===== Loading Screen ===== */
window.addEventListener("load", function() {
    let loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

/* ===== Floating Particles ===== */
if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            line_linked: { enable: true, color: "#ffffff" },
            move: { speed: 2 }
        }
    });
}

/* ===== Animated Counters ===== */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

/* ===== Image Slider ===== */
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
    if (i >= slide.length) index = 0;
    else if (i < 0) index = slide.length - 1;
    else index = i;

    if (slides) {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

// Slider navigation
if (next) {
    next.onclick = () => showSlide(index + 1);
}
if (prev) {
    prev.onclick = () => showSlide(index - 1);
}

// Dot navigation
dots.forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
});

// Auto slide
setInterval(() => {
    showSlide(index + 1);
}, 5000);

/* ===== WhatsApp Functions ===== */

// Toggle WhatsApp number field
function toggleWhatsAppMessage(checkbox) {
    const whatsappField = document.getElementById('whatsappNumberField');
    if (whatsappField) {
        if (checkbox.checked) {
            whatsappField.style.display = 'block';
            // Make the WhatsApp number field required when checked
            const whatsappInput = whatsappField.querySelector('input');
            if (whatsappInput) {
                whatsappInput.required = true;
            }
        } else {
            whatsappField.style.display = 'none';
            // Remove required when unchecked
            const whatsappInput = whatsappField.querySelector('input');
            if (whatsappInput) {
                whatsappInput.required = false;
            }
        }
    }
}

// Pre-fill WhatsApp message
function openWhatsAppWithMessage() {
    const phoneNumber = '250783313944';
    const message = encodeURIComponent('Hello! I visited your Modern Computers website and would like to get more information.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Track WhatsApp clicks (optional)
function trackWhatsAppClick() {
    console.log('WhatsApp button clicked - you can add analytics tracking here');
    return true;
}

/* ===== Form Submission Handling ===== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
            
            // Show success message after 2 seconds
            setTimeout(function() {
                const successMsg = document.getElementById('successMessage');
                if (successMsg) {
                    successMsg.style.display = 'block';
                }
                if (contactForm) {
                    contactForm.style.display = 'none';
                }
            }, 2000);
            
            // Don't prevent default - let FormSubmit handle the submission
        });
    }
});

/* ===== Initialize on Page Load ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Any additional initialization can go here
    console.log('Modern Computers website loaded successfully!');
});

// ===== Image Slider Functionality =====
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides || !slideItems.length) return; // Exit if no slider found
    
    let currentIndex = 0;
    const totalSlides = slideItems.length;
    let slideInterval;
    
    // Function to show slide based on index
    function showSlide(index) {
        // Handle wrap around
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        
        // Move slides
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Update active class on slides
        slideItems.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentIndex - 1);
    }
    
    // Auto slide function
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Event listeners for buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoSlide();
            startAutoSlide(); // Restart timer after manual navigation
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoSlide();
            startAutoSlide(); // Restart timer after manual navigation
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide(); // Restart timer after manual navigation
        });
    });
    
    // Pause auto slide when hovering over slider
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Start auto sliding
    startAutoSlide();
    
    // Initialize first slide
    showSlide(0);
});

// ===== Enhanced Image Slider =====
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides || slideItems.length === 0) {
        console.log('No slider found');
        return;
    }
    
    let currentIndex = 0;
    const totalSlides = slideItems.length;
    let slideInterval;
    let isTransitioning = false;
    
    // Set initial height based on first image
    function setSliderHeight() {
        const activeSlide = slideItems[currentIndex];
        const img = activeSlide.querySelector('img');
        if (img && img.complete) {
            // You can adjust this if needed
        }
    }
    
    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Handle wrap around
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        
        // Move slides
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Update active class on slides
        slideItems.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Reset transition lock after animation
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    function nextSlide() {
        if (!isTransitioning) {
            showSlide(currentIndex + 1);
        }
    }
    
    function prevSlide() {
        if (!isTransitioning) {
            showSlide(currentIndex - 1);
        }
    }
    
    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isTransitioning && index !== currentIndex) {
                showSlide(index);
                stopAutoSlide();
                startAutoSlide();
            }
        });
    });
    
    // Pause on hover
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        
        // Touch events for mobile
        slider.addEventListener('touchstart', stopAutoSlide, { passive: true });
        slider.addEventListener('touchend', startAutoSlide, { passive: true });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        }
    });
    
    // Handle image loading
    slideItems.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img) {
            img.addEventListener('load', function() {
                console.log(`Image ${index + 1} loaded`);
            });
            
            img.addEventListener('error', function() {
                console.error(`Image ${index + 1} failed to load`);
                // Fallback color or placeholder
                this.style.backgroundColor = '#333';
                this.src = ''; // Remove broken image
            });
        }
    });
    
    // Initialize
    showSlide(0);
    startAutoSlide();
    setSliderHeight();
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setSliderHeight, 250);
    });
});


// Add this to your script.js for timeline navigation
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline-horizontal');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    if (timeline && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            timeline.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        scrollRightBtn.addEventListener('click', () => {
            timeline.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        // Update button states
        timeline.addEventListener('scroll', () => {
            scrollLeftBtn.disabled = timeline.scrollLeft <= 0;
            scrollRightBtn.disabled = timeline.scrollLeft >= (timeline.scrollWidth - timeline.clientWidth);
        });
    }
});