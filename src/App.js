import './App.css';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState('');

  const email = useSelector(state => state.usuario.email);

  const handleChangeEmail = () => dispatch({type: 'SET_EMAIL', payload: {email: newEmail}});

  return (
    <div className="App">
      <h1>Olá, Redux!</h1>
      <label><b>Email:</b> {email}</label>
      
      <hr />
      <h1>Editar email:</h1>
      <input 
        type="text" 
        placeholder="Digite seu novo email" 
        onChange={e => setNewEmail(e.target.value)}
      />
      <button onClick={handleChangeEmail}>Salvar email</button>
    </div>
  );
}

export default App;
