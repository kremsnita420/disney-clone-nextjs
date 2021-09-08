import Image from "next/image"

export default function Brands() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
            <div className="brand group">
                <Image src="/images/disnep.png" layout="fill" objectFit="contain" />
                <video
                    autoPlay
                    loop
                    playsInline
                    className="hidden group-hover:inline rounded-lg object-cover transform scale-105"
                    src="/videos/disney.mp4" type="video/mp4"
                />
            </div>

            <div className="brand group">
                <Image src="/images/pixar.png" layout="fill" objectFit="contain" />
                <video
                    autoPlay
                    loop
                    playsInline
                    className="hidden group-hover:inline rounded-lg object-cover transform scale-105"
                    src="/videos/pixar.mp4" type="video/mp4"
                />

            </div>

            <div className="brand group">
                <Image src="/images/marvel.png" layout="fill" objectFit="contain" />
                <video
                    autoPlay
                    loop
                    playsInline
                    className="hidden group-hover:inline rounded-lg object-cover transform scale-105"
                    src="/videos/marvel.mp4" type="video/mp4" />
            </div>

            <div className="brand group">
                <Image src="/images/starwars.png" layout="fill" objectFit="contain" />
                <video
                    src="/videos/star-wars.mp4" type="video/mp4"
                    autoPlay
                    loop
                    playsInline
                    className="hidden group-hover:inline rounded-lg object-cover transform scale-105"
                />
            </div>

            <div className="brand group">
                <Image src="/images/national-geographic.png" layout="fill" objectFit="contain" />
                <video
                    autoPlay
                    loop
                    playsInline
                    className="hidden group-hover:inline rounded-lg object-cover transform scale-105"
                    src="/videos/national-geographic.mp4" type="video/mp4"
                />

            </div>
        </section>
    )
}
