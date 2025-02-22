import Link from 'next/link'
import AliasRoutes from "@/routes/AliasRoutes";
import NewsNavigation from '@/components/navigations/NewsNavigation';
import ActivityNavigation from '@/components/navigations/ActivityNavigation';
import SecurityNavigation from '@/components/navigations/SecurityNavigation';
import BoardNavigation from '@/components/navigations/BoardNavigation';
import AboutNavigation from '@/components/navigations/AboutNavigation';
import styles from "@/assets/scss/sidelayout.module.css";


export default function SideNavigationLayout({ children }) {
  return (
      <div className="container">
        <div className='side-area'>
          <div className='side-item a23-btn security-portal'>
            <Link className='a23-btn-label' href={AliasRoutes.SecurityPortal} as={AliasRoutes.SecurityPortal} title="避難の判断に有用な情報です">
              防災統合情報
            </Link>
          </div>
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
        {children}
      </div>
  )
}
