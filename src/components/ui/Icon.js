const Icon = ({ href, className, children }) => {
  const classes = `text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out ${className}`;

  return (
    <a href={href} className={classes} target="_blank">
      {children}
    </a>
  );
};

export default Icon;
