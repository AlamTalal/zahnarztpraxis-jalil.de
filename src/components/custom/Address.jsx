import styles from './Address.module.css';
import { address } from '@/utils/data';

export default function Address() {
  return (
    <div className={`${styles.main}`}>
      <a href="https://maps.app.goo.gl/cATHeZaRPNnGoLx8A">
        <span>{address[0]}</span>
        <span>{address[1]}</span>
      </a>
    </div>
  )
}
