import EmployerSidebar from "@/components/dashboard/employer/EmployerSidebar";
import EmployerRoute from "@/components/PrivateRoute/EmployerRoute";

type TProps = {
  children: React.ReactNode;
};
const EmployerDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <EmployerRoute>
        <section className="flex flex-col h-[calc(100vh-90px)] md:flex-row max-w-7xl mx-auto bg-gray-50">
          <EmployerSidebar />
          {children}
        </section>
      </EmployerRoute>
    </>
  );
};

export default EmployerDashboardLayout;
