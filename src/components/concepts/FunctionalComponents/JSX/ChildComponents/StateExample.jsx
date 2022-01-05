import React, {useState} from 'react'

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <img style={{width:'100px',height:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Facebook_Thumb_icon.svg" onClick={e => setLikeNum(likeNum+1)} />
            <span>{likeNum}</span>
            <br />
            <br />
            <p style={{color:textColor}} onMouseEnter={e => setTextColor('red')} onMouseLeave={e=>setTextColor('blue')}>
                This text should change colors from blue to red when the mouse enters the <i>p</i> tag.
            </p>
        </div>
    )
}

export default StateExample;