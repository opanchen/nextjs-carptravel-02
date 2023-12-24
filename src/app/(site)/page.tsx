import {
  About,
  Career,
  Contacts,
  Gallery,
  Hero,
  Services,
} from '@/components/sections';

import { fetchPage } from '@/sanity/requests/fetchPage';
import { getStaticData } from '@/utils/helpers';

export default async function Home() {
  const { hero, about, services, career, gallery, contacts, form } =
    await fetchPage();

  const staticData = await getStaticData();

  return (
    <>
      <Hero text={hero || staticData.hero} />
      <About text={about || staticData.about} />
      <Services text={services || staticData.services} />
      <Career
        text={career || staticData.career}
        form={form || staticData.form}
      />
      <Gallery text={gallery || staticData.gallery} />
      <Contacts
        text={contacts || staticData.contacts}
        form={form || staticData.form}
      />
    </>
  );
}
