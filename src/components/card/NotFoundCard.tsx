
type TProps = {
  title: string;
}

const NotFoundCard = ({title}: TProps) => {
  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="bg-50 p-4 md:p-6 lg:p-8">
          <div className="w-full mx-auto max-w-5xl flex p-6 bg-red-50 border border-red-200 rounded-2xl shadow-sm flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold text-red-800 mb-2">
             {title}
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundCard;
