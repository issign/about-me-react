import className from "classnames";

const Button = ({ children, primary }) => {
  const classes = className(
    "px-3 py-1.5 cursor-pointer rounded hover:scale-105 transition-all duration-300",
    {
      "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white":
        primary,
    }
  );

  return <button className={classes}>{children}</button>;
};

export default Button;
