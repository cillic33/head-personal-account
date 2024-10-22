import {IProps} from "./props";

const SimplePopup = ({children, isPopupShow}: IProps) => {
  return (
    <>
      {isPopupShow &&
        <div>
          <div>
            title
          </div>
          {children}
          <div>
            buttons
          </div>
        </div>
      }
    </>
  );
}

export default SimplePopup;
