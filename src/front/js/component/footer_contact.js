import React from "react";
import { Link } from "react-router-dom";

// es el pre-footer que aparece en varias Vistas para llevar al usuario a la Vista Contactos
// no aparece en todas las vistas, por eso se lo separo del footer.
const Footer_contact = () => {
  return (
    <>
      <section>
        <div className="p-2 main-color-bg p-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-light mt-lg-4 px-lg-5 mx-lg-5 p-lg-3">
                Buscamos facilitar la vida de las personas con celiaquía,
                intolerancia al gluten o alergias.
              </h2>
            </div>
            <div className="col">
              <Link
                to="/pages/contact"
                className="btn btn-light btn-lg m-lg-5 mt-3 p-lg-4"
              >
                Contactanos para afiliarte!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer_contact;
