import Work from "../portfolio/Work";
import Tools from "../portfolio/Toolkit";
import Skills from "../portfolio/Skills";
import Certificates from "../portfolio/certificates";
import Testimonials from "../portfolio/Testimonials";
import Contacts from "../portfolio/Contacts";

function Canvas({ selectedComponent }) {
  const renderComponent = () => {
    switch (selectedComponent) {
      case "My Work":
        return <Work />;
      case "My Tools":
        return <Tools />;
      case "Skills":
        return <Skills />;
      case "Certificates":
        return <Certificates />;
      case "Testimonials":
        return <Testimonials />;
      case "Contacts":
        return <Contacts />;
      default:
        return <Work />;
    }
  };

  return (
    <>
      <div id="canvas" className="canvas">
        {renderComponent()}
      </div>
    </>
  );
}

export default Canvas;
