import * as React from 'react';
import FormularioMedico from './formularios/FormularioMedico';
import FormularioCotizacion from './formularios/FormularioCotizacion';
import FormularioCursos from './formularios/FormularioCursos';
import FormularioSolEmpleo from './formularios/FormularioSolEmpleo';
import FormularioHoteleria from './formularios/FormularioHoteleria';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav
        style={{ height: "60px" }}
        className="navbar navbar-expand navbar-dark bg-dark"
      >
        <a
          href={"/inicio"}
          className="navbar-brand"
          style={{ fontWeight: "bold", fontSize: 24 }}
        >
          Formularios marca patito por Emanuel
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to={"/medico"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Medico
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/cotizacion"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Cotizacion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/curso"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Curso
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/empleo"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Empleo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/hotel"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Hotel
            </Link>
          </li>
        </div>
      </nav>
      <div
        style={{
         
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
         }}
      >
        <Switch>
          <Route
            exact
            path={["/", "/inicio", "/medico"]}
            component={FormularioMedico}
          />
          <Route exact path="/cotizacion" component={FormularioCotizacion} />
          <Route exact path="/curso" component={FormularioCursos} />
          <Route exact path="/empleo" component={FormularioSolEmpleo} />
          <Route exact path="/hotel" component={FormularioHoteleria} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
