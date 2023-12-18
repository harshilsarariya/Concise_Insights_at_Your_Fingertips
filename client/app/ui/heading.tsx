export default function Heading({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  const classes = className;
  return <div className={classes}>{title}</div>;
}
