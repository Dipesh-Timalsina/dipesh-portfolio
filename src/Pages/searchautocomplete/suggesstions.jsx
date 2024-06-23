export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index} style={{ color: "white" }}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
