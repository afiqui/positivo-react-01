import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import RoutesConfig from "./RoutesConfig";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Header />
          <RoutesConfig />
          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
