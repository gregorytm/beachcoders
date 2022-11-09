class Machine extends React.Component {
  render() {
    const { spin1, spin2, spin3 } = this.props;
    const isWinner = spin1 === spin2 && spin2 === spin3;
    return (
      <div>
        <p>{spin1}</p>
        <p>{spin2}</p>
        <p>{spin3}</p>
        <p>{isWinner ? "Winner!" : "Loser"}</p>
      </div>
    );
  }
}
