import ToastProvider from "./components/ui/Toast/ToastProvider";
import { ReduxProvider } from "./redux/Provider";
import { Router } from "./routes/Router";

function App() {
  return (
    <ReduxProvider>
      <Router />
      <ToastProvider />
    </ReduxProvider>
  );
}

export default App;
