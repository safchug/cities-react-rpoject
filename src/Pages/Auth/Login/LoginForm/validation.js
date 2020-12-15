const validation = {
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
};

export default validation;
