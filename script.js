document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }


    /* =========================================================
       NAVBAR SCROLL EFFECT
    ========================================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 40);
        });
    }


    /* =========================================================
       ACTIVE NAV LINK
    ========================================================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-links a");

    if (sections.length && navigationLinks.length) {

        const sectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navigationLinks.forEach(link => {
                            link.classList.remove("active");
                        });

                        const activeLink = document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                        if (activeLink) {
                            activeLink.classList.add("active");
                        }
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }


    /* =========================================================
       REVEAL ANIMATION
    ========================================================= */

    const revealElements = document.querySelectorAll(
        ".section-inner, .resume-inner, .contact-inner"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {
                return;
            }

            // Don't interfere with case-study controls
            if (
                this.classList.contains("case-study-btn") ||
                this.id === "backProjects" ||
                this.id === "previousProject" ||
                this.id === "nextProject"
            ) {
                return;
            }

            event.preventDefault();

            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });

        });

    });
/* =========================================================
   PROJECT CASE STUDIES
   =========================================================
   
   FLEET:
   - Existing Fleet case study
   - Fleet only uses JS

   OTHER PROJECTS:
   - GEMA
   - Hospital
   - Student
   - Food
   - Smart Lender

   Their complete content is in index.html.
   JS ONLY opens/closes the static HTML case studies.
   
   NO PROJECT DATA IN JS.
========================================================= */


/* =========================================================
   FLEET CASE STUDY
   ========================================================= */

const fleetCaseStudy =
    document.getElementById("caseStudy");

const backProjects =
    document.getElementById("backProjects");


/* =========================================================
   OPEN FLEET CASE STUDY
========================================================= */

function openFleetCaseStudy() {

    if (!fleetCaseStudy) {
        console.error("Fleet #caseStudy not found.");
        return;
    }

    fleetCaseStudy.classList.add("active");

    document.body.classList.add("case-open");

    document.body.style.overflow = "hidden";

    fleetCaseStudy.scrollTop = 0;

}


/* =========================================================
   CLOSE FLEET CASE STUDY
========================================================= */

function closeFleetCaseStudy() {

    if (!fleetCaseStudy) {
        return;
    }

    fleetCaseStudy.classList.remove("active");

    document.body.classList.remove("case-open");

    document.body.style.overflow = "";

}


/* =========================================================
   FLEET CARD CLICK
========================================================= */

const fleetCard =
    document.querySelector(
        '.featured-project[data-project="fleet"]'
    );


if (fleetCard) {

    fleetCard.addEventListener("click", event => {

        /*
         * If user clicks a normal external link,
         * don't open Fleet case study.
         */

        if (
            event.target.closest("a") &&
            !event.target.closest(".case-study-btn")
        ) {
            return;
        }

        openFleetCaseStudy();

    });

}


/* =========================================================
   FLEET — EXPLORE CASE STUDY BUTTON
========================================================= */

if (fleetCard) {

    const fleetButton =
        fleetCard.querySelector(".case-study-btn");

    if (fleetButton) {

        fleetButton.addEventListener("click", event => {

            event.preventDefault();

            event.stopPropagation();

            openFleetCaseStudy();

        });

    }

}


/* =========================================================
   FLEET — BACK TO PROJECTS
========================================================= */

if (backProjects) {

    backProjects.addEventListener("click", event => {

        event.preventDefault();

        closeFleetCaseStudy();

    });

}


/* =========================================================
   FLEET — ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") {
        return;
    }

    if (
        fleetCaseStudy &&
        fleetCaseStudy.classList.contains("active")
    ) {

        closeFleetCaseStudy();

    }

});


/* =========================================================
   FLEET — CLICK OUTSIDE
========================================================= */

if (fleetCaseStudy) {

    fleetCaseStudy.addEventListener("click", event => {

        if (event.target === fleetCaseStudy) {

            closeFleetCaseStudy();

        }

    });

}


/* =========================================================
   STATIC CASE STUDY OPEN FUNCTION
   =========================================================

   These projects already contain their complete
   case-study content inside index.html.

   JS only finds the section and adds "active".
========================================================= */

