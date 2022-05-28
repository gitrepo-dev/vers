import { useState } from 'react'
import { emailRegx, passwordRegx } from 'utils/regexs'

export default function useForm(state: any) {

  //values
  const [values, setValues] = useState({ ...state });

  //Errors
  const [errors, setErrors] = useState({ ...state });



  // validate all inputs fields
  const validation = (name: string, value: any) => {
    switch (name) {
      case 'email':
        if (!value) setErrors({ ...errors, email: 'This field is required.' })
        else if (!emailRegx.test(String(value).toLowerCase())) setErrors({ ...errors, email: 'Must be a valid email.' })
        else setErrors({ ...errors, email: '' })
        console.log(errors.email)
        break;
      case 'password':
        if (!value) setErrors({ ...errors, password: 'This field is required.' })
        else if (!passwordRegx.test(value)) setErrors({ ...errors, password: 'Must be strong password' })
        else setErrors({ ...errors, password: '' })
        break;
      default:
        break;
    }
  }

  const handleChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
    event.persist();
    const { name, value } = event.target
    validation(name, value)
    setValues({ ...values, [name]: value })
  }

  const isValidForm = (): any => {
    for (const key in values) {
      validation(key, values[key])
    }
  }

  return {
    values,
    errors,
    handleChange,
    isValidForm
  }
}
