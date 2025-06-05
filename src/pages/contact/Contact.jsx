import React from "react";
import "./contact.css";
import TitleHeader from "../../components/title-header";
import ButtonCustom from "../../components/button/ButtonCustom";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="slide"></div>
      <div className="section contact">
        <TitleHeader first={"get in"} second={"touch"} third={"contact"} />
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Don't be shy</h3>
              <p>
                Thank you for reading to the end. I hope that you have learned a
                little about me through this site. If you have any comments
                about this site or me, please use the form.
              </p>
              <ul className="contact-info__list">
                <li>
                  <div className="icon">
                    <PlaceIcon />
                  </div>
                  <span>Adress</span>
                  Ha Noi
                </li>
                <li>
                  <div className="icon">
                    <EmailIcon />
                  </div>
                  <span>Email</span>
                  ductt1531@gmail.com
                </li>
                <li>
                  <div className="icon">
                    <CallIcon />
                  </div>
                  <span>Phone</span>
                  <a href="tel:0356581703">0356581703</a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Ductran201" target="_blank">
                    <GitHubIcon />
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="contact-form"
              id="contact-form"
            >
              <div className="field contact-form__info">
                <div className="contact-form__info-name">
                  <input
                    {...register("name", {
                      required: "Must not be blank",
                      validate: (value) =>
                        value.trim() !== "" ? true : "Must not be blank",
                    })}
                    type="text"
                    placeholder="NAME"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[12px] pl-4">
                      {errors.name?.message}
                    </span>
                  )}
                </div>
                <div className="contact-form__info-email">
                  <input
                    {...register("email", {
                      required: "Must not be blank",
                      validate: (value) =>
                        value.trim() !== "" ? true : "Must not be blank",
                    })}
                    type="text"
                    placeholder="EMAIL"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px] pl-4">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="field contact-form__subject">
                <input
                  {...register("subject", {
                    required: "Must not be blank",
                    validate: (value) =>
                      value.trim() !== "" ? true : "Must not be blank",
                  })}
                  type="text"
                  placeholder="SUBJECT"
                />
                {errors.subject && (
                  <span className="text-red-500 text-[12px] pl-4">
                    {errors.subject?.message}
                  </span>
                )}
              </div>
              <div className="field contact-form__message">
                <textarea
                  {...register("message", {
                    required: "Must not be blank",
                    validate: (value) =>
                      value.trim() !== "" ? true : "Must not be blank",
                  })}
                  placeholder="YOUR MESSAGE"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-[12px] pl-4">
                    {errors.message?.message}
                  </span>
                )}
              </div>

              <div className="field">
                <ButtonCustom type="submit">
                  <span className="btn-text">send message</span>
                  <span className="btn-icon">
                    <SendIcon />
                  </span>
                </ButtonCustom>
                {/* <p className="status-message" ref={statusRef}>{statusMessage} </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Modal id="modal-1">
        <ModalContent className="success">
          <div className="icon">
            <i className="bx bx-check"></i>
          </div>

          <h3>Success!</h3>
          <p>We've sent a confirmation to your e-mail for verification.</p>
          <button type="button" className="redo-btn" onClick={handleClose1}>
            Ok
          </button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal>
      <Modal id="modal-2">
        <ModalContent className="error">
          <div className="icon">
            <i className="bx bxs-dislike"></i>
          </div>

          <h3>Oh no!</h3>
          <p>Oops! Something went wrong, you should try again.</p>
          <button type="button" className="redo-btn" onClick={handleClose2}>
            Ok
          </button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal> */}
    </>
  );
}
