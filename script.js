
// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top button
const topBtn = document.getElementById("topbtn");
window.addEventListener("scroll", () => {
	if (window.scrollY > 650) topBtn.classList.add("show");
	else topBtn.classList.remove("show");
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Active section highlight in nav
const sections = ["goal","economy","engineering","local","sources"].map(id => document.getElementById(id));
const links = [...document.querySelectorAll("#navlinks a")];

const obs = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;
		const id = entry.target.id;
		links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
	});
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach(s => obs.observe(s));
