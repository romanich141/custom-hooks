import React, { useRef } from "react";
import useInput from "../custom-hooks/useInput";
import useHover from "../custom-hooks/useHover";
import "./styles.scss";

const App = () => {
  // const [user, setUser] = useInput("");
  // const [password, setPassword] = useInput("");
  // const ref = useRef();
  // const isHoverBox = useHover(ref);

  return (
    <div className="App">
      {/* <div>{user || "user"}</div>
      <div>{password || "password"}</div>
      <div>
        <input value={user} onChange={setUser} />
      </div>
      <div>
        <input value={password} onChange={setPassword} />
      </div> */}

      {/* <div
        ref={ref}
        className={`box ${isHoverBox ? "box__orange" : "box__green"} `}
      /> */}
    </div>
  );
};

export default App;
