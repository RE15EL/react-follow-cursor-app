import { useState, useEffect } from 'react'


function App() {
  const [ enabled, setEnabled ] = useState(false);
  const [ position, setPosition ] = useState({ x: 0, y: 0 });

  useEffect(() =>{
    const handleEvent = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x:clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleEvent)
    }
    
    return ()=>{
       window.removeEventListener('pointermove', handleEvent);
    }
  }, [enabled])

  const cirlceClassName = `${enabled? "circle" : "hide"}`;

  return (
    <main>
      <div className= { cirlceClassName } style={
        {
          transform: `translate(${position.x}px, ${position.y}px)`,
        }
      }></div>
      <h1> Follow the cursor </h1>
      <button onClick={ ()=> setEnabled(!enabled) }>
        { enabled ? 'Disable' : 'Enable' }
      </button>
    </main>
  )
}

export default App
