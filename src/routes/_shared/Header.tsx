import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerIcon}>아이콘 위치</div>
      <nav>
        <ul>
          <li>
            <NavLink to='useQuery'>useQuery</NavLink>
          </li>
          <li>
            <NavLink to='redux'>redux</NavLink>
          </li>
          <li>
            <NavLink to='recoil'>recoil</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
