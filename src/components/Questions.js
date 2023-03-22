import React, { useState } from "react";

function Questions() {
    const questions = ['Hvor mange barn har Itte Ansvarlig?',
        'Itte Ansvarlig har også jobbet med',
        'I hvilken sport har Itte Ansvarlig deltatt i EM?'];
    const answerOptions1 = ['1', 'Taxi', 'Folkeswing'];
    const answerOptions2 = ['2', 'Blomster', 'Motocross'];
    const answerOptions3 = ['3', 'Gårdsbruk', 'EM?? Yeah right!']
    const [question, setQuestion] = useState(questions[0]);
    const [answer1, setAnswer1] = useState(answerOptions1[0]);
    const [answer2, setAnswer2] = useState(answerOptions2[0]);
    const [answer3, setAnswer3] = useState(answerOptions3[0]);
    const [round, setRound] = useState(1);

    async function writeAnswersToDB() {
        let apiURL = '';
        if (process.env.NODE_ENV === 'production') {
            apiURL = '/api/CosmosDB';
        }
        else {
            apiURL = 'http://localhost:7071/api/CosmosDB';
    
        }
        const answers = {'readwrite': 'write', 'name': localStorage.participantName, 
            'answer1': localStorage.question1Answer,
            'answer2': localStorage.question2Answer,
            'answer3': localStorage.question3Answer};
        const data = await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(answers)
        });
        return (data);
    }
    
    function clickAnswer1() {
        setQuestion(questions[round]);
        if (round === 1) {
            localStorage.setItem("question1Answer", answerOptions1[0]);
            setRound(2);
        }
        else if (round === 2) {
            localStorage.setItem("question2Answer", answerOptions1[1]);
            setRound(3);
        }
        else if (round === 3){
            localStorage.setItem("question3Answer", answerOptions1[2]);
            setRound(4);
        };
        setAnswer1(answerOptions1[round]);
        setAnswer2(answerOptions2[round]);
        setAnswer3(answerOptions3[round]);
    };

    function clickAnswer2() {
        setQuestion(questions[round]);
        if (round === 1) {
            localStorage.setItem("question1Answer", answerOptions2[0]);
            setRound(2);
        }
        else if (round === 2) {
            localStorage.setItem("question2Answer", answerOptions2[1]);
            setRound(3);
        }
        else if (round === 3){
            localStorage.setItem("question3Answer", answerOptions2[2]);
            setRound(4);
        };
        setAnswer1(answerOptions1[round]);
        setAnswer2(answerOptions2[round]);
        setAnswer3(answerOptions3[round]);
    };

    function clickAnswer3() {
        setQuestion(questions[round]);
        if (round === 1) {
            localStorage.setItem("question1Answer", answerOptions3[0]);
            setRound(2);
        }
        else if (round === 2) {
            localStorage.setItem("question2Answer", answerOptions3[1]);
            setRound(3);
        }
        else if (round === 3){
            localStorage.setItem("question3Answer", answerOptions3[2]);
            setRound(4);
        };
        setAnswer1(answerOptions1[round]);
        setAnswer2(answerOptions2[round]);
        setAnswer3(answerOptions3[round]);
    };

    function resetQuesdtions() {
        localStorage.clear();
        window.location.reload(false);
    }

    if (round === 4) {
        console.log(writeAnswersToDB());
        return (
            <div>
                <button onClick={resetQuesdtions}>Reset</button>
            </div>
        )
    }

    return (
        <div className="themeboxcontainer">
                <h1>{question}</h1>
                <div className="themeboxes" onClick={clickAnswer1}>
                    <p>{answer1}</p>
                </div>
                <div className="themeboxes" onClick={clickAnswer2}>
                    <p>{answer2}</p>
                </div>
                <div className="themeboxes" onClick={clickAnswer3}>
                    <p>{answer3}</p>
                </div>
        </div>
    )
};

export default Questions;