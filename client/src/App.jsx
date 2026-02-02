import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
