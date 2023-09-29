
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./UpdateBeat.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function UpdateBeat() {

  const [beatName, setBeatName] = useState("");
  const [price, setPrice] = useState("");
  const [orderID, setOrderID] = useState("");
  const [beatSound, setBeatSound] = useState("");
  const [username, setUserName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    console.log(beatName, price, orderID, beatSound, username, status);
  }



  return (
    <div className={cx("login-wrapper")}>

      <h1 className={cx("form-heading")}>Update Beat</h1>
      {/* Form */}
      <div className={cx("form")}>
        {/* BeatName */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"

            />
          </svg>
          <input
            type="text"
            placeholder="BeatName"
            className={cx("input-text")}
            value={beatName}
            onChange={(e) => setBeatName(e.target.value)}
          />
        </div>
        {/*Price */}
        <div className={cx("input")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g>
              <path d="M33.7501 0H25.4167C24.8409 0 24.1051 0.41125 23.7109 0.951563L22.6026 2.41719C22.5248 2.52031 22.4814 2.65977 22.4819 2.80489C22.4822 2.87675 22.4932 2.94783 22.5144 3.01408C22.5356 3.08034 22.5666 3.14046 22.6055 3.19102C22.6444 3.24157 22.6905 3.28158 22.7412 3.30875C22.7919 3.33592 22.8461 3.34972 22.9009 3.34937C23.0114 3.34865 23.1173 3.29031 23.1951 3.18719L24.3067 1.715C24.5442 1.39016 25.0734 1.09375 25.4167 1.09375H33.7501C33.8606 1.09375 33.9666 1.15137 34.0447 1.25393C34.1228 1.35648 34.1667 1.49558 34.1667 1.64062V12.6317C34.1667 13.0812 33.9409 13.7758 33.6884 14.0941L21.9542 29.3759C21.8709 29.4761 21.7617 29.5309 21.6488 29.5293C21.5358 29.5277 21.4275 29.4697 21.3459 29.3672L19.1392 26.4698C19.0607 26.3702 18.9554 26.3151 18.8462 26.3164C18.7369 26.3176 18.6324 26.3751 18.5551 26.4765C18.4779 26.5779 18.4341 26.7151 18.4331 26.8585C18.4322 27.0018 18.4742 27.14 18.5501 27.2431L20.7567 30.1405C20.9936 30.4461 21.3117 30.6189 21.6439 30.6224C21.976 30.6258 22.2962 30.4597 22.5367 30.1591L34.2717 14.8761C34.6867 14.3533 35.0001 13.3875 35.0001 12.6317V1.64062C35.0001 0.736094 34.4392 0 33.7501 0Z" fill="white" />
              <path d="M32.5319 5.46875C32.5319 4.26234 31.7844 3.28125 30.8653 3.28125C29.9461 3.28125 29.1986 4.26234 29.1986 5.46875C29.1986 6.67516 29.9461 7.65625 30.8653 7.65625C31.7844 7.65625 32.5319 6.67516 32.5319 5.46875ZM30.0319 5.46875C30.0318 5.25212 30.0806 5.04029 30.1722 4.86008C30.2638 4.67986 30.394 4.53936 30.5465 4.45636C30.699 4.37336 30.8667 4.35159 31.0286 4.3938C31.1905 4.43601 31.3392 4.5403 31.4559 4.69349C31.5727 4.84667 31.6521 5.04185 31.6843 5.25433C31.7164 5.46681 31.6998 5.68704 31.6366 5.88714C31.5734 6.08724 31.4663 6.25822 31.329 6.37844C31.1917 6.49866 31.0303 6.56272 30.8653 6.5625C30.4053 6.5625 30.0319 6.07141 30.0319 5.46875ZM13.7186 4.375C13.1428 4.375 12.4069 4.78625 12.0119 5.32656L0.3511 20.7823C0.123304 21.0974 -0.00222695 21.5164 0.00103872 21.9507C0.00430439 22.3851 0.136111 22.8007 0.3686 23.1098L9.0586 34.5155C9.2961 34.8283 9.61443 35 9.95527 35C10.2853 35 10.5969 34.837 10.8378 34.5341L22.5719 19.2522C22.9878 18.7294 23.3019 17.7636 23.3019 17.0067V6.01562C23.3019 5.11109 22.7411 4.375 22.0519 4.375H13.7186ZM22.5003 6.01562V17.0067C22.5003 17.4573 22.2428 18.1508 21.9903 18.4691L10.2561 33.7509C10.172 33.8484 10.0633 33.9015 9.95107 33.8999C9.83885 33.8983 9.73107 33.8421 9.6486 33.7422L0.957766 22.3377C0.879829 22.2323 0.835344 22.0919 0.833332 21.9451C0.83132 21.7982 0.871932 21.6559 0.946933 21.5469L12.6086 6.09C12.8461 5.76516 13.3753 5.46875 13.7186 5.46875H22.0519C22.2811 5.46875 22.5003 5.71375 22.5003 6.01562Z" fill="white" />
              <path d="M19.1667 7.65625C18.2475 7.65625 17.5 8.63734 17.5 9.84375C17.5 11.0502 18.2475 12.0312 19.1667 12.0312C20.0858 12.0312 20.8333 11.0502 20.8333 9.84375C20.8333 8.63734 20.0858 7.65625 19.1667 7.65625ZM19.1667 10.9375C18.9521 10.9249 18.7495 10.8042 18.6011 10.6004C18.4526 10.3967 18.3698 10.1257 18.3698 9.84375C18.3698 9.56185 18.4526 9.29081 18.6011 9.08707C18.7495 8.88334 18.9521 8.7626 19.1667 8.75C19.3812 8.7626 19.5838 8.88334 19.7323 9.08707C19.8807 9.29081 19.9636 9.56185 19.9636 9.84375C19.9636 10.1257 19.8807 10.3967 19.7323 10.6004C19.5838 10.8042 19.3812 10.9249 19.1667 10.9375Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_928_135">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="Text"
            placeholder="Price"
            className={cx("input-text")}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* OrderID*/}
        <div className={cx("input")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M24.0991 5.10425H27.7085C28.0953 5.10425 28.4662 5.25789 28.7397 5.53138C29.0132 5.80487 29.1668 6.17581 29.1668 6.56258V30.6251C29.1668 31.0119 29.0132 31.3828 28.7397 31.6563C28.4662 31.9298 28.0953 32.0834 27.7085 32.0834H7.29183C6.90506 32.0834 6.53412 31.9298 6.26063 31.6563C5.98714 31.3828 5.8335 31.0119 5.8335 30.6251V6.56258C5.8335 6.17581 5.98714 5.80487 6.26063 5.53138C6.53412 5.25789 6.90506 5.10425 7.29183 5.10425H12.396V7.29175H22.6043V5.10425H24.0991Z" stroke="white"/>
            <path d="M19.6877 13.8542L13.8543 19.6883H21.1489L15.3127 25.5216M12.396 2.91675H22.6043V7.29175H12.396V2.91675Z" stroke="white"/>
          </svg>
          <input
            type="text"
            placeholder="OrderID"
            className={cx("input-text")}
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
          />
        </div>
        {/* BeatSound*/}
        <div className={cx("input")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M1.25 17.6999H6.725C6.95553 17.6972 7.18121 17.6333 7.3789 17.5147C7.57659 17.3961 7.73918 17.227 7.85 17.0249L12.35 8.02488C12.4609 7.8008 12.6377 7.61602 12.8567 7.49536C13.0757 7.3747 13.3263 7.32393 13.575 7.34988C13.8227 7.36662 14.0591 7.45976 14.2516 7.61647C14.4441 7.77318 14.5833 7.98575 14.65 8.22488L20.225 26.7749C20.2982 27.0265 20.4485 27.2488 20.6549 27.4103C20.8613 27.5718 21.1132 27.6643 21.375 27.6749C21.6204 27.6667 21.8579 27.5865 22.0579 27.4443C22.258 27.302 22.4118 27.104 22.5 26.8749L25.925 18.4999C26.0193 18.2649 26.1814 18.0634 26.3907 17.9209C26.5999 17.7785 26.8469 17.7015 27.1 17.6999H33.75" stroke="white"/>
          </svg>
          <input
            type="text"
            placeholder="BeatSound"
            className={cx("input-text")}
            value={beatSound}
            onChange={(e) => setBeatSound(e.target.value)}
          />
        </div>
        {/* Username*/}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            />
          </svg>
          <input
            type="text"
            placeholder="UserName"
            className={cx("input-text")}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={cx("input")}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            />
          </svg>
          {/*Status*/}
          <select
            className={cx("input-text")}
            onChange={e => setStatus(e.target.value)}
            defaultValue={status}
          >
            <option value="status">Status</option>
            <option value="0">0</option>
            <option value="1">1</option>
          </select>
        </div>

        <div className={cx("input", "submit")}  onClick={handleSubmit}   >
          <input
            type="submit"
            value="Update"
            className={cx("input-text", "input-submit")}
          />
        </div>
      </div>

    </div>
  );
}

export default UpdateBeat;