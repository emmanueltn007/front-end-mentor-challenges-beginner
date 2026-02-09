import { useState } from "react";

function CTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) setError("Email field cannot be empty"); 
    else if (!validEmail.test(email)) setError("Please provide a valid email");
    else setError("");

    setEmail("");
  };

  return (
    <section className="px-8 py-16 md:px-32 flex flex-col max-md:items-center max-md:text-center gap-8">
      <h1 className="text-5xl font-semibold">
        <span
          className="text-[hsl(0,36%,70%)]
                font-light"
        >
          WE'RE
        </span>
        <br />
        COMING
        <br />
        SOON
      </h1>
      <p className="font-semibold text-[hsl(0,36%,70%)]">
        Hello fello shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form className="w-full relative" noValidate onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`w-full text-[hsl(0,36%,70%)] outline-none border-2  py-3 px-4 rounded-3xl ${error ? "border-[hsl(0,93%,68%)]" : "border-[hsl(0,36%,70%)]"}`}
          type="text"
          placeholder="email address"
        />
        {error && (
            <p className="absolute top-full font-semibold text-[hsl(0,93%,68%)]">{error}</p>
        )}
        <button
          className="bg-[hsl(0,36%,70%)] py-4 px-8 rounded-4xl cursor-pointer absolute top-0 bottom-0 -translate-x-full"
          type="submit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="currentColor" stroke="#FFF" strokeWidth="2" d="M1 1l8.836 8.836L1 18.671"/></svg>
        </button>
      </form>
    </section>
  );
}

export default CTA;
