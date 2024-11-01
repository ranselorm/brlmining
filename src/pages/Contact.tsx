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
    <label className="block text-sm font-semibold mb-2">
      {label}
      {required && <span className="text-red-500"> (REQUIRED)</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
      required={required}
    />
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">General Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="md:col-span-2">
          <form>
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
              <label className="block text-sm font-semibold mb-2">
                Subject (REQUIRED)
              </label>
              <select
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
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
              <label className="block text-sm font-semibold mb-2">
                Message (REQUIRED)
              </label>
              <textarea
                placeholder="Please Type Your Message Here"
                className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="p-4 border-2 border-gray-300 rounded-md bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">
            <strong>Shareholders Enquiries</strong>
            <br />1 (604) 506 2804 between the hours of 8:30 a.m. and 8:00 p.m.
            Pacific Time.
          </p>
          <p className="mb-2">
            <strong>Headquarters</strong>
            <br />
            Suite 1480, 885 West Georgia Street
            <br />
            Vancouver, BC, Canada
            <br />
            V6C3E8
          </p>
          <p className="mb-2">
            <strong>Phone</strong>
            <br />
            (604) 506 2804
          </p>
          <p className="mb-2">
            <strong>Email</strong>
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
