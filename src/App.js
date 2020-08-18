import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './asset/logo.png';
class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark nav1">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Temas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Calendario</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Quiz</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Log out/ log in</a>
              </li>

            </ul>
          </div>
          <img className="sizelogo" src={logo} alt="ESI" />
        </nav>
        <br></br>
        <div className="contenido border ">
          <form className=" " style={{

          }} >
            <div className="gridl">
              <div>
              <h2>Temas</h2>
              <input
                type="text"
                placeholder="Titulo"
                className="form-control"

                name="nombre" />

              <br></br>

              <input
                type="text"
                placeholder="Url"
                className="form-control"
                name="apellido" />

              <br></br>

              <textarea
                type="text"
                placeholder="Detalle"
                className="form-control"
                name="apellido" />

              <br></br>
              <button type="submit" className="btn btn-primary colorb size">Guardar</button>
              </div>
              <div>
                <h3>Contenido insertado en la app</h3>
              </div>
            </div>


          </form>
        </div>
        <br></br>
        <div className="contenido border  flex">
          <h2 className="margin">Eventos</h2>
          <form className="" style={{

          }} >
            <div className="col-md-3 mar" >
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
              />
              <br></br>
              <button type="submit" className="btn btn-primary colorb">Agregar evento +</button>
            </div>


          </form>
          
        </div>
        <br></br>
        <div className="gridl">
          <div>
          <form  style={{

          }} >

            <div className="col-md-3 contenido quiz border ">
              <h2>Quiz 1</h2>
              <input
                type="text"
                placeholder="Pregunta 1"
                className="form-control"

                name="nombre" />

              <br></br>

              <input
                type="text"
                placeholder="Respuesta"
                className="form-control"
                name="apellido" />

              <br></br>

              <textarea
                type="text"
                placeholder="Detalle"
                className="form-control"
                name="apellido" />

            </div>


          </form>
          <form className="" style={{

          }} >
            <div className="col-md-3 contenido quiz border ">
              <h2>Quiz 2</h2>
              <input
                type="text"
                placeholder="Pregunta 2"
                className="form-control"

                name="nombre" />

              <br></br>

              <input
                type="text"
                placeholder="Respuesta"
                className="form-control"
                name="apellido" />

              <br></br>

              <textarea
                type="text"
                placeholder="Detalle"
                className="form-control"
                name="apellido" />
              <br></br>
              <button type="submit" className="btn btn-primary colorb">Guardar preguntas</button>

            </div>


          </form>
          </div>
            <h2>Examen a insertar</h2>
          
          
        </div>
      </div>
    );
  }
}

export default App;
