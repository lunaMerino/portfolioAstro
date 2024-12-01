/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BnAhzTqc.mjs';
import 'kleur/colors';
import { $ as $$Title, B as Button, a as $$Layout } from '../chunks/Button_DAxcrlVP.mjs';
export { renderers } from '../renderers.mjs';

const aboutMe = {
	name: "Luna",
	surname1: "García-Arcicóllar",
	surname2: "Merino",
	profession: "Desarrolladora Web",
	description: "Desarrolladora web apasionada que disfruta resolviendo problemas y creando soluciones innovadoras.",
	photo: "../../public/prohile.png"
};
const skills = {
	frontEnd: [
		{
			name: "HTML",
			image: "/../html.png",
			level: "Avanzado"
		},
		{
			name: "CSS",
			image: "../../public/css.png",
			level: "Avanzado"
		},
		{
			name: "JavaScript",
			image: "../../public/js.png",
			level: "Medio"
		},
		{
			name: "Astro",
			image: "../../public/astro.png",
			level: "Medio"
		},
		{
			name: "Figma",
			image: "../../public/figmaLogo.png",
			level: "Medio"
		}
	],
	backEnd: [
		{
			name: "Java",
			image: "../../public/java.png",
			level: "Medio"
		},
		{
			name: "Spring Boot",
			image: "../../public/springBoot.png",
			level: "Medio"
		},
		{
			name: "MySQL",
			image: "../../public/mySql.png",
			level: "Avanzado"
		}
	],
	devOps: [
		{
			name: "Azure",
			image: "../../public/azure.png",
			level: "Medio"
		},
		{
			name: "Git",
			image: "../../public/gitHub.png",
			level: "Medio"
		}
	]
};
const education = [
	{
		degree: "Desarrollo de Aplicaciones Web",
		institution: "Escuela Santa Joaquina de Vedruna",
		year: "2024"
	},
	{
		degree: "Certificado de Profesionalidad 'Programación de Sistemas Informáticos' IFCT 0609 (590 h.)",
		institution: "Junta de Andalucía",
		year: "2023"
	},
	{
		degree: "Grado en Antropología Social y Cultural",
		institution: "Universidad de Sevilla",
		year: "2022"
	}
];
const workExperience = [
	{
		role: "Programadora informática",
		company: "Ayuntamiento de Mairena del Alcor",
		years: "2022-2023",
		description: "Programa de Empleo y formación 'Programación de Sistemas Informáticos' IFC303_3"
	},
	{
		role: "Practicante de Desarrollo Web",
		company: "Hub Tecnológico de Sevilla",
		years: "2021-2022",
		description: "Experiencia práctica como parte del programa 'Desarrollo de Aplicaciones Web', centrado en la integración de front-end y back-end."
	}
];
const references = [
	{
		name: "Joaquín Borrego",
		contact: "joaquin.borrego@vedruna.es",
		relation: "Tutor Desarrollo de Aplicaciones Web"
	},
	{
		name: "Juan Antonio Gonzalez Diaz",
		contact: "juangd@yahoo.es",
		relation: "Tutor Programa de Empleo y Formación"
	}
];
const data = {
	aboutMe: aboutMe,
	skills: skills,
	education: education,
	workExperience: workExperience,
	references: references
};

