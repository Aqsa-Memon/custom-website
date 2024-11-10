export default function Contact() {
    return (
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          Have any questions or inquiries? Feel free to reach out to us. We would love to hear from you!
        </p>
  
        <div className="contact-info">
          <div className="contact-item">
            <h2>Phone</h2>
            <p>+92 (3) 456-7890</p>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <p>info@hatstore.com</p>
          </div>
          <div className="contact-item">
            <h2>Address</h2>
            <p>123 Hat Street, Fashion City, NY</p>
          </div>
        </div>
  
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea"  required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    );
  }
  