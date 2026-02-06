import faqs from "./utilities/faqs";

function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-[hsl(275,100%,97%)] bg-[url('/images/background-pattern-mobile.svg')] md:bg-[url('/images/background-pattern-desktop.svg')] bg-contain bg-no-repeat bg-top">
      <div className="bg-[hsl(0,0%,100%)] p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <img src="/images/icon-star.svg" alt="star icon" />
          <h1 className="text-3xl font-bold">FAQS</h1>
        </div>
        <ul>
          {faqs.map((faq) => {
            return (
              <li key={faq.id} className="font-semibold flex justify-between">
                <h2>{faq.question}</h2>
                <img src="/images/icon-plus.svg" alt="plus icon" />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
