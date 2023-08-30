import { useEffect, useState } from "react";
import "./App.css"

function App() {

  const [ listaTarefas, setListaTarefas ] = useState ([]);
  const [tarefa, setTarefa ] = useState ( {id: '' , texto: "" , status: ""});

  function addTarefa()
  {
    if( tarefa.texto !=="" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }


  function excluirTarefa(id) {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id);
    setListaTarefas(novalista);
  }


  function concluirTarefa(id,status) {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
   
    listaTarefas[index].status = !status;
    setListaTarefas([...listaTarefas]);
    
  }


  useEffect(() =>{
    setTarefa( { id: "", texto: "", status:"" });
}, [listaTarefas])


  return (
    <>
    <header>
      <h1 className="rodape">TO DO LIST</h1>
    </header>
      <div className="tarefa">
        <input type="text" nome= "tarefa" placeholder="Digite suas tarefas" maxLength={98} value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />
        <button onClick={addTarefa}>⊕</button>
      </div>
      <div>
        <h1>Semana 27/08 até 02/09</h1>
      </div>
      <div className="principal">
        <ul > 
          {listaTarefas.map( (item, index ) => (
           <li className="tarefas" key={item.id}><button  onClick={() => concluirTarefa(item.id,item.status) }>{item.status ? '✔' : '◯'}</button> <button onClick={() => excluirTarefa(item.id) }>🗑️</button>{item.texto}</li>
          ))}
        </ul>
      </div>
      <div  className="rodape2">
        <h1 >♡♡♡♡    </h1>
      </div>
    </>
   
  );
}


export default App;
