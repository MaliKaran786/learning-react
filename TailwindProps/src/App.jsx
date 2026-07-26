import "./App.css";
import Card from "./components/Card";
function App() {
  let x="Aur Jaano"
  return (
    <>
    <Card username="Karan Malik" btnTxt={x}/>
    <Card username="Malik Karan" />

    </>
  );
}

export default App;
