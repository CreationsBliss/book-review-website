import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='faq-container'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className='faq mb-5'>Frequently Asked Question</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faq-title">1. What is context API?</Accordion.Header>
                <Accordion.Body>
                  The React Context API is a way for a React application to successfully deliver worldwide factors that can be passed around. This is the choice to "prop drilling" or moving props from grandparent to youngster to parent, etc. Setting is likewise promoted as a more straightforward, lighter way to deal with state the executives utilizing Redux.

                  Context API is a (sort of) new element included variant 16.3 of React that permits one to share state across the whole application (or part of it) daintily and effortlessly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="faq-title">2. What is HTML Sementic tag?</Accordion.Header>
                <Accordion.Body>
                  Assuming you have close to zero insight into HTML, you will realize that HTML tags are (for the most part) used to organize content - these tagss advise the program how to display the content on the page. They give no sign regarding what sort of satisfied they contain for sure job that content plays in the page.

                  Semantic HTML5 tends to this deficiency by characterizing explicit tags to show obviously which job is played by the substance those tags contain. That express data helps robots/crawlers like Google and Bing to more readily comprehend which content is significant, which is an auxiliary, which is for route, etc. Semantic tag: nav, aside, etc.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="faq-title">3. Difference between Inline, Block, Inline-Block element.</Accordion.Header>
                <Accordion.Body>
                  Inline: An inline element takes up as much width as necessary. Example: a tag, img tag, etc. 
                  Block: A block element takes full width available. It is always start a new line. Example: h1, p, etc. 
                  Inline-Block: Using inline-block property we can set width and height value of an element.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;