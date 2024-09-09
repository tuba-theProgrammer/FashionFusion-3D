import React from "react";
import  state from '../../_config/store'
import { useSnapshot } from "valtio";
// Define the props type for the CustomButton component
interface CustomButtonProps {
    type: "filled"; // Restrict to valid button types
    title: string; // Title for the button text
    customStyles?: string; // Optional custom styles as a string (e.g., class names)
    handleClick?: () => void; // Optional click handler function
  }
  
const CustomButton:React.FC<CustomButtonProps>=({type,title,customStyles,handleClick})=>{
   const snap = useSnapshot(state)
    
    const generateStyle=(type:any)=>{
  if(type==='filled'){
      return{
        backgroundColor:snap.color,
        color:'#fff'
      }
  }
}
return(<>
<button onClick={handleClick} className={`px-2 py-1.5 flex rounded-[20px] ${customStyles}`} style={generateStyle(type)}>
{title}
</button>

</>)
}
export default CustomButton