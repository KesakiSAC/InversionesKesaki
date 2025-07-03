import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const PopupForm = ({ onClose }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t91tehl", "template_r93caq3", form.current, {
        publicKey: "yMW4-1gdwySt4yymT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true);
          form.current.reset();
          console.log("message send");
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50">
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="relative bg-white rounded-lg shadow-sm w-full max-w-2xl">
          <div class="relative bg-white rounded-lg shadow-sm ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
              <h1 className="text-acentGreen font-onest text-2xl font-bold ">
                COTICE CON NOSOTROS
              </h1>
              <button
                type="button"
                onClick={onClose}
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
              <h3 className="text-acentOrange1  font-onest text-2xl font-bold ">
                Proyecto Alonso de Molina
              </h3>
              <p className=" text-xl font-onest py">
                Jr. Alonso de Molina 546, Santiago de Surco, Lima, Perú.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-5">
                  <label className="block mb-2 text-base font-medium text-black">
                    Nombre
                  </label>

                  <input
                    type="text"
                    name="client_name"
                    placeholder="Nombre"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-base font-medium text-black">
                    Apellido
                  </label>

                  <input
                    type="text"
                    name="client_lastname"
                    placeholder="Apellido"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-base font-medium text-black">
                    Telefono de contacto
                  </label>

                  <input
                    type="phone"
                    name="phone"
                    placeholder="Telefono de contacto"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                    autoComplete="off"
                  />
                </div>

                <div class="mb-5">
                  <label className="block mb-2 text-base font-medium text-black">
                    DNI
                  </label>

                  <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    required
                    autoComplete="off"
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="email"
                    className="block mb-2 text-base font-medium text-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="id"
                    name="client_email"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    autoComplete="off"
                    required
                  />
                </div>

                <input
                  type="submit"
                  value="Enviar"
                  className="text-white bg-acentOrange   font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                />
                {isSent && (
                  <p className="text-green-600 mt-4 font-semibold text-center">
                    ¡Mensaje enviado exitosamente!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
