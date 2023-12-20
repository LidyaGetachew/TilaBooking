import React, { useEffect, useState } from "react";

import { Dispatch } from "react";
const CommonOps = (initialFieldValues: any,validateonChange:false, validate: any) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    const fieldValue = { [name]: value };
    setValues({
      ...values,
      [name]: value
    });
    if(validateonChange)
    {validate({[name]: value});}
  };
  
  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

export default CommonOps;
