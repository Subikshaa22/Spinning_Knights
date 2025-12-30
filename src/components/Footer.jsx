import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-info">
          <h3>Spinning Knights Chess Academy</h3>

          <p>
            Building focus, confidence, and strategic thinking through
            structured chess training.
          </p>

          <div className="footer-contact">
            <div><Phone size={16} /> +91 90921 44211</div>
            <div><Mail size={16} /> Spinning Knightsacademy@gmail.com</div>
            <div><MapPin size={16} /> Tamil Nadu, India</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.804980379475!2d77.08283587580843!3d11.066506091114687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f97a67e3b11b%3A0xaf7aab6235849a31!2sSpinning%20Knights%20Chess%20Academy!5e0!3m2!1sen!2sin!4v1734423650000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Academy Location"
          />
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Spinning Knights Chess Academy. All rights reserved.
      </div>
    </footer>
  );
}
