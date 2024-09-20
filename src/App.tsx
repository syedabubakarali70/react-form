import { useState } from "react";
import { InputWithLabel } from "./components/ui/inputWithLabel";
import { Button } from "./components/ui/button";
const App = () => {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  return (
    <div className="max-w-96 mx-auto flex flex-col gap-4">
      <InputWithLabel
        label="Username"
        placeholder="Enter username"
        type="text"
        error="Username must be of atleast 5 letters"
      />
      <InputWithLabel label="Email" placeholder="Enter email" type="email" />
      <InputWithLabel
        label="Password"
        placeholder="Enter Password"
        type="password"
      />
      <InputWithLabel
        label="Confirm password"
        placeholder="Enter Password"
        type="password"
      />
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default App;
