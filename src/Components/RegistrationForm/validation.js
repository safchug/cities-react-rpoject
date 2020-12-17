const validation = {
  name: [
    {
      required: true,
      message: "Please input your full name!",
    },
  ],
  birthday: [
    {
      required: true,
      message: "Please input you Birthday!",
    },
  ],
  mail: [
    {
      type: "email",
      message: "The input is not valid E-mail!",
    },
    {
      required: true,
      message: "Please input your E-mail!",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password!",
    },
  ],
  confirm: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          "The two passwords that you entered do not match!"
        );
      },
    }),
  ],
};

export default validation;
