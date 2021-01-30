import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sample NextJs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-blue-400">
          NextJS app with the following components:
        </h1>

        <ol className="py-11">
          <li>Typescript</li>
          <li>TailwindCss</li>
        </ol>
      </main>
    </div>
  )
}
