import React, { useState } from 'react'
import { Button,HStack, Input } from '@chakra-ui/react'

export const Form = ({placeHold,handleSubmit}) => {
    const [s, setS] = useState(0)

const sendVal = (e)=>{
  
    e.preventDefault()
    if(s > 6){
        alert("enter the value between 1 to 6")
    }{
        handleSubmit(Number(s))
    }
}
  return (
    <HStack spacing='24px'>
    <form onSubmit={sendVal}>
     
    <Input variant='filled' onChange={(e)=> setS(e.target.value)} type='number' placeholder={placeHold} />
    <Button type="submit"  colorScheme='facebook'>Enter</Button>
    
    </form>
    </HStack>
  )
}
