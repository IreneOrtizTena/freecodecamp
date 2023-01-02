import React from "react";
import '../style.css/testimonio.css';

function Testimonio(props) {
  

  return (
    <div className="container-testimonials">
      <img
        className="pic-testimonials"
        src={require(`./pictures/${props.pictures}.png`)}
        alt="pic enma"
      />
      <div className="container-text-testimonials">
        <p className="country-testimonials">
          <strong>{props.name}</strong> en {props.country}</p>
        <p className="job-testimonials">
          {props.job}<strong>{props.firma}</strong></p>
        <p className="text-testimonials">
         "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}
export default Testimonio;
