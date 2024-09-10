import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { Form as AntdForm, Input as AntdInput, Button } from "antd";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [form] = AntdForm.useForm();

  const onFinishsubmit = async (values) => {
    console.log("Received values:", values);
  
    // try {
    //   const response = await fetch("https://api.example.com/submit", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
  
    //   const data = await response.json();
    //   console.log("Success:", data);
    //   form.resetFields();
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <br />
            <AntdForm
              form={form}
              name="basic"
              onFinish={onFinishsubmit}
              layout="vertical"
              initialValues={{ remember: true }}
            >
              <AntdForm.Item
                // label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <AntdInput
                  placeholder="Name"
                  style={{
                    border: "none",
                    borderBottom: " 1px solid blue",
                    borderRadius: "0px",
                  }}
                />
              </AntdForm.Item>

              <AntdForm.Item
                // label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                ]}
              >
                <AntdInput
                  placeholder="Email"
                  style={{
                    border: "none",
                    borderBottom: " 1px solid blue",
                    borderRadius: "0px",
                  }}
                />
              </AntdForm.Item>

              <AntdForm.Item
                // label="Mobile Number"
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Please enter your mobile number",
                  },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Mobile number must be 10 digits",
                  },
                ]}
              >
                <AntdInput
                  placeholder="Mobile Number"
                  style={{
                    border: "none",
                    borderBottom: " 1px solid blue",
                    borderRadius: "0px",
                  }}
                />
              </AntdForm.Item>

              <AntdForm.Item
                // label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city" }]}
              >
                <AntdInput placeholder="city"  style={{
                    border: "none",
                    borderBottom: " 1px solid blue",
                    borderRadius: "0px",
                  }} />
              </AntdForm.Item>

              <AntdForm.Item
                // label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <AntdInput.TextArea
                  placeholder="Message"
                  style={{
                    border: "none",
                    borderBottom: " 1px solid blue",
                    borderRadius: "0px",
                  }}
                />
              </AntdForm.Item>

              <AntdForm.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "blue" }}
                >
                  Submit
                </Button>
              </AntdForm.Item>
            </AntdForm>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
