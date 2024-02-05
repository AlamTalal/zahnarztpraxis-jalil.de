import styles from './Footer.module.css';
import { FullLogo, Address, ContactBox, Schedule } from '@/custom';

export default function Footer() {

  return (
    <footer className={`${styles.main}`}>
      <div>
        <FullLogo size='3.2rem' />
        <div>
          <p><span>©</span> A.JALIL - PRAXIS FÜR ZAHNMEDIZIN</p>
        </div>
        <Address />
        <ContactBox />
        <Schedule />
      </div>
    </footer>
  );
}
