import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";
import styles from "./ActivityHeader.module.css"
const ActivityHeader = ({header,instruction}) => {

    const {assets}= header
    const {message,assets:{iconAudio}}= instruction
    return (
        <header className={styles.header}>
           {/*  <ImageBlock src={assets.badge} alt={`Badge Nociones Espaciales`}/> */}

            <div  className={styles.wrapperContent}>
                <h3>{header.title}</h3>

                <div className={styles.wrapperImg}>
                    <ImageBlock src={iconAudio} alt={'icon Audio'}/>
                    <p>{message}</p>
                </div>
            </div>
        </header>
    )
}


export default ActivityHeader;