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
  render() {
    const {
      data: { title, vote_average, image }
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
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
