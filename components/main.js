class App extends React.Component {
  // Use the render function to return JSX component
  constructor(props) {
    super(props);
    this.state = {
      fact: "",
    };
    this.getRandomFact = this.getRandomFact.bind(this);
  }
  async getRandomFact() {
    const response = await RemoteRepository.getRandomFact();
    this.setState({
      fact: response.text,
    });
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <div>
            <CircularButton text="Random Fact" onClick={this.getRandomFact} />
          </div>
          <p className="fact-content">{this.state.fact}</p>
        </div>
      </div>
    );
  }
}
