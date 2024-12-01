import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderSlot, a as renderComponent, f as createAstro } from './astro/server_BnAhzTqc.mjs';
import 'kleur/colors';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import 'react';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-color3 text-whitish py-4"> <div class="container mx-auto text-center"> <p class="text-sm">
Copyright © ${currentYear} | LGM
</p> </div> </footer>`;
}, "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, lang } = Astro2.props;
  const otherLang = lang === "en" ? "/indexEs" : "/";
  const otherLangText = lang === "en" ? "Espa\xF1ol" : "English";
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title ? title : "Mi Portfolio"}</title><link href="/styles/global.css" rel="stylesheet">${renderHead()}</head> <body class="bg-color1 shadow-lg shadow-opacity-100"> <div class="flex min-h-screen"> <header class="bg-color3 text-whitish h-screen w-1/5 fixed shadow-black shadow-xl"> <nav class="h-screen flex flex-col justify-between"> <div class="flex flex-col"> <div class="mt-28"> <ul class="flex flex-col gap-8 pl-12 mt-4"> <li><a href="#about-me" class="font-poppins italic text-xl hover:underline hover:text-blackish">My self</a></li> <li><a href="#projects" class="font-poppins italic text-xl hover:underline hover:text-blackish">My Work</a></li> <li><a href="#resume" class="font-poppins italic text-xl hover:underline hover:text-blackish">My resumé</a></li> </ul> </div> </div> <div class="flex flex-row justify-between mb-10"> <ul class="items-start ml-10 flex flex-col"> <li> <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"> <img src="../../public/gitHub.png" alt="gitHub" class="h-14 mb-4 hover:scale-[1.15] transition-transform duration-300 hover:drop-shadow-md"> </a> </li> <li> <a href="https://www.linkedin.com/in/luna-merino/" target="_blank" rel="noopener noreferrer"> <img src="../../public/linkedIn.png" alt="linkedIn" class="h-14 mb-4 hover:scale-[1.15] transition-transform duration-300 hover:drop-shadow-md"></a></li><a href="https://www.linkedin.com/in/luna-merino/" target="_blank" rel="noopener noreferrer"></a> <li> <a href="#contact"> <img src="../../public/mail.png" alt="contact" class="h-14 hover:scale-[1.15] transition-transform duration-300 hover:drop-shadow-md" data-scroll-to-contact> </a> </li> </ul> <a${addAttribute(otherLang, "href")} class="lang-switch flex flex col items-end font-poppins italic text-right mt-4 mr-12  hover:underline hover:text-blackish"> ${otherLangText} </a> </div> </nav> </header> <div class="ml-[20%] w-4/5"> <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> <!-- script para el scrolls-->  </body> </html>`;
}, "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-3xl font-poppins italic font-bold text-blackish text-center mb-8"> ${text} </h2>`;
}, "C:/Users/maria/Desktop/vedruna/portfolioAstro/src/components/Title.astro", void 0);

const Button = ({ onClick, label }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "mt-2 bg-color7 text-white rounded-full px-4 py-2 hover:bg-color5 transition duration-300",
      children: label
    }
  );
};

export { $$Title as $, Button as B, $$Layout as a };
