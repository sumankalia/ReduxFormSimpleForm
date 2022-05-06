import Form from "./Pages/Form";

const App = () => {
  return (
    <div className="App">
      <Form initialValues={{ firstName: "Suman" }} />
    </div>
  );
};

export default App;
