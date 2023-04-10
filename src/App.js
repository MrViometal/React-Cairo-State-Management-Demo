// import ContextCounter from "./components/ContextCounter";
import NormalCounter from "./components/NormalCounter";
import ContextCounter from "./components/ContextCounter";
import ReduxCounter from "./components/ReduxCounter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";
import { CounterStore } from "./store/CounterStore";
import "./app.css";

function App({ mode }) {
  return (
    <div className="app-container">
      <NormalCounter />

      <CounterProvider>
        <ContextCounter />
      </CounterProvider>

      <Provider store={CounterStore}>
        <ReduxCounter />
      </Provider>
    </div>
  );
}

export default App;
