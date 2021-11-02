const Section = ({ category, images }) => {
  return (
    <section className="contain">
      <h2>{category}</h2>
      <div className="carrousel">
        {images.map((elem, index) => {
          return <img src={elem} alt="" key={index} />;
        })}
      </div>
    </section>
  );
};

export default Section;
