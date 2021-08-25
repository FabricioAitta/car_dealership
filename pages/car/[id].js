import Head from 'next/head'
import React from 'react'
import {useRouter} from 'next/router';

export default function Car() {

    const router = useRouter()
    
    const {car, year, owner, price} = router.query

    return (
        <div>
            <Head>
                <title>Nort Motors Automoviles</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            CAR: {car}
            YEAR: {year}
            OWNER: {owner}
            PRICE: {price}
        </div>
    )
}
