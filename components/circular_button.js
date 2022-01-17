function CircularButton(props) {
  return (
    <div className="circular-button" onClick={props.onClick}>
      <span>{props.text}</span>
    </div>
  );
}
