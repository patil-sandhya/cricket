import React, { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Button } from '@chakra-ui/react';

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <Dashboard />
      ) : (
        <Button colorScheme='whatsapp' onClick={() => setShow(true)}>
          Start Game
        </Button>
      )}
    </div>
  );
};
