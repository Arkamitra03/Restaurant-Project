import React,{useState} from "react";
import Heading from "./Header";
import Menu from "./Menu";
import Card from "./Card";
import Navigation from "./Navbar";
function createStyle(props) {
  return (
    <Card
      key={props.id}
      id={props.id}
      category={props.category}
      name={props.name}
      description={props.description}
      image={props.image}
    />
  );
}

function App() {
  const[original,setMenu] = useState(Menu);
 
  
  function handleChange(id) {
    if(id==="All"){
      setMenu(Menu);
    }
    else{
      setMenu(()=>{
        return (Menu.filter((type)=>{
          return id===type.category;
  
        }));
      });
    }
    
    
  }
  
  return (
    <div>
      <Heading />
      <ul>
        <li>
          <Navigation change={handleChange}/>
        </li>
      </ul>

     <div className="main-card--cointainer">{original.map(createStyle)}</div>
    </div>
  );
}

export default App;
