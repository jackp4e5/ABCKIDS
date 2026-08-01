import Page from "../../../components/Page";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import ImageBlock from "../../../components/Blocks/ImageBlock/ImageBlock";
import { screens } from "../../../data/Module1/screens";
import TextBlock from "../../../components/Blocks/TextBlock/TextBlock";
import useActivity from "../../../hooks/useActivity";

const Screen = () => {
  const { screenId } = useParams();
  const screen = screens[screenId];

  const { image } = screen;

  return (
    <Page>
      <ImageBlock {...image} />

      <TextBlock>{screen.text}</TextBlock>
    </Page>
  );
};

export default Screen;
