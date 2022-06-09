
import '../Style/App.css';
import { Prod1 } from './Prod1';


function Producto(props) {
  const list = props.list
  return (
    <div className='ro'>
      {/* <Prod1/> */}
      {list.map((cartas)=> <Prod1 nombre={cartas.nombre} precio={cartas.precio} img={cartas.img} category={cartas.category}/>)}
    </div>
  );  
}

export {Producto};
