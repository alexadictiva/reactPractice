import { useState } from 'react'
import './App.css'
import './index.css'

const TURNS ={
  X:'x',
  O:'0'
}

const Square = ({children, updateBoard, index}) =>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

/*Array(9).fill(null)*/

function App() {
  const [board, setBoard] = useState(['x','x','x','o','o','x','x','o','x'])
  
  
  return(
    <main className='board'>
      <h1>La Vieja</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square key={index}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
