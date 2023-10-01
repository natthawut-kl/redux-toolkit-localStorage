import React from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

interface ILayoutStyleProp {
  children?: React.ReactNode;
}

const LayoutStyle = (props: ILayoutStyleProp) => {
    const { children } = props;
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Content
          style={{
            background: "linear-gradient(to left, #ffa200, #6eda78)",
            padding: "24px",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default LayoutStyle;
