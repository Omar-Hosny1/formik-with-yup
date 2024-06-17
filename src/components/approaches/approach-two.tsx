import React from 'react';
import { Box,Input, Button } from '@chakra-ui/react';

interface Props {
  onSubmit: () => void;
  onBack: () => void;
}

function ApproachTwo({ onSubmit, onBack }: Props) {
  return (
    <Box
      width={'fit-content'}
      padding={'10px'}
      display={'flex'}
      m={'10px'}
      justifyContent={' '}
      borderRadius={'10px'}
      alignItems={' '}
      border={'1px solid black'}
    >
      <Box
        bg={'white'}
        padding={'15px'}
        borderRadius={'10px'}
        display={'flex'}
        justifyContent={' '}
        alignItems={'stretch'}
        flexDir={'column'}
        gap={'10px'}
        w={'500px'}
      >
        <Input borderColor={'black'} placeholder="User Name" />
        <Input borderColor={'black'} placeholder="Email" />
        <Input borderColor={'black'} placeholder="Password" />
        <Input borderColor={'black'} placeholder="Gender" />
        <Input borderColor={'black'} placeholder="Age" />
        <Button
          bg={'#3182ce'}
          _hover={{
            bg: '#3182ce',
          }}
          color={'white'}
          type='submit'
          onClick={() => {
            onSubmit();
          }}
        >
          Submit
        </Button>
        <Button
        bg={"white"}
          border={"1px solid #3182ce"}
          _hover={{
            bg: 'white',
          }}
          color={'#3182ce'}
          type='submit'
          onClick={() => {
            onBack();
          }}
        >
          Back 
        </Button>
      </Box>
    </Box>
  );
}

export default ApproachTwo;
