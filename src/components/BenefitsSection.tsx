"use client";

import Benefit1 from "@/assets/images/1.webp";
import Benefit2 from "@/assets/images/2.webp";
import Benefit3 from "@/assets/images/3.webp";
import Benefit4 from "@/assets/images/4.webp";
import { useEffect, useState, type FC } from "react";

interface BenefitsSectionProps {
  texts: Record<string, string>;
}

const BenefitsSection: FC<BenefitsSectionProps> = ({ texts }) => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      title: texts.verifiedBadge || "Official Partner badge",
      description:
        texts.verifiedBadgeDesc ||
        "The Partner badge signals that your business has been recognized by Meta as a trusted and high-performing partner across Meta technologies.",
      image: Benefit1,
    },
    {
      title: texts.impersonationProtection || "Brand protection",
      description:
        texts.impersonationProtectionDesc ||
        "Safeguard your brand with advanced impersonation monitoring and priority takedown support.",
      image: Benefit2,
    },
    {
      title: texts.enhancedSupport || "Dedicated account support",
      description:
        texts.enhancedSupportDesc ||
        "Get priority access to a dedicated account manager and 24/7 technical support.",
      image: Benefit3,
    },
    {
      title: texts.upgradedProfile || "Advanced analytics & tools",
      description:
        texts.upgradedProfileDesc ||
        "Access premium business insights, audience analytics and advertising tools to maximize ROI.",
      image: Benefit4,
    },
  ];

  useEffect(() => {
    const track = document.getElementById("benefitsTrack");
    if (!track) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const cards = track.querySelectorAll(".benefit-card");
          let index = 0;
          let min = Infinity;

          cards.forEach((card, i) => {
            const dist = Math.abs(
              card.getBoundingClientRect().left -
                track.getBoundingClientRect().left,
            );
            if (dist < min) {
              min = dist;
              index = i;
            }
          });

          setCurrentSlide(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="benefits-wrap">
      <div className="benefits-head">
        <h2>
          {texts.creatorToolkit ||
            "Partner toolkit designed for business growth"}
        </h2>
        <p>
          {texts.creatorToolkitDesc ||
            "Explore exclusive Meta Partner benefits available across Facebook, Instagram and WhatsApp."}
        </p>
      </div>

      <div className="benefits-subtitle">
        {texts.metaVerifiedBenefits || "Meta Partner benefits"}
      </div>

      <div className="benefits-desktop">
        <div className="benefits-list" id="benefitsList">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-link ${activeBenefit === index ? "active" : ""}`}
              onClick={() => setActiveBenefit(index)}
            >
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="benefitsPreview"
            src={benefits[activeBenefit].image.src}
            alt="preview"
          />
        </div>
      </div>

      <div className="benefits-mobile">
        <div className="slider-track" id="benefitsTrack">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={benefit.image.src} alt={benefit.title} />
              </div>
              <div className="card-title">{benefit.title}</div>
              <div className="card-text">{benefit.description}</div>
            </div>
          ))}
        </div>

        <div className="slider-dots" id="benefitsDots">
          {benefits.map((_, index) => (
            <span
              key={index}
              className={`s-dot ${currentSlide === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="benefits-line" />
    </div>
  );
};

export default BenefitsSection;
