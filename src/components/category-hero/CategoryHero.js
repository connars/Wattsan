import "./categoryHero.css";

function CategoryHero({ title, subtitle, video }) {
  return (
    <section id="hero" className="hero ">
      <div className="hero__inner container">
        <div className="hero__left">
          <h1>{title}</h1>
          <p>
              {subtitle}
          </p>
        </div>
        <div className="hero__right">
          <ul>
            <li>nav 1</li>
            <li>nav 2</li>
            <li>nav 3</li>
            <li>nav 4</li>
            <li>nav 5</li>
            <li>nav 6</li>
          </ul>
        </div>
      </div>
      <video src={video} autoPlay loop muted />
    </section>
  );
}

export default CategoryHero;
