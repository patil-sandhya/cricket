import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form } from './Form'
import { VStack, useToast } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import CountdownTimer from './timer'

export const Dashboard = () => {
    const [cur, setCur] = useState("Player 1")
    const [s1, setS1] = useState(0)
    const [s2, setS2] = useState(0)
    const [count, setCount] = useState(0)
    const [curS1, setCurS1] = useState(0)
    const [curS2, setCurS2] = useState(0)
    const toast = useToast()
  const [seconds, setSeconds] = useState(10);

    //let count=0
    useEffect(() => {
        if(count < 4){
            const intervalId = setInterval(() => {
                if (seconds > 0) {
                  setSeconds((prevSeconds) => prevSeconds - 1);
                } else {
                  clearInterval(intervalId);
                }
              }, 1000);
        return () => clearInterval(intervalId);
          
        }
        
      }, [seconds,s1,s2]);

const handleForm1 = (val)=>{
    setCurS1(val)
}
const handleForm2 = (val)=>{
    setCurS2(val)
}

useEffect(()=>{
    //console.log("game started")
    if(count < 4){
        
        const t = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            console.log("time", s1, s2,count, curS1, curS2)
            
            if(curS1 === curS2 || count === 3){
                if(count === 3){
                    setS2((prev)=> +prev +curS2)
                }
                if(curS1 === curS2){
                toast({
                    title: 'Enter Same Value',
                    description: `${curS1} ${curS1}`,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
                }
                if(cur === "Player 2" ){
                    if(s1 > s2){
                        toast({
                            title: 'Winner!',
                            description: "Player 1",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                       // alert("Player 1 win")
                        setCount(7)
                    }else
                    if(s1 < s2){
                        toast({
                            title: 'Winner!',
                            description: "Player 2",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                        setCount(7)
                    }else{
                        toast({
                            title: 'Tie!',
                            description: "Same score",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                        setCount(7)
                    }
                    
                }else{
                    toast({
                        title: 'Out!',
                        description: `${cur} out`,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                    //alert(`${cur} out`)
                    setCur("Player 2")
                }
                
            }else{
                if(cur === "Player 1"){
                    setS1((prev)=> +prev +curS1)
                    
                }else{
                    setS2((prev)=> +prev +curS2)
                }
            }
            if(count === 1){
                setCur("Player 2")
            }
            setCurS1(0)
            setCurS2(0)
            setSeconds(10)
        }, 10000);
    
        const cleanUp = ()=>{
            //console.log("xlea", s1, s2,count, curS1, curS2)
            clearInterval(t)
           } 
        
           return cleanUp
    }
    
},[s1, s2, count,curS1, curS2,toast,cur])


  return (
    <div>Current Palyer - {cur}
    <h3>Player 1 - {s1}</h3>
    <h3>Player 2 - {s2}</h3>
    <br />
     <div>
      {seconds === 0 ? (
        <p>Time's up!</p>
      ) : (
        <p>{`Remaining Time: ${seconds} seconds`}</p>
      )}
    </div>
    <VStack>
    <Heading as='h4' size='md'>
    Enter the value between 1-6
  </Heading>
    <Form placeHold="Player 1"  handleSubmit={handleForm1}/>
    <Form placeHold="Player 2" handleSubmit={handleForm2} />
    </VStack>
    </div>
  )
}
