import "./Person.css";

const Person = (props) => {
  const style = {
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div style={style} className="person">
      <p onClick={props.click}>
        Hi, I'm {props.name}. I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeTxt} value={props.name}></input>
    </div>
  );
};

export default Person;
