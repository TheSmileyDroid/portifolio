import styles from '../../../styles/Info.module.css'
import Link from 'next/link'

interface HeaderProps {
    title: String,
}

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.header}>
            <Link href="/" passHref><a>Voltar</a></Link> 
            <h2>{props.title}</h2>
        </div>
    )
}