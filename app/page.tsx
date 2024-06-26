import { ContactsSection } from "@/components/organisms/ContactsSection/ContactsSection";
import { Description } from "@/components/organisms/Description/Description";
import { ParkSection } from "@/components/organisms/ParkSection/ParkSection";
import { RequirementSection } from "@/components/organisms/RequirementSection/RequirementSection";
import { WelcomeSection } from "@/components/organisms/WelcomeSection/WelcomeSection";

export default function Home() {
    return (
        <>
            <WelcomeSection />
            <ContactsSection />
            <ParkSection />
            <Description />
            <Description revers />
            <RequirementSection />
        </>
    );
}
