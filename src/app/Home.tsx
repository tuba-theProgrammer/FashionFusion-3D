'use client'
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import { useRouter } from 'next/navigation';
import { headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation } from '@/_config/motion'
import state from '@/_config/store'
import {CustomButton} from '@/_components'
const Home =()=>{
    const snap = useSnapshot(state)
    const router = useRouter();
   
 
    return (
        <>
         <AnimatePresence>
          {
            snap.intro &&(
                <motion.section className='home' {...slideAnimation('left')}>
                      <motion.header {...slideAnimation('down')}>
                        <h1 className='font-bold text-[20px]'>FashionFusion.</h1>
                      </motion.header>
                      <motion.div className='home-content' {...headTextAnimation}>
                            <h1 className='head-text'>
                            LET'S <br className="xl:block hidden" /> DO IT.
                            </h1>
                      </motion.div>
                      <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                      <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
             type="filled"
               title="Customize It"
                handleClick={()=>{
                  state.intro = false 
               
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"    
                />
                     
                      </motion.div>
                </motion.section>
            )
          }
      </AnimatePresence>
    </>
    )
}
export default Home;