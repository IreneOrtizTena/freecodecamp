import "./App.css";
import Testimonio from "./componentes/testimonials";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          name="Shawn Wang"
          country=" Singapur"
          job="Ingeniero de Software"
          firma=" Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
          pictures="chino"
          />
        <Testimonio
        name="Sarah China"
        country="en Nigeria"
        job="Ingeniera de Software"
        firma=" ChatDesk"
        testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        pictures="sarah" 
          />

        <Testimonio

        name="Emma Bostian"
        country="Suecia"
        job="Ingeniera de Software"
        firma=" Spotify"
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify"
        pictures="enma"
        />

      </div>
    </div>
  );
}

export default App;
