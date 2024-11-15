import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";
import {MWidgetMyLinks} from "@utils/mock";
import WidgetMyLinksRow from "@components/complex/Widgets/WidgetMyLinksRow";
import styled from "styled-components";
import {scroll} from "@utils/mixins";
import SimplePopup from "@components/data-display/SimplePopup";
import {FC, useState} from "react";
import LinkForm from "@components/complex/Forms/LinkForm";
import {ILinkForm} from "@typing/TLinkForm";
import {IWidgetMyLink} from "@typing/TWidgetMyLinks";

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

// @barrelblur: убрать доллары
const WidgetMyLinks: FC<IWidget> = (props) => {
  const [isPopupShow, setIsPopupShow] = useState<boolean>(false);
  const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(false);
  const [titleForm, setTitleForm] = useState<string>('')
  const [initialDataForm, setInitialDataForm] = useState<ILinkForm>({
    name: "",
    link: "",
  });

  const handlePlusClick = () => {
    setTitleForm("Добавить ссылку");
    setInitialDataForm({
      name: "",
      link: "",
    });
    setIsPopupShow(true);
    setIsDisabledSubmit(true);
  }

  const handlePopupCloseClick = () => {
    setIsPopupShow(false);
  }
  const handlePopupSubmitClick = () => {
    setIsPopupShow(false);
  }
  const handlePopupCancelClick = () => {
    setIsPopupShow(false);
  }
  const setDisabledForm = () => {
    setIsDisabledSubmit(true);
  }
  const setEnabledForm = () => {
    setIsDisabledSubmit(false);
  }
  const handleChangeForm = (dataForm: ILinkForm) => {
    const values: string[] = Object.values(dataForm);
    if (values.includes('')) {
      setDisabledForm();
    } else {
      setEnabledForm();
    }
  }

  const handleEditLinkClick = (item: IWidgetMyLink) => {
    setTitleForm("Редактировать ссылку");
    setInitialDataForm({
      name: item.title,
      link: item.link,
    });
    setIsPopupShow(true);
  }

  const handleDeleteLinkClick = (item: IWidgetMyLink) => {
    // TODO Уточнить поведение
    console.log('Del link', item.title)
  }


  return (
    <Expand
      title={props.title}
      $isOpen={props.isOpen}
      $isDragIcon={props.isDragIcon}
      $isPlusIcon={props.isPlusIcon}
      $onPlusClick={handlePlusClick}
      $isSplitter={true}
    >
      <StyledWidgetMyLinks>
        {
          MWidgetMyLinks.map((item) => (
            <WidgetMyLinksRow key={item.id} $item={item} onEditClick={handleEditLinkClick} onDeleteClick={handleDeleteLinkClick} />
          ))
        }
      </StyledWidgetMyLinks>

      <SimplePopup
        isShow={isPopupShow}
        title={titleForm}
        $width="448px"
        onClose={handlePopupCloseClick}
        onSubmit={handlePopupSubmitClick}
        onCancel={handlePopupCancelClick}
        $isDisabledSubmit={isDisabledSubmit}
      >
        <LinkForm action="/" method="post" initialDataForm={initialDataForm} onChange={handleChangeForm} />
      </SimplePopup>
    </Expand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default WidgetMyLinks;
