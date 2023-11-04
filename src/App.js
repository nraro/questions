import './App.css';
import { useState } from 'react';

function App() {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [getInputText, setGetInputText] = useState('');
  const [getDoneQuestion, setGetDoneQuestion] = useState([]);

  const handleAddQuestion = () => {
    setShowAddQuestion(true);
  }

  const handleInputText = (e) => {
    setGetInputText(e.target.value);
  }

  const handleDoneQuestion = (e) => {
    e.preventDefault();
    setGetDoneQuestion([...getDoneQuestion, getInputText]);
    setGetInputText('');
  }

  return (
    <div className="App">

      {
        getDoneQuestion.map((question, index) => {
          return (
            <div key={index + 1}>
              <span>{index + 1}</span>
              <h4>{question}</h4>
            </div>
          )
        })
      }



      {
        showAddQuestion ? 
        <form>
          <input value={getInputText} onChange={handleInputText} type='text'></input>
          <button onClick={handleDoneQuestion}>Done</button>
        </form> :
        <></>
      }
      
      <button onClick={handleAddQuestion}>Add new question</button>
    </div>
  );
}

export default App;
