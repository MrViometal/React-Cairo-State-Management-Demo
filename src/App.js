// import ContextCounter from "./components/ContextCounter";
import NormalCounter from "./components/NormalCounter";
import ContextCounter from "./components/ContextCounter";
import ReduxCounter from "./components/ReduxCounter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from "react-redux";
import { CounterStore } from "./store/CounterStore";

function App({ mode }) {
  if (mode === "normal") return <NormalCounter />;
  if (mode === "context")
    return (
      <CounterProvider>
        <ContextCounter />
      </CounterProvider>
    );
  if (mode === "redux")
    return (
      <Provider store={CounterStore}>
        <ReduxCounter />
      </Provider>
    );
}

export default App;
