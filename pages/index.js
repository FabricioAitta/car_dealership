import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Loader from '../components/utils/loader';
import { ENDPOINT } from '../utils';
import Header from '../components/header';
import Homepage from '../components/homepage';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home({cars, brand}) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1500)
  },[])

  return (
    <div className="container max-w-full">
      <Head>
        <title>Nort Motors Automoviles</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {loading
      ?
      <Loader />
      :
      <>
      <Header brand={brand}/>
      <Homepage />
      <Main cars={cars}/>
      <Footer />
      </>
      }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${ENDPOINT}/cars`)
  const cars = await res.json()

  const brand_res = await fetch(`${ENDPOINT}/brand`)
  const brand = await brand_res.json()

  return {
    props: {
      cars,
      brand,
    },
  }
}
