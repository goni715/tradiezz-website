"use client";

import { TCandidateStats } from "@/types/dashboard.type";
import ChangePasswordForm from "../CandidateSettings/AccountSettings/ChangePasswordForm";
import DeleteCandidateAccount from "../CandidateSettings/AccountSettings/DeleteCandidateAccount";
import PrivacySettings from "../CandidateSettings/AccountSettings/PrivacySettings";
import UpdateLocationForm from "../CandidateSettings/LocationForm/UpdateLocationForm";
import PersonalForm from "../CandidateSettings/Personal/PersonalForm";
import ProfessionalForm from "../CandidateSettings/Professional/ProfessionalForm";
// import OverviewHeader from "./OverviewHeader";
import OverviewStats from "./OverviewStats";
// import ProfileCompletion from "./ProfileCompletion";
// import RecentlyApplied from "./RecentlyApplied";

type TProps = {
  stats: TCandidateStats
}

const CandidateOverview = ( { stats } : TProps) => {
  

  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
          {/* <OverviewHeader /> */}
          <OverviewStats stats={stats}/>
          {/* <ProfileCompletion /> */}
          <PersonalForm/>
          <UpdateLocationForm/>
          <ProfessionalForm/>
          <PrivacySettings/>
          <ChangePasswordForm/>
          <DeleteCandidateAccount/>
          {/* <RecentlyApplied /> */}
        </div>
      </main>
    </>
  );
};

export default CandidateOverview;
