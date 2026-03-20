function Card () {
    
    const ratings = [ 1, 2, 3, 4, 5 ];

    return (
        <section>
            <img src="/images/icon-star.svg" alt="star icon" />
            <h2>
                How did we do?
            </h2>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <div>
                {ratings.map((rating, index) => {
                    return (
                        <button key={index}>{rating}</button>
                    );
                })}
            </div>
        </section>
    );
}

export default Card