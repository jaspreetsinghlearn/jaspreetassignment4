import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />

      <section className="page-banner py-5 text-white text-center" style={{ background: "linear-gradient(to right, #007bff, #66b2ff)" }}>
        <div className="container">
          <h1 className="display-4 font-weight-bold">About Us</h1>
        </div>
      </section>

      <section className="about-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="text-primary font-weight-bold">ABOUT US</h2>
            <p className="lead">Your Digital Marketing & Development Expert</p>
          </div>
          <div className="col-md-7">
            <p>
              Our agency offers comprehensive solutions to meet clients’ digital needs. Firstly, they conduct thorough consultations to understand the client’s objectives, target audience, and brand identity. Then, skilled designers craft visually appealing layouts that align with the client’s vision and industry standards. Next, developers utilize cutting-edge technologies to build responsive, user-friendly websites that perform seamlessly across devices. Additionally, we provide robust backend systems for efficient content management and site maintenance. Moreover, they prioritize search engine optimization (SEO) techniques to enhance visibility and drive organic traffic to the website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { title: "Company Mission", desc: "Our mission is to help our clients achieve significant business growth using our expertise to build long-lasting IT solutions." },
              { title: "Company Vision", desc: "Let’s sit down together and figure out the best path for you to develop your brand. Our goal is to create designs that are attractive and help your business grow." },
              { title: "Company Depends", desc: "What makes a company great? That’s simple. It’s the people who work here." }
            ].map((item, i) => (
              <div className="col-md-4 mb-4 d-flex" key={i}>
                <div className="p-4 bg-white rounded shadow-sm w-100">
                  <h4 className="text-primary">{item.title}</h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Reused */}
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

      <Footer />
    </>
  );
}

export default About;
