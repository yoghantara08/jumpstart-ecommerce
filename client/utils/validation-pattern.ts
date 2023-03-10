export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
};

export const numberPattern = {
  value: /^[0-9]+$/,
  message: "Please enter a number",
};
