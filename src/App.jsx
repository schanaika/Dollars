import { useState,useCallback } from 'react'
import './App.css'


function App() {
  const [value,setValue] = useState(0)

  const handleClick = useCallback(
      () => setValue(value -1)
      , [value]
  );

  const handleClick2 = useCallback(
    () => setValue(value +1)
    , [value]
);




  return(
    <>
      <p>Prix en Euros:</p>
      <input
        type="number"
        value={value}
        onChange={(event)=> {
          setValue(parseInt(event.target.value))          
        }}
      />

      <p>Prix en Dollars:</p>
      <p> {(value * 1.05).toFixed(2)} $ </p>
      

      <button 
        style={{ backgroundColor: 'red' }}
        onClick= {handleClick}
        
      >-1
      </button>
      
      <button style={{ backgroundColor: 'green' }}
       onClick= {handleClick2} 
      > +1 
      </button>
    </>
  )
}





export default App
