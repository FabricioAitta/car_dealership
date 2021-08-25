import Head from 'next/head'
import React, { useRef } from 'react'
import Header from '../components/header';
import Homepage from '../components/homepage';
import Main from '../components/main';
import Footer from '../components/footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) //Ref ScrollTop

export default function Home() {

  const myRef = useRef(null) //ScrollTop
  const executeScroll = () => scrollToRef(myRef) //ScrollTop

  return (
    <div className="container max-w-full">
      <Head>
        <title>Nort Motors Automoviles</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header myRef={myRef}/>
      <Homepage />
      <Main />
      <Footer executeScroll={executeScroll} />
    </div>
  )
}
