import Image from "next/image"
import { useRouter } from "next/router"

export default function MovieThumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const router = useRouter();


    return (
        <div
            className="movie-thumbnail"
            onClick={() => router.push(`/movie/${result.id}`)}
        >
            <Image
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                width={330}
                height={210}
                objectFit="cover"
            />
        </div>
    )
}
