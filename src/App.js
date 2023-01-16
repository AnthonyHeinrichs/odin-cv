import Header from './components/Header'
import Form from './components/form/Form'
import Cv from './components/Cv'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <Form />
        <Cv />
      </div>
    </div>
  );
}

export default App;
