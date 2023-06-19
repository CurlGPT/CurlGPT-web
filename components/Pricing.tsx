import { FC } from "react";
import PriceCard from "./PriceCard";

interface PricingProps {}
const pricings = [
    {
        key: 1,
        title: "Trial",
        subtitle: "Try CurlGPT Free for a Limited Time.",
        amount: "Free",
        subscription: "Free for 30 days",
        limit: "30",
        model: "GPT-3.5",
    },
    {
        key: 2,
        title: "Monthly",
        subtitle: "Flexible Monthly Subscription Plans.",
        amount: "$2",
        period: "/month",
        subscription: "Monthly Subscription",
        limit: "500",
        model: "GPT-4",
    },
    {
        key: 3,
        title: "Yearly",
        subtitle: "Unlock Huge Discounts with Yearly Subscriptions.",
        amount: "$10",
        period: "/year",
        subscription: "Yearly Subscription",
        limit: "No",
        model: "GPT-4",
    },
];

const Pricing: FC<PricingProps> = ({}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Flexible Pricing Plans to Suit Your Needs
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Choose the Perfect Plan and Unleash the Power of CurlGPT
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {pricings.map((pricing) => (
                        <PriceCard key={pricing.key} pricing={pricing} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
