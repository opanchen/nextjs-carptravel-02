const metadata = async () => (await import('@/data/meta.json')).default;

export const getStaticData = async () => {
  return {
    meta: await metadata(),
  };
};
