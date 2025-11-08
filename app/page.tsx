
export const metadata = {
  title: 'JB Forklift Training - Professional Onsite Training Cork & Munster',
  description:
    'RTITB accredited forklift training in Cork and Munster. Counterbalance, Reach, Stacker, Power Pallet Truck & Manual Handling training. Available 24/7.',
};

const container: React.CSSProperties = {
  maxWidth: 960,
  margin: '0 auto',
  padding: '0 20px',
};

const red = '#990000';
const light = '#faf7f7';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
        <div style={{ ...container, padding: '16px 20px' }}>
          <h1 style={{ margin: 0, color: red }}>JB Forklift Training</h1>
          <p style={{ margin: '6px 0 0 0', color: '#444' }}>
            RTITB Accredited Training Provider
          </p>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
            Unit 2, Ballyvourney Industrial Estate, Ballyvourney, Co. Cork • Tel: 0863954279 • Email: jbforklifttraining@gmail.com
          </p>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: light, padding: '48px 0' }}>
        <div style={container}>
          <h2 style={{ color: red, marginTop: 0 }}>Forklift Training — Onsite, Flexible, Accredited</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7 }}>
            We provide professional forklift training across Cork and Munster. Training available days, nights and weekends to suit your operation.
            Courses include Counterbalance, Reach, Stacker, Power Pallet Truck and Manual Handling.
          </p>
          <a href="#contact" style={{
              display: 'inline-block',
              background: red,
              color: '#fff',
              padding: '12px 18px',
              borderRadius: 6,
              textDecoration: 'none',
              marginTop: 12
            }}>
            Book a Course / Send a Message
          </a>
        </div>
      </section>

      {/* Onsite Benefits */}
      <section style={{ padding: '48px 0' }}>
        <div style={container}>
          <h3 style={{ color: red, marginTop: 0 }}>Why Onsite Training Works Best</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7 }}>
            Onsite training means your team learns in their real work environment, on your own forklifts and layout.
            Our instructor can identify site‑specific hazards during the session and address them in real time.
            It reduces downtime—no travel or full days offsite—and delivers better, more relevant results for both
            employees and employers.
          </p>
          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            <li><strong>Train in your real environment:</strong> certification on your forklifts, racking and workflows.</li>
            <li><strong>Identify hazards in real time:</strong> instructor walkthroughs to spot and correct site risks.</li>
            <li><strong>Minimal disruption:</strong> staff return to work immediately after training—no travel days.</li>
            <li><strong>Better outcomes:</strong> safer operators, higher confidence and time/cost savings.</li>
          </ul>
        </div>
      </section>

      {/* Courses */}
      <section style={{ background: light, padding: '40px 0' }}>
        <div style={container}>
          <h3 style={{ color: red, marginTop: 0 }}>Courses Offered</h3>
          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            <li>Counterbalance</li>
            <li>Reach</li>
            <li>Stacker</li>
            <li>Power Pallet Truck (PPT)</li>
            <li>Manual Handling</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '48px 0' }}>
        <div style={container}>
          <h3 style={{ color: red, marginTop: 0 }}>Book a Course / Send a Message</h3>
          <p style={{ marginBottom: 16 }}>
            Fill out the form and we’ll get back to you shortly.
          </p>
          <form action="#" method="POST" style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
            <input name="name" placeholder="Your Name" required style={inputStyle} />
            <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
            <input name="phone" placeholder="Phone (optional)" style={inputStyle} />
            <select name="course" style={inputStyle}>
              <option value="">Select a course (optional)</option>
              <option>Counterbalance</option>
              <option>Reach</option>
              <option>Stacker</option>
              <option>Power Pallet Truck</option>
              <option>Manual Handling</option>
            </select>
            <textarea name="message" placeholder="How can we help?" rows={5} required style={inputStyle} />
            <button type="submit" style={buttonStyle}>Send</button>
          </form>
          <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>
            Tip: After deployment, replace the form’s action with your Formspree URL to receive emails.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #eee' }}>
        <div style={{ ...container, padding: '16px 20px', fontSize: 14, color: '#555' }}>
          JB Forklift Training • Unit 2, Ballyvourney Industrial Estate, Ballyvourney, Co. Cork • Tel: 0863954279 • Email: jbforklifttraining@gmail.com
        </div>
      </footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '10px 12px',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: 14,
};

const buttonStyle: React.CSSProperties = {
  background: red,
  color: '#fff',
  border: 'none',
  padding: '12px 18px',
  borderRadius: 6,
  fontSize: 15,
  cursor: 'pointer',
};
