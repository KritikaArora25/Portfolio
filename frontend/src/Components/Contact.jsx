import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react"; // Add this import

export default function Contact() {
  // Add state for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
        const response = await fetch("/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 px-6 min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>

          <motion.button
            type="submit"
            disabled={status.submitting}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-2xl shadow-md hover:bg-indigo-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: status.submitting ? 1 : 1.05 }}
          >
            {status.submitting ? 'Sending...' : 
             status.submitted ? 'Message Sent!' : 
             'Send Message'}
          </motion.button>

          {/* Status Messages */}
          {status.error && (
            <p className="text-red-400 text-center">❌ Error sending message. Please try again.</p>
          )}
          {status.submitted && (
            <p className="text-green-400 text-center">✅ Message sent successfully!</p>
          )}
        </form>

        {/* Social Links with React Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/kritika-arora-28bb96292/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-indigo-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:kritikaarora2505@gmail.com" // Update with your real email
            className="text-white text-3xl hover:text-indigo-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <MdEmail />
          </motion.a>
          <motion.a
            href="https://github.com/KritikaArora25" // Update with your real GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-indigo-500 transition"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}