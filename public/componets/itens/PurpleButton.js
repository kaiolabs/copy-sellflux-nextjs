import styles from './SubmitButton.module.css'

export default function PurpleButton({ text }) {
    return (
        <div>
            <button className={styles.purpleButton}>{text}</button>
        </div>
    );
}