import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section container-fluid py-5 text-white" style={{ background: "linear-gradient(to right, #007bff, #66b2ff)" }}>
        <div className="container d-flex flex-wrap align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 font-weight-bold">We Build Digital Experiences</h1>
            <p className="lead my-3">Offering Web Development, Digital Marketing, and Graphics Design to grow your business online.</p>
            <a href="#contact" className="btn btn-light font-weight-bold">Contact Us</a>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src="./images/web.png" alt="Hero" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container text-center my-5">
        <h2 className="text-primary mb-4">Our Services</h2>
        <div className="row">
          {[
            { icon: "fas fa-code", title: "Web Development", desc: "Custom websites and apps with responsive design and robust backend architecture." },
            { icon: "fas fa-bullhorn", title: "Digital Marketing", desc: "SEO, PPC, email marketing and social campaigns to grow your brand online." },
            { icon: "fas fa-paint-brush", title: "Graphics Design", desc: "Branding, print and digital graphics that are visually appealing and professional." }
          ].map((service, i) => (
            <div className="col-md-4 mb-4 d-flex" key={i}>
              <div className="p-4 bg-white shadow-sm rounded w-100 d-flex flex-column h-100 justify-content-center">
                <i className={`${service.icon} fa-2x mb-3 text-primary`}></i>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 text-center" style={{ background: "#e2f0ff" }}>
        <div className="container">
          <div className="row">
            {[
              { stat: "150+", label: "Happy Clients" },
              { stat: "10", label: "Awards Won" },
              { stat: "300+", label: "Projects Done" },
              { stat: "99%", label: "Satisfaction Rate" }
            ].map((item, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div style={{ fontSize: "1.8rem", fontWeight: "bold" }} className="text-primary">{item.stat}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container my-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="w-100 bg-light p-4 rounded shadow-sm">
              <h3 className="mb-4">Contact Information</h3>
              {[
                { icon: "fas fa-envelope", label: "Email", value: "contact@itbrand.com" },
                { icon: "fas fa-phone-alt", label: "Phone", value: "+91 12345 67890" },
                { icon: "fas fa-map-marker-alt", label: "Address", value: "Chandigarh, India" }
              ].map((info, i) => (
                <div key={i} className="bg-white p-3 mb-3 rounded shadow-sm">
                  <i className={`${info.icon} text-primary mr-2`}></i>
                  <strong>{info.label}</strong>
                  <p className="mt-2 mb-0" style={{ fontSize: "1.2rem" }}>{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="w-100 bg-light p-4 rounded shadow-sm">
              <h3>Send a Message</h3>
              <form>
                <input type="text" className="form-control mb-3" placeholder="Your Name" required />
                <input type="email" className="form-control mb-3" placeholder="Your Email" required />
                <textarea className="form-control mb-3" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
