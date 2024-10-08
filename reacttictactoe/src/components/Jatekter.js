import Elem from "./Elem";

function Jatekter(props) {

    return (
      <>
        {
            props.jatekLista.map((elem, index) => {
                return <Elem adatok = {elem}/>
            })
        }
      </>
    );
  }
  
  export default Jatekter;
  