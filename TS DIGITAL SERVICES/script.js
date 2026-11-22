
/* =====================================
   TS DIGITAL SERVICES
   Main Application Script
===================================== */


/* =====================================
   1. SERVICE DATABASE

   Add new services inside this list.
===================================== */

const services = [

    {
        id: "live-weather",
        name: "Live Weather",
        description: "Check real-time weather conditions and forecasts.",
        icon: "☀",
        url: "https://smart-weather-tau.vercel.app/"
    },

    {
        id: "calculator-pro",
        name: "Calculator Pro",
        description: "A convenient online calculator for everyday calculations.",
        icon: "⌗",
        url: "https://calculatorproject-psi.vercel.app/"
    },

    {
        id: "student-hub",
        name: "Student Hub",
        description: "Access student-related tools and educational services.",
        icon: "▤",
        url: "https://student-hub-psi-self.vercel.app/"
    }

];


/* =====================================
   2. HTML ELEMENTS
===================================== */

const serviceGrid = document.getElementById("serviceGrid");
const serviceCount = document.getElementById("serviceCount");
const brandHome = document.getElementById("brandHome");


/* =====================================
   3. DISPLAY SERVICES
===================================== */

function displayServices() {

    if (!serviceGrid || !serviceCount) {
        console.error("Service elements were not found.");
        return;
    }

    serviceGrid.innerHTML = "";

    serviceCount.textContent = String(services.length).padStart(2, "0");

    services.forEach((service, index) => {

        const card = document.createElement("a");

        card.className = "service-card";

        // Open in the same tab.
        // Browser Back button returns to TS Digital Services.
        card.href = service.url;
        card.target = "_self";
        card.rel = "noopener";

        card.style.setProperty("--card-index", index);

        card.setAttribute(
            "aria-label",
            `Open ${service.name}`
        );

        const icon = document.createElement("div");
        icon.className = "service-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = service.icon;

        const title = document.createElement("h3");
        title.textContent = service.name;

        const description = document.createElement("p");
        description.textContent = service.description;

        const action = document.createElement("div");
        action.className = "service-action";

        const actionText = document.createElement("span");
        actionText.textContent = "Open Service";

        const arrow = document.createElement("span");
        arrow.className = "service-arrow";
        arrow.textContent = "↗";
        arrow.setAttribute("aria-hidden", "true");

        action.appendChild(actionText);
        action.appendChild(arrow);

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(action);

        card.addEventListener("pointermove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--pointer-x", `${x}px`);
            card.style.setProperty("--pointer-y", `${y}px`);

        });

        serviceGrid.appendChild(card);

    });

}


/* =====================================
   4. LOGO CLICK
===================================== */

if (brandHome) {

    brandHome.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================
   5. FOOTER YEAR
===================================== */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =====================================
   6. START APPLICATION
===================================== */

displayServices();
