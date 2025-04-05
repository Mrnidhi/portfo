// Helper function to convert a Google Drive link to a direct image URL
function getDirectLink(url) {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url;
  }
  
  // Data arrays for the portfolio sections
  
  // Photography items (Photo 1, Photo 2, …)
  const photos = [
    { title: "Photo 1", url: "https://drive.google.com/file/d/1RDnSun2OKFMCnvL8R5c9EFldRE1awsYd/view?usp=sharing" },
    { title: "Photo 2", url: "https://drive.google.com/file/d/1R1D0pOgf0lLY_D79mvW5xYcSHUuCofGX/view?usp=sharing" },
    { title: "Photo 3", url: "https://drive.google.com/file/d/1R2TOJ8pNNfKYEN0MSQ1pUF_CNmed-4d6/view?usp=sharing" },
    { title: "Photo 4", url: "https://drive.google.com/file/d/1Qh3cUl0kccKFEecqSPi_C88jhOIBbRQY/view?usp=sharing" },
    { title: "Photo 5", url: "https://drive.google.com/file/d/1RWYyMB7FKTmrePZuCtL9H1T5UYC72Q9S/view?usp=sharing" },
    { title: "Photo 6", url: "https://drive.google.com/file/d/1QW5uAeCXt2QGHU-Yv7TdCdN4YAfaSkqe/view?usp=sharing" },
    { title: "Photo 7", url: "https://drive.google.com/file/d/1QNTiH4YyuZGpgXyZaXCi2mUrSr75lxLk/view?usp=sharing" },
    { title: "Photo 8", url: "https://drive.google.com/file/d/1QfdvZz6cw6-BX3gImx73ozls-FA4jaJH/view?usp=sharing" },
    { title: "Photo 9", url: "https://drive.google.com/file/d/1QvptH7GEFuYs9579x66wgE4aTndrtgwB/view?usp=sharing" },
    { title: "Photo 10", url: "https://drive.google.com/file/d/1RKj3vX6PpecVd1NfAdHZmpr74r4TCjeb/view?usp=sharing" },
    { title: "Photo 11", url: "https://drive.google.com/file/d/1QKm96SE7qjpYJTcDZZUES384F8A99cNE/view?usp=sharing" },
    { title: "Photo 12", url: "https://drive.google.com/file/d/1RMWTJaNR60NbG8S15wBH2r7WikTOgMpa/view?usp=sharing" },
    { title: "Photo 13", url: "https://drive.google.com/file/d/1QYKJRHUyShrfwgHnuM21cEuwd4gccMnX/view?usp=sharing" },
    { title: "Photo 14", url: "https://drive.google.com/file/d/1QUlWySKAF_S3p3V_9nrAy5R3jZDseKbh/view?usp=sharing" },
    { title: "Photo 15", url: "https://drive.google.com/file/d/1R97Uj7DPblwnb5k28bYxaSD2aM3DIde3/view?usp=sharing" },
    { title: "Photo 16", url: "https://drive.google.com/file/d/1Qika9tOCNwbzOYFPF-ABftWIra6Z8zob/view?usp=sharing" },
    { title: "Photo 17", url: "https://drive.google.com/file/d/1RKheUiGQEiyQJOtqI-tqDQcTwdp77bCA/view?usp=sharing" },
    { title: "Photo 18", url: "https://drive.google.com/file/d/1R3G40PkRbTdX05TOYtNTnhVt3e52XyU2/view?usp=sharing" }
  ];
  
  // Poster items (Poster 1, Poster 2, …)
  const posters = [
    { title: "Poster 1", url: "https://drive.google.com/file/d/1TY4pTWWu2hDVF35VCNO8E3KJ98HuzKvF/view?usp=sharing" },
    { title: "Poster 2", url: "https://drive.google.com/file/d/1ShNJb3fuLmV1E7-xrNBpw4Ms0laL3B_G/view?usp=sharing" },
    { title: "Poster 3", url: "https://drive.google.com/file/d/1SmLyTYzAzbykGmAuObzswJkW3Mfetcxg/view?usp=sharing" },
    { title: "Poster 4", url: "https://drive.google.com/file/d/1SX-oULqD55nGNLEpY--P49ARVOfAK1vM/view?usp=sharing" },
    { title: "Poster 5", url: "https://drive.google.com/file/d/1Tdzk7eGm-klR-K5X5_-FlV-wPrS3_M3G/view?usp=sharing" },
    { title: "Poster 6", url: "https://drive.google.com/file/d/1U0WllD2X_Wm9GQ1r-IhTahujTb_ySUkn/view?usp=sharing" },
    { title: "Poster 7", url: "https://drive.google.com/file/d/1SXgXXwqugtfOuvmKWa1v1-ofJU1OG8Zo/view?usp=sharing" },
    { title: "Poster 8", url: "https://drive.google.com/file/d/1St5ROAmf3XYhjO9naTLnNpoFJEknA8s2/view?usp=sharing" },
    { title: "Poster 9", url: "https://drive.google.com/file/d/1TsE59PsJxg3arXGM71Ji174nkXJ_Riyz/view?usp=sharing" },
    { title: "Poster 10", url: "https://drive.google.com/file/d/1TVJcttjpBRDSYmSlvRjbOUqogivvpBT3/view?usp=sharing" },
    { title: "Poster 11", url: "https://drive.google.com/file/d/1SmP5MrzUA9aI2yMwHxztDN1DAWc5eIht/view?usp=sharing" },
    { title: "Poster 12", url: "https://drive.google.com/file/d/1SR14ylOCK2zb6qOVnY0Jw6cAUVQ_GL4f/view?usp=sharing" },
    { title: "Poster 13", url: "https://drive.google.com/file/d/1ShJNDbHtve-JnNDLkr4Na8gThy_8jTf-/view?usp=sharing" },
    { title: "Poster 14", url: "https://drive.google.com/file/d/1Ss_2BA2KlumOmOOq9hvOK_aZqLm7DTd5/view?usp=sharing" },
    { title: "Poster 15", url: "https://drive.google.com/file/d/1SHTwZtq1h9-Xla42m5m5FTQn2mmhvkpl/view?usp=sharing" },
    { title: "Poster 16", url: "https://drive.google.com/file/d/1TgbNjSjkj6eIARCpk2FATwKQx0SIPoJ-/view?usp=sharing" },
    { title: "Poster 17", url: "https://drive.google.com/file/d/1Tr_hMpKC5ShksyZ8UYsw4BzXbEy4IhR0/view?usp=sharing" },
    { title: "Poster 18", url: "https://drive.google.com/file/d/1T55fOoH3KWzfus3RJr42La7sp-K2A7Qr/view?usp=sharing" },
    { title: "Poster 19", url: "https://drive.google.com/file/d/1THGBanNmuK7LAhpUrejKVIzmk2KTzWVw/view?usp=sharing" },
    { title: "Poster 20", url: "https://drive.google.com/file/d/1Tj9NJnxsfthMEhroe4QtySuxuW9im9wy/view?usp=sharing" },
    { title: "Poster 21", url: "https://drive.google.com/file/d/1TgHj1BfX50nJE935evou4hNv7qH91aWG/view?usp=sharing" },
    { title: "Poster 22", url: "https://drive.google.com/file/d/1TfP1KdLwsEjWkB4XyEtI6kjx8uS_Q3lV/view?usp=sharing" },
    { title: "Poster 23", url: "https://drive.google.com/file/d/1TZtzwQtfd6nnXccxOPyeXsED86MzkE6u/view?usp=sharing" },
    { title: "Poster 24", url: "https://drive.google.com/file/d/1SY6ghjTI6vho5PZX9LXulHQp5S9C_gzi/view?usp=sharing" },
    { title: "Poster 25", url: "https://drive.google.com/file/d/1TdHnamcr4GqUfIZqilejpOGBdZ7Exu5Z/view?usp=sharing" },
    { title: "Poster 26", url: "https://drive.google.com/file/d/1Ttt6xz7-rJRgUx4hnSqg6T4npefAmgI5/view?usp=sharing" },
    { title: "Poster 27", url: "https://drive.google.com/file/d/1T6dq7BXiq865BIa7HP2cviLb4SZ5A2qH/view?usp=sharing" }
  ];
  
  // Cinematography / Video items
  const videos = [
    {
      title: "Bird Capture",
      videoSrc: "https://player.vimeo.com/video/1072700168?h=f8bcd08d19",
      thumbnail: "https://drive.google.com/file/d/1RTHuupw0lsNmgkGulR2qX2IvbFJmuWBx/view?usp=sharing"
    },
    {
      title: "Lola cute reel",
      videoSrc: "https://player.vimeo.com/video/1072700174?h=2ea0fb956a",
      thumbnail: "https://drive.google.com/file/d/1S1tfpCMa1Y9qZ0m47B8e3FQijQUMdkif/view?usp=sharing"
    },
    {
      title: "Jnana Cauvery college event",
      videoSrc: "https://player.vimeo.com/video/1072700186?h=cc8418b575",
      thumbnail: "https://drive.google.com/file/d/1Rmd_88IcQgXdO7b3ZAErUAKNBPO-KA3V/view?usp=sharing"
    },
    {
      title: "Jnana Cauvery logo launch event",
      videoSrc: "https://player.vimeo.com/video/1072700193?h=dfbf09124e",
      thumbnail: "https://drive.google.com/file/d/1RbYupji-yu0MzXJa5P3uChtAVL5hB-wu/view?usp=sharing"
    },
    {
      title: "PESCO bike stunt event",
      videoSrc: "https://player.vimeo.com/video/1072700200?h=0218dd1018",
      thumbnail: "https://drive.google.com/file/d/1RzQjGR-N-4YR-hXzRnG_qxVdDGi3Hi75/view?usp=sharing"
    },
    {
      title: "PES Electrical department",
      videoSrc: "https://player.vimeo.com/video/1072700205?h=ee89663249",
      thumbnail: "https://drive.google.com/file/d/1RVllG0kincokjfuGwlvb9julYoWPYpbR/view?usp=sharing"
    },
    {
      title: "Ethnic day event",
      videoSrc: "https://player.vimeo.com/video/1072700213?h=3f82b593cd",
      thumbnail: "https://drive.google.com/file/d/1QiMjeoaPiR0pPvJJwpoB2S47AmQJt018/view?usp=sharing"
    },
    {
      title: "Kings coffee promotional video",
      videoSrc: "https://player.vimeo.com/video/1072700220?h=38f2e053f5",
      thumbnail: "https://drive.google.com/file/d/1R8074im1eg_vcmgh5d2WmUDoQ0JYHXhu/view?usp=sharing"
    },
    {
      title: "Jnana Cauvery logo",
      videoSrc: "https://player.vimeo.com/video/1072700260?h=096324d4bd",
      thumbnail: "https://drive.google.com/file/d/1RfGkTnbwMpD5KSoESCsJknQIO779cIk2/view?usp=sharing"
    },
    {
      title: "Coorg cinematic reel",
      videoSrc: "https://player.vimeo.com/video/1072700265?h=822b06e344",
      thumbnail: "https://drive.google.com/file/d/1Rg0cpUBuuocuF9gUL6ZYZF1yxlk5hIzb/view?usp=sharing"
    },
    {
      title: "Promotional video",
      videoSrc: "https://player.vimeo.com/video/1072700279?h=645af8094b",
      thumbnail: "https://drive.google.com/file/d/1RdTu8c01c4rioEpCqba_h4bsC0k_tflL/view?usp=sharing"
    },
    {
      title: "Pre-wedding video palace",
      videoSrc: "https://player.vimeo.com/video/1072700291?h=73ea988df6",
      thumbnail: "https://drive.google.com/file/d/1RlVgeMte0tfp5c5NaGDu9R1hTklwd_t3/view?usp=sharing"
    },
    {
      title: "Pre-Wedding video beach",
      videoSrc: "https://player.vimeo.com/video/1072700300?h=9f6d796a5e",
      thumbnail: "https://drive.google.com/file/d/1RMY3LczK2Zzelr4R83e6TLxvdrpt5jpU/view?usp=sharing"
    },
    {
      title: "Documentary video",
      videoSrc: "https://player.vimeo.com/video/1072700308?h=5b766692eb",
      thumbnail: "https://drive.google.com/file/d/1QJ2T7HeJ8ZpywG80i0Iy2ErYp-7hGnP6/view?usp=sharing"
    },
    {
      title: "PESCO Event video frames",
      videoSrc: "https://player.vimeo.com/video/1072700316?h=768ad89167",
      thumbnail: "https://drive.google.com/file/d/1Rw-dN1hLXoh-QtLN9wzapNSC3je6dkT0/view?usp=sharing"
    }
  ];
  
  // Function to create grid items for images
  function createImageItem(item) {
    const div = document.createElement("div");
    div.className = "grid-item";
    const img = document.createElement("img");
    img.alt = item.title;
    img.src = getDirectLink(item.url);
    div.appendChild(img);
    return div;
  }
  
  // Function to create grid items for video thumbnails
  function createVideoItem(video) {
    const div = document.createElement("div");
    div.className = "grid-item video-item";
    const img = document.createElement("img");
    img.alt = video.title;
    img.src = getDirectLink(video.thumbnail);
    div.appendChild(img);
    // When a video thumbnail is clicked, open the modal with the video embed.
    div.addEventListener("click", () => {
      openVideoModal(video.videoSrc);
    });
    return div;
  }
  
  // Populate the photography grid
  const photoGrid = document.getElementById("photoGrid");
  photos.forEach(photo => {
    photoGrid.appendChild(createImageItem(photo));
  });
  
  // Populate the poster grid
  const posterGrid = document.getElementById("posterGrid");
  posters.forEach(poster => {
    posterGrid.appendChild(createImageItem(poster));
  });
  
  // Populate the video grid
  const videoGrid = document.getElementById("videoGrid");
  videos.forEach(video => {
    videoGrid.appendChild(createVideoItem(video));
  });
  
  // Modal functionality for video playback
  const modal = document.getElementById("videoModal");
  const modalContent = document.getElementById("videoPlayerContainer");
  const closeBtn = document.querySelector(".close");
  
  function openVideoModal(videoSrc) {
    // Set the iframe embed code inside the modal.
    modalContent.innerHTML = `<iframe title="vimeo-player" src="${videoSrc}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    modal.style.display = "block";
  }
  
  // Close modal when clicking on the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  });
  
  // Also close modal if the user clicks outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modalContent.innerHTML = "";
    }
  });
  
  // Preloader
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
  });
  
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference
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
    if (body.getAttribute('data-theme') === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
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
  
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
  
  // Active navigation link on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
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
  
  // Skills Data
  const skills = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-database', name: 'SQL' },
    { icon: 'fab fa-git-alt', name: 'Git' }
  ];
  
  // Populate Skills Grid
  const skillsGrid = document.querySelector('.skills-grid');
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
      <i class="${skill.icon}"></i>
      <h3>${skill.name}</h3>
    `;
    skillsGrid.appendChild(skillCard);
  });
  
  // Projects Data
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://via.placeholder.com/350x280',
      description: 'A full-featured e-commerce platform with payment integration.'
    },
    {
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://via.placeholder.com/350x280',
      description: 'A mobile application for managing tasks and projects.'
    },
    {
      title: 'Portfolio Website',
      category: 'design',
      image: 'https://via.placeholder.com/350x280',
      description: 'A modern and responsive portfolio website design.'
    }
  ];
  
  // Populate Projects Gallery
  const projectGallery = document.querySelector('.project-gallery');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  function displayProjects(category = 'all') {
    projectGallery.innerHTML = '';
    const filteredProjects = category === 'all' 
      ? projects 
      : projects.filter(project => project.category === category);
  
    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="#" class="project-link">View Project</a>
        </div>
      `;
      projectGallery.appendChild(projectCard);
    });
  }
  
  // Project Filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      displayProjects(button.dataset.filter);
    });
  });
  
  // Initialize projects display
  displayProjects();
  
  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  
  function showSlide(index) {
    testimonialSlides.forEach(slide => {
      slide.style.display = 'none';
    });
    testimonialSlides[index].style.display = 'block';
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    showSlide(currentSlide);
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Initialize testimonial slider
  showSlide(currentSlide);
  
  // Form Submission
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
  
  // Initialize Lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Image %1 of %2'
  });
  