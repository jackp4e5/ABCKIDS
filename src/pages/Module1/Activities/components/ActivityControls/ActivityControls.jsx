import submit from "../../../../../../public/ImagesBtns/btnContinue.png";

const ActivityControls = ({ completed, actions }) => {
  const handleSubmit = () => {
    actions.submit();
  };
  return (
    <>
      {completed && (
        <button onClick={handleSubmit}>
          <img src={submit} alt="" />
        </button>
      )}
    </>
  );
};

export default ActivityControls;
