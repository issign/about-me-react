import className from "classnames";

const Link = ({ href, children, desktop, mobile, ...rest }) => {
  const classes = className(
    "hover:opacity-100 transition-opacity duration-300",
    {
      "opacity-70": desktop,
      "group px-10 opacity-80": mobile,
    }
  );

  return (
    <li className={classes}>
      <a href={href} {...rest}>
        {children}
      </a>
    </li>
  );
};

export default Link;
