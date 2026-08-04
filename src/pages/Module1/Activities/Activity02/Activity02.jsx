import { activity02 } from "../../../../data/Module1/activities/activity02";
import useActivity from "../../../../hooks/useActivity";
import ActivityBoard from "../components/ActivityBoard/ActivityBoard";
import ActivityControls from "../components/ActivityControls/ActivityControls";
import ActivityHeader from "../components/ActivityHeader/ActivityHeader";

const Activity02 = () => {
 const session = useActivity(activity02);

  const { actions, data, state } = session;

  return (
    <>
      <ActivityHeader header={data.header} instruction={data.instruction} />

      <ActivityBoard session={session} />

      <ActivityControls actions={actions} />
    </>
  );
};

export default Activity02;
