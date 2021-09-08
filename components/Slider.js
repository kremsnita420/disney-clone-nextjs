import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function Slider() {
    return (
        <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
            <div />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                ariaLabel='carousel'
                emulateTouch={true}
            >
                <div>
                    <img loading="lazy" src="/images/slider-1.jpg" alt="popular shows" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-2.jpg" alt="popular shows" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-3.jpg" alt="popular shows" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-4.jpeg" alt="popular shows" />
                </div>
            </Carousel>
        </section>
    )
}
