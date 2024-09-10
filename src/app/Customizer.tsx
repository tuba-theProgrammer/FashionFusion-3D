'use client'
import React,{useState,useEffect} from "react";
import { AnimatePresence,motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "@/_config/config";
import state from "@/_config/store";
import {download} from '../../public/assets/Images'
import { useRouter } from 'next/navigation';
import { downloadCanvasToImage,reader } from "@/_config/helpers";
import { EditorTabs,FilterTabs,DecalTypes } from "@/_config/constants";
import { fadeAnimation,slideAnimation } from "@/_config/motion";
import { AIPicker,CustomButton,ColorPicker,FilePicker,Tabs } from "@/_components";
const Customizer = ()=>{
    const snap = useSnapshot(state)
   const router = useRouter();
    return (
        <div>
           <AnimatePresence>
            {   !snap.intro&&(
                    <>
                      <motion.div key="custom" className="absolute top-0 left-0 z-10"
                      {...slideAnimation('left')}
                      >
                         <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {
                                    EditorTabs.map((tab:any)=>
                                       (                
                                        <Tabs
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={()=>{}}
                                          isFilterTab
                                          isActiveTab=""
                                        />

                                       )
                                    )
                                }
                            </div>
                            </div>           
                      </motion.div>
                      <motion.div className="absolute z-10 top-5 right-5"     {...fadeAnimation}>
                                 <CustomButton customStyles="w-fit px-4 py-2.5 font-bold text-sm" type="filled" title="Go Back" handleClick={()=>{state.intro=true}} />
                      </motion.div>
                      <motion.div className="filtertabs-container" {...slideAnimation('up')}>
                              {
                                FilterTabs.map((tab:any)=>(
                                    <Tabs key={tab.name}
                                     tab={tab}
                                     isFilterTab
                                     isActiveTab=""
                                     handleClick={()=>{}}
                                     />
                                ))
                              }
                      </motion.div>
                    </>
            )
                
            }
           </AnimatePresence>
        </div>
    )
}
export default Customizer