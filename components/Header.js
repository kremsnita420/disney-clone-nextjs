import Image from 'next/image'
import { HomeIcon, SearchIcon, PlusIcon, StarIcon, } from '@heroicons/react/solid'
import { getSession, signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'


export default function Header() {
    const [session] = useSession()
    const router = useRouter()
    return (
        <header className='sticky bg-[#040714] top-0 z-[1000] flex justify-between  items-center px-2 h-[72px] md:px-4'>
            <div className='flex'>
                <Image
                    src='/images/logo.svg'
                    width={80}
                    height={80}
                    className='cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <div className='flex items-center justify-center'>
                    {session && (
                        <div className=' hidden ml-2 md:flex items-center space-x-6'>
                            <a className="header-link group">
                                <HomeIcon className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Home</span>
                            </a>
                            <a className="header-link group">
                                <SearchIcon className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Search</span>
                            </a>
                            <a className="header-link group">
                                <PlusIcon className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Watchlist</span>
                            </a>
                            <a className="header-link group">
                                <StarIcon className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Originals</span>
                            </a>
                            <a className="header-link group">
                                <img src="/images/movie-icon.svg" alt="" className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Movies</span>
                            </a>
                            <a className="header-link group">
                                <img src="/images/series-icon.svg" alt="" className="h-4" />
                                <span className="span md:text-sm lg:text-lg xl:text-xl">Series</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>


            {!session ? (
                <button
                    className='ml-auto uppercase border px-4 py-1.5 
                           rounded font-medium tracking-wide 
                           hover:bg-white hover:text-black
                           transition duration-200'
                    onClick={signIn}
                >
                    Login
                </button>
            ) : (
                <div className='ml-5'>
                    <img
                        src={session.user.image}
                        alt='user'
                        className='ml-auto h-8 w-8 rounded-full object-cover cursor-pointer'
                        onClick={signOut}
                    />

                </div>
            )}

        </header>
    )
}



