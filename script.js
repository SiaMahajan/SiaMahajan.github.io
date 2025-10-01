.experience-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.experience-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}

.experience-logo {
  width: 50px;     /* adjust as needed */
  height: 50px;
  object-fit: contain;
  flex-shrink: 0;
}

.experience-content h3 {
  margin: 0 0 5px 0;
}

.experience-content p {
  margin: 5px 0;
}
document.addEventListener("DOMContentLoaded", function () {
   // Smooth Scrolling for all nav links
   document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         e.preventDefault();

         const headerOffset = document.querySelector("header").offsetHeight;
         const targetElement = document.querySelector(
            this.getAttribute("href")
         );
         const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - headerOffset - 20; // Adjust extra padding if needed

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
         });

         // If mobile nav is active, close it
         if (window.innerWidth <= 768) {
            document.getElementById("nav-menu").classList.remove("active");
         }
      });
   });

   // Hamburger Menu Toggle
   const menuToggle = document.getElementById("menu-toggle");
   const navMenu = document.getElementById("nav-menu");
   menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
   });

   // Dark Mode Toggle
   const darkModeToggle = document.getElementById("dark-mode-toggle");
   darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      // Toggle icon between moon and sun
      const icon = darkModeToggle.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
         icon.classList.remove("fa-moon");
         icon.classList.add("fa-sun");
      } else {
         icon.classList.remove("fa-sun");
         icon.classList.add("fa-moon");
      }
   });
});
