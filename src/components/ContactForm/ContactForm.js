
import { useState } from "react";
import "../ContactForm/ContactForm.css";

const WHATSAPP_NUMBER = "27821234567"; // Replace with your actual number

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hi Drivehaus,",
      "",
      "I've sent an enquiry through your website.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      "",
      "Message:",
      formData.message,
      "",
      "I look forward to hearing from you.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="ContactForm">
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">Get In Touch</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <form className="mail_section_1" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                  <input
                    type="email"
                    className="mail_text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />

                  <input
                    type="tel"
                    className="mail_text"
                    placeholder="Phone Number (optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />

                  <textarea
                    className="massage-bt"
                    placeholder="How can we help you?"
                    rows="5"
                    id="comment"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <div className="send_bt">
                    <button type="submit" className="contact-send-button">
                      Send <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
