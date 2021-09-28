import Head from 'next/head'
import { useSession, getsession, getSession } from 'next-auth/client';
import { useState, useEffect } from "react"
import Header from '../components/Header';


export default function Search({ result }) {

    const [searchTerm, setSearchTerm] = useState('')

    console.log(result)

    function handleOnSubmit(e) {
        e.preventDefault()

        useEffect(() => {
            setSearchTerm(searchTerm)
        }, [])


    }


    return (
        <>
            <Head>
                <title>
                    Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
                    Geo and Star
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content='/images/disnep.png' key="ogimage" />
            </Head>

            <Header />

            {/* searchbar */}
            <div className="flex justify-center mr-6 my-2">
                <form className='bg-gray-100' onSubmit={handleOnSubmit}>
                    <input className='text-black' name='query' type='search' />
                    <button className='bg-gray-400'>Search</button>
                </form>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    const { searchTerm } = context.query;

    const request = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}`
    ).then((response) => response.json());

    return {
        props: {
            session,
            result: request,
        },
    };
}
