// Helper function to convert a Google Drive link to a direct image URL
function getDirectLink(url) {
    // Check if it's a Google Drive URL
    if (url.includes('drive.google.com')) {
        // Extract the file ID
        let fileId = '';
        
        // For URLs containing /file/d/
        const filePattern = /\/file\/d\/([^/]+)/;
        const fileMatch = url.match(filePattern);
        
        if (fileMatch && fileMatch[1]) {
            fileId = fileMatch[1];
            // Return the direct image URL using a different format
            return `https://lh3.googleusercontent.com/d/${fileId}`;
        }
    }
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
        url: "https://drive.google.com/file/d/1RDnSun2OKFMCnvL8R5c9EFldRE1awsYd/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Urban Landscape",
        url: "https://drive.google.com/file/d/1R1D0pOgf0lLY_D79mvW5xYcSHUuCofGX/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Event Coverage",
        url: "https://drive.google.com/file/d/1R2TOJ8pNNfKYEN0MSQ1pUF_CNmed-4d6/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Portrait Study",
        url: "https://drive.google.com/file/d/1Qh3cUl0kccKFEecqSPi_C88jhOIBbRQY/view?usp=sharing",
        category: "portrait"
    },
    { 
        title: "Landscape View",
        url: "https://drive.google.com/file/d/1RWYyMB7FKTmrePZuCtL9H1T5UYC72Q9S/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Event Moment",
        url: "https://drive.google.com/file/d/1QW5uAeCXt2QGHU-Yv7TdCdN4YAfaSkqe/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Portrait Session",
        url: "https://drive.google.com/file/d/1QNTiH4YyuZGpgXyZaXCi2mUrSr75lxLk/view?usp=sharing",
        category: "portrait"
    },
    { 
        title: "Event Photography",
        url: "https://drive.google.com/file/d/1QfdvZz6cw6-BX3gImx73ozls-FA4jaJH/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Landscape Scene",
        url: "https://drive.google.com/file/d/1QvptH7GEFuYs9579x66wgE4aTndrtgwB/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Portrait Art",
        url: "https://drive.google.com/file/d/1RKj3vX6PpecVd1NfAdHZmpr74r4TCjeb/view?usp=sharing",
        category: "portrait"
    },
    { 
        title: "Event Capture",
        url: "https://drive.google.com/file/d/1QKm96SE7qjpYJTcDZZUES384F8A99cNE/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Landscape Beauty",
        url: "https://drive.google.com/file/d/1RMWTJaNR60NbG8S15wBH2r7WikTOgMpa/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Portrait Style",
        url: "https://drive.google.com/file/d/1QYKJRHUyShrfwgHnuM21cEuwd4gccMnX/view?usp=sharing",
        category: "portrait"
    },
    { 
        title: "Event Highlights",
        url: "https://drive.google.com/file/d/1QUlWySKAF_S3p3V_9nrAy5R3jZDseKbh/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Landscape Vista",
        url: "https://drive.google.com/file/d/1R97Uj7DPblwnb5k28bYxaSD2aM3DIde3/view?usp=sharing",
        category: "landscape"
    },
    { 
        title: "Portrait Mood",
        url: "https://drive.google.com/file/d/1Qika9tOCNwbzOYFPF-ABftWIra6Z8zob/view?usp=sharing",
        category: "portrait"
    },
    { 
        title: "Event Story",
        url: "https://drive.google.com/file/d/1RKheUiGQEiyQJOtqI-tqDQcTwdp77bCA/view?usp=sharing",
        category: "event"
    },
    { 
        title: "Landscape Panorama",
        url: "https://drive.google.com/file/d/1R3G40PkRbTdX05TOYtNTnhVt3e52XyU2/view?usp=sharing",
        category: "landscape"
    }
];

