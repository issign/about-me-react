import className from "classnames";

const Button = ({ children, primary }) => {
  const classes = className(
    "px-6 py-2 rounded hover:scale-105 transition-all duration-300",
    {
      "color-primary text-white font-bold": primary,
    }
  );

  return <button className={classes}>{children}</button>;
};

export default Button;