function openStaticCaseStudy(caseStudyId) {

    const caseStudy =
        document.getElementById(caseStudyId);

    if (!caseStudy) {

        console.error(
            "Static case study not found:",
            caseStudyId
        );

        return;

    }


    caseStudy.classList.add("active");

    document.body.classList.add("case-open");

    document.body.style.overflow = "hidden";

    caseStudy.scrollTop = 0;

}


/* =========================================================
   STATIC CASE STUDY CLOSE FUNCTION
========================================================= */

function closeStaticCaseStudy(caseStudy) {

    if (!caseStudy) {
        return;
    }

    caseStudy.classList.remove("active");

    document.body.classList.remove("case-open");

    document.body.style.overflow = "";

}


/* =========================================================
   OTHER PROJECT CARD CLICK
========================================================= */

const staticProjectCards =
    document.querySelectorAll(
        ".project-card[data-static-project]"
    );


staticProjectCards.forEach(card => {

    card.addEventListener("click", event => {

        /*
         * Don't open case study if user clicks
         * an external project link.
         */

        if (event.target.closest("a")) {
            return;
        }


        const caseStudyId =
            card.getAttribute("data-static-project");


        if (!caseStudyId) {
            return;
        }


        openStaticCaseStudy(caseStudyId);

    });

});


/* =========================================================
   STATIC CASE STUDY — BACK BUTTONS
========================================================= */

document
    .querySelectorAll(".back-static-projects")
    .forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            event.stopPropagation();


            const caseStudy =
                button.closest(".case-study");


            if (!caseStudy) {
                return;
            }


            closeStaticCaseStudy(caseStudy);

        });

    });


/* =========================================================
   STATIC CASE STUDIES — ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") {
        return;
    }


    const activeStaticCaseStudy =
        document.querySelector(
            ".case-study.active:not(#caseStudy)"
        );


    if (!activeStaticCaseStudy) {
        return;
    }


    closeStaticCaseStudy(
        activeStaticCaseStudy
    );

});


/* =========================================================
   STATIC CASE STUDIES — CLICK OUTSIDE
========================================================= */

document
    .querySelectorAll(
        ".case-study:not(#caseStudy)"
    )
    .forEach(caseStudy => {

        caseStudy.addEventListener(
            "click",
            event => {

                if (
                    event.target === caseStudy
                ) {

                    closeStaticCaseStudy(
                        caseStudy
                    );

                }

            }
        );

    });


/* =========================================================
   PROJECT DEBUG
========================================================= */

console.log(
    "Project navigation loaded successfully."
);

console.log(
    "Fleet card:",
    fleetCard ? "FOUND" : "NOT FOUND"
);

console.log(
    "Static project cards:",
    staticProjectCards.length
);

console.log(
    "Static case studies:",
    document.querySelectorAll(
        ".case-study:not(#caseStudy)"
    ).length
);


/* =========================================================
   ACHIEVEMENT PROOF LIGHTBOX
========================================================= */

function openProof(button) {

    const card = button.closest(".achievement-card");
    const image = card.querySelector("img");

    const lightbox = document.getElementById("proofLightbox");
    const proofImage = document.getElementById("proofImage");

    proofImage.src = image.src;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProof() {

    const lightbox =
        document.getElementById("proofLightbox");

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


/* Close when clicking outside image */

const proofLightbox =
    document.getElementById("proofLightbox");

if (proofLightbox) {

    proofLightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeProof();
            }

        }
    );

}


/* Close with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProof();
    }

});


/* =========================================================
   EVENTS & ACTIVITIES — EVENT STUDY
========================================================= */


