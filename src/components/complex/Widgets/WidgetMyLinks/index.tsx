import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetMyLinks} from "@utils/mock";
import WidgetMyLinksRow from "@components/complex/Widgets/WidgetMyLinksRow";
import styled from "styled-components";
import {scroll} from "@utils/mixins";
import SimplePopup from "@components/data-display/SimplePopup";
import {useState} from "react";


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
  const [isPopupShow, setIsPopupShow] = useState<boolean>(false);

  const handlePlusClick = () => {
    setIsPopupShow(true);
  }

  const handlePopupCloseClick = () => {
    setIsPopupShow(false);
  }

  const handlePopupSubmitClick = () => {
    console.log('submit')
    setIsPopupShow(false);
  }

  const handlePopupCancelClick = () => {
    setIsPopupShow(false);
  }

  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $isPlusIcon={props.isPlusIcon}
      $onPlusClick={handlePlusClick}
    >
      <StyledWidgetMyLinks>
        {
          MWidgetMyLinks.map((item) => (
            <WidgetMyLinksRow key={item.id} $item={item} />
          ))
        }
      </StyledWidgetMyLinks>

      {/* Попап */}
      <SimplePopup
        isPopupShow={isPopupShow}
        title="Добавить ссылку"
        onClose={handlePopupCloseClick}
        onSubmit={handlePopupSubmitClick}
        onCancel={handlePopupCancelClick}
      >
        FORM
      </SimplePopup>
    </Expand>
  );
}

export default WidgetMyLinks;
