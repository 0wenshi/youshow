import React from 'react';
import styles from './components/styles.module.css';
import youshowlogo from '/images/WechatIMG19.jpg';
import NavBar from '../HomePage/components/NavBar';

function ContactUs() {
  return (
    <div className={styles.background}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      <div className={styles['logo-container']}>
        <img src={youshowlogo} alt="YouShow Logo" />
      </div>
      <div className={styles['contact-info']}>
        <p>在线客服</p>
        <p>微信/公众号: youshow-nz</p>
        <p>邮箱: youshow.nz@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