const eventData = {

    technical: {

        number: "01",

        category: "TECHNICAL EVENTS",

        type: "Participation",

        title: "Technical Events",

        intro:
            "Participated in 3 technical events, gaining exposure to technical discussions, data analytics, and collaborative learning.",

        about:
            "Participated in three technical events as part of my academic and professional development. These included Dataverse and the Statistella Data Analytics Competition.",

        experience:
            "These events provided opportunities to interact with technical concepts, learn from sessions, participate in data-focused activities, and engage in collaborative learning.",

        proofs: [
            "assets/events/technical-event-1.jpg",
            "assets/events/technical-event-2.jpg",
            "assets/events/technical-event-3.jpg"
        ]

    },


    hackathon: {

        number: "02",

        category: "DATA SCIENCE HACKATHON",

        type: "Participation",

        title: "Kharagpur Data Science Hackathon",

        intro:
            "Participated in the Kharagpur Data Science Hackathon, applying data-driven thinking in a competitive problem-solving environment.",

        about:
            "Participated in a data science hackathon focused on solving practical problems using data and analytical thinking.",

        experience:
            "The experience helped strengthen problem-solving, analytical thinking, teamwork, and the ability to approach challenges using data.",

        proofs: [
            "assets/events/kharagpur-hackathon.jpg"
        ]

    },


    sql: {

        number: "03",

        category: "SQL CHALLENGE",

        type: "Challenge",

        title: "100 Query SQL Challenge",

        intro:
            "Successfully completed a 100-query SQL challenge to strengthen SQL query writing and database problem-solving skills.",

        about:
            "Completed a structured SQL challenge involving 100 queries and practical SQL problem-solving.",

        experience:
            "The challenge helped improve query construction, logical thinking, filtering, aggregation, joins, and overall SQL confidence.",

        proofs: [
            "assets/events/sql-challenge.jpg"
        ]

    },


    csp: {

        number: "04",

        category: "COMMUNITY SERVICE PROJECT",

        type: "Field Project",

        title: "Community Service Project",

        intro:
            "Completed a field-based Community Service Project on the use of chemicals on fruits and vegetables.",

        about:
            "The project involved studying the use of chemicals on fruits and vegetables through field visits, observations, and data collection.",

        experience:
            "The project provided practical exposure to field research, information gathering, observation, documentation, and community interaction.",

        proofs: [
            "assets/events/csp-1.jpg",
            "assets/events/csp-2.jpg",
            "assets/events/csp-3.jpg"
        ]

    }

};


/* =========================================================
   EVENT ORDER
========================================================= */

const eventOrder = [
    "technical",
    "hackathon",
    "sql",
    "csp"
];

let currentEventIndex = 0;


/* =========================================================
   EVENT ELEMENTS
========================================================= */

const eventStudy =
    document.getElementById("eventStudy");

const backEvents =
    document.getElementById("backEvents");

const eventNumber =
    document.getElementById("eventNumber");

const eventCategory =
    document.getElementById("eventCategory");

const eventType =
    document.getElementById("eventType");

const eventTitle =
    document.getElementById("eventTitle");

const eventIntro =
    document.getElementById("eventIntro");

const eventAbout =
    document.getElementById("eventAbout");

const eventExperience =
    document.getElementById("eventExperience");

const eventProofs =
    document.getElementById("eventProofs");

const previousEvent =
    document.getElementById("previousEvent");

const nextEvent =
    document.getElementById("nextEvent");


/* =========================================================
   OPEN EVENT STUDY
========================================================= */

function openEventStudy(eventId) {

    const event = eventData[eventId];

    if (!event || !eventStudy) {
        return;
    }


    currentEventIndex =
        eventOrder.indexOf(eventId);


    /* TEXT */

    if (eventNumber) {
        eventNumber.textContent =
            event.number;
    }

    if (eventCategory) {
        eventCategory.textContent =
            event.category;
    }

    if (eventType) {
        eventType.textContent =
            event.type;
    }

    if (eventTitle) {
        eventTitle.textContent =
            event.title;
    }

    if (eventIntro) {
        eventIntro.textContent =
            event.intro;
    }

    if (eventAbout) {
        eventAbout.textContent =
            event.about;
    }

    if (eventExperience) {
        eventExperience.textContent =
            event.experience;
    }


    /* PROOF IMAGES */

    if (eventProofs) {

        eventProofs.innerHTML = "";


        event.proofs.forEach(function (imagePath) {

            const image =
                document.createElement("img");

            image.src = imagePath;

            image.className =
                "event-proof";

            image.alt =
                event.title;


            image.addEventListener(
                "click",
                function (eventClick) {

                    eventClick.stopPropagation();

                    window.open(
                        imagePath,
                        "_blank"
                    );

                }
            );


            eventProofs.appendChild(image);

        });

    }


    /* SHOW EVENT STUDY */

    eventStudy.classList.add("active");

    document.body.style.overflow = "hidden";

    eventStudy.scrollTop = 0;

}


