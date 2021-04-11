function Demo(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Chào mừng đến với khóa học reactJS</p>
    </div>
  );
}

var app = (
    <div>
        <Demo name="Thành" age="20"/>
        <Demo name="Vũ" age="18"/>
    </div>
)
    
export default app;