const $$IndexEs = createComponent(($$result, $$props, $$slots) => {
  const { skills, education, workExperience, references } = data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es", "title": "Bienvenido a mi Portfolio", "class": "flex flex-column m-0 p-0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="about-me" class="flex flex-row h-screen mx-44"> <div class="flex flex-col"> <div class="h-1/3"></div> <div class="h-1/3 flex flex-col gap-4"> <h1 class="text-4xl font-poppins italic font-black text-color6 mt-6">${data.aboutMe.name}<br>${data.aboutMe.surname1}<br>${data.aboutMe.surname2}</h1> <h2 class="text-xl text-color3 font-poppins italic">${data.aboutMe.profession}</h2> </div> <div class="h-1/3"> <p class="text-lg text-blackish font-poppins italic">${data.aboutMe.description}</p> </div> </div> <img${addAttribute(`/images/${data.aboutMe.photo}`, "src")} alt="Foto de perfil" class="rounded-full mt-44 mr-10 w-80 h-80 shadow-2xl shadow-black"> </div> ${renderComponent($$result2, "Projects", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/components/Projects.jsx", "client:component-export": "default" })} <div id="skills" class="my-12"> ${renderComponent($$result2, "Title", $$Title, { "text": "Tecnolog\xEDas" })} <div class="grid grid-rows-3 gap-4 max-w-4xl mx-auto"> <div class="gap-4 w-full"> <h3 class="text-center font font-poppins italic text-xl font-bold mb-2">Back-end</h3> <div class="flex flex-row justify-center gap-4 mb-8"> ${skills.backEnd.map((skill) => renderTemplate`<div class="flex flex-col md:w-1/6 justify-center items-center gap-2 text-center bg-color3 text-whitish font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-color2 hover:drop-shadow-md hover:text-blackish hover:scale-110 transition"> <img${addAttribute(skill.image, "src")} class="w-8"${addAttribute(skill.name, "alt")}> <div class="text-xs"> ${skill.level} </div> </div>`)} </div> </div> <div class="gap-4 w-full"> <h3 class="text-center font font-poppins italic text-xl font-bold mb-2">Front-end</h3> <div class="flex flex-row justify-center gap-4 mb-8"> ${skills.frontEnd.map((skill) => renderTemplate`<div class="flex flex-col md:w-1/6 justify-center items-center gap-2 text-center bg-color3 text-whitish font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-color2 hover:drop-shadow-md hover:text-blackish hover:scale-110 transition"> <img${addAttribute(skill.image, "src")} class="w-8"${addAttribute(skill.name, "alt")}> <div class="text-xs"> ${skill.level} </div> </div>`)} </div> </div> <div class="gap-4 w-full"> <h3 class="text-center font font-poppins italic text-xl font-bold mb-2">DevOps</h3> <div class="flex flex-row justify-center gap-4 mb-8"> ${skills.devOps.map((skill) => renderTemplate`<div class="flex flex-col md:w-1/6 justify-center items-center gap-2 text-center bg-color3 text-whitish font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-color2 hover:drop-shadow-md hover:text-blackish hover:scale-110 transition"> <img${addAttribute(skill.image, "src")} class="w-8"${addAttribute(skill.name, "alt")}> <div class="text-xs"> ${skill.level} </div> </div>`)} </div> </div> </div> </div> <div id="resume" class="flex flex-row m-24"> <div id="education" class="my-12 p-4"> ${renderComponent($$result2, "Title", $$Title, { "text": "Educaci\xF3n" })} <div class="flex flex-col space-y-6 max-w-3xl mx-auto"> ${education.map((item) => renderTemplate`<div class="bg-color3 font-poppins italic p-6 rounded-lg shadow-lg hover:shadow-xl transition"> <h3 class="text-xl font-semibold underline text-blackish">${item.degree}</h3> <p class="font-poppins italic text-blackish">${item.institution}</p> <span class="text-sm font-poppins italic text-blackish">${item.year}</span> </div>`)} </div> </div> <div id="work-experience" class="my-12 p-4"> ${renderComponent($$result2, "Title", $$Title, { "text": "Experiencia Laboral" })} <div class="flex flex-col space-y-6 max-w-3xl mx-auto"> ${workExperience.map((job) => renderTemplate`<div class="bg-color3 p-6 rounded-lg shadow-lg hover:shadow-xl transition"> <h3 class="text-xl font-poppins italic font-semibold underline text-blackish">${job.role}</h3> <p class="font-poppins italic text-blackish">${job.company}</p> <span class="text-sm font-poppins italic text-blackish">${job.years}</span> <p class="mt-4 font-poppins italic text-blackish">${job.description}</p> </div>`)} </div> </div> </div> <div id="references" class="my-12"> ${renderComponent($$result2, "Title", $$Title, { "text": "Referencias" })} <div class="flex flex-row items-center justify-between max-w-3xl mx-auto"> ${references.map((ref) => renderTemplate`<div class="bg-color3 h-[140px] p-6 rounded-lg shadow-md hover:shadow-lg transition"> <h3 class="text-xl font-semibold font-poppins italic text-whitish mb-2">${ref.name}</h3> <p class="font-poppins italic text-whitish text-sm mb-3">${ref.relation}</p> <a${addAttribute(`mailto:${ref.contact}`, "href")} class="flex items-center gap-2 group text-s text-opacity-60 font-poppins italic text-whitish hover:text-black"> <img src="../../public/mail.png" alt="mail" class="w-7 h-7 transition-transform"> <span class="hover:underline group-hover:text-blackish text-sm">${ref.contact}</span> </a> </div>`)} </div> </div> <div id="contact"> <div id="contact" class="flex flex-col items-center justify-center mt-40 mb-20"> ${renderComponent($$result2, "Title", $$Title, { "text": "Contact me" })} <form action="mailto:marialuna.garcia-arcicollar@a.vedrunasevillasj.es" method="get" class="w-3/5 h-3/5 mt-2"> <fieldset class="p-4"> <div id="divName" class="flex flex-col mt-1"> <input type="text" id="inputName"${addAttribute(`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`, "class")} name="inputName" placeholder="Name" required> </div> <div id="divEmail" class="flex flex-col mt-1"> <input type="email" id="inputEmail"${addAttribute(`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`, "class")} name="inputEmail" placeholder="Email" required> </div> <div id="divMessage" class="flex flex-col mt-2"> <textarea id="message"${addAttribute(`border rounded-sm p-2 text-info bg-color2 placeholder:font-poppins placeholder:italic placeholder-color5`, "class")} name="message" rows="5" placeholder="Message" required></textarea> </div> <div class="flex mt-2"> ${renderComponent($$result2, "Button", Button, { "label": "Send Message", "onClick": () => {
  } })} </div> </fieldset> </form>  </div> </div> ` })} `;
}, "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/pages/indexEs.astro", void 0);

const $$file = "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/pages/indexEs.astro";
const $$url = "/indexEs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexEs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };