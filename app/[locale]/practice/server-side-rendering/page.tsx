// import UserService from '@/features/practice/virtualized-infinite-scrolling/service/User.service';
// import { useState } from "react";

//-->getServerSideProps cannot use in the new App Router (app/ directory) in Next.js 13+ <---

// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// export const getServerSideProps = (async () => {
//   const res = await UserService.getUsers({ page: 1, results: 10 });
//   const data: ({ email: string } & Record<string, string>)[] = res.data.results;
//   return {
//     props: {
//       data
//     },
//   }
// }) satisfies GetServerSideProps<{ data: ({ email: string } & Record<string, string>)[] }>

// export async function getServerSideProps() {
//   const res = await UserService.getUsers({ page: 1, results: 10 });
//   const data: ({ email: string } & Record<string, string>)[] = res.data.results;

//   return { props: { data } }
// }

// function ServerSideRendering({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//-->getServerSideProps cannot use in the new App Router (app/ directory) in Next.js 13+ <---

// simply use SSR by create page component by async function
// export const dynamic = 'force-static';
async function ServerSideRendering({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const queryString = new URLSearchParams({ page }).toString();

  const res: any = await fetch(`https://randomuser.me/api/?results=15&${queryString}`, { cache: "no-store" });
  const json = await res.json();
  const data: ({ email: string } & Record<string, string>)[] = json.results;
  return (
    <>
      <div className='grid grid-cols-1 space-x-0 space-y-4 xl:grid-cols-2 xl:space-x-4 xl:space-y-0'>
        <ServerSideRenderingDocs />
        <EmailList data={data} />
      </div>
    </>
  );
}


const EmailList = ({ data }: { data: ({ email: string } & Record<string, string>)[] }) => {
  return (
    <ul className='relative space-y-2 w-full overflow-y-auto border rounded-md px-4 pb-4 h-[75vh]'>
      <h3 className="sticky bg-white top-0 pt-4 text-lg font-semibold">Navigate to a other page and come back here to load new data</h3>
      {data.map((data, index) => (
        <li className='p-2 text-ellipsis' key={data.email}>#{index + 1} {data.email}</li>
      ))}
    </ul>
  );
};

const ServerSideRenderingDocs = () => {
  return (
    <div className='space-y-4 p-4 border rounded-md h-[75vh] w-full overflow-y-auto leading-5'>
      <h3 className="text-lg font-semibold">Rendering Strategies in Next.js</h3>

      <p>
        Next.js supports multiple rendering strategies to deliver content efficiently:
        <strong>Server-side Rendering (SSR)</strong>, <strong>Static Site Generation (SSG)</strong>, and <strong>Client-side Rendering (CSR)</strong>.
        Each approach has its own use cases and trade-offs.
      </p>

      {/* SSR - App Router */}
      <div className='space-y-2'>
        <strong># Server-side Rendering (SSR) – App Router</strong>
        <div className='space-y-1'>
          <p>
            In the App Router, SSR is enabled by default for any component that does <strong>not</strong> use <code>`use client`</code>.
            You can fetch data directly inside async page components:
          </p>
          <pre className='bg-gray-100 p-2 rounded text-sm overflow-auto'>
            {`// app/page.tsx
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}`}
          </pre>
          <p>
            The server runs the function on every request and sends rendered HTML to the client.
          </p>
        </div>
      </div>

      {/* SSR - Page Router */}
      <div className='space-y-2'>
        <strong># Server-side Rendering (SSR) – Page Router</strong>
        <div className='space-y-2'>
          <p>
            With the Page Router, SSR is implemented by exporting a <code>getServerSideProps</code> function. This runs on every request.
          </p>
          <pre className='bg-gray-100 p-2 rounded text-sm overflow-auto'>
            {`// pages/index.tsx
export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return <div>{data}</div>;
}`}
          </pre>
          <p>
            Use SSR when your page depends on dynamic or user-specific data.
          </p>
        </div>
      </div>

      {/* SSG */}
      <div className='space-y-2'>
        <strong># Static Site Generation (SSG)</strong>
        <div className='space-y-1'>
          <p>
            SSG allows you to pre-render pages at build time. It’s ideal for pages with data that doesn’t change often.
          </p>
          <p>
            In the App Router, you can return static data from an async function if it doesn’t rely on request-time values.
          </p>
          <pre className='bg-gray-100 p-2 rounded text-sm overflow-auto'>
            {`// app/page.tsx
export default async function Page() {
  // revalidate data every 60 seconds
  const data = await fetch("url/data...", { next: { revalidate: 60 } }); 
  return <div>{data}</div>;
}`}
          </pre>
          <p>
            In the Page Router, you enable SSG by using <code>getStaticProps</code>:
          </p>
          <pre className='bg-gray-100 p-2 rounded text-sm overflow-auto'>
            {`// pages/index.tsx
export async function getStaticProps() {
  const data = await fetchStaticData();
  return {
    props: { data },
    revalidate: 60, // Revalidate data every 60 seconds
  };
}

export default function Home({ data }) {
  return <div>{data}</div>;
}`}
          </pre>
          <p>
            This builds the HTML at compile time, and it will be reused on every request unless revalidation is enabled.
          </p>
        </div>
      </div>
    </div>
  );
};


export default ServerSideRendering;