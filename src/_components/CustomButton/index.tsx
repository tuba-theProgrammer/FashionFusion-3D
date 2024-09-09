import React from "react";
// Define the props type for the CustomButton component
interface CustomButtonProps {
    type: "filled"; // Restrict to valid button types
    title: string; // Title for the button text
    customStyles?: string; // Optional custom styles as a string (e.g., class names)
    handleClick?: () => void; // Optional click handler function
  }
  
const CustomButton:React.FC<CustomButtonProps>=({type,title,customStyles,handleClick})=>{
return(<>
<button className={`px-2 py-1.5 flex rounded-md ${customStyles}`} style={}>


</button>

</>)
}
export default CustomButton