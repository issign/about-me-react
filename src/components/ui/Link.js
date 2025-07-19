import className from "classnames";

const Link = ({ href, children, desktop, mobile, isActive, ...rest }) => {
  const classes = className(
    "hover:opacity-100 transition-opacity duration-300 relative",
    {
      "opacity-70": desktop,
      "group px-10 opacity-80": mobile,
      "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-blue-500 after:rounded-full":
        isActive,
    }
  );

  return (
    <li>
      <a href={href} {...rest} className={classes}>
        {children}
      </a>
    </li>
  );
};

export default Link;
