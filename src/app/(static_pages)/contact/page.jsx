"use client"
import styles from "./page.module.css";

function Contact() {
  return (
    <>
      <div className={styles.container}>
        <form action="" method="post" onSubmit={(e) => {
          e.preventDefault()
        }}>
          <h4 className={styles.title}>Contact us today, and get reply with in 24 hours!</h4>
          <input
            className={styles.input}
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
          <input
            className={styles.input}
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Type your Message Here...."
            tabindex="5"
            required
          ></textarea>
          <button
            className={styles.button}
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
