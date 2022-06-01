import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      ).then((d) => d.json());
      setCount(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <div className="size">
        {count.map((e) => (
          <div>
            Masai Student &nbsp;&nbsp;<span>{e.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
