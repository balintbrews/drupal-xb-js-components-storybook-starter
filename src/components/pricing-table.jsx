import { useState } from "react";
import clsx from "clsx";

const PricingTable = ({
  header,
  entryTierName = "Basic",
  entryTierDescription = "Perfect for individuals and small projects",
  entryTierPriceMonthly = 12,
  entryTierPriceAnnual = 120,
  midTierName = "Pro",
  midTierDescription = "Ideal for professionals and growing teams",
  midTierPriceMonthly = 24,
  midTierPriceAnnual = 240,
  advancedTierName = "Business",
  advancedTierDescription = "For organizations with advanced needs",
  advancedTierPriceMonthly = 49,
  advancedTierPriceAnnual = 490,
  defaultTier = "entry",
  defaultIsAnnual = false,
  annualBadgeText = "Save 20%",
}) => {
  const [isAnnual, setIsAnnual] = useState(defaultIsAnnual);
  const [tier, setTier] = useState(defaultTier);

  const tierNames = {
    entry: entryTierName,
    mid: midTierName,
    advanced: advancedTierName,
  };
  const tierDescriptions = {
    entry: entryTierDescription,
    mid: midTierDescription,
    advanced: advancedTierDescription,
  };
  const tierPrices = {
    entry: {
      monthly: entryTierPriceMonthly,
      annual: entryTierPriceAnnual,
    },
    mid: {
      monthly: midTierPriceMonthly,
      annual: midTierPriceAnnual,
    },
    advanced: {
      monthly: advancedTierPriceMonthly,
      annual: advancedTierPriceAnnual,
    },
  };

  // Calculate current price based on selections.
  const getCurrentPrice = (tierName) => {
    return tierPrices[tierName][isAnnual ? "annual" : "monthly"];
  };

  return (
    <div className="font-sans max-w-2xl p-6 rounded-lg bg-white mx-auto border-2 border-drupal-gray-milder">
      {header && <div className="mb-6 text-center">{header}</div>}

      {/* Billing toggle */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-24 text-right">
          <span
            className={clsx(
              "text-drupal-gray-mild",
              !isAnnual && "text-drupal-navy",
            )}
          >
            Monthly
          </span>
        </div>

        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="w-14 h-7 p-0.5 mx-3 relative cursor-pointer rounded-full border-0 bg-drupal-light-blue"
        >
          <div
            className={clsx(
              "w-6 h-6 top-0.5 bg-white absolute rounded-full border-2 border-drupal-blue transition-all duration-200",
              isAnnual ? "left-7" : "left-0.5",
            )}
          />
        </button>
        <div className="w-36 flex items-center">
          <span
            className={clsx(
              "text-drupal-gray-mild",
              isAnnual && "text-drupal-navy",
            )}
          >
            Annual
          </span>
          <span
            className={clsx(
              "ml-1.5 text-xs font-medium px-2 py-1 rounded-full bg-drupal-yellow leading-none whitespace-nowrap text-drupal-navy transition-opacity duration-200",
              isAnnual ? "opacity-100" : "opacity-0",
            )}
          >
            {annualBadgeText}
          </span>
        </div>
      </div>

      {/* Pricing tiers */}
      <div className="gap-4 mb-6 flex">
        {["entry", "mid", "advanced"].map((planName) => {
          const isSelected = tier === planName;
          const price = getCurrentPrice(planName);

          return (
            <div
              key={planName}
              onClick={() => setTier(planName)}
              data-state={isSelected ? "selected" : undefined}
              className={clsx(
                "group p-5 rounded-lg flex-1 cursor-pointer border-2 transition-all duration-200",
                "border-gray-200 bg-white hover:border-gray-300",
                "data-[state=selected]:border-drupal-blue data-[state=selected]:bg-drupal-blue",
              )}
            >
              <h3 className="text-lg font-bold mb-3 group-data-[state=selected]:text-white">
                {tierNames[planName]}
              </h3>

              <div className="mb-4">
                <div className="text-2xl font-bold mb-1 group-data-[state=selected]:text-white">
                  ${price}
                </div>
              </div>

              <div className="text-sm leading-relaxed group-data-[state=selected]:text-white text-drupal-gray">
                {tierDescriptions[planName]}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA button */}
      <button className="py-3 px-6 text-white rounded-lg text-base font-medium w-full cursor-pointer border-2 border-drupal-navy bg-drupal-navy hover:bg-drupal-white hover:text-drupal-navy">
        Get Started with {tierNames[tier]}
      </button>
    </div>
  );
};

export default PricingTable;
