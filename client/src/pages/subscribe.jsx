import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SubscriptionPlan = () => {
  const [isScrolled, ] = useState(false);
  const [email, ] = useState("");
  
  const plans = [
    { title: 'Basic', price: '9.99', features: ['7 days free trail', 'Can Access on 1 device'] },
    { title: 'Standard', price: '19.99', features: ['7 days free trail', ' Can Access on 2 device', 'Family Sharing upto 3 members'] },
    { title: 'Premium', price: '29.99', features: ['Offline viewing', '7 days free trail', 'Can Access on 4 device', 'Family Sharing upto 5 members'] },
  ];

  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} email={email} />
      </div>
      <div style={styles.container}>
        {plans.map((plan, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.title}>{plan.title}</h2>
            <p style={styles.price}>{`$${plan.price}`}</p>
            {plan.features.map((feature, featureIndex) => (
              <p key={featureIndex} style={styles.feature}>{feature}</p>
            ))}
            <button style={styles.button}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // Center align the content
    padding: 20,
  },
  card: {
    backgroundColor: '#DC2626',
    borderRadius: 8,
    padding: 20,
    margin: 10,
    width: 200,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  },
};


export default SubscriptionPlan;
