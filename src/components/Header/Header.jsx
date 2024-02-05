import styles from './Header.module.css';

export function Header() {

    return (
        <header className={styles.Header}>
            <h1 className={styles.logo}> React TODO </h1>

        </header>

    )
}