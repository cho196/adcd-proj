export default function Recipe({ h1text = "", src = "", ptext = "" }) {
  return (
    <div h1text="" src="" ptext="">
      <h1>{h1text}</h1>
      <img src={src} />
      <p>{ptext}</p>
    </div>
  );
}
