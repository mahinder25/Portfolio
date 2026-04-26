window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";

                // 🔥 Important: refresh GSAP after loader disappears
                if (typeof ScrollTrigger !== "undefined") {
                    ScrollTrigger.refresh();
                }

            }, 300); // match fade-out transition
        }, 1000);
    }
    const loaderContainer = document.getElementById("lottie-loader");

    const animation = lottie.loadAnimation({
        container: loaderContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./Loader.json"
    });

    // TEMP: keep loader visible for 3 seconds
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000);
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
                toggleActions: "play none none none",
                // markers:true,
            }
        });
    });

    // Big text animation
    document.querySelectorAll(".bigText").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 80%", toggleActions: "play none none none", // markers: true 
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    // Heading and subheading animation
    document.querySelectorAll(".heading").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play none none none",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });
    document.querySelectorAll(".subHeading").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play none none none",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    // Paragraph animation
    document.querySelectorAll(".para-reveal").forEach((text) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: text, start: "top 85%", toggleActions: "play none none none",// markers: true
            }
        }); tl.from(text.querySelector("span"), { y: "100%", duration: 1.1, ease: "power4.out" });
    });

    const myWorksLink = document.querySelector('a[href="#myworks"]');

    if (myWorksLink) {
        myWorksLink.addEventListener('click', function (e) {
            e.preventDefault();

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: "#myworks",
                    offsetY: 100
                },
                ease: "power2.out"
            });
        });
    }

    const contactLink = document.querySelector('a[href="#contact"]');

    if (contactLink) {
        contactLink.addEventListener('click', function (e) {
            e.preventDefault();

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: "#contact",
                    offsetY: 100
                },
                ease: "power2.out"
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("hamburgerBtn");
    const menu = document.querySelector('.mob_menu .mob_nav_menu');
    const links = document.querySelectorAll('.mob_nav_menu a');

    // ✅ Safety checks
    if (!menu) return;

    // Toggle button
    if (btn) {
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('active');

            if (icon) {
                icon.classList.toggle('bi-list');
                icon.classList.toggle('bi-x');
            }
        });
    }

    // Menu link click
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const target = this.getAttribute('href');

            if (target && target.startsWith("#")) {
                e.preventDefault();

                menu.classList.remove('active');

                setTimeout(() => {
                    gsap.to(window, {
                        duration: 0.7,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: "power2.out"
                    });
                }, 300);
            } else {
                menu.classList.remove('active');
            }
        });
    });

    // Click outside closes menu
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mob_menu')) {
            menu.classList.remove('active');
        }
    });

    // Lazy loading images
    document.querySelectorAll("img:not([loading])").forEach(img => {
        img.setAttribute("loading", "lazy");
    });

});
