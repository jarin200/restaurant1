import { useState } from "react";

const Menu = () => {
    const [foods, setFoods] = useState()
    fetch("menu.json")
    .then(res=> res.json)
    .then(data=>{
        setFoods(data)
        console.log(data)})
  return (
    <div>
      get started with coding! 🤗
    </div>
  );
};

export default Menu;