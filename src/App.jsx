import { NavBar } from "./components/Navbar/NavBar";
import { ThemeProvider } from "./components/context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div>
          <NavBar />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
