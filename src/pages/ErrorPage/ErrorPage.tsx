import styles from './ErrorPage.module.css'
import Header from '@components/Header/Header'
import { Link } from 'react-router';


function ErrorPage() {
    return (<>
        <Header />
        <div className={styles.page}>
            <div className={styles.center}>
                <h2>Something went wrong...</h2>
                <Link to="/">Go back?</Link>
            </div>
        </div>
    </>)
}


export default ErrorPage;