const metadata = async () => (await import('@/data/meta.json')).default;
const sections = async () => (await import('@/data/sections.json')).default;
const page404 = async () => (await import('@/data/page404.json')).default;

export const getStaticData = async () => {
  return {
    meta: await metadata(),
    sections: await sections(),
    page404: await page404(),
  };
};
