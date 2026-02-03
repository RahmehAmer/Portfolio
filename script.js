// Portfolio JavaScript - Dynamic Content Loading and Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Load content from content.js
    loadPortfolioContent();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize header scroll behavior
    initHeaderScroll();
});

// Load portfolio content dynamically
function loadPortfolioContent() {
    // Load navigation
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && portfolioContent.navigation) {
        navMenu.innerHTML = portfolioContent.navigation.map(item => 
            `<li><a href="${item.href}">${item.name}</a></li>`
        ).join('');
    }

    // Load hero content
    const heroTitle = document.getElementById('hero-title');
    const heroName = document.getElementById('hero-name');
    const heroDescription = document.getElementById('hero-description');
    const heroCta = document.getElementById('hero-cta');

    if (heroTitle && portfolioContent.hero) {
        heroTitle.textContent = portfolioContent.hero.title;
    }
    if (heroName && portfolioContent.personal) {
        heroName.textContent = portfolioContent.personal.name;
    }
    if (heroDescription && portfolioContent.personal) {
        heroDescription.textContent = portfolioContent.hero.description;
    }
    if (heroCta && portfolioContent.hero.ctaButton) {
        heroCta.textContent = portfolioContent.hero.ctaButton.text;
        heroCta.href = portfolioContent.hero.ctaButton.href;
    }

    // Load about content
    const aboutTitle = document.getElementById('about-title');
    const aboutText = document.getElementById('about-text');

    if (aboutTitle && portfolioContent.about) {
        aboutTitle.textContent = portfolioContent.about.title;
    }
    if (aboutText && portfolioContent.about) {
        aboutText.textContent = portfolioContent.about.content;
    }

    // Load skills content
    const skillsTitle = document.getElementById('skills-title');
    const skillsList = document.getElementById('skills-list');

    if (skillsTitle && portfolioContent.skills) {
        skillsTitle.textContent = portfolioContent.skills.title;
    }
    if (skillsList && portfolioContent.skills.items) {
        skillsList.innerHTML = portfolioContent.skills.items.map((skill, index) => `
            <div class="skill-item" data-skill-index="${index}" data-image="${skill.image}">
                <div class="skill-name">${skill.name}</div>
            </div>
        `).join('');
        
        // Initialize scroll-triggered skills
        initSkillsScroll();
    }

    // Load projects content
    const projectsTitle = document.getElementById('projects-title');
    const projectsSubtitle = document.getElementById('projects-subtitle');
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsTitle && portfolioContent.projects) {
        projectsTitle.textContent = portfolioContent.projects.title;
    }
    if (projectsSubtitle && portfolioContent.projects) {
        projectsSubtitle.textContent = portfolioContent.projects.subtitle;
    }
    if (projectsGrid && portfolioContent.projects.items) {
        projectsGrid.innerHTML = portfolioContent.projects.items.map(project => `
            <a href="${project.link}" class="project-card" target="_blank">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display:none;">${project.title} Image</div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </div>
            </a>
        `).join('');
    }

    // Load education content
    const educationTitle = document.getElementById('education-title');
    const educationDegree = document.getElementById('education-degree');
    const educationUniversity = document.getElementById('education-university');
    const educationGpa = document.getElementById('education-gpa');

    if (educationTitle && portfolioContent.education) {
        educationTitle.textContent = portfolioContent.education.title;
    }
    if (educationDegree && portfolioContent.education) {
        educationDegree.textContent = portfolioContent.education.degree;
    }
    if (educationUniversity && portfolioContent.education) {
        educationUniversity.textContent = portfolioContent.education.university;
    }
    if (educationGpa && portfolioContent.education) {
        educationGpa.textContent = `GPA: ${portfolioContent.education.gpa}`;
    }

    // Load certificate content
    const certificateTitle = document.getElementById('certificate-title');
    const certificateInstitution = document.getElementById('certificate-institution');
    const certificateStatus = document.getElementById('certificate-status');

    if (certificateTitle && portfolioContent.education.certificate) {
        certificateTitle.textContent = portfolioContent.education.certificate.title;
    }
    if (certificateInstitution && portfolioContent.education.certificate) {
        certificateInstitution.textContent = portfolioContent.education.certificate.institution;
    }
    if (certificateStatus && portfolioContent.education.certificate) {
        certificateStatus.textContent = portfolioContent.education.certificate.status;
    }

    // Load contact content
    const contactTitle = document.getElementById('contact-title');
    const contactSubtitle = document.getElementById('contact-subtitle');
    const socialLinks = document.getElementById('social-links');

    if (contactTitle && portfolioContent.contact) {
        contactTitle.textContent = portfolioContent.contact.title;
    }
    if (contactSubtitle && portfolioContent.contact) {
        // Make WhatsApp and LinkedIn clickable in subtitle with larger icons, no text
        const subtitleText = portfolioContent.contact.subtitle;
        const clickableSubtitle = subtitleText
            .replace('WhatsApp', '<a href="https://wa.me/00962796421391" target="_blank" style="color: inherit; text-decoration: none; display: inline-flex; align-items: center; vertical-align: middle;"><svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.89-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>')
            .replace('LinkedIn', '<a href="https://www.linkedin.com/in/rahmeh-amer-1650776b" target="_blank" style="color: inherit; text-decoration: none; display: inline-flex; align-items: center; vertical-align: middle;"><svg width="28" height="28" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>');
        contactSubtitle.innerHTML = clickableSubtitle;
    }
    if (socialLinks && portfolioContent.contact.socialLinks) {
        socialLinks.innerHTML = portfolioContent.contact.socialLinks.map(link => 
            `<a href="${link.href}" target="_blank">${link.name}</a>`
        ).join('');
    }
}

