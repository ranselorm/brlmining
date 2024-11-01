// src/pages/Contact.tsx
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  required,
  type = "text",
  name,
}) => (
  <div className="mb-4">
    <label className="block text-xs mb-2 uppercase">
      {label}
      {required && <span className="text-red-500 text-xs"> (REQUIRED)</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded p-2 focus:outline-none focus:border-primary text-sm border border-black"
      required={required}
    />
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-4 md:px-24 p-8 font-primary">
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Form Section */}
        <div className="md:w-3/6 w-full">
          <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" placeholder="First Name" required />
              <Input label="Last Name" placeholder="Last Name" required />
            </div>
            <Input label="Company" placeholder="Your Company Name" />
            <Input
              label="Email"
              placeholder="Your Email"
              required
              type="email"
            />
            <Input label="Phone" placeholder="(XXX) XXX-XXXX" type="tel" />

            {/* Subject Dropdown */}
            <div className="mb-4">
              <label className="block text-sm  mb-2">Subject (REQUIRED)</label>
              <select
                className="w-full border rounded p-2 focus:outline-none"
                required
              >
                <option value="">Reason for Contact</option>
                <option value="investment">Investment</option>
                <option value="media">Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Text Area */}
            <div className="mb-4">
              <label className="block text-sm  mb-2">Message (REQUIRED)</label>
              <textarea
                placeholder="Please Type Your Message Here"
                className="w-full border rounded p-2 focus:outline-none"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-accent transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="p-4 bg-white rounded w-full md:w-[300px] text-sm h-max shadow-lg">
          <h2 className="text-xl  mb-4">Contact Us</h2>
          <p className="leading-relaxed">
            <span className="font-semibold">Shareholders Enquiries</span>
            <br />1 (604) 506 2804 between the hours of 8:30 a.m. and 8:00 p.m.
            Pacific Time.
          </p>
          <p className="my-8 leading-relaxed">
            <span className="font-semibold">Headquarters</span>
            <br />
            Suite 1480, 885 West Georgia Street
            <br />
            Vancouver, BC, Canada
            <br />
            V6C3E8
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone</span>
            <br />
            (604) 506 2804
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email</span>
            <br />
            <a
              href="mailto:info@stormex.com"
              className="text-indigo-600 hover:underline"
            >
              info@stormex.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
