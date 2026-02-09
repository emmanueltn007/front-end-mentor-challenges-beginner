function Hero () {
    return (
        <section className="h-full w-full">
            <img className="object-cover h-full w-full md:hidden" src="/images/hero-mobile.jpg" alt="hero image" />
            <img className="object-cover h-full w-full hidden md:block" src="/images/hero-desktop.jpg" alt="hero image" />
        </section>
    );
}

export default Hero