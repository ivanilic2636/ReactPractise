import Header from "./components/Header/Header";
import MealsForm from "./components/MealsForm/MealsForm";
import MealsSummary from "./components/MealsSummary/MealsSummary";
import data from "./data";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const { meals } = data;
  const [cartItems, setCartItems] = useState([]);
  const [cartShown, setCartShown] = useState(null);

  // console.log("BEZ SPREADA")
  // console.log(meals);
  // console.log("SA SPREADOM")
  // console.log({...meals});


  const onAdd = (meal) => {
    const exist = cartItems.find((x) => x.id === meal.id);
    if (exist) {
      //Setuje kart iteme i ukoliko postoji u kartu taj item spreadovati ga i uzeti qty njegov i sabrati sa poostojecim u kartu
      //ako ne postoji samo nastaviti kroz mapu
      setCartItems(
        cartItems.map((x) => 
          x.id === meal.id ? { ...exist, qty: exist.qty + Number(meal.qty) } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...meal, qty: Number(meal.qty) }]);
    }
   
  };


  const cartHandler = () => {
    setCartShown(true);
  };

  const onOkay = () => {
    setCartShown(null);
  }

  return (
    <div>
      <Header cartItems={cartItems} cartHandler={cartHandler}/>
      <MealsSummary />
      {cartShown && <Cart cartItems={cartItems} onOkay={onOkay}/>}
      <MealsForm meals={meals} onAdd={onAdd} />
    </div>
  );
}

export default App;
