import React, { useState, useEffect } from "react";

const getTimeString = (ms) => {
    const date = new Date(Date.now()+ms).toLocaleTimeString();
    return date;
}

const ClockApp = () => {

    const [time, setTime] = useState(getTimeString());
    const [caliTime, setCaliTime] = useState(getTimeString());

    useEffect(() => {
        let interval = setInterval(() => {
            let date = getTimeString(0)
            let caliDate = getTimeString(-3600000*3)
            setTime(date)
            setCaliTime(caliDate)
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>Indianapolis: {time}</p>
            <p>Yorba Linda: {caliTime}</p>
        </div>
    )
}

export default ClockApp;