import axios from "axios"
import { useEffect, useState } from "react"



const WordDef = ({ wordDef, triggerReRender }) => {
  const keyRadojko = 'cb0kpdqhzyzmlou550ldukoadiyayyvp5607r0qnhpxxo85fb'
  const keyMatt = '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'

  const [responseDef, setResponseDef] = useState('');
  const parseDef = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

  // console.log(string);

  useEffect(() => {
    let word = wordDef
    console.log(word)
    axios({
      url: `https://api.wordnik.com/v4/word.json/${word}/definitions`,
      method: "GET",
      dataResponse: "json",
      params: {
        word: word,
        limit: 5,
        api_key: keyRadojko
      }
    }).then((response) => {
      //NEXT STEP : ADD error handling for when only one word is returned - have the api run again until two words are returned
      console.log(response.data)

      let definition = response.data
      definition.find((defText) => {
        let parseString = (defText.text).replace(parseDef, '');
        setResponseDef(parseString);
        // return defText.text
      })

    })


  }, [wordDef])



  return (
    <div>
      <p>{responseDef}
        {console.log(responseDef)}</p>
    </div>
  )
}

export default WordDef;