export default function Button({ text = "Button", handleClick = "" }) {
  handleClick = () => {};
  return <button onClick={handleClick}>{text}</button>;
}
