import { store } from "./store";
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';/

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
