import { useEffect, useState } from "react";
import axios from "axios";
import useRandom from "../hooks/useRandom";
import WordDef from "./WordDef";

const FetchCall = () => {

    const [displayHomo, setDisplayHomo] = useState([]);
    const [wordDef, setWordDef] = useState('');
    const [triggerReRender, setTriggerReRender] = useState(false);
    const [oneWord, setOneWord] = useState('');

    let randomWord = useRandom();
    useEffect (() => {
        
        console.log(randomWord);
        let randomResult = randomWord

        // console.log(randomResult);
    
    
        axios({
            url: `https://api.datamuse.com/words`,
            method: "GET",
            dataResponse: "json",
            params: {
                rel_hom: randomWord,
                max: 1,
            }
        }).then((response) => {
            //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
            
            // console.log(response.data[0])
            const similarSound = response.data; 
            // console.log(response);
            console.log(similarSound);
            
        
            if (similarSound.numSyllables >= 2 || similarSound.length === 0 ) {
                setTriggerReRender(!triggerReRender)
            }
            else {

                const twoWords = [similarSound[0].word, randomResult];
                console.log(twoWords);
                
                const wordChoice = (twoWords[Math.floor(Math.random() * twoWords.length)]);
                console.log(wordChoice);
                
                setWordDef(wordChoice);
                // console.log(wordDef);
                
                setDisplayHomo(twoWords);
                console.log(twoWords);
                
            }
            
        })
        
    
    
    } ,[triggerReRender])

    // console.log(randomWord)
    
    const handleClick = () => {
        setTriggerReRender(!triggerReRender)
    }  


        // ******************************************************************


    //     const [responseDef, setResponseDef] = useState('');

    //         useEffect(() => {
    //   let word = wordDef
    //   console.log(word)
    //   axios({
    //       url: `https://api.wordnik.com/v4/word.json/${word}/definitions`,
    //       method: "GET",
    //       dataResponse: "json",
    //       params: {
    //           word: word,
    //           limit: 3,
    //           api_key: '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'
    //       }
    //   }).then((response) => {
    //       //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
    //       console.log(response.data)
          
    //       let definition = response.data
    //       definition.find((defText) => {
    //         setResponseDef(defText.text);
    //         return defText.text
    //       })
    //       // setResponseDef(definition);
          
          
    //   })

    // },[!triggerReRender])


    

    // ***********************************************************************
    console.log(wordDef);
    
    return (
        <div>
            <h2>Issa Test Yoo Reelaxxx</h2>
            {/* <p>{responseDef}</p> */}
            <button>{displayHomo[0]}</button>
            <button>{displayHomo[1]}</button>
            <WordDef wordDef ={wordDef} triggerReRender={triggerReRender}/>
            <button onClick={ handleClick } >next</button>
        </div>
    )
    }

export default FetchCall;

//SI CODE
// Step 1: make a fetch call inside an useEffect to store data on page mount
//Step 2: create logic to pass a randomly generated word into the rel_hom search param
//Step 3: inside the fetch call comp - return a jsx displaying the two random words inside a form as radio bullets - when we choose which word is the correct answer assign “true” value to it. and displays the def of one the words above ( create logic for that )
 
// Step 4: create a custom hook to store user selection with an event handler that compares user input to correct answer
// Step 5: using an if else statement Depending on if userInput is correct or false
    // Step 5a: once a user has made a decision, change the background color of both options to reflect true (green) and false (red)
 
    // Step 6: User can then select to go to the next question using a button that use routing
    // Step 7: After the user has completed 10 questions, display their score and the leaderboard. 
    //     Step 7a: have a text input field where user can enter their name, once submitted using onSubmit, send userInput to new state that then uploads to our firebase database