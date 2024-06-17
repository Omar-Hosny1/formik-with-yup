import { Text } from '@chakra-ui/react';
import React from 'react';

interface CustomErrorMessageProps {
  errorMessage: string | undefined;
  isTouched: boolean | undefined;
}

function CustomErrorMessage({
  errorMessage,
  isTouched,
}: CustomErrorMessageProps) {
  return isTouched && errorMessage ? (
    <Text color={'red'} fontSize={'15px'}>
      {errorMessage}
    </Text>
  ) : null;
}

export default CustomErrorMessage;
