"use client";
import HardSkillList from "@Components/Molecules/List/HardSkillList";
import WorkingExperienceList from "@Components/Molecules/List/WorkingExperienceList";

export default function ResumeScreen() {
  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20">
      <HardSkillList />
      <WorkingExperienceList />
    </div>
  );
}
