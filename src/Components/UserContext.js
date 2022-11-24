import react, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export default function UseTokenProviderUser(props) {
  const [formData, setFormData] = useState({
    nin: "",
    password: "",
  });
  const token = localStorage.getItem("user_rubbish");
  const userId = localStorage.getItem("userId");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fast-Woodland-39897.herokuapp.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            nin: formData.nin,
            password: formData.password,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      const data = await res.json();
      if (data.msg === "Successfully logged in") {
        localStorage.setItem("user_rubbish", JSON.stringify(data?.token));
        localStorage.setItem("userId", JSON.stringify(data?.user._id));
        setSuccess(true);
      } else {
        alert("error creating account");
      }
      console.log(data);
    } catch (error) {}
  };
  const userValues = {
    handleSubmit,
    formData,
    setFormData,
    success,
    token,
    userId,
  };
  return (
    <div>
      <userContext.Provider value={userValues}>
        {props.children}
      </userContext.Provider>
    </div>
  );
}
