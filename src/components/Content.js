import Section from "./Section";

const Content = ({ data }) => {
  return (
    <div className="main">
      {data.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
      <footer></footer>
    </div>
  );
};
export default Content;
