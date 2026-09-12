function Contact() {
  return (
    <section className="contact-section w-[90%] min-h-[80vh] px-[80px] py-[8%] flex items-center" id="Contact">
      <div className="contact-container w-full flex justify-center gap-[80px]">

        <div className="contact-info w-[45%]">
          <p className="contact-small">GET IN TOUCH</p>

          <h1>
            Let's <span>Connect.</span>
          </h1>

          <p>
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>

          <div className="contact-details">
            <p>📧 84700rupalisingh@gmail.com</p>
            <p>📍 Ghaziabad, India</p>
          </div>
        </div>

        <form className="contact-form w-[45%] flex flex-col gap-[22px]">

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;