const posters = [
    { 
        title: "Short Film Poster 1",
        url: "https://drive.google.com/file/d/1TY4pTWWu2hDVF35VCNO8E3KJ98HuzKvF/view?usp=sharing",
        category: "short-film"
    },
    { 
        title: "Documentary Poster 1",
        url: "https://drive.google.com/file/d/1ShNJb3fuLmV1E7-xrNBpw4Ms0laL3B_G/view?usp=sharing",
        category: "documentary"
    },
    { 
        title: "Music Video Poster 1",
        url: "https://drive.google.com/file/d/1SmLyTYzAzbykGmAuObzswJkW3Mfetcxg/view?usp=sharing",
        category: "music-video"
    },
    // Adding the rest of the posters with appropriate categories
    ...Array.from({ length: 24 }, (_, i) => ({
        title: `Cinematic Work ${i + 4}`,
        url: [
            "https://drive.google.com/file/d/1SX-oULqD55nGNLEpY--P49ARVOfAK1vM/view?usp=sharing",
            "https://drive.google.com/file/d/1Tdzk7eGm-klR-K5X5_-FlV-wPrS3_M3G/view?usp=sharing",
            "https://drive.google.com/file/d/1U0WllD2X_Wm9GQ1r-IhTahujTb_ySUkn/view?usp=sharing",
            "https://drive.google.com/file/d/1SXgXXwqugtfOuvmKWa1v1-ofJU1OG8Zo/view?usp=sharing",
            "https://drive.google.com/file/d/1St5ROAmf3XYhjO9naTLnNpoFJEknA8s2/view?usp=sharing",
            "https://drive.google.com/file/d/1TsE59PsJxg3arXGM71Ji174nkXJ_Riyz/view?usp=sharing",
            "https://drive.google.com/file/d/1TVJcttjpBRDSYmSlvRjbOUqogivvpBT3/view?usp=sharing",
            "https://drive.google.com/file/d/1SmP5MrzUA9aI2yMwHxztDN1DAWc5eIht/view?usp=sharing",
            "https://drive.google.com/file/d/1SR14ylOCK2zb6qOVnY0Jw6cAUVQ_GL4f/view?usp=sharing",
            "https://drive.google.com/file/d/1ShJNDbHtve-JnNDLkr4Na8gThy_8jTf-/view?usp=sharing",
            "https://drive.google.com/file/d/1Ss_2BA2KlumOmOOq9hvOK_aZqLm7DTd5/view?usp=sharing",
            "https://drive.google.com/file/d/1SHTwZtq1h9-Xla42m5m5FTQn2mmhvkpl/view?usp=sharing",
            "https://drive.google.com/file/d/1TgbNjSjkj6eIARCpk2FATwKQx0SIPoJ-/view?usp=sharing",
            "https://drive.google.com/file/d/1Tr_hMpKC5ShksyZ8UYsw4BzXbEy4IhR0/view?usp=sharing",
            "https://drive.google.com/file/d/1T55fOoH3KWzfus3RJr42La7sp-K2A7Qr/view?usp=sharing",
            "https://drive.google.com/file/d/1THGBanNmuK7LAhpUrejKVIzmk2KTzWVw/view?usp=sharing",
            "https://drive.google.com/file/d/1Tj9NJnxsfthMEhroe4QtySuxuW9im9wy/view?usp=sharing",
            "https://drive.google.com/file/d/1TgHj1BfX50nJE935evou4hNv7qH91aWG/view?usp=sharing",
            "https://drive.google.com/file/d/1TfP1KdLwsEjWkB4XyEtI6kjx8uS_Q3lV/view?usp=sharing",
            "https://drive.google.com/file/d/1TZtzwQtfd6nnXccxOPyeXsED86MzkE6u/view?usp=sharing",
            "https://drive.google.com/file/d/1SY6ghjTI6vho5PZX9LXulHQp5S9C_gzi/view?usp=sharing",
            "https://drive.google.com/file/d/1TdHnamcr4GqUfIZqilejpOGBdZ7Exu5Z/view?usp=sharing",
            "https://drive.google.com/file/d/1Ttt6xz7-rJRgUx4hnSqg6T4npefAmgI5/view?usp=sharing",
            "https://drive.google.com/file/d/1T6dq7BXiq865BIa7HP2cviLb4SZ5A2qH/view?usp=sharing"
        ][i],
        category: ["short-film", "documentary", "music-video"][i % 3]
    }))
];

