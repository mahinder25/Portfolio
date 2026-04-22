window.addEventListener("load", () => {

    // ✅ AOS (only if loaded)
    if (typeof AOS !== "undefined") {
        AOS.init();
    }

    // ✅ GSAP plugins (only if available)
    if (
        document.querySelector("#smooth-wrapper") &&
        typeof ScrollSmoother !== "undefined"
    ) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            ignoreMobileResize: true,
        });

        ScrollTrigger.refresh();
    }

    // Home page card animation
    gsap.utils.toArray(".card-reveal").forEach((card) => {
        gsap.from(card, {
            y: 120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
                // markers:true,
            }
        });
    });

    // Big text animation
    document.querySelectorAll(".bigText").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 80%", toggleActions: "play reverse play reverse", // markers: true 
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    // Heading and subheading animation
    document.querySelectorAll(".heading").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play reverse play reverse",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });
    document.querySelectorAll(".subHeading").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play reverse play reverse",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    // Paragraph animation
    document.querySelectorAll(".para-reveal").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play reverse play reverse",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    document.querySelector('a[href="#myworks"]').addEventListener('click', function (e) {
        e.preventDefault();

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#myworks",
                offsetY: 100 // adjust based on navbar height
            },
            ease: "power2.out"
        });
    });
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#contact",
                offsetY: 100 // adjust based on navbar height
            },
            ease: "power2.out"
        });
    });
});

// Mobile Navigation Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("hamburgerBtn");
    const menu = document.querySelector('.mob_menu .mob_nav_menu');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');

        // Toggle icon
        if (menu.classList.contains('active')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x');
        } else {
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });
});

const menu = document.querySelector('.mob_menu .mob_nav_menu');
const links = document.querySelectorAll('.mob_nav_menu a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        // Only handle internal links
        if (target.startsWith("#")) {
            e.preventDefault();

            // 1️⃣ Close menu FIRST
            menu.classList.remove('active');

            // 2️⃣ Wait for menu close animation (if any)
            setTimeout(() => {
                gsap.to(window, {
                    duration: 0.7,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power2.out"
                });
            }, 300); // match your menu animation time
        } else {
            // For normal pages like /about.html
            menu.classList.remove('active');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.mob_menu')) {
        menu.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img:not([loading])").forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});