// Profile Images
const profileImages = {
    hero: 'public/images/me/profile1.jpg',
    about: 'public/images/me/profile2.jpg'
};

// Helper function to convert Google Drive link to direct image URL
function getDirectLink(url) {
    return url;
}

// Function to safely get an element by ID
function getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with ID '${id}' not found`);
        return null;
    }
    return element;
}

// Constants for grid display
const ITEMS_PER_VIEW = 3;
const ANIMATION_DELAY = 100;

// Data arrays for the portfolio sections
const photos = [
    { 
        title: "Nature Photography",
        url: "public/images/photography/photo1.jpg",
        category: "landscape"
    },
    {
        title: "Urban Landscape",
        url: "public/images/photography/photo2.jpg",
        category: "landscape"
    },
    {
        title: "Event Coverage",
        url: "public/images/photography/photo3.jpg",
        category: "event"
    },
    {
        title: "Portrait Study",
        url: "public/images/photography/photo4.jpg",
        category: "portrait"
    },
    {
        title: "Landscape View",
        url: "public/images/photography/photo5.jpg",
        category: "landscape"
    },
    {
        title: "Event Moment",
        url: "public/images/photography/photo6.jpg",
        category: "event"
    },
    {
        title: "Portrait Session",
        url: "public/images/photography/photo7.jpg",
        category: "portrait"
    },
    {
        title: "Event Photography",
        url: "public/images/photography/photo8.jpg",
        category: "event"
    },
    {
        title: "Landscape Scene",
        url: "public/images/photography/photo9.jpg",
        category: "landscape"
    },
    {
        title: "Portrait Art",
        url: "public/images/photography/photo10.jpg",
        category: "portrait"
    },
    {
        title: "Event Capture",
        url: "public/images/photography/photo11.jpg",
        category: "event"
    },
    {
        title: "Landscape Beauty",
        url: "public/images/photography/photo12.jpg",
        category: "landscape"
    },
    {
        title: "Portrait Style",
        url: "public/images/photography/photo13.jpg",
        category: "portrait"
    },
    {
        title: "Event Highlights",
        url: "public/images/photography/photo14.jpg",
        category: "event"
    },
    {
        title: "Portrait Mood",
        url: "public/images/photography/photo15.jpg",
        category: "portrait"
    },
    {
        title: "Event Story",
        url: "public/images/photography/photo16.jpg",
        category: "event"
    },
    {
        title: "Urban Exploration",
        url: "public/images/photography/photo17.jpg",
        category: "landscape"
    },
    {
        title: "Cultural Event",
        url: "public/images/photography/photo18.jpeg",
        category: "event"
    },
    {
        title: "Street Portrait",
        url: "public/images/photography/photo19.jpeg",
        category: "portrait"
    },
    {
        title: "City Life",
        url: "public/images/photography/photo20.jpeg",
        category: "landscape"
    },
    {
        title: "Festival Moments",
        url: "public/images/photography/photo21.jpeg",
        category: "event"
    },
    {
        title: "Character Study",
        url: "public/images/photography/photo22.jpeg",
        category: "portrait"
    },
    {
        title: "Architectural Beauty",
        url: "public/images/photography/photo23.jpg",
        category: "landscape"
    },
    {
        title: "Natural Wonders",
        url: "public/images/photography/photo24.jpg",
        category: "landscape"
    },
    {
        title: "Candid Moments",
        url: "public/images/photography/photo25.jpg",
        category: "portrait"
    },
    {
        title: "Urban Patterns",
        url: "public/images/photography/photo26.jpg",
        category: "landscape"
    },
    {
        title: "Event Atmosphere",
        url: "public/images/photography/photo27.jpg",
        category: "event"
    }
];

const posters = [
    {
        title: "Short Film Poster 1",
        url: "public/images/posters/poster1.jpg",
        category: "short-film"
    },
    {
        title: "Documentary Poster 1",
        url: "public/images/posters/poster2.jpg",
        category: "documentary"
    },
    {
        title: "Music Video Poster 1",
        url: "public/images/posters/poster3.png",
        category: "music-video"
    },
    {
        title: "Short Film Poster 2",
        url: "public/images/posters/poster4.jpg",
        category: "short-film"
    },
    {
        title: "Documentary Poster 2",
        url: "public/images/posters/poster5.png",
        category: "documentary"
    },
    {
        title: "Music Video Poster 2",
        url: "public/images/posters/poster6.png",
        category: "music-video"
    },
    {
        title: "Short Film Poster 3",
        url: "public/images/posters/poster7.jpg",
        category: "short-film"
    },
    {
        title: "Documentary Poster 3",
        url: "public/images/posters/poster8.png",
        category: "documentary"
    },
    {
        title: "Music Video Poster 3",
        url: "public/images/posters/poster9.png",
        category: "music-video"
    },
    {
        title: "Short Film Poster 4",
        url: "public/images/posters/poster10.jpg",
        category: "short-film"
    },
    {
        title: "Documentary Poster 4",
        url: "public/images/posters/poster11.png",
        category: "documentary"
    },
    {
        title: "Music Video Poster 4",
        url: "public/images/posters/poster12.jpg",
        category: "music-video"
    },
    {
        title: "Short Film Poster 5",
        url: "public/images/posters/poster13.png",
        category: "short-film"
    },
    {
        title: "Documentary Poster 5",
        url: "public/images/posters/poster14.png",
        category: "documentary"
    },
    {
        title: "Music Video Poster 5",
        url: "public/images/posters/poster15.jpg",
        category: "music-video"
    }
];

const videos = [
    {
        title: "Short Film 1",
        thumbnailUrl: "public/images/thumbnails/video1.png",
        videoSrc: "https://player.vimeo.com/video/123456789",
        category: "short-film"
    },
    {
        title: "Documentary 1",
        thumbnailUrl: "public/images/thumbnails/video2.png",
        videoSrc: "https://player.vimeo.com/video/234567890",
        category: "documentary"
    },
    {
        title: "Music Video 1",
        thumbnailUrl: "public/images/thumbnails/video3.png",
        videoSrc: "https://player.vimeo.com/video/345678901",
        category: "music-video"
    },
    {
        title: "Short Film 2",
        thumbnailUrl: "public/images/thumbnails/video4.png",
        videoSrc: "https://player.vimeo.com/video/456789012",
        category: "short-film"
    },
    {
        title: "Documentary 2",
        thumbnailUrl: "public/images/thumbnails/video5.png",
        videoSrc: "https://player.vimeo.com/video/567890123",
        category: "documentary"
    },
    {
        title: "Music Video 2",
        thumbnailUrl: "public/images/thumbnails/video6.png",
        videoSrc: "https://player.vimeo.com/video/678901234",
        category: "music-video"
    },
    {
        title: "Short Film 3",
        thumbnailUrl: "public/images/thumbnails/video7.png",
        videoSrc: "https://player.vimeo.com/video/789012345",
        category: "short-film"
    },
    {
        title: "Documentary 3",
        thumbnailUrl: "public/images/thumbnails/video8.png",
        videoSrc: "https://player.vimeo.com/video/890123456",
        category: "documentary"
    },
    {
        title: "Music Video 3",
        thumbnailUrl: "public/images/thumbnails/video9.png",
        videoSrc: "https://player.vimeo.com/video/901234567",
        category: "music-video"
    },
    {
        title: "Short Film 4",
        thumbnailUrl: "public/images/thumbnails/video10.png",
        videoSrc: "https://player.vimeo.com/video/012345678",
        category: "short-film"
    },
    {
        title: "Documentary 4",
        thumbnailUrl: "public/images/thumbnails/video11.png",
        videoSrc: "https://player.vimeo.com/video/123456780",
        category: "documentary"
    },
    {
        title: "Music Video 4",
        thumbnailUrl: "public/images/thumbnails/video12.png",
        videoSrc: "https://player.vimeo.com/video/234567801",
        category: "music-video"
    },
    {
        title: "Short Film 5",
        thumbnailUrl: "public/images/thumbnails/video13.png",
        videoSrc: "https://player.vimeo.com/video/345678012",
        category: "short-film"
    },
    {
        title: "Documentary 5",
        thumbnailUrl: "public/images/thumbnails/video14.png",
        videoSrc: "https://player.vimeo.com/video/456789123",
        category: "documentary"
    },
    {
        title: "Music Video 5",
        thumbnailUrl: "public/images/thumbnails/video15.png",
        videoSrc: "https://player.vimeo.com/video/567890234",
        category: "music-video"
    }
];

// Function to create carousel navigation dots
function createCarouselNav(gridId, totalItems) {
    const navContainer = document.getElementById(`${gridId}Nav`);
    if (!navContainer) return;
    
    navContainer.innerHTML = '';
    const numDots = Math.ceil(totalItems / ITEMS_PER_VIEW);
    
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            const grid = document.getElementById(gridId);
            const scrollPosition = i * (grid.querySelector('.grid-item').offsetWidth + 30);
            grid.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            
            // Update active dot
            navContainer.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
        
        navContainer.appendChild(dot);
    }
}

// Function to create grid items for images with improved loading
function createImageItem(item, index) {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.style.animationDelay = `${index * ANIMATION_DELAY}ms`;
    
    const img = document.createElement("img");
    img.alt = item.title;
    img.loading = "lazy";
    
    // Add loading state
    div.innerHTML = '<div class="loading-spinner"></div>';
    
    // Create new image object to check loading
    const tempImg = new Image();
    
    tempImg.onload = function() {
        div.querySelector('.loading-spinner').remove();
        img.src = this.src;
        div.appendChild(img);
        
        // Add lightbox attributes
        img.setAttribute('data-lightbox', 'gallery');
        img.setAttribute('data-title', item.title);
    };
    
    tempImg.onerror = function() {
        console.error(`Failed to load image: ${item.title}`);
        div.querySelector('.loading-spinner').remove();
        div.innerHTML = `<div class="error-message">Failed to load image</div>`;
    };
    
    tempImg.src = item.url;
    
    return div;
}

// Function to create grid items for video thumbnails
function createVideoItem(video, index) {
    const div = document.createElement("div");
    div.className = "grid-item video-item";
    div.style.animationDelay = `${index * ANIMATION_DELAY}ms`;
    
    const img = document.createElement("img");
    img.alt = video.title;
    img.loading = "lazy";
    
    // Add loading state
    div.innerHTML = '<div class="loading-spinner"></div>';
    
    // Create new image object to check loading
    const tempImg = new Image();
    
    tempImg.onload = function() {
        div.querySelector('.loading-spinner').remove();
        img.src = this.src;
        div.appendChild(img);
        
        // Add play button overlay
        const playButton = document.createElement("div");
        playButton.className = "play-button";
        div.appendChild(playButton);
    };
    
    tempImg.onerror = function() {
        console.error(`Failed to load thumbnail: ${video.title} from URL: ${video.thumbnailUrl}`);
        div.querySelector('.loading-spinner').remove();
        div.innerHTML = `<div class="error-message">Failed to load thumbnail</div>`;
    };
    
    // Start loading the thumbnail
    tempImg.src = getDirectLink(video.thumbnailUrl);
    
    // Add click event for video modal
    div.addEventListener("click", () => {
        openVideoModal(video.videoSrc);
    });
    
    return div;
}

// Function to open video modal
function openVideoModal(videoSrc) {
    const modal = getElementById('videoModal');
    const videoContainer = getElementById('videoPlayerContainer');
    
    if (modal && videoContainer) {
        videoContainer.innerHTML = `
            <iframe 
                src="${videoSrc}" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen
            ></iframe>`;
        modal.style.display = 'block';
    }
}

// Function to populate grid with items
function populateGrid(gridId, items, createItemFunction) {
    const grid = getElementById(gridId);
    if (!grid) return;
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Add all items
    items.forEach((item, index) => {
        grid.appendChild(createItemFunction(item, index));
    });
    
    // Create carousel navigation
    createCarouselNav(gridId, items.length);
    
    // Add scroll event listener for carousel navigation
    grid.addEventListener('scroll', () => {
        const scrollPosition = grid.scrollLeft;
        const itemWidth = grid.querySelector('.grid-item').offsetWidth + 30;
        const currentIndex = Math.round(scrollPosition / itemWidth);
        
        const navContainer = document.getElementById(`${gridId}Nav`);
        if (navContainer) {
            navContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set hero and about images with improved loading
    const heroImage = document.getElementById('heroImage');
    const aboutImage = document.getElementById('aboutImage');
    
    if (heroImage) {
        heroImage.crossOrigin = "anonymous";
        heroImage.onerror = function() {
            console.error('Failed to load hero image');
            this.parentElement.innerHTML = '<div class="error-message">Image failed to load</div>';
        };
        heroImage.src = getDirectLink(profileImages.hero);
    }
    
    if (aboutImage) {
        aboutImage.crossOrigin = "anonymous";
        aboutImage.onerror = function() {
            console.error('Failed to load about image');
            this.parentElement.innerHTML = '<div class="error-message">Image failed to load</div>';
        };
        aboutImage.src = getDirectLink(profileImages.about);
    }

    // Initialize preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Populate grids
    if (photos) {
        populateGrid("photoGrid", photos, createImageItem);
    }
    
    if (videos) {
        populateGrid("videoGrid", videos, createVideoItem);
    }
    
    if (posters) {
        populateGrid("posterGrid", posters, createImageItem);
    }

    // Initialize video modal
    const modal = getElementById("videoModal");
    const closeBtn = modal ? modal.querySelector(".close") : null;

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            const modalContent = getElementById("videoPlayerContainer");
            if (modal && modalContent) {
                modal.style.display = "none";
                modalContent.innerHTML = "";
            }
        });
    }

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            const modalContent = getElementById("videoPlayerContainer");
            if (modal && modalContent) {
                modal.style.display = "none";
                modalContent.innerHTML = "";
            }
        }
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            updateThemeIcon();
        }

        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeIcon();
        });

        function updateThemeIcon() {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (body.getAttribute('data-theme') === 'dark') {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        }
    }

    // Back to Top Button
    const backToTopButton = getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    if (sections.length && navItems.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Initialize Lightbox if available
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2'
        });
    }
});
