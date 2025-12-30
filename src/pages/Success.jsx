import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="form-section">
      <div className="form-card">
        <div className="form-header">
          <h1>Thank You for Registering ♟</h1>
          <p>
            We’ve received your details.  
            Our team will contact you shortly.
          </p>
        </div>

        <Link to="/" className="cta large">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
