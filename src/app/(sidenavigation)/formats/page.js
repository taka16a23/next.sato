import SatoFormats from '@/components/formats/SatoFormats';
import OtherFormats from '@/components/formats/OtherFormats';


export default function Page() {
  return (
      <div className='main-area'>
        <main id="main">
          <section className="main-item jichikai-formats" id="sato">
            <h2 className="main-title">
              <span className="title">里自治会関係書式</span>
            </h2>
            <SatoFormats/>
          </section>
          <section className="main-item jichitai-formats" id="other">
            <h2 className="main-title">
              <span className="title">自治体等関係書式</span>
            </h2>
            <OtherFormats/>
          </section>
        </main>
      </div>
  );
}
