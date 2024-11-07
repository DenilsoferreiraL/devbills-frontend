import { AppProvider } from "./hooks";
import { Home } from "./screens/home";

export function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}


