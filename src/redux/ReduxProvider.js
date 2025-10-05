'use client'

import { slide as BurgerMenu } from 'react-burger-menu';
import { Provider } from "react-redux";

import NewsNavigation from '@/components/navigations/NewsNavigation';
import ActivityNavigation from '@/components/navigations/ActivityNavigation';
import SecurityNavigation from '@/components/navigations/SecurityNavigation';
import BoardNavigation from '@/components/navigations/BoardNavigation';
import AboutNavigation from '@/components/navigations/AboutNavigation';
import { configureStore } from "@/redux/Store";


export function ReduxProvider({ children }) {
  return (
    <Provider store={configureStore()}>
       <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container"} width={'100%'}>
         <main id="page-wrap">
           <div className='side-area'>
             <div className='side-item submenu'>
               <ul className='submenu-list'>
                 <NewsNavigation/>
                 <ActivityNavigation/>
                 <SecurityNavigation/>
                 <BoardNavigation/>
                 <AboutNavigation/>
               </ul>
             </div>
           </div>
         </main>
       </BurgerMenu>
      {children}
    </Provider>
  )
}
