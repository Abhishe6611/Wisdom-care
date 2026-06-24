import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Camera, Video } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoHighlight}>Wisdom Care</span>
            <span className={styles.logoSubtext}>Institutions</span>
          </Link>
          <p className={styles.description}>
            Enriching lives through Value Education. We provide world-class facilities and education 
            for e-Techno School & PU College students in Madapatna.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Website"><Globe size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Gallery"><Camera size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Videos"><Video size={20} /></a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Programs</h4>
          <ul className={styles.linkList}>
            <li><Link href="/academics#e-techno">e-Techno School</Link></li>
            <li><Link href="/academics#pu-science">PU Science</Link></li>
            <li><Link href="/academics#pu-commerce">PU Commerce</Link></li>
            <li><Link href="/academics#foundation">Foundation Courses</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} />
              <span>QJ7X+2W2, 40 Feet Venus County Rd, Madapatna, Karnataka 560105</span>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} />
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li>
              <Mail size={20} className={styles.contactIcon} />
              <span>info@wisdomcaregroupofinstitutions.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} Wisdom Care Group of Institutions. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
