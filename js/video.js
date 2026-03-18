/* ===== Video Page JavaScript ===== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ===== Category Filtering ===== */
    const categoryBtns = document.querySelectorAll('.category-btn');
    const videoCards = document.querySelectorAll('.video-card');
    
    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get category
                const category = this.getAttribute('data-category');
                
                // Filter videos
                videoCards.forEach(card => {
                    if (category === 'all') {
                        card.style.display = 'block';
                        // Add animation
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === category) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeIn 0.5s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    /* ===== Video Modal ===== */
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');
    const playBtns = document.querySelectorAll('.play-btn');
    
    // Function to open modal and play video
    window.playVideo = function(videoSrc) {
        if (modal && modalVideo) {
            modal.style.display = 'flex';
            modalVideo.src = 'videos/' + videoSrc;
            modalVideo.play();
            
            // Add animation
            modal.style.animation = 'fadeIn 0.3s ease';
        }
    };
    
    // Close modal when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeVideoModal();
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeVideoModal();
        }
    });
    
    function closeVideoModal() {
        if (modal && modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
            modal.style.display = 'none';
        }
    }
    
    /* ===== Video Card Click (optional - open modal) ===== */
    videoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on play button (it has its own handler)
            if (!e.target.closest('.play-btn')) {
                // Find the play button inside this card and trigger it
                const playBtn = this.querySelector('.play-btn');
                if (playBtn) {
                    playBtn.click();
                }
            }
        });
    });
    
    /* ===== Lazy Loading for Videos ===== */
    const videoThumbnails = document.querySelectorAll('.video-thumbnail img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src') || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        videoThumbnails.forEach(img => {
            // Store original src as data-src for lazy loading
            if (!img.getAttribute('data-src')) {
                img.setAttribute('data-src', img.src);
                img.src = 'images/placeholder.jpg'; // Use a placeholder image
            }
            imageObserver.observe(img);
        });
    }
    
    /* ===== Video Views Counter Animation ===== */
    const viewCounts = document.querySelectorAll('.video-card-meta span:first-child');
    
    viewCounts.forEach(view => {
        const text = view.textContent;
        const match = text.match(/([\d.]+)([KM]?)/);
        
        if (match) {
            const value = parseFloat(match[1]);
            const suffix = match[2];
            
            // Store original value
            view.setAttribute('data-views', value);
            view.setAttribute('data-suffix', suffix);
        }
    });
    
    /* ===== Search Functionality (Optional) ===== */
    // You can add a search bar in the future
    
    /* ===== Auto-play featured video on hover (Optional) ===== */
    const featuredVideo = document.querySelector('.featured-video-container video');
    
    if (featuredVideo) {
        featuredVideo.addEventListener('mouseenter', function() {
            this.setAttribute('controls', 'true');
        });
    }
    
});

/* ===== Animation Keyframes ===== */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);