import Header from "./Header";
import Menu from "./Menu";
import { useState } from "react";
import { items } from "./data";
function App() {
  const [item, setItems] = useState([...items]);
  const [category, setCategory] = useState("all");
  return (
    <div className="container">
      <Header setCategory={setCategory} />
      <Menu category={category} item={item} />
    </div>
  );
}

export default App;
