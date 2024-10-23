import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetMyLinks} from "@utils/mock";
import WidgetMyLinksRow from "@components/complex/Widgets/WidgetMyLinksRow";
import styled from "styled-components";
import {scroll} from "@utils/mixins";
import SimplePopup from "@components/data-display/SimplePopup";
import {useState} from "react";
import LinkForm from "@components/complex/Forms/LinkForm";
import {ILinkForm} from "@typing/TLinkForm";


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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

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

  const setDisabledForm = () => {
    setIsDisabled(true);
  }

  const setEnabledForm = () => {
    setIsDisabled(false);
  }

  const handleChangeForm = (dataForm: ILinkForm) => {
    const values: string[] = Object.values(dataForm);
    if (values.includes('')) {
      setDisabledForm();
    } else {
      setEnabledForm();
    }
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

      {/* Попап "Добавить ссылку" */}
      <SimplePopup
        isPopupShow={isPopupShow}
        title="Добавить ссылку"
        $width="448px"
        onClose={handlePopupCloseClick}
        onSubmit={handlePopupSubmitClick}
        onCancel={handlePopupCancelClick}
        $isDisabledSubmit={isDisabled}
      >
        <LinkForm action="/" method="post" onChange={handleChangeForm} />
      </SimplePopup>
    </Expand>
  );
}

export default WidgetMyLinks;
