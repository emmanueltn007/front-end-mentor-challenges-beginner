import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card () {

    const [ratingNumber, setRatingNumber] = useState(null);
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const ratings = [ 1, 2, 3, 4, 5 ];

    function handleSubmitButton () {
        if (ratingNumber === null) {
            setError("Please select a rating");
        } else {
            navigate("/success");
            console.log("Rating submitted!");
        }
    }

    return (
        <section className="bg-[linear-gradient(180deg,hsl(213,19%,18%),hsl(216,12%,8%))] p-8 rounded-2xl flex flex-col gap-4 w-full md:w-sm">
            <div className="bg-[hsl(213,19%,18%)] p-3 w-fit rounded-full">
                <img className="self-start" src="/images/icon-star.svg" alt="star icon" />
            </div>
            
            <h2 className="text-[hsl(0,100%,100%)] text-2xl font-semibold">
                How did we do?
            </h2>
            <p className="text-[hsl(217,12%,63%)]">
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-between gap-4">
                {ratings.map((rating, index) => {
                    return (
                        <button 
                            onClick={() => setRatingNumber(rating)}
                            className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${ratingNumber === rating ? "bg-[hsl(0,100%,100%)] text-black" : "bg-[hsl(213,19%,18%)] hover:bg-[hsl(25,97%,53%)] hover:text-[hsl(216,12%,8%)] text-white"}`}
                            key={index}
                        >
                            {rating}
                        </button>
                    );
                })}
            </div>

            {error && (
                <p className="text-red-500 italic">{error}</p>
            )}

            <button 
                aria-label="submit button"
                onClick={handleSubmitButton} 
                className="bg-[hsl(25,97%,53%)] cursor-pointer rounded-4xl py-4 font-semibold hover:bg-[hsl(0,100%,100%)] transition-all duration-300 ease-in-out"
            >
                SUBMIT
            </button>
        </section>
    );
}

export default Card