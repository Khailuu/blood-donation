import React, { useState } from "react";
import {
  Typography,
  Button,
  Checkbox,
  Card,
  Radio,
  Progress,
  message,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../../../css/custom-radio.css";
import { steps } from "../../../assets/survey";
import "../../../css/custom-checkbox.css"
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;

export const HealthSurvey = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showIntro, setShowIntro] = useState(false);

  const totalQuestions = steps.reduce(
    (sum, section) => sum + section.questions.length,
    0
  );
  const stepOffset = step - 1;

  const getCurrentSection = () => {
    let count = 0;
    for (let sec of steps) {
      if (stepOffset < count + sec.questions.length) return sec;
      count += sec.questions.length;
    }
    return steps[0];
  };

  const currentSection = step > 0 ? getCurrentSection() : null;
  const sectionIndex = step > 0 ? steps.indexOf(currentSection) : -1;

  const questionIndex =
    step > 0
      ? stepOffset -
        steps.slice(0, sectionIndex).reduce((a, s) => a + s.questions.length, 0)
      : -1;

  const currentQuestion =
    step > 0 ? currentSection.questions[questionIndex] : null;

  const handleNext = () => {
    if (step === 0 && accepted) {
      setStep(1);
      return;
    }

    if (step < totalQuestions) {
      const isLastQuestionInSection =
        questionIndex + 1 === currentSection.totalQuestions;

      if (isLastQuestionInSection) {
        setShowIntro(true);
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (showIntro) {
      setShowIntro(false);
    } else if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    message.success("Survey submitted successfully!");
  };

  const mainContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#fdd8df",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    fontFamily: "Raleway",
  };

  const buttonPrimaryStyle = {
    backgroundColor: "#b8002b",
    borderColor: "#b8002b",
  };

  const radioStyle = {
    padding: "12px 20px",
    borderRadius: 16,
    border: "1px solid #b8002b",
    fontSize: 16,
    color: "#b8002b",
    fontWeight: "600",
    backgroundColor: "#fff",
    marginBottom: 4,
    width: "100%",
  };

  const cardStyle = {
    borderRadius: 24,
    padding: 24,
    margin: "32px auto",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  if (showIntro) {
    return (
      <div style={mainContainerStyle}>
        <div style={{ width: "100%", maxWidth: 700, textAlign: "center" }}>
          <Title
            style={{
              fontFamily: "oi",
              fontWeight: "normal",
              color: "#b8002b",
            }}
          >
            Hemora
          </Title>
          <Title level={2} style={{ color: "#b8002b", marginTop: 40 }}>
            Section {sectionIndex + 3} - Get Ready!
          </Title>
          <Paragraph style={{ fontFamily: "Raleway",fontSize: 18 }}>
            We’re about to ask you some quick questions to ensure your
            eligibility.
          </Paragraph>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 32,
            }}
          >
            <Button
              shape="round"
              size="large"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #b8002b",
                color: "#b8002b",
              }}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              shape="round"
              size="large"
              type="primary"
              style={buttonPrimaryStyle}
              onClick={() => {
                setShowIntro(false);
                setStep((prev) => prev + 1);
              }}
            >
              Let’s go
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={mainContainerStyle}>
      <div style={{ width: "100%", maxWidth: 700 }}>
        <Title
          style={{
            fontFamily: "oi",
            fontWeight: "normal",
            color: "#b8002b",
            textAlign: "center",
          }}
        >
          Hemora
        </Title>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {[0, ...steps.map((_, i) => i + 1)].map((sectionIndexUI, i) => {
            let percentage = 0;
            if (step === 0) {
              percentage = 0;
            } else if (i === 0) {
              percentage = 100;
            } else {
              const realSectionIndex = i - 1;
              const totalBefore = steps
                .slice(0, realSectionIndex)
                .reduce((a, s) => a + s.questions.length, 0);
              const currentTotal = steps[realSectionIndex].questions.length;
              const currentStepInSection = step - 1 - totalBefore;
              if (currentStepInSection < 0) percentage = 0;
              else if (currentStepInSection >= currentTotal) percentage = 100;
              else {
                percentage = Math.round(
                  (currentStepInSection / currentTotal) * 100
                );
              }
            }

            return (
              <div key={i} style={{ flex: 1 }}>
                <Progress
                  percent={percentage}
                  showInfo={false}
                  strokeColor="#b8002b"
                  trailColor="#e4a5af"
                  size="default"
                />
              </div>
            );
          })}
        </div>

        {step === 0 && (
          <>
            <Title
              level={2}
              style={{
                fontWeight: "bold",
                color: "#b8002b",
                textAlign: "center",
              }}
            >
              Are you eligible to donate?
              <br />
              <strong style={{ fontWeight: "200" }}>
                Let's find out together
              </strong>
            </Title>
            <Card style={cardStyle}>
              <Text style={{fontFamily:"raleway", fontSize:15}}>
                <InfoCircleOutlined
                  style={{ color: "#b8002b", marginRight: 8 }}
                />
                We will ask you a few questions to gather all the information
                needed to donate.
              </Text>
              <br />
              <Text style={{fontFamily:"raleway", fontSize:15}}>
                <strong>Please answer truthfully</strong>, it's important.
              </Text>
              <Paragraph style={{ fontFamily:"raleway", fontSize: 15, marginTop: 12 }}>
                I give consent for the processing of Personal Data of a
                sensitive nature... <a href="#">privacy policy</a>.
              </Paragraph>
              <Checkbox
                className="custom-checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              >
                I have read and accept
              </Checkbox>
            </Card>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <Button
                onClick={() => navigate(-1)}
                shape="round"
                size="large"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #b8002b",
                  color: "#b8002b",
                }}
              >
                Back
              </Button>
              <Button
                shape="round"
                size="large"
                type="primary"
                style={buttonPrimaryStyle}
                onClick={handleNext}
                disabled={!accepted}
              >
                Start the Health Survey
              </Button>
            </div>
          </>
        )}

        {!showIntro && step > 0 && currentQuestion && (
          <>
            <Text
              strong
              style={{ color: "#b8002b", fontWeight: 600, marginBottom: 8 }}
            >
              Section {sectionIndex + 2}/4 - Question {questionIndex + 1} of{" "}
              {currentSection.totalQuestions}
            </Text>

            <Title
              level={4}
              style={{ marginTop: 16, color: "#333", fontWeight: 600 }}
            >
              {currentQuestion.title}
            </Title>

            <Radio.Group
              className="custom-radio"
              onChange={(e) =>
                setAnswers({ ...answers, [step]: e.target.value })
              }
              value={answers[step] || null}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 16,
              }}
            >
              {currentQuestion.options.map((opt, i) => (
                <Radio key={i} value={opt} style={radioStyle}>
                  {opt}
                </Radio>
              ))}
            </Radio.Group>

            {currentQuestion.subQuestion &&
              answers[step] === currentQuestion.subQuestion.condition && (
                <>
                  <Title
                    level={5}
                    style={{ marginTop: 24, fontWeight: 500, color: "#444" }}
                  >
                    1.1 {currentQuestion.subQuestion.title}
                  </Title>
                  <Radio.Group
                    className="custom-radio"
                    onChange={(e) =>
                      setAnswers({
                        ...answers,
                        [`${step}_sub`]: e.target.value,
                      })
                    }
                    value={answers[`${step}_sub`] || null}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      marginTop: 16,
                    }}
                  >
                    {currentQuestion.subQuestion.options.map((opt, i) => (
                      <Radio key={i} value={opt} style={radioStyle}>
                        {opt}
                      </Radio>
                    ))}
                  </Radio.Group>
                </>
              )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                marginTop: 32,
              }}
            >
              <Button
                shape="round"
                size="large"
                onClick={handleBack}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #b8002b",
                  color: "#b8002b",
                }}
              >
                Back
              </Button>
              {step === totalQuestions ? (
                <Button
                  shape="round"
                  size="large"
                  type="primary"
                  style={{
                    backgroundColor: "#28a745",
                    borderColor: "#28a745",
                    borderRadius: 24,
                    padding: "8px 24px",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  shape="round"
                  size="large"
                  type="primary"
                  style={buttonPrimaryStyle}
                  disabled={!answers[step]}
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
