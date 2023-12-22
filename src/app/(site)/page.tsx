import { About, Career, Hero } from '@/components/sections';

import { fetchPage } from '@/sanity/requests/fetchPage';

export default async function Home() {
  const { hero, about, services, career, gallery, contacts, form } =
    await fetchPage();

  return (
    <>
      <Hero text={hero} />
      <About text={about} />
      <Career text={career} form={form} />
      <section className="section"></section>
    </>
  );
}
