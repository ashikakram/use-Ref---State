
import { useRef, useState } from 'react'
import './App.css'
import Container from './assets/components/Container'

function App() {

  let [count, setCount] =useState(0);
  let countRef=useRef(0)


// use ref  start.........
let handleClick2=()=>{
  console.log(countRef.current++)
}
// use ref end............

// use state start............


let handleClick=()=>{
  count++
  setCount(count)
}
// use state end............




  return (
    <>
      <div>
        <Container className={'max-w-commonContainer'}>



{/* use state start...................... */}


          <h1>useState</h1>
          <h2>{count}</h2>
          <button onClick={handleClick}>click</button>

{/* use state end...................... */}

{/* sue ref start............................ */}

          <h1>useRef</h1>
          <h2>{countRef.current}</h2>
          <button onClick={handleClick2}>click</button>



{/* sue ref  end............................ */}



        
        </Container>
      </div>
    </>
  )
}

export default App
