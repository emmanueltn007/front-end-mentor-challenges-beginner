import { useFormContext } from "../hooks/useFormContext";

function Form() {
  const { email, setEmail, error, handleSubmit } = useFormContext();

  return (
    <form className="w-full relative" noValidate onSubmit={handleSubmit}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={`w-full text-[hsl(0,36%,70%)] outline-none border-2  py-3 px-4 rounded-3xl ${error ? "border-[hsl(0,93%,68%)]" : "border-[hsl(0,36%,70%)]"}`}
        type="text"
        placeholder="email address"
      />
      {error && (
        <p className="absolute top-full font-semibold text-[hsl(0,93%,68%)]">
          {error}
        </p>
      )}
      <button
        className="bg-[hsl(0,36%,70%)] py-4 px-8 rounded-4xl cursor-pointer absolute top-0 bottom-0 -translate-x-full"
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
          <path
            fill="currentColor"
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
