import Styles from './SubmitButton.module.css';

export default function SubimitButton({text}) {
    return ( 
        <div>
            <button className={Styles.btn}>{text}</button>
        </div>
     );
}