
import '../Style/App.css';
import { Prod1 } from './Prod1';

function App(props) {
  const list = props.list
  return (
    <div>
      {/* <Prod1/> */}
      {list.map((cartas)=> <Prod1 nombre={cartas.nombre} precio={cartas.precio} img={cartas.img} category={cartas.category}/>)}
    </div>
  );  
}

export default App;
