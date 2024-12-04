import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', option: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p1">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work together&#33;
      </h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-black text-white px-6 py-3 rounded-md border w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-black text-white px-6 py-3 rounded-md border w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black text-white px-6 py-3 rounded-md border w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-black text-white px-6 py-3 rounded-md border w-full"
          />
        </div>
        <select
          name="option"
          value={formData.option}
          onChange={handleChange}
          required
          className="w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border"
        >
          <option value="" disabled>Select an option</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="fullstack">Full Stack Development</option>
        </select>
        <textarea
          name="message"
          rows={7}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mt-5 bg-black text-white px-4 py-3.5 rounded-md border"
        ></textarea>
        <div className="mt-4">
          <button type="submit" className="px-8 py-3.5 bg-[#7947df] text-white rounded-full">
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
