import * as Yup from 'yup';

const ApproachOneValidationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .max(15, 'Your User Name Must my 15 Char as Maximum')
    .required('Please Enter Your User Name')
    .min(0, "This Field Can't Be Empty"),
  email: Yup.string()
    .trim()
    .email('Please Enter a Valid Email')
    .required('Please Enter Your Email')

    .min(0, "This Field Can't Be Empty"),
  password: Yup.string()
    .trim()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be no more than 20 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  gender: Yup.string()
    .trim()
    .required('Please Enter Your Gender')
    .oneOf(['Male', 'Female']),

  age: Yup.number()
    .default(0)
    .max(100, "Maximum Age Cant't be more than 100")
    .min(10, "Minimum Age Cant't be less than 10"),
});

export default ApproachOneValidationSchema;
