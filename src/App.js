import useInput from "../custom-hooks/useInput";
import "./styles.css";

const App = () => {
  const [user, setUser] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <div className="App">
      <div>{user || "user"}</div>
      <div>{password || "password"}</div>
      <div>
        <input value={user} onChange={setUser} />
      </div>
      <div>
        <input value={password} onChange={setPassword} />
      </div>
    </div>
  );
};

export default App;