/* =========================================================
   CLOSE EVENT STUDY
========================================================= */

function closeEventStudy() {

    if (!eventStudy) {
        return;
    }

    eventStudy.classList.remove("active");

    document.body.style.overflow = "";

}


/* Make available if HTML needs it */

window.openEventStudy =
    openEventStudy;

window.closeEventStudy =
    closeEventStudy;


/* =========================================================
   EVENT CARD CLICK
========================================================= */

document
    .querySelectorAll(".event-card")
    .forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const eventId =
                    card.getAttribute("data-event");

                if (eventId) {

                    openEventStudy(
                        eventId
                    );

                }

            }
        );

    });


/* =========================================================
   BACK TO EVENTS
========================================================= */

if (backEvents) {

    backEvents.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            closeEventStudy();

        }
    );

}


/* =========================================================
   PREVIOUS EVENT
========================================================= */

if (previousEvent) {

    previousEvent.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            currentEventIndex--;


            if (currentEventIndex < 0) {

                currentEventIndex =
                    eventOrder.length - 1;

            }


            openEventStudy(
                eventOrder[currentEventIndex]
            );

        }
    );

}


/* =========================================================
   NEXT EVENT
========================================================= */

if (nextEvent) {

    nextEvent.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            currentEventIndex++;


            if (
                currentEventIndex >=
                eventOrder.length
            ) {

                currentEventIndex = 0;

            }


            openEventStudy(
                eventOrder[currentEventIndex]
            );

        }
    );

}


/* =========================================================
   EVENT KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !eventStudy ||
            !eventStudy.classList.contains("active")
        ) {
            return;
        }


        /* ESC */

        if (event.key === "Escape") {

            closeEventStudy();

            return;

        }


        /* LEFT */

        if (event.key === "ArrowLeft") {

            currentEventIndex--;


            if (currentEventIndex < 0) {

                currentEventIndex =
                    eventOrder.length - 1;

            }


            openEventStudy(
                eventOrder[currentEventIndex]
            );

        }


        /* RIGHT */

        if (event.key === "ArrowRight") {

            currentEventIndex++;


            if (
                currentEventIndex >=
                eventOrder.length
            ) {

                currentEventIndex = 0;

            }


            openEventStudy(
                eventOrder[currentEventIndex]
            );

        }

    }
    
);
/* ==========================================
   CERTIFICATION / CREDENTIAL DETAILS
=========================================== */

const credentialStudy = document.getElementById("credentialStudy");
const backCredentials = document.getElementById("backCredentials");

const credentialNumber = document.getElementById("credentialNumber");
const credentialCategory = document.getElementById("credentialCategory");
const credentialTitle = document.getElementById("credentialTitle");
const credentialIntro = document.getElementById("credentialIntro");
const credentialList = document.getElementById("credentialList");

const previousCredential =
    document.getElementById("previousCredential");

const nextCredential =
    document.getElementById("nextCredential");


