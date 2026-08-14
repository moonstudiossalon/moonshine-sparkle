import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useFestiveOffer } from '@/hooks/useFestiveOffer';
import { festiveWa } from '@/lib/festive';
import { OFFER_TEL } from '@/lib/offers';
import { trackOfferCall, trackOfferWhatsApp } from './offerTracking';

const STEPS = [
  'Call us and tell us which services you want.',
  'Book any slot on or before 15 August.',
  'Bill above ₹1000 — the discount comes off at the counter.',
];

/** Served from public/ so a missing file degrades to a hidden block, not a build error. */
const POSTER_SRC = '/offers/independence-day-poster.jpeg';

/**
 * Full detail card for the running festive offer on /offers. Returns null once
 * the offer lapses, which also removes it from the page's offer list.
 */
const FestiveFull = () => {
  const status = useFestiveOffer();
  const [posterFailed, setPosterFailed] = useState(false);

  if (!status) return null;
  const { offer, countdown, finalDay } = status;

  return (
    <article className="ofull fest-full">
      <div className="fest-flag" aria-hidden="true" />

      <div className="ofull-top">
        <span className={cn('fest-stat', finalDay && 'fest-stat-final')}>
          <span className="fest-dot" aria-hidden="true" />
          <span className="fest-count">{countdown}</span>
        </span>
        <h2 className="ofull-title">{offer.title}</h2>
        <p className="ofull-tag">{offer.tagline}</p>
        <div className="ochips">
          <span className="ochip">
            <span className="ochip-ic">
              <Icon name="calendar" />
            </span>
            {offer.windowLabel}
          </span>
          <span className="ochip ochip-hi">
            <span className="ochip-ic">
              <Icon name="check" />
            </span>
            By appointment only
          </span>
        </div>
      </div>

      <ul className="fest-deals fest-deals-lg">
        {offer.deals.map((deal) => (
          <li className="fest-deal" key={deal.scope}>
            <span className="fest-val">
              {deal.value}
              <small className="fest-off">OFF</small>
            </span>
            <span className="fest-scope">{deal.scope}</span>
          </li>
        ))}
      </ul>

      <p className="fest-cond fest-cond-lg">
        <span className="fest-cond-ic" aria-hidden="true">
          <Icon name="info" />
        </span>
        {offer.condition}
      </p>

      <div className="osteps">
        {STEPS.map((step, i) => (
          <div className="ostep" key={step}>
            <span className="ostep-n">{i + 1}</span>
            <p className="ostep-t">{step}</p>
          </div>
        ))}
      </div>

      <div className="oact">
        <a
          className="ocall fest-call"
          href={`tel:${OFFER_TEL}`}
          onClick={() => trackOfferCall('festive_page')}
        >
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
          href={festiveWa(offer)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackOfferWhatsApp}
        >
          <span className="owa-ic">
            <Icon name="whatsapp" />
          </span>
          Or message us on WhatsApp
        </a>
        <div className="omention">
          <span className="omention-ic">
            <Icon name="info" />
          </span>
          <span className="omention-t">
            Say <b>“I'm calling about the {offer.name}”</b> and we'll block the right slot for you.
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

export default FestiveFull;
