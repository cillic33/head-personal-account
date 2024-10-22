import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetMyLinks} from "@utils/mock";
import WidgetMyLinksRow from "@components/complex/Widgets/WidgetMyLinksRow";
import styled from "styled-components";
import {scroll} from "@utils/mixins";

const StyledWidgetMyLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 248px;
  overflow-y: auto;
  ${scroll};
  margin: -8px -10px -8px 0;
  padding: 8px 6px 8px 0;
`

const WidgetMyLinks = (props: IWidget) => {
  // TODO Добавить попап окна
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $popupId={props.$popupId}
    >
      <StyledWidgetMyLinks>
        {
          MWidgetMyLinks.map((item) => (
            <WidgetMyLinksRow key={item.id} $item={item} />
          ))
        }
      </StyledWidgetMyLinks>
    </Expand>
  );
}

export default WidgetMyLinks;
