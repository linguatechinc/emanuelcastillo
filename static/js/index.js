const menuEl     = document.getElementById("menu");
const openBtn    = document.getElementById("btn_menu_id");
const closeBtn   = document.getElementById("close-menu-btn");
const ctaContact = document.getElementById("hero_contact_btn_id");
const showAllBtn = document.getElementById("show_all_about_btn_id");

function openMenu() {
    menuEl.style.left = "0";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menuEl.style.left = "-100vw";
    document.body.style.overflow = "";
}

openBtn .addEventListener("click", e => { e.preventDefault(); openMenu(); });
closeBtn.addEventListener("click", e => { e.preventDefault(); closeMenu(); });

function navTo(sectionId) {
    closeMenu();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("go_home_id")      .addEventListener("click", e => { e.preventDefault(); closeMenu(); window.scrollTo({ top: 0, behavior: "smooth" }); });
document.getElementById("go_about_id")     .addEventListener("click", e => { e.preventDefault(); navTo("about-section-id"); });
document.getElementById("go_milestones_id").addEventListener("click", e => { e.preventDefault(); navTo("milestones-section-id"); });
document.getElementById("go_contact_id")   .addEventListener("click", e => { e.preventDefault(); navTo("contact-section-id"); });

ctaContact.addEventListener("click", e => { e.preventDefault(); navTo("contact-section-id"); });

showAllBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const para = document.getElementById("description-second-paragraph");
    if (this.textContent === "Show All") {
        para.style.display = "block";
        this.textContent = "Show Less";
    } else {
        para.style.display = "none";
        this.textContent = "Show All";
    }
});
