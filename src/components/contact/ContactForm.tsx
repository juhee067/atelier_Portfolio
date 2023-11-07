import React, { useRef } from "react";
import { styled } from "styled-components";
import emailjs from "@emailjs/browser";
import { FlexColumnDiv, FlexRowDiv } from "src/module/styled/FlexDiv";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AskContainer = styled(FlexColumnDiv)`
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.color.bottomLine};
`;

const AskForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Input = styled.input`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.bottomLine};
  outline: none;
`;

const Label = styled(FlexColumnDiv)`
  gap: 10px;
`;

const TextArea = styled.textarea`
  padding: 20px 10px;
  height: 200px;
  outline: none;
  resize: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.bottomLine};

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.mainBlack};
  }
`;

const MoreBtn = styled(FlexRowDiv)`
  display: inline-flex;
  justify-content: center;
  padding: 10px 20px;
  margin: 20px auto;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.color.mainBlack};
  border-radius: 20px;
  cursor: pointer;
  button {
    background-color: ${({ theme }) => theme.color.mainWhite};
  }
`;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm("portfolio", "template_fnczbcg", formRef.current, "NOJ_odvgb8Rdjrmmz").then(
        (result) => {
          console.log(result);
          alert("메일이 성공적으로 전달되었습니다.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <AskContainer>
      <AskForm ref={formRef} onSubmit={handleSubmit}>
        <Label>
          이메일
          <Input type="email" name="user_email" placeholder="답변 받으실 이메일" required />
        </Label>
        <Label>
          문의 제목
          <Input
            type="text"
            name="ask_title"
            placeholder="제목을 입력해주세요.(20자 이내)"
            maxLength={20}
            required
          />
        </Label>
        <Label>
          문의 내용
          <TextArea name="ask_message" placeholder="내용을 입력해주세요." required />
        </Label>
        <MoreBtn>
          <button type="submit">메일보내기</button>
          <BsFillArrowRightCircleFill />
        </MoreBtn>
      </AskForm>
    </AskContainer>
  );
};

export default ContactForm;
