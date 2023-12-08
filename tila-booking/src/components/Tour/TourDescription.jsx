import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const TourDescription = ({ desc }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAccordionChange = (question) => {
    setExpandedQuestion(question === expandedQuestion ? null : question);
  };

  return (
    <div>
      <TabContext value={activeTab}>
        <TabList value={activeTab}  style={{
        display: "flex",
        overflowX: "auto",
        width: "100%",
        whiteSpace: "nowrap",
      }}onChange={handleTabChange}>
          <Tab label="Overview" />
          <Tab label="Itinerary" />
          <Tab label="Cost" />
          <Tab label="FAQs" />
          <Tab label="Map" />
        </TabList>

        {/* Fix: Wrap tab content in a conditional statement */}
        {activeTab === 0 && (
          <TabPanel value={activeTab} index={0}>
            <p>{desc.overview}</p>
          </TabPanel>
        )}

        {activeTab === 1 && (
          <TabPanel value={activeTab} index={1}>
            <p>{desc.itinerary}</p>
          </TabPanel>
        )}

        {activeTab === 2 && (
          <TabPanel value={activeTab} index={2}>
            <div>
              <p>Included:</p>
              <ul>
                {desc.cost.included.map((item, index) => (
                  <li key={index}>
                    <CheckCircleIcon
                      style={{ color: "green", marginRight: 4 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Not Included:</p>
              <ul>
                {desc.cost.notIncluded.map((item, index) => (
                  <li key={index}>
                    <CancelIcon style={{ color: "red", marginRight: 4 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        )}

        {activeTab === 3 && (
          <TabPanel value={activeTab} index={3}>
          {desc.FAQs.map((faq, index) => (
            <div key={index}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={() => handleAccordionChange(faq.question)}
                aria-expanded={expandedQuestion === faq.question}
                aria-controls={`faq-panel-${index}`}
                >
                <Typography variant="subtitle1">{faq.question}</Typography>
                </AccordionSummary>
                <Typography variant="body1" hidden={expandedQuestion !== faq.question}>
                {faq.answer}
                </Typography>
            </div>
            ))}

          </TabPanel>
        )}

        {activeTab === 4 && (
          <TabPanel
          value={activeTab}
          index={4}
        >
          <div
            className="embed-responsive embed-responsive-16by9"
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: desc.Map }}
          >
          </div>
        </TabPanel>
        
        )}
      </TabContext>
    </div>
  );
};

export default TourDescription;
