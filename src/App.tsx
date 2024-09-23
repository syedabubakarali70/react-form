// import { useEffect, useState } from "react";
// import { InputWithLabel } from "./components/ui/inputWithLabel";
// import { Button } from "./components/ui/button";

// const App = () => {
//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [isFieldTouched, setIsFieldTouched] = useState({
//     username: false,
//     email: false,
//     password: false,
//     confirmPassword: false,
//   });

//   const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: e.target.value,
//     });
//   };

//   const handleIsFieldTouched = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name } = e.target;
//     setIsFieldTouched({
//       ...isFieldTouched,
//       [name]: true,
//     });
//   };

//   return (
//     <div className="w-full flex justify-center my-10">
//       <div className="flex flex-col gap-4 min-w-96">
//         <InputWithLabel
//           label="Username"
//           placeholder="Enter username"
//           type="text"
//           name="username"
//           value={formValues.username}
//           error={formErrors.username}
//           handleChange={e => handleFormValues(e)}
//           handleBlur={e => handleIsFieldTouched(e)}
//         />
//         <InputWithLabel
//           label="Email"
//           placeholder="Enter email"
//           type="email"
//           name="email"
//           error={formErrors.email}
//           value={formValues.email}
//           handleChange={e => handleFormValues(e)}
//           handleBlur={e => handleIsFieldTouched(e)}
//         />
//         <InputWithLabel
//           label="Password"
//           placeholder="Enter Password"
//           type="password"
//           name="password"
//           error={formErrors.password}
//           handleChange={e => handleFormValues(e)}
//           value={formValues.password}
//           handleBlur={e => handleIsFieldTouched(e)}
//         />
//         <InputWithLabel
//           label="Confirm password"
//           placeholder="Enter Password"
//           type="password"
//           name="confirmPassword"
//           error={formErrors.confirmPassword}
//           handleChange={e => handleFormValues(e)}
//           handleBlur={e => handleIsFieldTouched(e)}
//           value={formValues.confirmPassword}
//         />
//         <Button type="submit">Submit</Button>
//       </div>
//     </div>
//   );
// };

// export default App;

// useEffect(() => {
//   console.log(isFieldTouched);
//   console.log(formValues);
//   console.log(formErrors);
//   if (formValues.username.length < 5) {
//     if (isFieldTouched.username === true) {
//       setFormErrors({
//         ...formErrors,
//         username: "Username is shorter than 5 characters",
//       });
//     }
//   } else {
//     setFormErrors({
//       ...formErrors,
//       username: "",
//     });
//   }
//   if (formValues.password.length < 8) {
//     if (isFieldTouched.password === true) {
//       setFormErrors({
//         ...formErrors,
//         password: "Password is shorter than 8 characters",
//       });
//     }
//   } else {
//     setFormErrors({
//       ...formErrors,
//       password: "",
//     });
//   }
// }, [isFieldTouched, formErrors, formValues]);

import { useEffect, useState } from "react";
import { InputWithLabel } from "./components/ui/inputWithLabel";
import { Button } from "./components/ui/button";

const App = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isFieldTouched, setIsFieldTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleIsFieldTouched = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setIsFieldTouched({
      ...isFieldTouched,
      [name]: true,
    });
  };

  useEffect(() => {
    if (!isFormSubmitted) validateForm();
  }, [formValues]);

  const validateForm = () => {
    const errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (formValues.username.length < 5) {
      errors.username = "Username must be at least 5 characters long.";
    }

    if (!emailRegex.test(formValues.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (formValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);

    return (
      !errors.username &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsFormSubmitted(true);
      setFormValues({
        username: "",
        confirmPassword: "",
        email: "",
        password: "",
      });
      setIsFieldTouched({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
      });

      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 2500);
    } else {
      setIsFormSubmitted(false);
    }
  };

  return (
    <div className="w-full flex justify-center my-10">
      <div className="flex flex-col gap-4 min-w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-96">
          <InputWithLabel
            label="Username"
            placeholder="Enter username"
            type="text"
            name="username"
            value={formValues.username}
            error={isFieldTouched.username ? formErrors.username : ""}
            handleChange={e => handleFormValues(e)}
            handleBlur={e => handleIsFieldTouched(e)}
          />
          <InputWithLabel
            label="Email"
            placeholder="Enter email"
            type="email"
            name="email"
            value={formValues.email}
            error={isFieldTouched.email ? formErrors.email : ""}
            handleChange={e => handleFormValues(e)}
            handleBlur={e => handleIsFieldTouched(e)}
          />
          <InputWithLabel
            label="Password"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={formValues.password}
            error={isFieldTouched.password ? formErrors.password : ""}
            handleChange={e => handleFormValues(e)}
            handleBlur={e => handleIsFieldTouched(e)}
          />
          <InputWithLabel
            label="Confirm password"
            placeholder="Enter Password"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            error={
              isFieldTouched.confirmPassword ? formErrors.confirmPassword : ""
            }
            handleChange={e => handleFormValues(e)}
            handleBlur={e => handleIsFieldTouched(e)}
          />
          <Button type="submit">Submit</Button>
        </form>

        {isFormSubmitted && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default App;
