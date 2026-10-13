
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../Finance/Finance.css";

const WHATSAPP_NUMBER = "27821234567"; // Replace with your actual number

function Finance() {
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Massage: "",
    });

    const [debtreview, setDebtreview] = useState("");
    const [sequestration, setSequestration] = useState("");

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
            "I'd like to apply for vehicle finance.",
            "",
            "CUSTOMER DETAILS",
            `Name: ${formData.Name}`,
            `Email: ${formData.Email}`,
            `Phone Number: ${formData.Phone}`,
            "",
            "FINANCE INFORMATION",
            `Under debt review: ${debtreview}`,
            `Under sequestration: ${sequestration}`,
            "",
            "ADDITIONAL MESSAGE",
            formData.Massage || "None provided",
            "",
            "SUPPORTING DOCUMENTS",
            "I will provide my ID, three months of bank statements, and three months of payslips separately.",
            "",
            "Please let me know the next steps for my finance application.",
            "",
            "Thank you!",
        ].join("\n");

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="Finance">
            <Navbar />

            <div className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="contact_taital">Apply for Finance</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-md-12">
                                <form
                                    className="mail_section_1"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        className="mail_text"
                                        placeholder="Name"
                                        name="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                    />

                                    <input
                                        type="email"
                                        className="mail_text"
                                        placeholder="Email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />

                                    <input
                                        type="tel"
                                        className="mail_text"
                                        placeholder="Phone Number"
                                        name="Phone"
                                        value={formData.Phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                        required
                                    />

                                    <label>
                                        <p style={{ color: "black", fontWeight: "bolder", width: "auto" }}>
                                            Are you under debt review?
                                        </p>
                                    </label>

                                    <select
                                        value={debtreview}
                                        onChange={(event) => setDebtreview(event.target.value)}
                                        required
                                    >
                                        <option value="" disabled>
                                            Please select an option
                                        </option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>

                                    <label>
                                        <p style={{ color: "black", fontWeight: "bolder" }}>
                                            Are you under Sequestration?
                                        </p>
                                    </label>

                                    <select
                                        value={sequestration}
                                        onChange={(event) => setSequestration(event.target.value)}
                                        required
                                    >
                                        <option value="" disabled>
                                            Please select an option
                                        </option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>

                                    <textarea
                                        className="massage-bt"
                                        placeholder="Message"
                                        rows="5"
                                        id="comment"
                                        name="Massage"
                                        value={formData.Massage}
                                        onChange={handleChange}
                                    />

                                    <div className="send_btn">
                                        <button type="submit">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Finance;
