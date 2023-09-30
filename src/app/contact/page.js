import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3432585687365!2d81.45590877514822!3d24.74941734969239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984ff4bcd12396d%3A0xc51460a8f6a7587a!2sAshish%20jewellers!5e0!3m2!1shi!2sin!4v1694923069667!5m2!1shi!2sin" 
 width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping}
  referrerpolicy="no-referrer-when-downgrade"></iframe> 
 
 

        </>
    );
};

export default Contact;