import EmployerSidebar from "@/components/dashboard/employer/EmployerSidebar";

type TProps = {
  children: React.ReactNode;
};
const EmployerDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <section className="flex flex-col h-[calc(100vh-90px)] md:flex-row max-w-7xl mx-auto bg-gray-50">
          <EmployerSidebar/>
        {children}
      </section>
    </>
  );
};

export default EmployerDashboardLayout;
