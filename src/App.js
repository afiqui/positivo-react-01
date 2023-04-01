import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import RoutesConfig from "./RoutesConfig";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Header />
        <RoutesConfig />
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
