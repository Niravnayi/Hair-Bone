import React, { useState } from "react";
import hero from "../assets/Ad/saloon.webp";
import { Link } from "react-router-dom";
import FAQ from "../components/FaqSection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf7f2] p-6">
      <h2 className="text-3xl font-semibold text-[#3d2b1f]">Let’s talk</h2>
      <p className="text-[#6c584c] mt-2 text-center font-semibold font-Gambetta">
        Get Your Appointment in Just a Click!
      </p>
      <form
        action="https://formsubmit.co/nirav.codage@gmail.com"
        method="POST"
        className="mt-6 w-full max-w-2xl bg-primary p-6 rounded-lg"
        onChange={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full name*"
              className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone*"
            className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <hr className="my-6 border-[#d3c4b5]" />

        {/* Date and Time Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#3d2b1f] font-medium mb-1">
              Select Date
            </label>
            <input
              type="date"
              name="appointmentDate"
              className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
              onChange={handleChange}
            />
            {errors.appointmentDate && (
              <p className="text-red-500 text-sm">{errors.appointmentDate}</p>
            )}
          </div>
          <div>
            <label className="block text-[#3d2b1f] font-medium mb-1">
              Select Time
            </label>
            <input
              type="time"
              name="appointmentTime"
              className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
              onChange={handleChange}
            />
            {errors.appointmentTime && (
              <p className="text-red-500 text-sm">{errors.appointmentTime}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-[#3d2b1f] font-medium mb-1">
            What service are you interested in?
          </label>
          <select
            name="service"
            className="w-full p-3 rounded-full border bg-[#f3ebe5] focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select one...</option>
            <option value="Haircut">Haircut</option>
            <option value="Styling">Styling</option>
            <option value="Coloring">Coloring</option>
            <option value="Treatments">Treatments</option>
            <option value="Make Up">Make Up</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-[#3d2b1f] font-medium">
            What’s your gender?
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>

        <hr className="my-6 border-[#d3c4b5]" />

        <div>
          <label className="block text-[#3d2b1f] font-medium">
            Let us know more
          </label>
          <textarea
            name="message"
            placeholder="I need help with..."
            className="w-full p-3 rounded-md border bg-[#f3ebe5] h-32 focus:outline-none"
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button type="submit" className="button2 mt-5 text-en">
          Submit
        </button>

        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
      </form>

      <section className="my-5">
        <div>
          <img src={hero} alt="heroimg" className="rounded-xl" />
        </div>
      </section>

      <div className="bg-card p-5 rounded-2xl flex max-md:flex-col max-md:gap-6 justify-between my-5 w-full">
        <div>
          <h3>Find us in Ahmedabad</h3>
          <p className="text-xl mt-6 ">
            Commercial complex,Ekta festival,
            <br /> AnkurRd, opp.Gujarat Housing Board,
            <br />
            ISRO Colony, Pragatinagar, Nirnay Nagar,
            <br />
            Ahmedabad, Gujarat 380013.
          </p>
          <p className="text-xl  underline mt-3">
            <Link to="mailto:example@example.com">example@example.com</Link>
          </p>
          <p className="text-xl  underline mt-1">
            <Link to="tel:+9197732 77350">+91 97732 77350</Link>
          </p>
        </div>
        <div className="flex gap-4 items-end">
          <div className="border  border-secondary  p-2 rounded-full">
            <Link
              to="https://www.instagram.com/hairbone_salon/"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z"
                  fill="#36210F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 3.75C5.65279 3.75 3.75 5.65279 3.75 8V16C3.75 18.3472 5.65279 20.25 8 20.25H16C18.3472 20.25 20.25 18.3472 20.25 16V8C20.25 5.65279 18.3472 3.75 16 3.75H8ZM2.25 8C2.25 4.82436 4.82436 2.25 8 2.25H16C19.1756 2.25 21.75 4.82436 21.75 8V16C21.75 19.1756 19.1756 21.75 16 21.75H8C4.82436 21.75 2.25 19.1756 2.25 16V8Z"
                  fill="#36210F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0117 5.94132C18.3196 6.21841 18.3446 6.69263 18.0675 7.00051L18.0575 7.01162C17.7804 7.3195 17.3062 7.34446 16.9983 7.06737C16.6904 6.79027 16.6654 6.31606 16.9425 6.00817L16.9525 5.99706C17.2296 5.68918 17.7038 5.66422 18.0117 5.94132Z"
                  fill="#36210F"
                />
              </svg>
            </Link>
          </div>

          <div className="border  border-secondary p-2 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.53346 3.75L17.3668 20.25H19.4665L6.63317 3.75H4.53346ZM3.16114 4.42882C2.47144 3.54206 3.10337 2.25 4.22677 2.25H6.70653C7.12313 2.25 7.51639 2.44234 7.77216 2.77118L20.8388 19.5712C21.5285 20.4579 20.8966 21.75 19.7732 21.75H17.2934C16.8768 21.75 16.4836 21.5577 16.2278 21.2288L3.16114 4.42882Z"
                fill="#36210F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4983 2.43945C20.1887 2.16426 19.7146 2.19215 19.4394 2.50174L3.43944 20.5017C3.16425 20.8113 3.19213 21.2854 3.50172 21.5606C3.81131 21.8358 4.28536 21.8079 4.56055 21.4983L20.5605 3.49828C20.8357 3.18869 20.8079 2.71464 20.4983 2.43945Z"
                fill="#36210F"
              />
            </svg>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default ContactForm;
