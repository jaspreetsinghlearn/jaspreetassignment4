import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function UserInfo() {
  const user = {
    name: "Jassi Singh",
    age: 30,
    dob: "1995-08-15",
    location: "Punjab, India",
    email: "jassi@itbrand.com",
    image: "./jassi.jpg"
  };

  return (
    <>
      <Header />
      <section className="container my-5">
        <h2 className="text-center text-primary mb-4">User Information</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center p-4 bg-light rounded shadow-sm">
            <img src={user.image} alt="User" className="img-fluid rounded-circle mb-3" style={{ width: '8rem', height: '8rem' }} />
            <h4 className="text-dark font-weight-bold">{user.name}</h4>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UserInfo;
