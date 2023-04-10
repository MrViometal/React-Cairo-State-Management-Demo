// import ContextCounter from "./components/ContextCounter";
import ContextCounter from "./components/ContextCounter";
import { CounterProvider } from "./context/CounterContext";
function App() {
  return (
    <CounterProvider>
      <ContextCounter />
    </CounterProvider>
  );
}

export default App;