// Initialize mobile navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                }
            });
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                });
            });
        });
    }

    // Update active navigation based on scroll position
    updateActiveNavigation();
    window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll(
        '.skill-category, .project-card, .education-card, .about-content'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroName = document.querySelector('.hero-name');
    if (heroName && portfolioContent.personal) {
        setTimeout(() => {
            typeWriter(heroName, portfolioContent.personal.name, 150);
        }, 500);
    }
});

// Add active navigation styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #000000;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Initialize header scroll behavior
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    if (header && hero) {
        window.addEventListener('scroll', function() {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition > heroBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Initialize scroll-triggered skills
function initSkillsScroll() {
    const skillsSection = document.querySelector('.skills');
    const skillItems = document.querySelectorAll('.skill-item');
    const imageContainer = document.getElementById('skill-image-container');
    let currentActiveIndex = 0;
    let isScrolling = false;
    let scrollTimeout;

    if (skillItems.length === 0 || !imageContainer || !skillsSection) return;

    // Preload all images
    const images = [];
    skillItems.forEach((item, index) => {
        const img = new Image();
        img.src = item.dataset.image;
        images.push(img);
    });

    // Handle wheel event for scroll-based image swapping
    skillsSection.addEventListener('wheel', function(e) {
        // Check if we're at boundaries and should allow page scrolling
        if (e.deltaY > 0 && currentActiveIndex >= skillItems.length - 1) {
            // At last skill, scrolling down - allow page scroll
            return;
        }
        if (e.deltaY < 0 && currentActiveIndex <= 0) {
            // At first skill, scrolling up - allow page scroll
            return;
        }
        
        e.preventDefault(); // Prevent actual page scrolling only when not at boundaries
        
        if (isScrolling) return; // Prevent rapid scrolling
        
        isScrolling = true;
        
        // Determine scroll direction
        if (e.deltaY > 0) {
            // Scroll down - next skill
            if (currentActiveIndex < skillItems.length - 1) {
                currentActiveIndex++;
            }
        } else {
            // Scroll up - previous skill
            if (currentActiveIndex > 0) {
                currentActiveIndex--;
            }
        }
        
        updateActiveSkill(currentActiveIndex);
        
        // Reset scrolling flag after animation
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 600);
    }, { passive: false });

    // Handle click events for manual selection
    skillItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentActiveIndex = index;
            updateActiveSkill(currentActiveIndex);
        });
    });

    // Initialize first skill as active
    updateActiveSkill(0);

    function updateActiveSkill(index) {
        // Remove active class from all items
        skillItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to current item
        skillItems[index].classList.add('active');
        
        // Update image with sliding animation
        updateSkillImageWithSlide(skillItems[index].dataset.image);
    }
}

// Update skill image with sliding animation
function updateSkillImageWithSlide(imageUrl) {
    const imageContainer = document.getElementById('skill-image-container');
    
    if (!imageContainer) return;

    // Find existing images
    const currentImage = imageContainer.querySelector('.skill-image.active');
    const placeholder = imageContainer.querySelector('.skill-image-placeholder');
    
    // Create new image element
    const newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.className = 'skill-image';
    newImage.alt = 'Skill visualization';
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'skill-image-overlay';
    
    // Hide placeholder if it exists
    if (placeholder) {
        placeholder.style.opacity = '0';
    }
    
    if (currentImage) {
        // Animate current image out upward
        currentImage.classList.remove('active');
        currentImage.classList.add('prev');
        
        // Add new image and animate in from bottom
        imageContainer.appendChild(newImage);
        imageContainer.appendChild(overlay);
        
        // Trigger animation
        setTimeout(() => {
            newImage.classList.add('active');
        }, 50);
        
        // Remove old image after animation
        setTimeout(() => {
            if (currentImage.parentNode) {
                currentImage.remove();
            }
        }, 600);
    } else {
        // First image - just add and animate in
        imageContainer.appendChild(newImage);
        imageContainer.appendChild(overlay);
        
        setTimeout(() => {
            newImage.classList.add('active');
        }, 50);
    }
}

// Update skill image with fade transition
function updateSkillImage(imageUrl) {
    const imageContainer = document.getElementById('skill-image-container');
    
    if (!imageContainer) return;

    // Create new image element
    const newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.className = 'skill-image';
    newImage.alt = 'Skill visualization';
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'skill-image-overlay';
    
    // Fade out current content
    const currentContent = imageContainer.querySelector('.skill-image') || 
                         imageContainer.querySelector('.skill-image-placeholder');
    
    if (currentContent) {
        currentContent.style.opacity = '0';
        currentContent.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            // Clear container and add new image
            imageContainer.innerHTML = '';
            imageContainer.appendChild(newImage);
            imageContainer.appendChild(overlay);
            
            // Fade in new image
            setTimeout(() => {
                newImage.classList.add('active');
            }, 50);
        }, 300);
    } else {
        // If no current content, add image immediately
        imageContainer.innerHTML = '';
        imageContainer.appendChild(newImage);
        imageContainer.appendChild(overlay);
        setTimeout(() => {
            newImage.classList.add('active');
        }, 50);
    }
}

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const contactSection = document.querySelector('.contact');
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in');
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (contactSection) {
        observer.observe(contactSection);
    }

    // Add scroll event listener for header hide/show
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    initNavigation();
    initSkillsScroll();
    initScrollAnimations();
});