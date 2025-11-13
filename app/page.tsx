import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wordle Next.js App</title>
        <meta name="description" content="A Wordle clone built with Next.js" />
      </Head>
      <main>
        <h1>Welcome to Wordle!</h1>
        <p>This is your Next.js + TypeScript starter.</p>
      </main>
    </div>
  );
}
