import { useState } from "react";
const Form = ({ name }) => {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 10) {
      setErrorMessage("Password length not valid");
    } else {
      //submit data
      console.log(username, password, email);
    }
  };
  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setErrorMessage("");
              setPassword(e.target.value);
            }}
          />
          <span>{errorMessage}</span>
        </div>
        <p> name:{username}</p>
        <p> email:{email}</p>
        <p> pass:{password}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Form;
