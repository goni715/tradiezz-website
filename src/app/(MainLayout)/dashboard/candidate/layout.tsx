import CandidateSidebar from "@/components/dashboard/candidate/CandidateSidebar";

type TProps = {
  children: React.ReactNode;
};
const CandidateDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <section className="flex flex-col h-[calc(100vh-90px)] md:flex-row max-w-7xl mx-auto bg-gray-50">
        <CandidateSidebar />
        {children}
      </section>
    </>
  );
};

export default CandidateDashboardLayout;
