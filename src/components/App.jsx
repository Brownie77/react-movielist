import React from "react";
import "../index.css";
const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview: "some text for owerview"
};
function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}
class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }
  toggleOwerview = () => {
    this.setState({ show: this.state.show ? false : true });
  };
  handleLike = () => {
    this.setState({ like: !this.state.like });
  };
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log(this.state);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOwerview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            style={
              this.state.like ? { background: "blue" } : { background: "white" }
            }
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}
// function MovieItem(props) { <---- function component
//   const {
//     data: { title, vote_average, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
