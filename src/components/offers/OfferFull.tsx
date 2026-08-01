import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useOfferStatus } from '@/hooks/useOfferStatus';
import { OFFER_TEL, fmtH, offerWa, type Offer } from '@/lib/offers';
import { trackOfferCall, trackOfferWhatsApp } from './offerTracking';

const STEPS = [
  'Call us and tell us which pair you want.',
  'Come in Monday to Thursday, between 12 and 5 PM.',
  'Pay for the first service — the second one is free.',
];

/** Served from public/ so a missing file degrades to a hidden block, not a build error. */
const POSTER_SRC = '/offers/happy-hour-poster.jpeg';

/**
 * The full offer detail card. Unlike the banner and the strip, this keeps the
 * immersive dark green/gold treatment at every width — its desktop deltas live
 * in src/offers.css under @media (min-width:768px).
 */
const OfferFull = ({ offer }: { offer: Offer }) => {
  const status = useOfferStatus(offer);
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <article className="ofull">
      <div className="ofull-top">
        <span className={cn('ostat', status.live && 'ostat-live')}>
          <span className={cn('ostat-dot', status.live && 'ostat-dot-live')} aria-hidden="true" />
          {status.long}
        </span>
        <h2 className="ofull-title">{offer.name}</h2>
        <p className="ofull-tag">{offer.tagline}</p>
        <div className="ochips">
          <span className="ochip">
            <span className="ochip-ic">
              <Icon name="calendar" />
            </span>
            {offer.dayLabel}
          </span>
          <span className="ochip">
            <span className="ochip-ic">
              <Icon name="clock" />
            </span>
            {fmtH(offer.startHour)} – {fmtH(offer.endHour)}
          </span>
          <span className="ochip ochip-hi">
            <span className="ochip-ic">
              <Icon name="check" />
            </span>
            By appointment only
          </span>
        </div>
      </div>

      <div className="ohead">
        <b className="ohead-b">Choose any one pair</b>
        <small className="ohead-s">Four combinations. Pay for the first, the second is free.</small>
      </div>

      <div className="ogrid">
        {offer.pairs.map((pair) => (
          <div className="odeal" key={pair.pay}>
            <div className="oside pay">
              <div className="oph">
                <img src={pair.payImg} alt={pair.pay} loading="lazy" />
              </div>
              <span className="olab">You pay for</span>
              <span className="onm">{pair.pay}</span>
            </div>
            <div className="ojoin">
              <span className="oplus" aria-hidden="true">
                +
              </span>
            </div>
            <div className="oside get">
              <div className="oph">
                <img src={pair.getImg} alt={pair.get} loading="lazy" />
              </div>
              <span className="olab">You get</span>
              <span className="onm">{pair.get}</span>
              {pair.sub && <span className="osub">{pair.sub}</span>}
              <span className="ofreepill">FREE</span>
            </div>
          </div>
        ))}
      </div>

      <div className="osteps">
        {STEPS.map((step, i) => (
          <div className="ostep" key={step}>
            <span className="ostep-n">{i + 1}</span>
            <p className="ostep-t">{step}</p>
          </div>
        ))}
      </div>

      <div className="oact">
        <a className="ocall" href={`tel:${OFFER_TEL}`} onClick={() => trackOfferCall('offer_page')}>
          <span className="ocall-ic">
            <Icon name="phone" />
          </span>
          <span className="ocall-lab">
            Call to Book Your Slot
            <small className="ocall-sub">+91 90048 32184 · 9:30 AM – 9 PM, all days</small>
          </span>
        </a>
        <a
          className="owa"
          href={offerWa(offer)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackOfferWhatsApp}
        >
          <span className="owa-ic">
            <Icon name="whatsapp" />
          </span>
          Or message us on WhatsApp
        </a>
        {/* One wrapping text element beside the icon — splitting this into
            separate flex children makes the sentence render as independently
            wrapping columns. */}
        <div className="omention">
          <span className="omention-ic">
            <Icon name="info" />
          </span>
          <span className="omention-t">
            Say <b>“I'm calling about {offer.name}”</b> and we'll block the right slot for you.
          </span>
        </div>
      </div>

      <ul className="oterms">
        {offer.terms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>

      {!posterFailed && (
        <div className="oposter">
          <img
            src={POSTER_SRC}
            alt={`${offer.name} offer poster`}
            loading="lazy"
            onError={() => setPosterFailed(true)}
          />
        </div>
      )}
    </article>
  );
};

export default OfferFull;
