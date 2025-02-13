import './Body.css'
import { useState } from 'react'

function Body() {
    
    const emojis1 = ['🔥','🚿','🌬️','🍃','❄️','🪨','🌋','⚡','🌪️','💨','🌞','🌚','🌈','💧','🌻'];
    const emojis2 = ['👺','👼','💀','🤖','😺','👽','👹','🤡','👻','🦸‍♂️','🦹‍♂️','🦷','👩‍⚕️','🧟‍♂️','👨‍🚀'];
    const emojis3 = ['🚗','🚔','🚴','🏃','🧑‍🦽','🩼','🛴','🚠','🚡','🏍️','🛶','🛵','🚚','🚌','🚑'];
    const emojis4 = ['🏥','🎒','🏖️','🌆','🎢','🪐','🏠','🏨','🛖','🏟️','🏢','🏛️','🏬','⛩️','🏪'];
    const emojis5 = ['👓','💎','⚽','🩴','💄','🎮','🖱️','⛸️','🎨','🎸','🎤','🖼️','🛍️','🍕','🧳'];
    const emojis6 = ['😁','😎','😭','😍','🤬','🤮','😡','😇','🤯','🥺','🥳','😔','😏','🤪','🥱'];

    const [emoji1, setEmoji1] = useState('❓')
    const [emoji2, setEmoji2] = useState('❓')
    const [emoji3, setEmoji3] = useState('❓')
    const [emoji4, setEmoji4] = useState('❓')
    const [emoji5, setEmoji5] = useState('❓')
    const [emoji6, setEmoji6] = useState('❓')

    const [history, setHistory] = useState([])

    function raffleEmoji(){
        const newEmojis = [
            emojis1[Math.floor(Math.random() * emojis1.length)],
            emojis2[Math.floor(Math.random() * emojis2.length)],
            emojis3[Math.floor(Math.random() * emojis3.length)],
            emojis4[Math.floor(Math.random() * emojis4.length)],
            emojis5[Math.floor(Math.random() * emojis5.length)],
            emojis6[Math.floor(Math.random() * emojis6.length)]
        ]

        setEmoji1(newEmojis[0])
        setEmoji2(newEmojis[1])
        setEmoji3(newEmojis[2])
        setEmoji4(newEmojis[3])
        setEmoji5(newEmojis[4])
        setEmoji6(newEmojis[5])

        setHistory([newEmojis, ...history])
    }

    function cleanEmoji(){
        setEmoji1('❓')
        setEmoji2('❓')
        setEmoji3('❓')
        setEmoji4('❓')
        setEmoji5('❓')
        setEmoji6('❓')

        setHistory([])
    }

    return (
        <div className='body-container'>
            <div className='emojis-box'>
                {emoji1}{emoji2}{emoji3}{emoji4}{emoji5}{emoji6}
            </div>
            <div className='raffle-box'>
                <button onClick={raffleEmoji} className='btn-raffle'>Sortear Emojis</button>
                <button onClick={cleanEmoji} className='btn-raffle'>Resetar</button>
            </div>

            <div className='history-box'>
                <h3 className='text-title2'>Histórico de Sorteios</h3>
                <div className='history-list'>
                    {history.map((emojis, index) => (
                        <div key={index} className='history-item'>
                            {emojis.join(' ')}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body