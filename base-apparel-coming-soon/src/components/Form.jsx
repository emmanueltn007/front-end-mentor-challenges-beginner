import { useFormContext } from "../hooks/useFormContext";

function Form() {
  const { email, setEmail, error, handleSubmit } = useFormContext();

  return (
    <form className="w-full relative" noValidate onSubmit={handleSubmit}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={`placeholder:text-[hsl(0,36%,70%)] text-[hsl(0,0%,0%)] font-semibold w-full outline-none border-2  py-3 px-4 rounded-3xl caret-[hsl(0,36%,70%)] ${error ? "border-[hsl(0,93%,68%)]" : "border-[hsl(0,36%,70%)]"}`}
        type="text"
        placeholder="email address"
      />
      {error && (
        <img className="absolute right-20 top-1/2 -translate-y-1/2" src="/images/icon-error.svg" alt="error icon" />
      )}
      {error && (
        <p className="absolute top-full left-6 font-semibold text-[hsl(0,93%,68%)]">
          {error}
        </p>
      )}
      <button
        className="bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] hover:bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,80%,86%))] transition-all duration-300 ease-in-out py-4 px-8 rounded-3xl cursor-pointer absolute top-0 bottom-0 -translate-x-full shadow-xl shadow-[hsl(0,80%,86%)] hover:shadow-[hsl(0,74%,74%)]"
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 1l8.836 8.836L1 18.671"
          />
        </svg>
      </button>
    </form>
  );
}

export default Form;