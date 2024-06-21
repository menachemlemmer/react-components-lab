export default function WeatherForecast(props) {
  return (
    <div className="border-gray-80 flex flex-1 flex-col items-center border px-2.5 py-8">
      <h2 className="text-2xl"> {props.day} </h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span className="font-semibold">conditions: </span> {props.conditions}
      </p>
      <p>
        <span className="font-semibold">time: </span> {props.time}
      </p>
    </div>
  );
}
