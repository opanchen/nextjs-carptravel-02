const metadata = async () => (await import('@/data/meta.json')).default;
const sections = async () => (await import('@/data/sections.json')).default;
const page404 = async () => (await import('@/data/page404.json')).default;
const hero = async () => (await import('@/data/hero.json')).default;
const about = async () => (await import('@/data/about.json')).default;
const services = async () => (await import('@/data/services.json')).default;
const career = async () => (await import('@/data/career.json')).default;
const gallery = async () => (await import('@/data/gallery.json')).default;
const contacts = async () => (await import('@/data/contacts.json')).default;
const form = async () => (await import('@/data/form.json')).default;

export const getStaticData = async () => {
  return {
    meta: await metadata(),
    sections: await sections(),
    page404: await page404(),
    hero: await hero(),
    about: await about(),
    services: await services(),
    career: await career(),
    gallery: await gallery(),
    contacts: await contacts(),
    form: await form(),
  };
};
