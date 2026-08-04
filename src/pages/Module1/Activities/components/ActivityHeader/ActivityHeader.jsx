import ImageBlock from "../../../../../components/Blocks/ImageBlock/ImageBlock";

const ActivityHeader = ({header,instruction}) => {

    const {assets}= header
    const {message,assets:{iconAudio}}= instruction
    return (
        <div>
            <ImageBlock src={assets.badge} alt={`Badge Nociones Espaciales`}/>

            <div>
                <h3>{header.title}</h3>

                <div>
                    <ImageBlock src={iconAudio} alt={'icon Audio'}/>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}


export default ActivityHeader;