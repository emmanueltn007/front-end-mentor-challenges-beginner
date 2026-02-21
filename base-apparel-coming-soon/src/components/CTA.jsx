import Form from "./Form";

function CTA() {

  return (
    <section className="px-8 pb-16 pt-8 md:px-32 flex flex-col max-md:items-center max-md:text-center gap-8">
      <h1 className="text-5xl font-semibold tracking-[0.7rem]">
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
      <Form />
    </section>
  );
}

export default CTA;