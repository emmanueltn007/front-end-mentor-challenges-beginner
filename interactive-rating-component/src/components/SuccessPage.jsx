import { useNavigate, useLocation } from "react-router-dom";

function SuccessPage () {
    const { state } = useLocation();

    const prevPage = useNavigate();

    return (
        <section className="bg-[linear-gradient(180deg,hsl(213,19%,18%),hsl(216,12%,8%))] p-8 rounded-2xl flex flex-col gap-4 w-full md:w-sm items-center text-center">

            <img 
                className="w-32"
                src="/images/illustration-thank-you.svg" 
                alt="rating feedback image" />

            <p className="bg-[hsl(213,19%,18%)] text-[hsl(25,97%,53%)] text-sm py-2 px-4 w-fit rounded-3xl">
                You selected {state ?.ratingNumber} out of 5
            </p>

            <h2 className="text-[hsl(0,100%,100%)] text-2xl font-semibold">
                Thank You!
            </h2>

            <p className="text-[hsl(217,12%,63%)]">
                We appreciate you taking the time to give a rating. 
                If you ever need more support, don't hesitate to get in touch!
            </p>

            <button 
                onClick={() => prevPage("/")}
                className="w-full bg-[hsl(25,97%,53%)] cursor-pointer rounded-4xl py-2 font-semibold hover:bg-[hsl(0,100%,100%)] transition-all duration-300 ease-in-out">
                Dismiss
            </button>

        </section>
    );
}

export default SuccessPage