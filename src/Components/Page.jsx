import React from 'react';
import './page.css';

const Page = () => {

  return (
    <header className="header">
      <div className="container">
       
        <div className="logo">Untitled UI</div>

    
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#product" className="nav-link">Product</a></li>
            <li><a href="#resource" className="nav-link">Resource</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
          </ul>
        </nav>
      </div>

      
      <section className="hero-section">
        <div className="hero-text">
          Beautiful analytics to grow smarter
        </div>

        <div className="hero-subtext">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </div>

        <div className="button-container">
          <button className="btn demo-btn">Demo</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>
      </section>

 <section className="dashboard-section-wrapper">
        <section className="dashboard-section">
          <div className="status-actions">
            <h2 className="dashboard-title">Status for Olivia Rhye</h2>
            <ul className="actions-list">
              <li>Message</li>
              <li>Edit</li>
            </ul>
          </div>

          <div className="status-info">
            <div className="profile-info">
              <p className="profile-view">Profile View</p>
              <span className="time left-align">12 months</span>
              <span className="time left-align">30 days</span>
              <span className="time left-align">7 days</span>
            </div>
          </div>

        
          <div className="dashboard-diagram">
         
          </div>
        </section>
      </section>


      <section className="join-section">
        <div className="join-text">
          Join 4,000+ companies already growing
        </div>
      </section>


      <section className="companies-section">
  <div className="companies-text">
    <ul>
    <li>Boltshift</li>
    <li>Lightbox</li> 
    <li>FeatherDev</li>
    <li>Spherule</li> 
    <li>GlobalBank</li> 
    <li>Nietzsche</li>
    </ul>
  </div>
</section>


<div className="feature-items">
  <div className="feature-item">
    Share team inboxes
    <div className="team-size">
      Whether you have a team of 2 or 200, our shared <br /> team inboxes keep everyone on the same page <br /> and in the loop
    </div>
  </div>
  <div className="feature-item">
    Deliver instant answers
    <div className="customer-service">
      An all-in-one customer service platform that helps <br /> you balance everything your customers need to be <br /> happy
    </div>
  </div>
  <div className="feature-item">
    Manage your team with reports
    <div className="measures-what-matters">
      Measures what matters with Untitled easy-to-use <br /> reports. You can filter, export, and drill down on the <br /> data in a couple clicks
    </div>
  </div>
</div>

<div className="connect-customers-container">
  <div className="connect-customers">
    Connect with customers
    <div className="subline">
      Whether you have a team of 2 or 200, our shared <br /> team inboxes keep everyone on the same page <br /> and in the loop
    </div>
  </div>
  <div className="connect-customers">
    Connect the tools you already use
    <div className="subline">
      Whether you have a team of 2 or 200, our shared <br /> team inboxes keep everyone on the same page <br /> and in the loop
    </div>
  </div>
  <div className="connect-customers">
    Our people make the difference
    <div className="subline">
      Whether you have a team of 2 or 200, our shared <br /> team inboxes keep everyone on the same page <br /> and in the loop
    </div>
  </div>
</div>


<div className="synopsis-container">
  <div className="synopsis">Sisyphus</div>
  <div className="description">
    We've been using Untitled to kick start every new <br /> project and can't imagine working without it.
  </div>

  
  <div className="author-image">
    <img src="https://media.istockphoto.com/id/1015055360/photo/a-journalist-writes-on-a-typewriter.jpg?s=612x612&w=0&k=20&c=Oh42IFPExASJdPZgaTlmzzLu1tUsMewI3rBKrTIUstU=" alt="Candice Wu" />
  </div>

  <div className="author-name">Candice Wu</div>
  <div className="author-title">Product Manager, Sisyphus</div>
</div>



<section className="cutting-edge-section">
  <div className="cutting-edge-title">Cutting Edge Features for Advanced Analytics</div>
  <div className="cutting-edge-description">
    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
  </div>

  <section className="empty-dashboard">
    <div className="dashboard-placeholder">
      <p></p> 
    </div>
  </section>

  <div className="cutting-edge-features">
    <div className="feature-item">
      <h3>Share team inboxes</h3>
      <p>Whether you have a team of 2 or 200, our shared <br /> team inboxes keep everyone on the same page <br /> and in the loop</p>
    </div>
    <div className="feature-item">
      <h3>Deliver instant answers</h3>
      <p>An all-in-one customer service platform that helps <br /> you balance everything your customers need to be <br /> happy</p>
    </div>
    <div className="feature-item">
      <h3>Manage your team with reports</h3>
      <p>Measures what matters with Untitled easy-to-use <br /> reports. You can filter, export, and drill down on the <br /> data in a couple clicks.</p>
    </div>
  </div>
</section>

<section className="faq-section">
  <div className="faq-title">Frequently Asked Questions</div>
  <div className="faq-description">
    Everything you need to know about the product and the billing
  </div>
</section>

<section className="faq-items">
  <div className="faq-item">Is there a free trial available?</div>
  <div className="faq-item">Can I change my plan later?</div>
  <div className="faq-item">What is your cancellation policy?</div>
  <div className="faq-item">Can other information be added to the invoice?</div>
  <div className="faq-item">How does billing work?</div>
  <div className="faq-item">How do I change my account email?</div>
</section>


<section className="contact-section">
  <img 
    src="https://media.istockphoto.com/id/1214387139/photo/young-female-writer-using-typewriter-at-home.jpg?s=612x612&w=0&k=20&c=LlCrsCEQyqQs6X4_mOJ2lmgwPVecZv9kLAbUhJ6zVyY=" 
    alt="Support team illustration" 
    className="contact-image" 
  />
  <div className="contact-title">Still have questions?</div>
  <div className="contact-description">
    Can't find the answer you're looking for? Please chat with our friendly team.
  </div>
  <button className="contact-button">Get in touch</button>
</section>


<section className="blog-section">
  <div className="blog-title">Latest Blog Posts</div>
  <div className="blog-description">
    Tools and strategies modern teams need to help their companies grow.
  </div>

  <div className="blog-cards">
    <div className="blog-card">
      <img src="https://cdn.pixabay.com/photo/2024/03/11/19/59/ai-generated-8627526_640.png" alt="Blog Image" className="blog-image" />
      <h3>UX Review Presentations</h3>
      <p>
        Whether you have a team of 2 or 200, our shared <br />
        team inboxes keep everyone on the same page <br />
        and in the loop.
      </p>
    </div>
    <div className="blog-card">
    <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_1280.jpg" className="blog-image" />
      <h3>Migrating to Linear 101</h3>
      <p>
        Whether you have a team of 2 or 200, our shared <br />
        team inboxes keep everyone on the same page <br />
        and in the loop.
      </p>
    </div>
    <div className="blog-card">
    <img src="https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_640.jpg" className="blog-image" />
      <h3>Building Your API Stack</h3>
      <p>
        Whether you have a team of 2 or 200, our shared <br />
        team inboxes keep everyone on the same page <br />
        and in the loop.
      </p>
    </div>
  </div>
</section>


    </header>
  );
}

export default Page;
