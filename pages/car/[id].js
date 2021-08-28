import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import Loader from '../../components/utils/loader';
import { ENDPOINT } from '../../utils';
import Header from '../../components/header';
import CarouselCar from '../../components/carousel';
import DataCar from '../../components/single-car';
import Footer from '../../components/footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) //Ref ScrollTop

export default function Car({ brand }) {

    const router = useRouter()

    const myRef = useRef(null) //ScrollTop
    const executeScroll = () => scrollToRef(myRef) //ScrollTop

    const dataCar = {car: router.query}

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
            </Head>
            {loading
            ?
            <Loader />
            :
            <>
            <Header myRef={myRef} brand={brand}/>
            <div className="container flex flex-row justify-center pt-24 mb-12 pl-5 h-full">
                <CarouselCar dataCar={dataCar}/>
                <DataCar dataCar={dataCar}/> 
            </div>
            <Footer executeScroll={executeScroll} />
            </>
            }
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${ENDPOINT}/cars`)
    const car = await res.json()

    const brand_res = await fetch(`${ENDPOINT}/brand`)
    const brand = await brand_res.json()

    return {
        props: {
            car,
            brand,
        },
    }
}