const credentialData = {

    sql: {
        number: "01",
        category: "SQL CREDENTIALS",
        title: "SQL Certifications",
        intro:
            "Credentials that demonstrate my SQL knowledge, query writing and database problem-solving skills.",

        certificates: [

            {
                title: "Advanced SQL — HackerRank",
                description:
                    "Advanced SQL certification demonstrating proficiency in SQL concepts and problem solving.",
                link: "https://www.hackerrank.com/certificates/iframe/6e1aa0fb09ba"
            },

            {
                title: "Intermediate SQL — HackerRank",
                description:
                    "Intermediate SQL certification demonstrating proficiency in SQL concepts and problem solving.",
                link: "https://www.hackerrank.com/certificates/iframe/6641f3ac0a53"
            },

            {
                title: "Beginner SQL — HackerRank",
                description:
                    "Beginner SQL certification demonstrating proficiency in SQL concepts and problem solving.",
                link: "https://www.hackerrank.com/certificates/2a72ff2f5e6e"
            }

        ]
    },


    analytics: {
        number: "02",
        category: "DATA ANALYTICS",
        title: "Data Analytics Certifications",
        intro:
            "Credentials covering data analysis, visualization and business-oriented analytics.",

        certificates: [

            {
                title: "Data Analytics Essentials — Cisco",
                description:
                    "Credential focused on data analytics concepts and practical skills.",
                link: "https://www.credly.com/badges/a345df0a-3818-4a46-a6cd-611bf984f01a/public_url"
            },

            {
                title: "Data Science & Analytics — HP LIFE",
                description:
                    "Completed training in data science and analytics fundamentals.",
                link: "https://www.life-global.org/certificate/cbb310c6-161e-4fba-a051-df9df8aa7372"
            }

        ]
    },


    powerbi: {
        number: "03",
        category: "BUSINESS INTELLIGENCE",
        title: "Power BI Credentials",
        intro:
            "Credentials related to business intelligence, dashboards and data visualization.",

        certificates: [

            {
                title: "Power BI / Business Intelligence",
                description:
                    "Credential related to dashboard development and business intelligence.",
                link: "#"
            }

        ]
    },


    python: {
        number: "04",
        category: "PYTHON",
        title: "Python Credentials",
        intro:
            "Credentials supporting my Python learning and data analysis journey.",

        certificates: [

            {
                title: "Python — Skill India / NSDC",
                description:
                    "Completed Python-focused training through Skill India.",
                link: "#"
            }

        ]
    },


    simulations: {
        number: "05",
        category: "JOB SIMULATIONS",
        title: "Job Simulations",
        intro:
            "Practical job simulation experiences completed to understand real-world data and business workflows.",

        certificates: [

             {
                title: "Data Visualisation — Tata Group",
                description:
                    "Forage job simulation focused on data visualization and business insights.",
                link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_wt9ckjH8BrX2FFdxN_1739079876842_completion_certificate.pdf"
            },

        ]
    }

};


const credentialOrder = [
    "sql",
    "analytics",
    "powerbi",
    "python",
    "simulations"
];


let currentCredential = 0;


function openCredential(type) {

    const data = credentialData[type];

    if (!data) return;

    currentCredential = credentialOrder.indexOf(type);

    credentialNumber.textContent = data.number;
    credentialCategory.textContent = data.category;
    credentialTitle.textContent = data.title;
    credentialIntro.textContent = data.intro;

    credentialList.innerHTML = "";

    data.certificates.forEach((certificate, index) => {

        const item = document.createElement("div");

        item.className = "credential-item";

        item.innerHTML = `
            <span class="credential-item-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="credential-item-info">

                <h3>${certificate.title}</h3>

                <p>
                    ${certificate.description}
                </p>

            </div>

            <a
                href="${certificate.link}"
                class="credential-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Certificate ↗
            </a>
        `;

        credentialList.appendChild(item);

    });


    credentialStudy.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeCredential() {

    credentialStudy.classList.remove("active");

    document.body.style.overflow = "";

}


function showCredential(index) {

    if (index < 0) {
        index = credentialOrder.length - 1;
    }

    if (index >= credentialOrder.length) {
        index = 0;
    }

    currentCredential = index;

    openCredential(credentialOrder[currentCredential]);

}


/* CARD CLICK */

document.querySelectorAll(".certificate-card").forEach(card => {

    card.addEventListener("click", function(event) {

        /*
         * If user clicks an existing link inside the card,
         * don't open the detail page.
         */

        if (event.target.closest("a")) {
            return;
        }

        const type = this.dataset.cert;

        openCredential(type);

    });

});


/* BACK */

backCredentials.addEventListener("click", closeCredential);


/* PREVIOUS */

previousCredential.addEventListener("click", function() {

    showCredential(currentCredential - 1);

});


/* NEXT */

nextCredential.addEventListener("click", function() {

    showCredential(currentCredential + 1);

});


/* ESC */

document.addEventListener("keydown", function(event) {

    if (!credentialStudy.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeCredential();
    }

    if (event.key === "ArrowLeft") {
        showCredential(currentCredential - 1);
    }

    if (event.key === "ArrowRight") {
        showCredential(currentCredential + 1);
    }

});

/* =========================================================
   EVENT DEBUG
========================================================= */

console.log(
    "Events & Activities loaded successfully."
);

console.log(
    "Event cards found:",
    document.querySelectorAll(".event-card").length
);
});