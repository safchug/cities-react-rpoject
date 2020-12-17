const validation = {
  name: [
    {
      required: true,
      message: "Name is required!",
    },
  ],
  location: [
    {
      required: true,
      message: "Location is required",
    },
  ],
  population: [
    {
      required: true,
      message: "Population is required!",
    },
  ],
  area: [
    {
      required: true,
      message: "Area is required",
    },
  ],
  found: [
    {
      required: true,
      message: "Found is required!",
    },
  ],
};

export default validation;
