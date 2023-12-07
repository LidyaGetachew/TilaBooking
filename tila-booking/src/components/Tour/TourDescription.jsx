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
          >
         {/* <iframe
  src={`https://www.google.com/maps/embed?center=[${desc.Map.latitude}],[${desc.Map.longitude}]&zoom=10&scale=true`}
  className="embed-responsive-item"
  allowFullScreen
  title="Map"
  style={{ width:"600", height: "450" }}
></iframe> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.356185331247!2d38.68313034055014!3d9.001738817838355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859bcf452021%3A0x784107a44fcdf0b0!2sLotus%20Ethiopia%20Website%20Design%20and%20Development!5e0!3m2!1sen!2sus!4v1701975162494!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             {/* </iframe> */}
          </div>
        </TabPanel>
        
        )}
      </TabContext>
    </div>
  );
};

export default TourDescription;
