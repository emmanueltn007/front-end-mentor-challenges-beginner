import { useState } from "react";

function Card () {

    const [ratingNumber, setRatingNumber] = useState(null)


    const ratings = [ 1, 2, 3, 4, 5 ];

    function handleSubmitButton () {
        // will be entered later
    }

    return (
        <section className="bg-[hsl(213,20%,18%)] p-8 rounded-2xl flex flex-col gap-4">
            <div className="bg-gray-600 p-3 w-fit rounded-full">
                <img className="self-start" src="/images/icon-star.svg" alt="star icon" />
            </div>
            
            <h2 className="text-[hsl(0,100%,100%)] text-3xl font-semibold">
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
                            className={`w-12 h-12 rounded-full cursor-pointer transition-colors ${ratingNumber === rating ? "bg-[hsl(0,100%,100%)] text-black" : "bg-gray-600 hover:bg-[hsl(217,12%,63%)] text-white"}`}
                            key={index}
                        >
                            {rating}
                        </button>
                    );
                })}
            </div>
            <button 
                onClick={handleSubmitButton} 
                className="bg-[hsl(25,97%,53%)] cursor-pointer rounded-3xl py-2 font-semibold"
            >
                SUBMIT
            </button>
        </section>
    );
}

export default Card