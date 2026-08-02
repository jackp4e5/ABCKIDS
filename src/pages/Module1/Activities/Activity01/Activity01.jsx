import { activity01 } from "../../../../data/Module1/activities/activity01";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "./ActivityBoard/ActivityBoard";
import ActivityControls from "./ActivityControls/ActivityControls";
import ActivityHeader from "./ActivityHeader/ActivityHeader";
import FigureSelector from "./FigureSelector/FigureSelector";

const Activity01 = () => {
  const session = useActivity(activity01);

  const { actions, data, state } = session;

  return (
    <>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard session={session}/>

      <ActivityControls actions={actions} />
    </>
  );
};

export default Activity01;
