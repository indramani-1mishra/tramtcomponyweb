import React from 'react'
import EnqueryForm from '../Enqueryform/EnqueryForm'

/**
 * Props:
 * @param {string}  heading
 * @param {string}  image
 * @param {string}  imageAlt
 * @param {Array}   content
 * @param {boolean} showForm
 */

export default function ShowdataReuseble({
  heading,
  image,
  imageAlt = "",
  content = [],
  showForm = true
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .sdr-banner {
          background-color: #1e4d8c;
          padding: 18px 40px;
          margin-bottom: 40px;
        }

        .sdr-banner h1 {
          margin: 0;
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
        }

        .sdr-wrap {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px 60px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .sdr-image-col {
          flex-shrink: 0;
          width: clamp(280px, 38%, 500px);
        }

        .sdr-image-col img {
          width: 100%;
          height: auto;
          border-radius: 6px;
          object-fit: cover;
          display: block;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
        }

        .sdr-content-col {
          flex: 1;
          min-width: 0;
        }

        .sdr-para {
          font-size: 15px;
          line-height: 1.8;
          color: #444;
          margin: 0 0 16px;
        }

        .sdr-heading {
          font-size: 20px;
          font-weight: 700;
          color: #222;
          margin: 28px 0 14px;
          padding-bottom: 8px;
          border-bottom: 2px solid #1e4d8c;
          display: inline-block;
        }

        .sdr-list {
          padding-left: 20px;
          margin: 0 0 16px;
        }

        .sdr-list li {
          font-size: 15px;
          line-height: 1.75;
          color: #444;
          margin-bottom: 6px;
        }

        .sdr-services {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: 4px 0 20px;
        }

        .sdr-service-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background-color: #f2f6fb;
          border: 1px solid #c9d9ef;
          border-left: 3px solid #1e4d8c;
          border-radius: 4px;
          padding: 12px 16px;
        }

        .sdr-service-icon {
          font-size: 16px;
          margin-top: 1px;
          flex-shrink: 0;
          color: #1e4d8c;
        }

        .sdr-service-title {
          font-weight: 700;
          font-size: 15px;
          color: #222;
          display: block;
          margin-bottom: 3px;
        }

        .sdr-service-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.65;
        }

        .sdr-checklist {
          list-style: none;
          padding: 0;
          margin: 4px 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 24px;
        }

        .sdr-checklist li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #333;
        }

        .sdr-check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #1e4d8c;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .sdr-tagline {
          margin-top: 28px;
          padding: 14px 20px;
          background-color: #1e4d8c;
          border-radius: 4px;
        }

        .sdr-tagline p {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          font-style: italic;
          line-height: 1.6;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .sdr-wrap {
            padding: 0 24px 48px;
            gap: 32px;
          }
          .sdr-image-col {
            width: 260px;
          }
          .sdr-checklist {
            grid-template-columns: 1fr;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .sdr-banner {
            padding: 14px 20px;
            margin-bottom: 24px;
          }
          .sdr-wrap {
            flex-direction: column;
            padding: 0 16px 40px;
            gap: 24px;
          }
          .sdr-image-col {
            width: 100%;
          }
          .sdr-image-col img {
            max-height: 280px;
            object-position: center;
          }
          .sdr-heading {
            font-size: 17px;
            margin: 20px 0 10px;
          }
          .sdr-para {
            font-size: 14px;
          }
          .sdr-service-title {
            font-size: 14px;
          }
          .sdr-service-desc {
            font-size: 13px;
          }
          .sdr-checklist li {
            font-size: 14px;
          }
          .sdr-tagline p {
            font-size: 14px;
          }
        }
      `}</style>

      <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: '#fff' }}>
        {/* Banner */}
        <div className="sdr-banner">
          <h1>{heading}</h1>
        </div>

        {/* Content */}
        <div className="sdr-wrap">
          {image && (
            <div className="sdr-image-col">
              <img src={image} alt={imageAlt || heading} loading="lazy" />
            </div>
          )}

          <div className="sdr-content-col">
            {content.map((block, i) => {
              if (block.type === 'para') {
                return <p key={i} className="sdr-para">{block.text}</p>
              }

              if (block.type === 'heading') {
                return <h2 key={i} className="sdr-heading">{block.text}</h2>
              }

              if (block.type === 'list') {
                return (
                  <ul key={i} className="sdr-list">
                    {block.items?.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              }

              if (block.type === 'services') {
                return (
                  <div key={i} className="sdr-services">
                    {block.items?.map((svc, j) => (
                      <div key={j} className="sdr-service-card">
                        <span className="sdr-service-icon">{svc.icon}</span>
                        <div>
                          <span className="sdr-service-title">{svc.title}</span>
                          <span className="sdr-service-desc">{svc.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              }

              if (block.type === 'checklist') {
                return (
                  <ul key={i} className="sdr-checklist">
                    {block.items?.map((item, j) => (
                      <li key={j}>
                        <span className="sdr-check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }

              if (block.type === 'tagline') {
                return (
                  <div key={i} className="sdr-tagline">
                    <p>{block.text}</p>
                  </div>
                )
              }

              return null
            })}
          </div>
        </div>
      </div>

      {showForm && <EnqueryForm />}
    </>
  )
}