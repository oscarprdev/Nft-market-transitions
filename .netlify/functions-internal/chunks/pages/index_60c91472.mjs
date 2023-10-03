/* empty css                          */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_879e1af5.mjs';
import { c as colors, $ as $$NftItem, a as $$Icon, b as getNftList, d as $$Layout } from './_id__acb57b48.mjs';
import 'os';
import 'fs';
import 'url';
import 'path';

const $$Astro$2 = createAstro();
const $$NftCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NftCard;
  const { image, eth, likes, views, date, user, index, id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="border-grad z-[10] relative w-[100%] md:w-[25%] bg-[rgb(27,25,34)] p-2 flex flex-col items-center gap-2"><a class="flex flex-col items-center w-[100%] h-[100%] gap-[0.7rem]"${addAttribute(`/${id}`, "href")}><figure class="relative w-[95%] h-[40vh] rounded-[0.5rem]"${addAttribute(`background: ${colors[index]}; view-transition-name: bg-${id}`, "style")}><img${addAttribute(`w-[100%] h-[100%] object-contain ${index === colors.length - 1 ? "object-cover" : ""}`, "class")}${addAttribute(image, "src")}${addAttribute(`view-transition-name: image-nft-${id}`, "style")}><p class="absolute z-[-1] top-0 left-2 text-white"${addAttribute(`view-transition-name: nft-name-${id}`, "style")}>${name}</p></figure><article class="w-[100%] text-[var(--text-card)] flex flex-col items-center gap-3"><section class="w-full flex flex-row items-center justify-between pr-[1rem] pl-[1rem]">${renderComponent($$result, "NftItem", $$NftItem, { "value": date, "transitionName": `nft-date-${id}`, "icon": "tabler:clock", "size": "w-[15px]", "color": "text-[var(--text-card)]" })}${renderComponent($$result, "NftItem", $$NftItem, { "value": views, "transitionName": `nft-views-${id}`, "icon": "mdi:eye-outline", "size": "w-[15px]", "color": "text-[var(--text-card)]" })}</section><span class="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent"></span><section class="flex flex-row items-center justify-between pr-[1rem] pl-[1rem] w-[100%]"><div class="flex flex-col items-start"><p class="text-white text-sm"${addAttribute(`view-transition-name: nft-user-${id}`, "style")}>${user}</p><span class="flex items-center text-[var(--bg-contrast)] w-[100%]"${addAttribute(`view-transition-name: nft-value-${id}`, "style")}>${renderComponent($$result, "Icon", $$Icon, { "class": "w-[15px] text-[var(--bg-contrast)]", "name": "mdi:ethereum" })}<p>${eth} ETH</p></span></div><button${addAttribute(`view-transition-name: button-${id}`, "style")} class="bg-[var(--bg-contrast)] pr-4 pl-4 pt-2 pb-2 rounded-lg text-black"><p>Buy now</p></button></section><span class="absolute top-[0.3rem] right-[0.8rem] flex items-center justify-between bg-white p-1 pl-[1rem] pr-[1rem] rounded-[1rem] text-black"${addAttribute(`view-transition-name: nft-likes-${id}`, "style")}>${renderComponent($$result, "Icon", $$Icon, { "class": "w-[15px] text-red-600", "name": "mdi:heart" })}${likes}</span></article></a><span class="w-[102%] b-white z-[5]"></span></li>`;
}, "/Users/oscar/Code/nft-market/src/components/Nft-card.astro", void 0);

const $$Astro$1 = createAstro();
const $$NftList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NftList;
  const nftList = await getNftList();
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col md:flex-row items-center gap-5 w-[80vw]">${nftList.map(({ image, user, eth, likes, date, views, id, name }, index) => renderTemplate`${renderComponent($$result, "NftCard", $$NftCard, { "image": image, "user": user, "eth": eth, "likes": likes, "date": date, "views": views, "index": index, "id": id, "name": name })}`)}</ul>`;
}, "/Users/oscar/Code/nft-market/src/components/Nft-list.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "h-full" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="relative bg-glow flex flex-col md:h-[100vh] items-center text-center gap-3 p-5 m-auto"><h1 class="text-white text-[2rem] md:text-[4rem]" style="view-transition-name: title">NFT Market</h1>${renderComponent($$result2, "NftList", $$NftList, {})}<p class="text-white" style="view-transition-name: oscar">Developed by <a class="text-[var(--bg-contrast)]" target="_blank" href="https://github.com/oscarprdev/Nft-marketplace">Oscar Perez</a></p><span class="z-[-10] noise absolute top-0 w-[100%] h-[100%] md:h-[100vh] content-none"></span></main><footer class="hidden md:absolute bottom-5 right-10 md:flex items-center gap-1 text-[var(--text-card)]"><p>Design inspired by Shabib Hasan at</p><a class="text-[var(--text-dribble)]" target="_blank" href="https://dribbble.com/shots/22656575-NFTPro"><p>Dribble</p></a></footer>` })}`;
}, "/Users/oscar/Code/nft-market/src/pages/index.astro", void 0);

const $$file = "/Users/oscar/Code/nft-market/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
