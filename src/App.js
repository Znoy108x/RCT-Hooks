import logo from "./logo.svg";
import "./App.css";
import UseStateHook from "./Hooks/UseStateHook";
import UseReducerHook from "./Hooks/UseReducerHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import UseRefHook from "./Hooks/UseRefHook";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseImperativeHook from "./Hooks/UseImperativeHook";
import UseContextHook from "./Hooks/UseContextHook";
import UseMemoHook from "./Hooks/UseMemoHook";
import UseCallBackHook from "./Hooks/UseCallBackHook";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseImperativeHook/> */}
      {/* <UseContextHook/> */}
      {/* <UseMemoHook/> */}
      <UseCallBackHook />
    </div>
  );
}

export default App;
