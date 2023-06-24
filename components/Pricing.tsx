import { FC } from "react";

import PriceCard from "@/components/PriceCard";
import Header from "@/components/Header";

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

const Pricing: FC = () => {
    return (
        <section id="pricing" className="bg-white dark:bg-gray-950 pt-32 pb-12">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <Header
                    title={"Flexible Pricing Plans to Suit Your Needs"}
                    subtitle={
                        "Choose the Perfect Plan and Unleash the Power of CurlGPT."
                    }
                />
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
