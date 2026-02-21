import { useState } from "react";

export function useFormContext() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email field cannot be empty");
      return;
    }
    else if (!validEmail.test(email)) {
      setError("Please provide a valid email");
      return;
    }
    else {
      setError("");
    } 

    setEmail("");
  };

  return {
    email,
    setEmail,
    error, 
    handleSubmit
  };
}
