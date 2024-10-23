import { useEffect, useState } from "react";
import Todo from "./components/todo";
import Form from "./components/form";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:3600/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Form   getData={getData}/>
      {data.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
         
        />
      ))}
    </>
  );
}

export default App;
