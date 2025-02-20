import './Body.css'
import { useState } from 'react'

function Body() {

const [d4, setD4] = useState()
const [d6, setD6] = useState()
const [d8, setD8] = useState()
const [d10, setD10] = useState()
const [d12, setD12] = useState()
const [d20, setD20] = useState()
const [d100, setD100] = useState()
const [anyDice, setAnyDice] = useState()
const [diceNumber, setDiceNumber] = useState(0)
const [total, setTotal] = useState(0)

    function rollD4(){
        setD4(Math.floor(Math.random() * 4 + 1))
        setAnyDice(d4)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d4)
    }
    function rollD6(){
        setD6(Math.floor(Math.random() * 6 + 1))
        setAnyDice(d6)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d6)
    }
    function rollD8(){
        setD8(Math.floor(Math.random() * 8 + 1))
        setAnyDice(d8)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d8)
    }
    function rollD10(){
        setD10(Math.floor(Math.random() * 10 + 1))
        setAnyDice(d10)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d10)
    }
    function rollD12(){
        setD12(Math.floor(Math.random() * 12 + 1))
        setAnyDice(d12)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d12)
    }
    function rollD20(){
        setD20(Math.floor(Math.random() * 20 + 1))
        setAnyDice(d20)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d20)
    }
    function rollD100(){
        setD100(Math.floor(Math.random() * 100 + 1))
        setAnyDice(d100)
        setDiceNumber(diceNumber + 1)
        setTotal(total + d100)
    }
    function resetDice(){
        setDiceNumber(0)
        setTotal(0)
    }

  return (
    <div className='body-container'>
        <div className='dice-box'>
            {anyDice}
        </div>
        <div className='info-box'>
            <button className='dice-button' onClick={rollD4}>d4</button>
            <button className='dice-button' onClick={rollD6}>d6</button>
            <button className='dice-button' onClick={rollD8}>d8</button>
            <button className='dice-button' onClick={rollD10}>d10</button>
            <button className='dice-button' onClick={rollD12}>d12</button>
            <button className='dice-button' onClick={rollD20}>d20</button>
            <button className='dice-button' onClick={rollD100}>d100</button>
        </div>
        <div className='page-bottom'>
            <h3 className='text-bottom'>Total: {total}</h3>
            <h3 className='text-bottom'>Número de dados rolados: {diceNumber}</h3>
            <button className='dice-button' onClick={resetDice}>Resetar</button>
        </div>
    </div>
  )
}

export default Body