import faqs from "../utilities/faqs";

function Card({ openItem, handleFAQToggle }) {
  return (
    <div className="bg-[hsl(0,0%,100%)] p-4 rounded-lg max-md:w-full max-md:mx-8 md:w-[40%]">
      <div className="flex items-center gap-4">
        <img src="/images/icon-star.svg" alt="star icon" />
        <h1 className="text-3xl font-bold">FAQS</h1>
      </div>

      <ul>
        {faqs.map((faq) => {
          const isOpen = openItem === faq.id;

          return (
            <li key={faq.id} className="flex flex-col gap-4">
              <hr />
              <div className="font-semibold flex justify-between mb-4">
                <h2>{faq.question}</h2>
                <button onClick={() => handleFAQToggle(faq.id)}>
                  <img
                    className="cursor-pointer"
                    src={
                      isOpen
                        ? "/images/icon-minus.svg"
                        : "/images/icon-plus.svg"
                    }
                    alt="plus icon"
                  />
                </button>
              </div>

              {isOpen && <p>{faq.answer}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
