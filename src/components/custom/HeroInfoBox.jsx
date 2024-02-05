import styles from './HeroInfoBox.module.css';
import { ContactBox, Schedule, Address } from '@/custom';
import { Logo } from '@/svg';

export default function HeroInfoBox() {
  return (
    <div className={`${styles.main}`}>
      <div>
        <Logo />
      </div>
      <div>
        <h1>
          <span>Zahnarztpraxis </span>
          <strong >Jalil</strong>
          <span> & Kollegen</span>
        </h1>
      </div>
      <div>
        <Address />
        <ContactBox />
      </div>
      <div>
        <Schedule />
      </div>
    </div>
  )
}
