import Link from 'next/link';

import AliasRoutes from "@/routes/AliasRoutes";
import { ServiceFactory } from '@/services';
import NewsList from '@/components/NewsList';
import DayCalendar from '@/components/DayCalendar';
import TomorrowEvents from '@/components/events/TomorrowEvents';


export default function Page() {

  const today = new Date();

  return (
    <>
      <div className='main-area'>
        <main id="main" className="home">
          <section className="main-item">
            <h2 className="main-title">
              <Link className="link" href={AliasRoutes.News} as={AliasRoutes.News} alt="" title="最新情報一覧">
                <span className="title">最新情報</span>
              </Link>
            </h2>
            <div className="main-body news">
              <NewsList limit={Number(process.env.NEXT_PUBLIC_APP_NEWS_LIMIT)}/>
            </div>
          </section>
          <section className="main-item">
            <h2 className="main-title">
              <a className="link" href="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" alt="" title="カレンダー" target="_blank" rel="noopener noreferrer">
                <span className="title">当面の予定</span>
                <i className="mdi mdi-open-in-new"></i>
              </a>
            </h2>
            <div className="main-body calendar">
              <iframe className="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" style={{borderWidth:"0", height:"60vh"}} frameBorder="0" scrolling="no" title="google calendar"></iframe>
            </div>
          </section>
        </main>
      </div>
      <div className="side-area">
        <DayCalendar/>
        <div className="side-item">
          <h2 className="side-title">
            <a className="link" href="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=satotanakami%40gmail.com&amp;color=%23125A12&amp;ctz=Asia%2FTokyo" rel="noopener noreferrer" target="_blank" alt="" title="明日">
              <span>明日</span>
            </a>
          </h2>
          <div className="side-body daily-tomorrow">
            <TomorrowEvents/>
          </div>
        </div>
      </div>
    </>
  );
}
