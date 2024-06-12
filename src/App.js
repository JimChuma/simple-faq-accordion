import { useState } from 'react';
import './App.css';
import QuestionSlot from './components/QuestionSlot';
import { data } from './lib/data';

function App() {
  const [select, setSelect] = useState(0);
  return (
    <main className='full-container full-view-port'>
      <div className='box-width'>
        <div className='faq'>
          <h2>Frequently Asked Questions</h2>
          {data.map((item, index) => {
            return(<QuestionSlot option={index + 1} select={select} setSelect={setSelect} item={item} />)
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
