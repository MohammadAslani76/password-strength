import {useState} from "react";
import PasswordStrength from "./PasswordStrength";

function App() {
    const [password,setPassword] = useState("");
  return (
    <div className="container p-8 flex flex-col items-center gap-5">
      <input type="text" className="border-0 outline-0 rounded-xl bg-gray-200 px-3 py-1 placeholder:text-indigo-300" placeholder="پسورد شما" onChange={(e) => setPassword(e.target.value)}/>
        <PasswordStrength password={password}/>
    </div>
  );
}

export default App;
