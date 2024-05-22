import React from "react";

const ChattingLayout = (props) => {
    const { msgDetails, setMsgDetails, setActive, active, setinput, input } = props;
    const persons = ["Person 1", "Person 2"];

    const handleMsgList = (name) => {
        setinput('');
        setMsgDetails(
            [...msgDetails,
            {
                name: name,
                msg: input,
            }]
        )
    }
    console.log(active);
    return (
        <div id="chattingLayout">
            <div id="sideNav">
                {persons.map((ele) => (
                    <p className={active === ele ? 'activePerson' : ''} onClick={() => setActive(ele)}>{ele}</p>
                ))}
            </div>

            <div id='chatList'>
                <div id="chatDetails">

                    {msgDetails.map((chat, i) => (
                        <div className={`chat${i + 1}`} id={chat.name === 'Person 1' ? "FisrtPersonChat" : "SecondPersonChat"}>{chat.msg}</div>
                    ))}
                </div>
                <div id="textField">
                    <textarea value={input} onChange={(e) => setinput(e.target.value)}></textarea>
                    <button id="sendBtn" onClick={() => handleMsgList(active)}>Send</button>
                </div>
            </div>
        </div>
    )
};
export default ChattingLayout;