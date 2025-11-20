import Work from "../portfolio/Work.jsx";
import Tools from "../portfolio/Toolkit.jsx";
import Skills from "../portfolio/Skills.jsx";
import Certificates from "../portfolio/certificates.jsx";
import Testimonials from "../portfolio/Testimonials.jsx";
import Contacts from "../portfolio/Contacts.jsx";

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
