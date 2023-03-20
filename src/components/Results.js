import React, { useState } from "react";
import { useEffect } from "react";

function Results() {
    const [allAnswers, setAllAnswers] = useState([])
    async function readAnswers() {
        let data = {};
        let apiURL = '';
        if (process.env.NODE_ENV === 'production') {
            apiURL = '/api/CosmosDB';
        }
        else {
            apiURL = 'http://localhost:7071/api/CosmosDB';
    
        }
    
        data = await( await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify({"readwrite": "read"})
        }
        )).json();
        return data;
    }

    useEffect(() => {

        async function readAllAnswers() {
            const answers = await readAnswers();
            for (let i = 0; i < answers.length; i++) {
                let points = 1;
                if (answers[i].answer1 === '3') {
                    points++;
                }
                if (answers[i].answer3 === 'EM?? Yeah right!') {
                    points++;
                };
                answers[i].points = points;
            };
            
            function compare( a, b ) {
                if ( a.points < b.points ){
                    return 1;
                }
                if ( a.points > b.points ){
                    return -1;
                }
                return 0;
            }
            answers.sort( compare );
            setAllAnswers(answers);
        };
        readAllAnswers();
    }, []);

    return (
        <div className="result-topdiv">
            <h1>Poengtavle</h1>
            <table className="result-table">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Antall barn?</th>
                        <th>Hvilke jobber?</th>
                        <th>Deltatt i EM?</th>
                        <th>Poengsum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="italic">
                        <td>Fasit</td>
                        <td>3</td>
                        <td>Alle</td>
                        <td>EM?? Yeah right!</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>
                            <br />
                        </td>
                    </tr>
                    {allAnswers.map((item) => (
                    <tr
                        key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.answer1}</td>
                        <td>{item.answer2}</td>
                        <td>{item.answer3}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Results;