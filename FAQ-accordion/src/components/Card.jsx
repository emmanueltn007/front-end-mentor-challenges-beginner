import faqs from "../utilities/faqs";
import { UseCard } from "../hooks/useCard";

function Card() {

  const { openItem, handleFAQToggle } = UseCard();
  
  return (
    <div className="bg-[hsl(0,0%,100%)] p-4 rounded-lg max-md:w-full max-md:mx-8 md:w-[40%] flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <img src="/images/icon-star.svg" alt="star icon" />
        <h1 className="text-3xl font-bold">FAQS</h1>
      </div>

      <ul>
        {faqs.map((faq) => {
          const isOpen = openItem === faq.id;

          return (
            <li key={faq.id} className="flex flex-col gap-4">
              <hr className="border-t-1.5 border-gray-300" />
              <div className={`font-semibold flex justify-between ${isOpen ? "" : "mb-4"}`}>
                <h2 className="hover:text-purple-700 cursor-pointer transition duration-150 ease-in-out">{faq.question}</h2>
                <button onClick={() => handleFAQToggle(faq.id)}>
                  <img
                    className="cursor-pointer w-6 h-6"
                    src={
                      isOpen
                        ? "/images/icon-minus.svg"
                        : "/images/icon-plus.svg"
                    }
                    alt="plus icon"
                  />
                </button>
              </div>

              {isOpen && <p className="mb-4">{faq.answer}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;