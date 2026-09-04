/* =========================================================
   BRAIN KEY CENTER
   SCRIPT.JS COMPLET
========================================================= */

"use strict";


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    // Fermer le menu après avoir cliqué sur un lien
    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   HEADER AU SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   DONNÉES DES SERVICES
========================================================= */

const services = {

    formation: {

     title: "Formations & Cours",

        image: "images/OIP (1).webp",

        description:
            "Des formations pratiques et adaptées pour développer vos compétences, renforcer vos connaissances et vous aider à progresser dans votre parcours.",

        items: [
            "Formations spécialisées en psychologie",
            "Formations en développement personnel",
            "Life Coaching",
            "Coaching éducatif",
            "Intelligence émotionnelle",
            "Programmation Neuro-Linguistique (PNL)",
            "Communication efficace",
            "Gestion du temps et définition des objectifs",
            "Planification personnelle et professionnelle"
        ],

    },

   coaching: {

 

    title: "Consultations & Coaching",

    image: "images/coaching-coach-development-educating-guide-concept.jpg",

    description:
        "Un accompagnement personnalisé pour vous aider à définir vos objectifs, dépasser vos difficultés et construire un plan d'action.",

    approach:
        "Un accompagnement individuel basé sur l'écoute, l'analyse et la définition d'objectifs.",

    forWho:
        "Toute personne souhaitant évoluer personnellement ou professionnellement.",

    goal:
        "Clarifier votre vision et passer concrètement à l'action.",

    items: [
        "Consultations en coaching de santé",
        "Coaching familial et relationnel",
        "Coaching éducatif et scolaire",
        "Coaching pour enfants et adolescents",
        "Coaching professionnel et développement personnel",
        "Gestion du stress et développement de l'énergie positive"
    ]

},

    support: {

        
        title: "Accompagnement spécifique",

        image: "images/travailler_avec_autiste_0.jpg",

        description:
            "Un suivi personnalisé permettant de répondre aux besoins spécifiques de chaque personne.",

        approach:
            "Une prise en charge adaptée aux besoins et au rythme de chaque personne.",

        forWho:
            "Les personnes ayant besoin d'un accompagnement spécifique et personnalisé.",

        goal:
            "Favoriser la progression et développer les capacités individuelles.",
       
        items: [
        "Prise en charge éducative et psychologique",
        "Accompagnement des enfants présentant des troubles des apprentissages",
        "Troubles du spectre de l’autisme (TSA)",
        "Trisomie 21",
        "Trouble du déficit de l’attention avec ou sans hyperactivité (TDAH)",
        "Retard du langage et de la parole",
        "Difficultés et troubles des apprentissages",
        "Développement des compétences sensorielles et cognitives",
        "Accompagnement et orientation des parents"
    ]

    },


    workshops: {

        title: "Ateliers & Conférences",

        image: "images/Ateliers Conférences.jpg",

        description:
            "Des ateliers et conférences interactifs pour apprendre, échanger des idées et découvrir de nouvelles méthodes.",

        approach:
            "Des activités pratiques, participatives et orientées vers l'échange.",

        forWho:
            "Étudiants, professionnels, groupes et organisations.",

        goal:
            "Apprendre autrement et développer de nouvelles perspectives.",
            items: [
        "Ateliers de motivation, d’éducation et d’accompagnement familial",
        "Conférences sur le développement personnel et le bien-être psychologique"
    ]

    },

    languages: {


        title: "Langues étrangères",

        image: "images/langues-plus-parlees-au-monde-af7-1024x768.jpg",

        description:
            "Développez vos compétences linguistiques et améliorez votre communication grâce à un apprentissage adapté.",

        approach:
            "Un apprentissage progressif basé sur la pratique et la communication.",

        forWho:
            "Débutants, étudiants et professionnels souhaitant améliorer leur niveau.",

        goal:
            "Améliorer la compréhension, l'expression et la communication.",
items: [
        "Anglais",
        "Français",
        "Espagnol",
        "Allemand",
        "et bien d'autres",
        
    ]
    },
    

};


/* =========================================================
   ÉLÉMENTS DU MODAL
========================================================= */

const serviceModal =
    document.getElementById("serviceModal");

const serviceModalOverlay =
    document.getElementById("serviceModalOverlay");

const serviceModalClose =
    document.getElementById("serviceModalClose");

const modalImage =
    document.getElementById("modalImage");

const modalNumber =
    document.getElementById("modalNumber");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalItemsSection =
    document.getElementById("modalItemsSection");

const modalItems =
    document.getElementById("modalItems");

const modalApproach =
    document.getElementById("modalApproach");

const modalForWho =
    document.getElementById("modalForWho");

const modalGoal =
    document.getElementById("modalGoal");

const modalContact =
    document.getElementById("modalContact");


/* =========================================================
   OUVRIR LE MODAL
========================================================= */

const discoverButtons =
    document.querySelectorAll(".discover-btn");


discoverButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const serviceName =
            this.getAttribute("data-service");

        const service =
            services[serviceName];


        // Vérification
        if (!service) {

            console.error(
                "Service introuvable :",
                serviceName
            );

            return;

        }


        /* Remplir le contenu */

        if (modalNumber) {

            modalNumber.textContent =
                service.number;

        }


        if (modalLabel) {

            modalLabel.textContent =
                service.label;

        }


        if (modalTitle) {

            modalTitle.textContent =
                service.title;

        }


        if (modalDescription) {

            modalDescription.textContent =
                service.description;

        }


        /* Liste des formations */

        if (modalItems && modalItemsSection) {

            modalItems.innerHTML = "";

            if (Array.isArray(service.items) && service.items.length > 0) {

                service.items.forEach(item => {

                    const li = document.createElement("li");

                    li.textContent = item;

                    modalItems.appendChild(li);

                });

                modalItemsSection.hidden = false;

            } else {

                modalItemsSection.hidden = true;

            }

        }


        if (modalApproach) {

            modalApproach.textContent =
                service.approach;

        }


        if (modalForWho) {

            modalForWho.textContent =
                service.forWho;

        }


        if (modalGoal) {

            modalGoal.textContent =
                service.goal;

        }


        if (modalImage) {

            modalImage.src =
                service.image;

            modalImage.alt =
                service.title;

        }


        /* Ouvrir */

        if (serviceModal) {

            serviceModal.classList.add("active");

            serviceModal.setAttribute(
                "aria-hidden",
                "false"
            );

        }


        document.body.classList.add("modal-open");


        /* Remonter le scroll du modal */

        const modalBox =
            serviceModal?.querySelector(
                ".service-modal-box"
            );

        if (modalBox) {

            modalBox.scrollTop = 0;

        }

    });

});


/* =========================================================
   FERMER LE MODAL
========================================================= */

function closeServiceModal() {

    if (!serviceModal) return;


    serviceModal.classList.remove("active");

    serviceModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

}


/* Bouton X */

if (serviceModalClose) {

    serviceModalClose.addEventListener(
        "click",
        closeServiceModal
    );

}


/* Cliquer sur l'arrière-plan */

if (serviceModalOverlay) {

    serviceModalOverlay.addEventListener(
        "click",
        closeServiceModal
    );

}


/* =========================================================
   TOUCHE ESCAPE
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeServiceModal();

    }

});


/* =========================================================
   CONTACT DEPUIS LE MODAL 
========================================================= */

if (modalContact) {

    modalContact.addEventListener("click", () => {

        closeServiceModal();

    });

}


/* =========================================================
   GPS BRAIN KEY
========================================================= */

const gpsBtn =
    document.getElementById("gpsBtn");

const gpsMessage =
    document.getElementById("gpsMessage");


/* Localisation Brain Key */
const brainKeyLocation =
    "https://maps.app.goo.gl/aqZLBhT8vkwyXwQw6";


if (gpsBtn) {

    gpsBtn.addEventListener(
        "click",
        getUserLocation
    );

}


function getUserLocation() {

    /* Vérification */

    if (!navigator.geolocation) {

        gpsMessage.textContent =
            "❌ La géolocalisation n'est pas disponible.";

        return;

    }


    /* Chargement */

    gpsBtn.disabled = true;

    gpsMessage.textContent =
        "📡 Recherche de votre position...";


    /* GPS */

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            /*
             * Ouvrir Google Maps avec :
             * position actuelle → Brain Key
             */

            const directionsUrl =
                "https://www.google.com/maps/dir/?api=1" +
                "&origin=" +
                latitude +
                "," +
                longitude +
                "&destination=" +
                encodeURIComponent(
                    brainKeyLocation
                );


            gpsMessage.innerHTML = `

                📍 Position détectée

                <a
                    href="${directionsUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                        color:#f0c75e;
                        font-weight:700;
                        margin-left:8px;
                        text-decoration:none;
                    ">

                    Itinéraire vers Brain Key →

                </a>

            `;


            gpsBtn.disabled = false;

        },


        function(error) {

            let message =
                "❌ Impossible de récupérer votre position.";


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                message =
                    "❌ Autorisation GPS refusée.";

            }


            else if (
                error.code ===
                error.POSITION_UNAVAILABLE
            ) {

                message =
                    "❌ Position indisponible.";

            }


            else if (
                error.code ===
                error.TIMEOUT
            ) {

                message =
                    "❌ La recherche a expiré.";

            }


            gpsMessage.textContent =
                message;


            gpsBtn.disabled = false;

        },


        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }

    );

}


/* =========================================================
   ANIMATION AU SCROLL
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .advantage, .team-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {

                threshold: 0.15

            }

        );


    animatedElements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   LIENS INTERNES — SCROLL FLUIDE
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =========================================================
   ANNÉE AUTOMATIQUE
========================================================= */

const currentYear =
    new Date().getFullYear();

document.querySelectorAll(
    ".footer-bottom p"
).forEach(element => {

    element.innerHTML =
        element.innerHTML.replace(
            "2026",
            currentYear
        );

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "Brain Key Center — site chargé avec succès."
);