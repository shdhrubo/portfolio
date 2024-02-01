import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4dtipwh",
        "template_t98fe0n",
        form.current,
        "-4llVFsw2tGWqFQ72"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email received!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="  bg-[#10121B] pb-10">
      <h3 className="text-2xl text-[#44A076] border-b-4 border-[#44A076] inline-block mt-20 mb-4">
        Contact Me
      </h3>
      <div className="bg-[#1E2A3A] w-80  mx-auto rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="w-full p-5">
          <div class="form-control">
            <input
              type="text"
              required
              placeholder="Name"
              name="user_name"
              class="input input-bordered mt-3"
            />
          </div>
          <div class="form-control">
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              class="input input-bordered mt-3"
            />
          </div>
          <div class="form-control">
            <textarea
              rows={5}
              required
              placeholder="Your message here..."
              name="message"
              class="textarea textarea-bordered mt-3"
            />
          </div>
          <h4 className="text-xl text-white">
            Send message to{" "}
            <a
              href="mailto:shorifulhabib.iit@gmail.com"
              className="text-[#44A076]"
            >
              shorifulhabib.iit@gmail.com
            </a>
          </h4>
          <button className="btn btn-sm bg-[#44A076] mt-3">
            {" "}
            <input type="submit" value="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
