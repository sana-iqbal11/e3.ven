import React from "react";
import CardWithImage from "../shared/cardWithImage";
import HorizontalCard from "../shared/horizontalCard";
import SectionTitle from "../shared/sectionTitle";
import ColoredSpan from "../shared/coloredSpan";
function RecentBlogsection() {
  return (
    <div >
      <SectionTitle className="text-start">
        <ColoredSpan className="text-white text-2xl text-start">
          Recent blog posts
        </ColoredSpan>
      </SectionTitle>
      <div className="grid laptop:grid-cols-2 grid-col-1 lg:gap-8 gap-3">
        <CardWithImage
          image="/icons/firstcardimage.png"
          publish="Abdallah Adel • 03 April 2024"
          title="UX review presentations"
          desc="How do you create compelling presentations that wow your colleagues and impress your managers?"
        />
        <div className="laptop:hidden flex flex-col  gap-8" >
        <CardWithImage
          image="/icons/firstcardimage.png"
          publish="Abdallah Adel • 03 April 2024"
          title="UX review presentations"
          desc="How do you create compelling presentations that wow your colleagues and impress your managers?"
        />
        <CardWithImage
          image="/icons/firstcardimage.png"
          publish="Abdallah Adel • 03 April 2024"
          title="UX review presentations"
          desc="How do you create compelling presentations that wow your colleagues and impress your managers?"
        />

        </div>
        <div className="laptop:flex flex-col gap-5  hidden">
          <HorizontalCard
            image="/icons/recentcard2.png"
            publish="Abdallah Adel • 03 April 2024"
            title="Migrating to Linear 101"
            desc="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
          />
          <HorizontalCard
            image="/icons/recentcard3.png"
            publish="Abdallah Adel • 03 April 2024"
            title="Migrating to Linear 101"
            desc="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
          />
        </div>
      </div>
    </div>
  );
}

export default RecentBlogsection;
