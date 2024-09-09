'use client'
import React,{useState,useEffect} from "react";
import { AnimatePresence,motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "@/_config/config";
import state from "@/_config/store";
import {download} from '../../../public/assets/Images'
import { downloadCanvasToImage,reader } from "@/_config/helpers";
import { EditorTabs,FilterTabs,DecalTypes } from "@/_config/constants";
import { fadeAnimation,slideAnimation } from "@/_config/motion";
import { AIPicker,CustomButton,ColorPicker,FilePicker,Tabs } from "@/_components";
const Customizer = ()=>{
    const snap = useSnapshot(state)
    return (
        <div>
           <AnimatePresence>
            {
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
                                          
                                        />

                                       )
                                    )
                                }
                            </div>
                            </div>           
                      </motion.div>
                    </>
                
            }
           </AnimatePresence>
        </div>
    )
}
export default Customizer