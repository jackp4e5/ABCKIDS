import styles from "./ActivityDragAndDrop.module.css"

const ActivityDragAndDrop = ({ animals }) => {
    
    const handleDragOver = (event) => {
        event.preventDefault();
        console.log("dragOver");
  };

  const handleDrop = (event) => {

  console.log("handleDrop");
  
  };

  return (
    <div className={styles.wrappContent}>
      {animals.map((animal,index) => (
        <div key={ animal.id}  onDragOver={handleDragOver} onDrop={handleDrop}>
          <img src={animal.dropZone.image} alt={animal.id} />
        </div>
      ))}
    </div>
  );
};

export default ActivityDragAndDrop;
