import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4dtipwh",
        "template_t98fe0n",
        form.current,
        "-4llVFsw2tGWqFQ72",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email received!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="bg-theme-primary pb-24 w-full" id="contact">
      <div className="max-w-[1200px] mx-auto w-full px-6">
        {/* Section Header */}
        <div className="text-left mb-16 pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-4"
          >
            Contact <span className="text-[#44A076]">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            className="h-1 w-16 bg-[#44A076] rounded-full origin-left"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-theme-secondary text-lg leading-relaxed max-w-md italic">
              "Every great collaboration starts with a conversation. Let's
              discuss how we can build something impactful together."
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-theme-card border border-theme flex items-center justify-center text-[#44A076] group-hover:bg-[#44A076] dark:group-hover:text-white group-hover:text-black transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-theme-muted text-xs font-bold uppercase tracking-widest mb-1">
                    Email
                  </h4>
                  <p className="text-theme-primary font-medium hover:text-[#44A076] transition-colors">
                    shorifulhabib.iit@gmail.com{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-theme-card border border-theme flex items-center justify-center text-[#44A076] group-hover:bg-[#44A076] dark:group-hover:text-white group-hover:text-black transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-theme-muted text-xs font-bold uppercase tracking-widest mb-1">
                    Phone
                  </h4>
                  <p className="text-theme-primary font-medium hover:text-[#44A076] transition-colors">
                    +8801612939235
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-theme-card border border-theme flex items-center justify-center text-[#44A076] group-hover:bg-[#44A076] dark:group-hover:text-white group-hover:text-black transition-all duration-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-theme-muted text-xs font-bold uppercase tracking-widest mb-1">
                    Location
                  </h4>
                  <p className="text-theme-primary font-medium hover:text-[#44A076] transition-colors">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-theme-card-alpha backdrop-blur-xl border border-theme p-8 md:p-10 rounded-[2rem] shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-left text-theme-muted text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    name="user_name"
                    className="w-full bg-theme-input border border-theme focus:border-[#44A076]/40 px-5 py-4 rounded-xl outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-left text-theme-muted text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    name="user_email"
                    className="w-full bg-theme-input border border-theme focus:border-[#44A076]/40 px-5 py-4 rounded-xl outline-none transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="text-left text-theme-muted text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  placeholder="How can I help you today?"
                  name="message"
                  rows="5"
                  className="w-full bg-theme-input border border-theme focus:border-[#44A076]/40 px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#44A076] to-[#2E7A56] hover:from-[#358B63] hover:to-[#216142] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(68,160,118,0.2)] transition-all duration-500 uppercase tracking-widest text-sm"
              >
                Send Message{" "}
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
