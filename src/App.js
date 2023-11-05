import './App.css';
import { useState } from 'react';

function App() {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [getInputText, setGetInputText] = useState({value: '', questionType: 'primary'});
  const [getDoneQuestion, setGetDoneQuestion] = useState([]);


  const handleAddQuestion = () => {
    setShowAddQuestion(true);
  }

  const handleInputText = (e) => {
    setGetInputText({...getInputText, value: e.target.value});
  }

  const handleDoneQuestion = (e) => {
    e.preventDefault();
    setGetDoneQuestion([
      ...getDoneQuestion, getInputText
    ]);
    setGetInputText({value: ''});
  }

  return (
    <div className="App">
      {
        getDoneQuestion.map((question, index) => {
          return (
            <div key={index + 1}>
              <span>{index + 1}</span>
              <h4>{question.value}</h4>
              <div>
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
          )
        })
      }

      {
        showAddQuestion ? 
        <form>
          <label htmlFor='add-question'>
            {
              getDoneQuestion.length > 0 ? 
              <span>Add answers to the previous question</span> :
              <span>Add new question</span>
            }
          </label>
          <input name='add-question' value={getInputText.value} onChange={handleInputText} type='text'></input>
          <button onClick={handleDoneQuestion}>Done</button>
        </form> :
        <></>
      }
      
      <button onClick={handleAddQuestion}>Add new question</button>
    </div>
  );
}

export default App;
