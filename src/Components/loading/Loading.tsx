import { FaSpinner } from "react-icons/fa";
import React from "react";
import PageContainer from "../lib/PageContainer";
import "./Spinner.css";
const Loading = () => {
  return (
    <PageContainer>
      <>
        <div className="spinner"></div>;
      </>
    </PageContainer>
  );
};

export default Loading;
