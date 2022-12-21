import axios from "axios"
import { useEffect, useRef, useState } from "react"



const WordDef = ({ wordDef, triggerReRender, setTriggerReRender }) => {
  const keyRadojko = 'cb0kpdqhzyzmlou550ldukoadiyayyvp5607r0qnhpxxo85fb'
  // const keyMatt = '27lonz8iuunssx6o3uadbmcjgcyja363kgwsvbkxoqdada30f'

  const [responseDef, setResponseDef] = useState('');
  const parseDef = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g; 

  // To prevent useEffect on page mount
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    }
    else {
      let word = wordDef
      console.log(word)
      axios({
        url: `https://api.wordnik.com/v4/word.json/${word}/definitions`,
        method: "GET",
        dataResponse: "json",
        params: {
          word: word,
          limit: 10,
          api_key: keyRadojko
        }
      }).then((response) => {
        console.log(response)
        let definition = response.data
        definition.find((defText) => {
          if (defText.text === 0){
            setTriggerReRender(!triggerReRender)
          }
          else {
            let parseString = (defText.text).replace(parseDef, '')
            setResponseDef(parseString);
          }
        })
      })

    }


  }, [wordDef])



  return (
    <div>
      <p>{responseDef}</p>
    </div>
  )
}

export default WordDef;