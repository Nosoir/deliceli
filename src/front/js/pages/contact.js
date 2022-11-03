import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const button_submit = () => {
    console.log("formulario enviado");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Contactanos!</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            {/* card  */}
            <div className="col mt-4">
              <div className="card">
                <img
                  src="https://cdn.winsightmedia.com/platform/files/public/800x420/chef-demo-cooking-saucing-dish.jpg"
                  className="card-img-top"
                />
                <div className="card-body p-5">
                  <h3 className="card-title">DeliCeli.uy</h3>
                  <p className="card-text">
                    Alimentación bio sin añadidos, sin gluten, vegana.
                    <br />
                    Rivera 3344, Apto 103, Oficina 134
                    <br />
                    Tel. +598 33 44 66
                    <br />
                    Mail. hola@deliceli.uy
                  </p>
                  <h4 className="pt-4 pb-4">
                    <i className="fab fa-facebook m-2"></i>
                    <i className="fab fa-instagram m-2"></i>
                    <i className="fab fa-linkedin m-2"></i>
                    <i className="fab fa-whatsapp m-2"></i>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-8 mt-4">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div>
                    <div className="card p-5">
                      <div className="text-left">
                        <h2>¿Cómo podemos ayudarte?</h2>
                        <p>
                          Por favor, cuéntanos un poco sobre ti para que podamos
                          personalizar tu experiencia de bienvenida.
                        </p>
                      </div>

                      <div className="mt-3 d-flex flex-row gap-2">
                        <label className="radio">
                          <input
                            type="radio"
                            name="flexRadioDefault"
                            className="form-check-input"
                          />
                          <span>
                            <i className="fas fa-heart d-inline mx-2"></i>
                            Quiero vender mis platos
                          </span>
                        </label>
                        <label className="radio">
                          <input
                            type="radio"
                            name="flexRadioDefault"
                            className="form-check-input"
                          />
                          <span>
                            <i className="fas fa-utensils d-inline mx-2"></i>
                            Quiero comprar un plato
                          </span>
                        </label>
                      </div>

                      <hr />

                      <div className="mt-2">
                        <div className="form pb-3">
                          <label>
                            <i className="fa fa-user  d-inline mx-2 "></i>Nombre
                            Completo
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-map  d-inline mx-2"></i>
                            Departamento
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-phone  d-inline mx-2"></i>
                            Teléfono
                          </label>
                          <div className="phone">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-envelope  d-inline mx-2"></i>
                            Mail
                          </label>
                          <div className="mail pb-3">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 pb-2">
                        <label>
                          <i className="fa fa-comment  d-inline mx-2"></i>
                          Mensaje
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Descripcion"
                          defaultValue="Escribi acá tu mensaje ..."
                        />
                      </div>

                      <div className="mt-3">
                        <button
                          onClick={button_submit}
                          className="button btn btn-primary w-100 d-flex justify-content-center align-items-center"
                        >
                          <span>Enviar mensaje</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

Contact.propTypes = {
  match: PropTypes.object,
};
