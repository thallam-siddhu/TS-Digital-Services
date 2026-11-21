/* =====================================
   TS DIGITAL SERVICES
   Main Application Script
===================================== */


/* =====================================
1. SERVICE DATABASE

   Add future services inside this list.
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
3. DISPLAY SERVICES (DIRECT LINKS)
===================================== */

function displayServices() {

    serviceGrid.innerHTML = "";

    serviceCount.textContent = String(services.length).padStart(2, "0");

    services.forEach((service, index) => {

        const card = document.createElement("a");

        card.className = "service-card";
        card.href = service.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.style.setProperty("--card-index", index);
        card.setAttribute("aria-label", `Open ${service.name}`);

        card.innerHTML = `
            <div class="service-icon">
                ${service.icon}
            </div>

            <h3>${service.name}</h3>

            <p>${service.description}</p>

            <div class="service-action">
                <span>Open Service</span>
                <span class="service-arrow">↗</span>
            </div>
        `;

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

brandHome.addEventListener("click", (event) => {

    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================
5. FOOTER YEAR
===================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =====================================
6. START APPLICATION
===================================== */

displayServices();