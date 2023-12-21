import { fetchPage } from '@/sanity/requests/fetchPage';

export default async function Home() {
  const { hero, about, services, career, gallery, contacts, form } =
    await fetchPage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home page
    </main>
  );
}
