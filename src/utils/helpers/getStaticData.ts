const metadata = async () => (await import('@/data/meta.json')).default;
const sections = async () => (await import('@/data/sections.json')).default;

export const getStaticData = async () => {
  return {
    meta: await metadata(),
    sections: await sections(),
  };
};
