import React from "react";
const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview: "some text for owerview"
};
function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}
class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <button
          type="button"
          onClick={() => {
            this.setState({ show: this.state.show ? false : true });
          }}
        >
          show
        </button>
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
