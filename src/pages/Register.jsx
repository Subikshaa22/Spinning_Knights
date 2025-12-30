import { User, Mail, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => navigate("/success"))
      .catch(() => alert("Submission failed"));
  };

  return (
    <section className="form-section">
      <div className="form-card">

        <div className="form-header">
          <span className="pill">Limited Seats</span>
          <h1>Register for Training</h1>
          <p>
            Join our structured chess training program designed to build
            confidence, focus, and strategic thinking.
          </p>
        </div>

        <form
          name="registration"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="registration" />
          <input type="hidden" name="bot-field" />

          <div className="field">
            <User size={18} />
            <input name="name" placeholder="Student Name" required />
          </div>

          <div className="field">
            <Mail size={18} />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div className="field">
            <Phone size={18} />
            <input name="phone" placeholder="Phone Number" required />
          </div>

          <button type="submit" className="submit-btn">
            Submit Registration
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="form-note">
          We will contact you within 24 hours after registration.
        </p>
      </div>
    </section>
  );
}
