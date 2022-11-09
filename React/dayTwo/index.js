class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Try Your Luck!</h1>
        <Machine spin1="🍎" spin2="🍇" spin3="🍒" />
        <Machine spin1="🍎" spin2="🍎" spin3="🍎" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
