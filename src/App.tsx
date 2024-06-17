import './App.css';
import React from 'react';
import { Box, Fade, useSteps } from '@chakra-ui/react';
import ApproachOne from './components/approaches/approach-one';
import ApproachTwo from './components/approaches/approach-two';
import ApproachThree from './components/approaches/approach-three';
import StepperForms from './components/stepper_forms';

function App() {
  const { activeStep, goToNext, goToPrevious } = useSteps({ index: 2 });

  return (
    <Box w={'100%'} h={'100vh'} padding={'50px'} bg={'white'}>
      <StepperForms activeStep={activeStep} />
      <Box
        width={'100%'}
        padding={'10px'}
        display={'flex'}
        borderRadius={'10px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box display={activeStep === 1 ? 'unset' : 'none'}>
          <Fade in={activeStep === 1}>
            <ApproachOne onSubmit={goToNext} />
          </Fade>
        </Box>
        <Box display={activeStep === 2 ? 'unset' : 'none'}>
          <Fade in={activeStep === 2}>
            <ApproachTwo onBack={goToPrevious} afterSubmit={goToNext} />
          </Fade>
        </Box>
        <Box display={activeStep === 3 ? 'unset' : 'none'}>
          <Fade in={activeStep === 3}>
            <ApproachThree onBack={goToPrevious} onSubmit={goToNext} />
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
