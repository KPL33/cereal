import "./App.css";
import Header from "./components/Header/Header.jsx";
import Page from "./components/Page/Page.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <>
        <Header />
        <Page />
        <Footer />
      </>
    </AppProvider>
  );
};
export default App;
