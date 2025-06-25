import React, { useState } from "react";
import { Typography, Button, Checkbox, Card, Radio, Progress } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const steps = [
  {
    section: 2,
    totalQuestions: 3,
    questions: [
      {
        title: "Have you ever donated?",
        options: ["Yes", "No"],
        subQuestion: {
          condition: "Yes",
          title: "When was your last donation?",
          options: ["1 month ago", "3 months ago", "More than 6 months ago"],
        },
      },
      {
        title: "Do you feel healthy today?",
        options: ["Yes", "No"],
      },
      {
        title: "Have you slept at least 5 hours?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    section: 3,
    totalQuestions: 2,
    questions: [
      {
        title: "Did you eat in the last 4 hours?",
        options: ["Yes", "No"],
      },
      {
        title: "Do you weigh more than 50kg?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    section: 4,
    totalQuestions: 2,
    questions: [
      {
        title: "Do you have any chronic diseases?",
        options: ["Yes", "No"],
      },
      {
        title: "Have you taken any medication in the last 48 hours?",
        options: ["Yes", "No"],
      },
    ],
  },
];

export const HealthSurvey = () => {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState({});

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
    if (step === 0 && !accepted) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fdd8df",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        fontFamily: "Raleway",
      }}
    >
      <div style={{ width: "100%", maxWidth: 700 }}>
        <img
          src="/logo.svg"
          alt="ROSSO"
          style={{ height: 32, marginBottom: 16 }}
        />

        {/* Progress Bar */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {[0, ...steps.map((_, i) => i + 1)].map((sectionIndexUI, i) => {
            let percentage = 0;

            if (step === 0) {
              percentage = 0;
            } else if (i === 0) {
              percentage = 100; // intro completed
            } else {
              const realSectionIndex = i - 1;
              const totalBefore = steps
                .slice(0, realSectionIndex)
                .reduce((a, s) => a + s.questions.length, 0);
              const currentTotal = steps[realSectionIndex].questions.length;
              const currentStepInSection = step - 1 - totalBefore;

              if (currentStepInSection < 0) {
                percentage = 0; // chưa vào section này
              } else if (currentStepInSection >= currentTotal) {
                percentage = 100;
              } else {
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
                  size="small"
                />
              </div>
            );
          })}
        </div>

        {/* Introduction */}
        {step === 0 && (
          <>
            <Title level={2} style={{ color: "#b8002b" }}>
              Are you eligible to donate?
              <br />
              <strong style={{ color: "#9d0025" }}>
                Let's find out together
              </strong>
            </Title>
            <Card
              style={{
                borderRadius: 24,
                padding: 24,
                margin: "32px auto",
                background: "white",
              }}
            >
              <Text>
                <InfoCircleOutlined
                  style={{ color: "#b8002b", marginRight: 8 }}
                />
                We will ask you a few questions to gather all the information
                needed to donate.
              </Text>
              <br />
              <Text>
                <strong>Please answer truthfully</strong>, it's important.
              </Text>
              <Paragraph style={{ fontSize: 12, marginTop: 12 }}>
                I give consent for the processing of Personal Data of a
                sensitive nature... <a href="#">privacy policy</a>.
              </Paragraph>
              <Checkbox
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              >
                I have read and accept
              </Checkbox>
            </Card>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <Button shape="round" size="large" disabled>
                Back
              </Button>
              <Button
                shape="round"
                size="large"
                type="primary"
                style={{ backgroundColor: "#b8002b", borderColor: "#b8002b" }}
                onClick={handleNext}
                disabled={!accepted}
              >
                Start the Quiz!
              </Button>
            </div>
          </>
        )}

        {/* Question Section */}
        {step > 0 && currentQuestion && (
          <>
            <Text strong style={{ color: "#b8002b" }}>
              Section {sectionIndex + 2}/4 - Question {questionIndex + 1} of{" "}
              {currentSection.totalQuestions}
            </Text>

            <Title level={4} style={{ marginTop: 16 }}>
              {currentQuestion.title}
            </Title>

            <Radio.Group
              onChange={(e) =>
                setAnswers({ ...answers, [step]: e.target.value })
              }
              value={answers[step] || null}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 16,
              }}
            >
              {currentQuestion.options.map((opt, i) => (
                <Radio.Button key={i} value={opt} style={radioStyle}>
                  {opt}
                </Radio.Button>
              ))}
            </Radio.Group>

            {currentQuestion.subQuestion &&
              answers[step] === currentQuestion.subQuestion.condition && (
                <>
                  <Title
                    level={5}
                    style={{ marginTop: 24 }}
                  >{`1.1 ${currentQuestion.subQuestion.title}`}</Title>
                  <Radio.Group
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
                      gap: 16,
                      marginTop: 16,
                    }}
                  >
                    {currentQuestion.subQuestion.options.map((opt, i) => (
                      <Radio.Button key={i} value={opt} style={radioStyle}>
                        {opt}
                      </Radio.Button>
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
              <Button shape="round" size="large" onClick={handleBack}>
                Back
              </Button>
              <Button
                shape="round"
                size="large"
                type="primary"
                style={{ backgroundColor: "#b8002b", borderColor: "#b8002b" }}
                disabled={!answers[step]}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const radioStyle = {
  padding: "12px 24px",
  borderRadius: 12,
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  fontSize: 16,
  width: "100%",
  textAlign: "left",
};
