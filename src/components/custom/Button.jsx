function CustomButton({ type, function: buttonLabel, clickhandler }) {
    return (
      <button onClick={clickhandler} className={type}>
        {buttonLabel}
      </button>
    );
  }
  
  export default CustomButton;
  