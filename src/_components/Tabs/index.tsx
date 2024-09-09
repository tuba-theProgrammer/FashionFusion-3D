import React from 'react';

// Define the type for any props if needed
interface TabsProps {
  // Add any props here if the component requires them, e.g.:
  // activeTab: string;
  // onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = () => {
  return (
    <div>
      {/* Add your tab content here */}
       hi tab
    </div>
  );
};

export default Tabs;
