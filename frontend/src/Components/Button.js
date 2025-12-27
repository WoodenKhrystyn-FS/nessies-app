function Button() {
  const handleClick = () => {
    console.log("Button clicked!");
    //alert("Your message has been sent!");
  };
  handleClick();

  return <button onClick={handleClick}>Submit</button>;
}

export default Button;
