import React from 'react';
import Testimonial from "parts/Testimonial";
import BoxContent from "parts/BoxContent"
import HelpTips from "parts/HelpTips";

const SectionThree = () => {
    return (
      <>
        <section className="container-fluid section-three">
          <Testimonial />
          <BoxContent title="POV">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </BoxContent>
          <BoxContent title="Resource">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </BoxContent>
          <HelpTips />
          <BoxContent
            title="You’re all set."
            className="yas-bg"
            classNameDiv="yas-content"
          >
            The wise man therefore always holds in these matters to this
            principle of selection.
          </BoxContent>
        </section>
      </>
    );
}

export default SectionThree;
