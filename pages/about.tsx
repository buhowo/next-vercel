import Link from "next/link";
import { FunctionComponent, ReactNode } from 'react';
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage () {
  return (
    <>
      <h1>About page</h1>
      <h1 className='title'>
        Ir a <Link href='/'><a> home</a></Link>
      </h1>

      <p className='description'>
        Get started by editing{ ' ' }
        <code className='code'>pages/about.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}