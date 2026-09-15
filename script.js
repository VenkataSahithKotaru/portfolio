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
       PROJECT DATA
    ========================================================= */

    const projects = {

        fleet: {
            number: "01",
            category: "FLEET & TRAVEL ANALYTICS",
            tools: "SQL · POWER BI · CANVA",
            title: "Fleet Operations & Travel Analytics",
            image: "assets/projects/project1.png",

            intro:
                "A data-driven fleet and travel analytics system designed to help a travel agency understand vehicle utilization, trip performance, revenue, expenses, fuel consumption and maintenance.",

            problem:
                "Balaji Travels operates a fleet of buses, cars, and tempos across multiple tourism routes. Over the past three years, the company has accumulated thousands of records related to customers, trips, vehicles, drivers, maintenance, fuel expenses, salaries, and payments.Although large volumes of operational data were available, management struggled to transform this information into meaningful business insights.Business decisions relied heavily on manual reports and spreadsheets, making it difficult to identify profitable routes, monitor vehicle performance, control operational costs, and improve overall profitability.",

            approach:
                "To overcome these challenges, this project develops a centralized Fleet Operations & Travel Analytics Platform using MySQL and Power BI, enabling management to monitor business performance through interactive dashboards and data-driven insights.",

            insights: "The business is currently operating at a net loss due to high operational expenses. Beach tourism generates the highest revenue among all tourism categories, while Force Traveller is the highest-performing vehicle based on revenue and utilization. High-value and repeat customers contribute significantly to overall business growth. Recovering pending payments and optimizing operational costs can further improve overall profitability.",

            technologies: [
                "SQL",
                "MySQL",
                "Power BI",
                "Reporting",
                "Dashboard"
            ],

            github:
                "https://github.com/VenkataSahithKotaru/fleet-operations-analytics-platform",

            live: "https://www.linkedin.com/feed/update/urn:li:activity:7478801714071068675/?originTrackingId=SfVrS0zDQtW5prKMW%2F7a9A%3D%3D"
        },


        gema: {
            number: "02",
            category: "DATA ANALYTICS",
            tools: "SQL · POWER BI · EXCEL",
            title: "GEMA Education Analytics Internship Project",
            image: "assets/projects/project2.jpg",

            intro:
                "An education analytics project focused on comparing competition registration and performance data across different periods.",

            problem:
                "The project involved understanding changes in registration patterns and identifying meaningful differences between the available competition datasets.",

            approach:
                "The datasets were cleaned, analyzed and transformed into meaningful metrics and visualizations for comparison.",

            insights:
                "The analysis highlighted changes in registrations, category-level performance and other important patterns within the competition data.",

            technologies: [
                "SQL",
                "Power BI",
                "Excel",
                "Data Cleaning",
                "Data Analysis"
            ],

            github: "https://github.com/VenkataSahithKotaru/GEMA-Competition-Registration-Analysis",
            live: "https://www.linkedin.com/in/venkata-sahith-kotaru-69b565327/recent-activity/all/"
        },


        student: {
            number: "03",
            category: "SQL ANALYSIS",
            tools: "SQL",
            title: "Student Engagement & Performance Analysis",
            image: "assets/projects/project3.jpg",

            intro:
                "A SQL-based analytical project exploring student engagement and performance using structured academic data.",

            problem:
                "The objective was to understand student performance patterns and identify relationships between engagement and academic outcomes.",

            approach:
                "SQL queries were used to filter, join, aggregate and analyze student-related data to answer analytical questions.",

            insights:
                "The analysis provides a structured view of student performance and engagement patterns that can support data-driven observations.",

            technologies: [
                "SQL",
                "MySQL",
                "Joins",
                "Aggregations",
                "CTEs"
            ],

            github: "https://github.com/VenkataSahithKotaru/E-Learning-Platform-Database-Analysis-using-SQL-",
            live: "#"
        },


        food: {
            number: "04",
            category: "SQL PROJECT",
            tools: "SQL · MYSQL",
            title: "Online Food Delivery System Analytics",
            image: "assets/projects/project4.jpg",

            intro:
                "A SQL analytics project built around an online food delivery system to explore orders, customers, restaurants and delivery-related information.",

            problem:
                "The project focused on extracting useful business information from operational food delivery data.",

            approach:
                "Relational data was analyzed using SQL queries involving filtering, joins, aggregations and analytical calculations.",

            insights:
                "The analysis helps understand order activity, customer behaviour, restaurant performance and other operational patterns.",

            technologies: [
                "SQL",
                "MySQL",
                "Joins",
                "Aggregations"
            ],

            github: "#",
            live: "#"
        },


        hospital: {
            number: "05",
            category: "DATABASE PROJECT",
            tools: "SQL · POWER BI",
            title: "Hospital Management System Analysis",
            image: "assets/projects/project5.jpg",

            intro:
                "A database-focused hospital management project designed to organize healthcare information and support analytical reporting.",

            problem:
                "The goal was to structure hospital-related information in a way that could support efficient management and analysis.",

            approach:
                "A relational database structure was designed and SQL was used to manage and analyze the stored information, with visualization used for reporting.",

            insights:
                "The project demonstrates how structured database systems can support healthcare data management and analytical reporting.",

            technologies: [
                "SQL",
                "MySQL",
                "Power BI",
                "Database Design"
            ],

            github: "#",
            live: "#"
        },


        lender: {
            number: "06",
            category: "MACHINE LEARNING",
            tools: "PYTHON · FLASK · XGBOOST",
            title: "Smart Lender: AI-Powered Loan Approval Prediction",
            image: "assets/projects/project6.jpg",

            intro:
                "An AI-powered web application that predicts whether a loan application is likely to be approved or rejected using machine learning.",

            problem:
                "Traditional loan assessment can involve multiple applicant attributes. The project explored how machine learning could assist in predicting loan approval outcomes.",

            approach:
                "Multiple machine learning models were explored, including Decision Tree, Random Forest, KNN and XGBoost. The selected model was integrated into a Flask web application for real-time predictions.",

            insights:
                "The project demonstrates an end-to-end machine learning workflow from applicant data and model training to deployment through a web interface.",

            technologies: [
                "Python",
                "Scikit-learn",
                "XGBoost",
                "Flask",
                "Machine Learning"
            ],

            github: "#",
            live: "#"
        }

    };


    /* =========================================================
       PROJECT ORDER
    ========================================================= */

    const projectOrder = [
        "fleet",
        "gema",
        "student",
        "food",
        "hospital",
        "lender"
    ];


    /* =========================================================
       CASE STUDY ELEMENTS
    ========================================================= */

    const caseStudy = document.getElementById("caseStudy");
    const backProjects = document.getElementById("backProjects");

    const caseImage = document.getElementById("caseImage");
    const caseNumber = document.getElementById("caseNumber");
    const caseCategory = document.getElementById("caseCategory");
    const caseTools = document.getElementById("caseTools");
    const caseTitle = document.getElementById("caseTitle");

    const caseIntro = document.getElementById("caseIntro");
    const caseProblem = document.getElementById("caseProblem");
    const caseApproach = document.getElementById("caseApproach");
    const caseInsights = document.getElementById("caseInsights");

    const caseTech = document.getElementById("caseTech");

    const caseGithub = document.getElementById("caseGithub");
    const caseLive = document.getElementById("caseLive");

    const previousProject = document.getElementById("previousProject");
    const nextProject = document.getElementById("nextProject");

    let currentProjectIndex = 0;


    /* =========================================================
       OPEN CASE STUDY
    ========================================================= */

    function openCaseStudy(projectId, imageFromCard = null) {

        if (!caseStudy) {
            console.error("ERROR: #caseStudy not found in HTML");
            return;
        }

        const project = projects[projectId];

        if (!project) {
            console.error("ERROR: Project not found:", projectId);
            return;
        }

        currentProjectIndex = projectOrder.indexOf(projectId);

        if (currentProjectIndex < 0) {
            currentProjectIndex = 0;
        }


        /* IMAGE */

        if (caseImage) {

            let finalImage = imageFromCard;

            if (!finalImage) {
                finalImage = project.image;
            }

            caseImage.style.display = "block";
            caseImage.src = finalImage;
            caseImage.alt = project.title;

            caseImage.onerror = function () {
                console.error("Image not found:", finalImage);
                this.style.display = "none";
            };

        }


        /* CONTENT */

        if (caseNumber)
            caseNumber.textContent = project.number;

        if (caseCategory)
            caseCategory.textContent = project.category;

        if (caseTools)
            caseTools.textContent = project.tools;

        if (caseTitle)
            caseTitle.textContent = project.title;

        if (caseIntro)
            caseIntro.textContent = project.intro;

        if (caseProblem)
            caseProblem.textContent = project.problem;

        if (caseApproach)
            caseApproach.textContent = project.approach;

        if (caseInsights)
            caseInsights.textContent = project.insights;


        /* TECHNOLOGIES */

        if (caseTech) {

            caseTech.innerHTML = "";

            project.technologies.forEach(technology => {

                const tag = document.createElement("span");

                tag.textContent = technology;

                caseTech.appendChild(tag);

            });

        }


        /* GITHUB */

        if (caseGithub) {

            caseGithub.href = project.github;

            if (project.github === "#") {
                caseGithub.onclick = event => {
                    event.preventDefault();
                };
            } else {
                caseGithub.onclick = null;
            }

        }


        /* LIVE DEMO */

        if (caseLive) {

            caseLive.href = project.live;

            if (project.live === "#") {
                caseLive.onclick = event => {
                    event.preventDefault();
                };
            } else {
                caseLive.onclick = null;
            }

        }


        /* OPEN */

        caseStudy.classList.add("active");

        document.body.classList.add("case-open");
        document.body.style.overflow = "hidden";

        caseStudy.scrollTop = 0;

    }


    /* =========================================================
       CLOSE CASE STUDY
    ========================================================= */

    function closeCaseStudy() {

        if (!caseStudy) return;

        caseStudy.classList.remove("active");

        document.body.classList.remove("case-open");
        document.body.style.overflow = "";

    }


    /* Make available for HTML onclick */

    window.openCaseStudy = openCaseStudy;
    window.closeCaseStudy = closeCaseStudy;


    /* =========================================================
       PROJECT CARD CLICK
    ========================================================= */

    const projectCards = document.querySelectorAll(
        ".featured-project, .project-row, .project-card"
    );

    projectCards.forEach(card => {

        card.addEventListener("click", event => {

            // Ignore normal links
            if (
                event.target.closest("a") &&
                !event.target.closest(".case-study-btn")
            ) {
                return;
            }

            const projectId = card.dataset.project;

            if (!projectId) {
                console.error(
                    "ERROR: Project card missing data-project",
                    card
                );
                return;
            }

            const cardImage = card.querySelector("img");

            const imageUrl = cardImage
                ? (cardImage.currentSrc || cardImage.src)
                : null;

            openCaseStudy(projectId, imageUrl);

        });

    });


    /* =========================================================
       EXPLORE CASE STUDY BUTTON
    ========================================================= */

    document.querySelectorAll(".case-study-btn").forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();
            event.stopPropagation();

            const card = button.closest(
                ".featured-project, .project-row, .project-card"
            );

            if (!card) {
                console.error(
                    "ERROR: Case study button is not inside a project card."
                );
                return;
            }

            const projectId = card.dataset.project;

            if (!projectId) {
                console.error(
                    "ERROR: Missing data-project on project card."
                );
                return;
            }

            const cardImage = card.querySelector("img");

            const imageUrl = cardImage
                ? (cardImage.currentSrc || cardImage.src)
                : null;

            openCaseStudy(projectId, imageUrl);

        });

    });


    /* =========================================================
       BACK TO PROJECTS
    ========================================================= */

    if (backProjects) {

        backProjects.addEventListener("click", event => {

            event.preventDefault();

            closeCaseStudy();

        });

    }


    /* =========================================================
       NEXT PROJECT
    ========================================================= */

    function showNextProject() {

        currentProjectIndex++;

        if (currentProjectIndex >= projectOrder.length) {
            currentProjectIndex = 0;
        }

        openCaseStudy(
            projectOrder[currentProjectIndex]
        );

    }

    if (nextProject) {

        nextProject.addEventListener("click", event => {

            event.preventDefault();

            showNextProject();

        });

    }


    /* =========================================================
       PREVIOUS PROJECT
    ========================================================= */

    function showPreviousProject() {

        currentProjectIndex--;

        if (currentProjectIndex < 0) {
            currentProjectIndex = projectOrder.length - 1;
        }

        openCaseStudy(
            projectOrder[currentProjectIndex]
        );

    }

    if (previousProject) {

        previousProject.addEventListener("click", event => {

            event.preventDefault();

            showPreviousProject();

        });

    }


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            caseStudy &&
            caseStudy.classList.contains("active")
        ) {
            closeCaseStudy();
        }

    });


    /* =========================================================
       ARROW KEY NAVIGATION
    ========================================================= */

    document.addEventListener("keydown", event => {

        if (
            !caseStudy ||
            !caseStudy.classList.contains("active")
        ) {
            return;
        }

        if (event.key === "ArrowRight") {
            showNextProject();
        }

        if (event.key === "ArrowLeft") {
            showPreviousProject();
        }

    });


    /* =========================================================
       CLICK OUTSIDE
    ========================================================= */

    if (caseStudy) {

        caseStudy.addEventListener("click", event => {

            if (event.target === caseStudy) {
                closeCaseStudy();
            }

        });

    }


    /* =========================================================
       DEBUG
    ========================================================= */

    console.log("Portfolio JavaScript loaded successfully.");
    console.log("Project cards found:", projectCards.length);
    console.log(
        "Case study buttons found:",
        document.querySelectorAll(".case-study-btn").length
    );

});


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