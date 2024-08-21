import { Router } from "./routes/Router";
import { ReduxProvider } from "./redux/Provider";
import ToastProvider from "./components/ui/Toast/ToastProvider";

function App() {
  return (
    <ReduxProvider>
      <Router />
      <ToastProvider />
    </ReduxProvider>
  );
}

export default App;
