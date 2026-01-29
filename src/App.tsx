import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlitchText from './components/GlitchText'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


let lyrics =  [
    "Hey, I like your face",
    "You got a wicked lil' smile like the devil's tryna give you away",
    "And I could pray for a sign, but my mind's telling pretty little lies",

    "Tell me, baby, am I preaching to a sinner?",
    "God, you're such a killer, ah, it's like",
    "Any minute, I'll be wrapped around your finger",
    "Can you pull the trigger?",

    "'Cause I like it like that, I need it like that",
    "So treat me like that, you know I'll come back",
    "You scratch and I bite, we kiss then we fight",
    "I like it like that, that, that, that",
    "(That, that, that, that) 'Cause I like it like that",
    "(That, that, that, that)",

    "Because it tastes so bitter, ah-ah",
    "She's like a drug, I can't quit her, it's, it's",
    "It's like I'm falling through the floor, yeah, down the rabbit hole",
    "I cannot deny it, you know you leave me wanting more",

    "Tell me, baby, am I preaching to a sinner?",
    "God, you're such a killer, ah, it's like",
    "Any minute, I'll be wrapped around your finger",
    "Can you pull the trigger?"
  ];


function App() {
  const [palabra , setPalabra] = useState("hello world")
  const [iniciar , setIniciar] = useState(false)
  useEffect(() => {
    
  }, []);


  const handleIniciar = () => {
    setIniciar(true);
    const fetchLyrics = async () => {
     setPalabra(".... ")
  await sleep(14000)//14

  setPalabra("Hey, I like your face")
  await sleep(2000)//16

  setPalabra("You got a wicked lil'")
  await sleep(1080)//17.08

  setPalabra("smile like the devil's tryna")
  await sleep(1130)//18.21

  setPalabra("give you away And I")
  await sleep(1970)//20.18

  setPalabra("could pray for a")
  await sleep(1820)//22

  setPalabra("sign, but my mind's")
  await sleep(1030)//23.03

  setPalabra("telling pretty little lies")
  await sleep(2000)//25.03

  setPalabra("Tell me, baby, am I")
  await sleep(1040)//26.07

  setPalabra("preaching to a sinner?")
  await sleep(1060)//27.13

  setPalabra("God, you're such a killer")
  await sleep(1080)//28.21

  setPalabra("ah, it's like Any")
  await sleep(2070)//30.28

  setPalabra("minute, I'll be wrapped")
  await sleep(980)//31.26

  setPalabra("around your finger Can")
  await sleep(1740)//33

  setPalabra("baby pull the trigger?")
  await sleep(1100)//34.10

  setPalabra("'Cause I like it like that")
  await sleep(1950)//36.05

  setPalabra("I need it like that")
  await sleep(1100)//37.15

  setPalabra("So treat me like that")
  await sleep(1120)//38.27

  setPalabra("you know I'll come back")
  await sleep(1880)//40.15

  setPalabra("You scratch and i bite")
  await sleep(1070)//41.22

  setPalabra(" we kiss then we fight")
  await sleep(1780)//43

  setPalabra("I like it like that, that,that")
  await sleep(6180)//49.18


  setPalabra("that (That, that, that)")
  await sleep(1070)//50.25

  setPalabra("Cause I like it like that")
  await sleep(1850)//52.10

  setPalabra("...")
  await sleep(5040)//57.10

  setPalabra("Because it tastes so bitter,")
  await sleep(1990)//59.09

  setPalabra("ah-ah She's like a drug,")
  await sleep(1100)//1:00.19

  setPalabra("I can't quit her, it's,")
  await sleep(1920)//1:02.12

  setPalabra("it's It's like I'm falling")
  await sleep(1020)//1:03.14

  setPalabra("through the floor, yeah, down")
  await sleep(1120)//1:04.26

  setPalabra("the rabbit hole I cannot")
  await sleep(1850)//1:06.16

  setPalabra("deny it, you know you")
  await sleep(1020)//1:07.13

  setPalabra("leave me wanting more")
  await sleep(1160)//1:08.29

  setPalabra("Tell me, baby, am I")
 await sleep(1040)//1:09.33

  setPalabra("preaching to a sinner?")
  await sleep(1060)//1:10.39

  setPalabra("God, you're such a killer")
  await sleep(1080)//1:11.47

  setPalabra("ah, it's like Any")
  await sleep(2070)//1:13.54

  setPalabra("minute, I'll be wrapped")
  await sleep(980)//1:14.52

  setPalabra("around your finger Can")
  await sleep(1740)//1:16.26

  setPalabra("baby pull the trigger?")
  await sleep(1100)//1:17.36


  setPalabra("<3")

  await sleep(3000)//1:20

    };
    let audio = new Audio("../public/loveshy.mp3")
    audio.play().catch(error => console.error("Playback failed", error));
    fetchLyrics();

  };

  return (
    <div className='d-flex align-items-center justify-content-center text-center vh-100 '>
      <button className={`btn btn-primary ${iniciar ? "d-none" : ""}`} onClick={handleIniciar}>
        iniciar

      </button>
     <GlitchText className={iniciar ? "": "d-none"}>
      {palabra}
     </GlitchText>
    </div>
  )
}

export default App
