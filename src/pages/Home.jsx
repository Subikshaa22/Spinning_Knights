import { Link } from "react-router-dom";
import {
  Brain,
  Target,
  Trophy,
  Layers,
  UserCheck,
  Compass
} from "lucide-react";
import EventsSection from "../components/EventsSection";


export default function Home() {
  return (
    <>
      {/* Floating Hero */}
      <section className="hero-wrapper">
        <div className="hero floating hero-grid">
          {/* LEFT */}
          <div className="hero-text">
            <span className="pill">Limited seats per batch</span>

            <h1>
              Build Confident <br />
              Chess Thinkers
            </h1>

            <p>
              Structured chess training focused on logic, discipline,
              and long-term growth.
            </p>

            <div className="hero-features">
              <div><Brain size={18}/> Thinking Skills</div>
              <div><Target size={18}/> Structured Learning</div>
              <div><Trophy size={18}/> Competitive Mindset</div>
            </div>

            <Link to="/register" className="cta">Start your chess journey</Link>
          </div>

          {/* RIGHT */}
          <div className="hero-visual">
            <img src="/illustrations/thinking.svg" alt="Thinking illustration"/>
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="philosophy">
        <h2>Our Training Philosophy</h2>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <Layers size={28}/>
            <h4>Structured Curriculum</h4>
            <p>Level-wise learning with clear goals</p>
          </div>

          <div className="philosophy-card">
            <Brain size={28}/>
            <h4>Thinking First</h4>
            <p>Understanding ideas, not memorizing moves</p>
          </div>

          <div className="philosophy-card">
            <UserCheck size={28}/>
            <h4>Personal Attention</h4>
            <p>Small batches and focused mentoring</p>
          </div>

          <div className="philosophy-card">
            <Compass size={28}/>
            <h4>Long-Term Growth</h4>
            <p>Building confidence and discipline</p>
          </div>
        </div>
      </section>

      <EventsSection/>
      {/* Learning Path */}
      <section className="learning-path">
        <h2>Learning Path</h2>

        <div className="path-timeline">
          <div className="path-step">
            <img src="/chess/pawn.svg" />
            <h4>Beginner</h4>
            <p>Basics & rules</p>
          </div>

          <div className="path-line" />

          <div className="path-step">
            <img src="/chess/knight.svg" />
            <h4>Intermediate</h4>
            <p>Tactics & strategy</p>
          </div>

          <div className="path-line" />

          <div className="path-step">
            <img src="/chess/rook.svg" />
            <h4>Advanced</h4>
            <p>Deep concepts</p>
          </div>

          <div className="path-line" />

          <div className="path-step">
            <img src="/chess/king.svg" />
            <h4>Mastery</h4>
            <p>Competitive mindset</p>
          </div>
        </div>
      </section>


      {/* Chessboard Pricing
      <section className="pricing chess-bg">
        <h2>Batch Structure & Fees</h2>

        <div className="pricing-board">
          <div className="price-card green">
            <h3>Beginner</h3>
            <ul>
              <li>Rules & Basics</li>
              <li>2 classes / week</li>
              <li>Small batches</li>
            </ul>
            <p className="price">₹ XXXX / month</p>
            <Link to="/register">Enroll</Link>
          </div>

          <div className="price-card white">
            <h3>Intermediate</h3>
            <ul>
              <li>Strategy & Tactics</li>
              <li>Practice games</li>
              <li>Progress tracking</li>
            </ul>
            <p className="price">₹ XXXX / month</p>
            <Link to="/register">Enroll</Link>
          </div>

          <div className="price-card green">
            <h3>Advanced</h3>
            <ul>
              <li>Advanced concepts</li>
              <li>Tournament focus</li>
              <li>Mentorship</li>
            </ul>
            <p className="price">₹ XXXX / month</p>
            <Link to="/register">Enroll</Link>
          </div>
        </div>
      </section> */}

      {/* Who Is This For */}
      <section className="who-for">
        <h2>Who Is This For?</h2>
        <div className="who-grid">
          <div>✔ Beginners starting from scratch</div>
          <div>✔ Students serious about improvement</div>
          <div>✔ Parents seeking mind-sport activities</div>
          <div>✔ Adults learning chess seriously</div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Train With Purpose. Play With Confidence.</h2>
        <p className="cta-sub">
          Limited seats • Small batches • Personal attention
        </p>
        <Link to="/register" className="cta large">Register Now</Link>
      </section>

    </>
  );
}
