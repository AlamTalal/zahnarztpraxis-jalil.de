import styles from './Schedule.module.css';
import { Arrow } from '@/svg'

export default function Schedule() {
  return (
    <div className={`${styles.main}`}>
      <ul>
        <li>
          <div>
            <span>Montags</span>
            <small>bis</small>
            <span>Donnerstag</span>
          </div>
          <div>
            <div>
              <span>08:00</span>
              <Arrow />
              <span>12:00</span>
            </div>
            <small>und</small>
            <div>
              <span>14:00</span>
              <Arrow />
              <span>18:00</span>
            </div>
          </div>
        </li>
        <li>
          <div><span>Freitags</span></div>
          <div>
            <div>
              <span>08:00</span>
              <Arrow />
              <span>12:<span>30</span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
