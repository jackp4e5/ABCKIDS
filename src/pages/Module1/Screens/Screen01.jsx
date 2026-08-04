import Page from "../../../components/Page";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import ImageBlock from "../../../components/Blocks/ImageBlock/ImageBlock";
import { screens } from "../../../data/Module1/screens";
import TextBlock from "../../../components/Blocks/TextBlock/TextBlock";
import useActivity from "../../../hooks/useActivity";
import Activity01 from "../Activities/Activity01/Activity01";
import Activity02 from "../Activities/Activity02/Activity02";

const Screen = () => {
  const { screenId } = useParams();
  const screen = screens[screenId];

  const { image } = screen;

  return (
    <Page>
      <Activity01 />
      <Activity02 />
    </Page>
  );
};

export default Screen;
