import React from 'react';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  Box,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

const steps = [
  { title: 'First', description: 'First Approach' },
  { title: 'Second', description: 'Second Approach' },
  { title: 'Third', description: 'Third Approach' },
];

function StepperForms({ activeStep }: { activeStep: number }) {
  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default StepperForms;
