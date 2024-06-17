import React from 'react';
import { Box, Input, Button, FormControl, Select, useToast } from '@chakra-ui/react';
import { useFormik } from 'formik';
import ApproachOneValidationSchema from '../../validations/approach-one-validations';
import CustomErrorMessage from '../custom_error_message';

interface Props {
  onSubmit: () => void;
}

function ApproachOne({ onSubmit }: Props) {

  const toast = useToast();

  const formik = useFormik({
    validationSchema: ApproachOneValidationSchema,
    initialValues: {
      username: '',
      email: '',
      password: '',
      gender: '',
      age: 0,
    },
    onSubmit: (values) => {
      formik.validateForm();
      console.log(values);
      toast({
        title: "Submitted Successfully",
        status: "success",
        description: "Forwarding To The Second Form (Approach)"
      });
      onSubmit();
    },
  });

  return (
    <FormControl>
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
          <Input
            borderColor={'black'}
            // name="username"
            // value={formik.values.username}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("username")}
            id="user"
            placeholder="User Name"
          />
          <CustomErrorMessage
            errorMessage={formik.errors.username}
            isTouched={formik.touched.username}
          />

          <label htmlFor="user">Email</label>
          <Input
            borderColor={'black'}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            placeholder="Email"
          />
          <CustomErrorMessage
            errorMessage={formik.errors.email}
            isTouched={formik.touched.email}
          />

          <label htmlFor="user">Password</label>
          <Input
            borderColor={'black'}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            placeholder="Password"
          />
          <CustomErrorMessage
            errorMessage={formik.errors.password}
            isTouched={formik.touched.password}
          />

          <label htmlFor="user">Gender</label>
          <Select
            borderColor={'black'}
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="gender"
            placeholder="Please Select Your Gender"
          >
            <option>Female</option>
            <option>Male</option>
          </Select>
          <CustomErrorMessage
            errorMessage={formik.errors.gender}
            isTouched={formik.touched.gender}
          />

          <label htmlFor="user">Age</label>
          <Input
            borderColor={'black'}
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="age"
            placeholder="Age"
          />
          <CustomErrorMessage
            errorMessage={formik.errors.age}
            isTouched={formik.touched.age}
          />
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
        </Box>
      </Box>
    </FormControl>
  );
}

export default ApproachOne;
