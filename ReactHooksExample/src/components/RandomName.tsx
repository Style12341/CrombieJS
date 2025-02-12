import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";


export default function RandomName() {
  const apiRoute = "https://randomuser.me/api/";
  const [name, setName] = useState<string>("");
  const { theme, toggleTheme } = useTheme();
  const fetchName = () => {
    fetch(apiRoute)
      .then((response) => response.json())
      .then((data) => setName(data.results[0].name.first));
  }
  useEffect(() => {
    fetchName();
  }, [theme]);


  return (
    <div>
      <h1>Random Name</h1>
      <p>{name}</p>
      <button onClick={() => toggleTheme()}>Generate new random name</button>
    </div>
  );
}