const videos = [
    {
        title: "Bird Capture",
        videoSrc: "https://player.vimeo.com/video/1072700168?h=f8bcd08d19",
        thumbnail: "https://drive.google.com/file/d/1RTHuupw0lsNmgkGulR2qX2IvbFJmuWBx/view?usp=sharing",
        category: "nature"
    },
    {
        title: "Lola Cute Reel",
        videoSrc: "https://player.vimeo.com/video/1072700174?h=2ea0fb956a",
        thumbnail: "https://drive.google.com/file/d/1S1tfpCMa1Y9qZ0m47B8e3FQijQUMdkif/view?usp=sharing",
        category: "commercial"
    },
    {
        title: "Jnana Cauvery College Event",
        videoSrc: "https://player.vimeo.com/video/1072700186?h=cc8418b575",
        thumbnail: "https://drive.google.com/file/d/1Rmd_88IcQgXdO7b3ZAErUAKNBPO-KA3V/view?usp=sharing",
        category: "event"
    },
    {
        title: "Jnana Cauvery Logo Launch Event",
        videoSrc: "https://player.vimeo.com/video/1072700193?h=dfbf09124e",
        thumbnail: "https://drive.google.com/file/d/1RbYupji-yu0MzXJa5P3uChtAVL5hB-wu/view?usp=sharing",
        category: "event"
    },
    {
        title: "PESCO Bike Stunt Event",
        videoSrc: "https://player.vimeo.com/video/1072700200?h=0218dd1018",
        thumbnail: "https://drive.google.com/file/d/1RzQjGR-N-4YR-hXzRnG_qxVdDGi3Hi75/view?usp=sharing",
        category: "event"
    },
    {
        title: "PES Electrical Department",
        videoSrc: "https://player.vimeo.com/video/1072700205?h=ee89663249",
        thumbnail: "https://drive.google.com/file/d/1RVllG0kincokjfuGwlvb9julYoWPYpbR/view?usp=sharing",
        category: "commercial"
    },
    {
        title: "Ethnic Day Event",
        videoSrc: "https://player.vimeo.com/video/1072700213?h=3f82b593cd",
        thumbnail: "https://drive.google.com/file/d/1QiMjeoaPiR0pPvJJwpoB2S47AmQJt018/view?usp=sharing",
        category: "event"
    },
    {
        title: "Kings Coffee Promotional Video",
        videoSrc: "https://player.vimeo.com/video/1072700220?h=38f2e053f5",
        thumbnail: "https://drive.google.com/file/d/1R8074im1eg_vcmgh5d2WmUDoQ0JYHXhu/view?usp=sharing",
        category: "commercial"
    },
    {
        title: "Jnana Cauvery Logo",
        videoSrc: "https://player.vimeo.com/video/1072700260?h=096324d4bd",
        thumbnail: "https://drive.google.com/file/d/1RfGkTnbwMpD5KSoESCsJknQIO779cIk2/view?usp=sharing",
        category: "commercial"
    },
    {
        title: "Coorg Cinematic Reel",
        videoSrc: "https://player.vimeo.com/video/1072700265?h=822b06e344",
        thumbnail: "https://drive.google.com/file/d/1Rg0cpUBuuocuF9gUL6ZYZF1yxlk5hIzb/view?usp=sharing",
        category: "cinematic"
    },
    {
        title: "Promotional Video",
        videoSrc: "https://player.vimeo.com/video/1072700279?h=645af8094b",
        thumbnail: "https://drive.google.com/file/d/1RdTu8c01c4rioEpCqba_h4bsC0k_tflL/view?usp=sharing",
        category: "commercial"
    },
    {
        title: "Pre-Wedding Video Palace",
        videoSrc: "https://player.vimeo.com/video/1072700291?h=73ea988df6",
        thumbnail: "https://drive.google.com/file/d/1RlVgeMte0tfp5c5NaGDu9R1hTklwd_t3/view?usp=sharing",
        category: "wedding"
    },
    {
        title: "Pre-Wedding Video Beach",
        videoSrc: "https://player.vimeo.com/video/1072700300?h=9f6d796a5e",
        thumbnail: "https://drive.google.com/file/d/1RMY3LczK2Zzelr4R83e6TLxvdrpt5jpU/view?usp=sharing",
        category: "wedding"
    },
    {
        title: "Documentary Video",
        videoSrc: "https://player.vimeo.com/video/1072700308?h=5b766692eb",
        thumbnail: "https://drive.google.com/file/d/1QJ2T7HeJ8ZpywG80i0Iy2ErYp-7hGnP6/view?usp=sharing",
        category: "documentary"
    },
    {
        title: "PESCO Event Video Frames",
        videoSrc: "https://player.vimeo.com/video/1072700316?h=768ad89167",
        thumbnail: "https://drive.google.com/file/d/1Rw-dN1hLXoh-QtLN9wzapNSC3je6dkT0/view?usp=sharing",
        category: "event"
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

// Function to create grid items for images
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
        console.error(`Failed to load image: ${item.title} from URL: ${item.url}`);
        div.querySelector('.loading-spinner').remove();
        div.innerHTML = `<div class="error-message">Failed to load image</div>`;
    };
    
    // Start loading the image
    tempImg.src = getDirectLink(item.url);
    
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
        console.error(`Failed to load thumbnail: ${video.title} from URL: ${video.thumbnail}`);
        div.querySelector('.loading-spinner').remove();
        div.innerHTML = `<div class="error-message">Failed to load thumbnail</div>`;
    };
    
    // Start loading the thumbnail
    tempImg.src = getDirectLink(video.thumbnail);
    
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
  