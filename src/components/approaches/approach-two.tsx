import React from 'react';
import { Box, Button, useToast } from '@chakra-ui/react';
import { ErrorMessage, Field, Formik, FormikHelpers } from 'formik';
import ApproachTwoValidationSchema from '../../validations/approach-two-validations';

interface Props {
  afterSubmit: () => void;
  onBack: () => void;
}

interface FistApproachProps {
  username: string;
  email: string;
  password: string;
  gender: string;
  age: number;
}

const fieldStyles = {
  padding: '8.5px 16px',
  borderWidth: '1px',
  transition: '0.3s',
  borderColor: 'black',
  borderRadius: '0.375rem',
};

const initialValues: FistApproachProps = {
  username: '',
  email: '',
  password: '',
  gender: '',
  age: 0,
};

function ApproachTwo({ afterSubmit, onBack }: Props) {
  const toast = useToast();

  const onSubmit = (
    values: FistApproachProps,
    formik: FormikHelpers<FistApproachProps>
  ) => {
    formik.validateForm();
    console.log(values);
    toast({
      title: 'Submitted Successfully',
      status: 'success',
      description: 'Forwarding To The Last Form (Approach)',
    });
    afterSubmit();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={ApproachTwoValidationSchema}
      initialValues={initialValues}
    >
      {(formik) => (
        <Box
          width={'fit-content'}
          padding={'10px'}
          display={'flex'}
          m={'10px'}
          justifyContent={'center'}
          borderRadius={'10px'}
          alignItems={'center'}
          border={'1px solid black'}
        >
          <Box
            bg={'white'}
            padding={'15px'}
            borderRadius={'10px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'stretch'}
            flexDir={'column'}
            gap={'10px'}
            w={'500px'}
          >
            <label htmlFor="user">User Name</label>
            <Field
              className="hover-input"
              name="username"
              placeholder="User Name"
              style={fieldStyles}
            />
            <ErrorMessage component={'span'} className="red" name="username" />

            <label htmlFor="email">Email</label>
            <Field
              className="hover-input"
              name="email"
              placeholder="Email"
              type="email"
              style={fieldStyles}
            />
            <ErrorMessage component={'span'} className="red" name="email" />

            <label htmlFor="password">Password</label>
            <Field
              className="hover-input"
              name="password"
              placeholder="Password"
              type="password"
              style={fieldStyles}
            />
            <ErrorMessage component={'span'} className="red" name="password" />

            <label htmlFor="gender">Gender</label>
            <Field
              as="select"
              className="hover-input"
              name="gender"
              style={fieldStyles}
            >
              <option>Please Enter Your Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Field>
            <ErrorMessage component={'span'} className="red" name="gender" />

            <label htmlFor="age">Age</label>
            <Field
              className="hover-input"
              name="age"
              placeholder="Age"
              type="number"
              style={fieldStyles}
            />
            <ErrorMessage component={'span'} className="red" name="age" />

            <Button
              bg={'#3182ce'}
              _hover={{
                bg: '#3182ce',
              }}
              color={'white'}
              type="submit"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Submit
            </Button>
            <Button
              bg={'white'}
              border={'1px solid #3182ce'}
              _hover={{
                bg: 'white',
              }}
              color={'#3182ce'}
              type="submit"
              onClick={() => {
                onBack();
              }}
            >
              Back
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
}

export default ApproachTwo;
