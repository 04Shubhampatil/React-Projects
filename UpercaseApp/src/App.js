import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from './components/Textform'

function App() {
  return (
    <>
      <Navbar title="textutil" />
      {
        // Container for the Textform component
        <div className="container my-3">
          <Textform heading ="Enter a text analyes below"/>
          {/* <About /> */}
        </div>
      }
    </>
  );
}
export default App;