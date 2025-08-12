const MapLoading = () => {
  return (
    <div className="w-full aspect-[3/1] rounded-md overflow-hidden bg-gray-200 animate-pulse relative">
      <div className="absolute top-4 left-4 w-8 h-8 bg-gray-300 rounded-md" />
      <div className="absolute top-16 left-4 w-8 h-8 bg-gray-300 rounded-md" />

      <div className="absolute top-4 right-4 w-8 h-8 bg-gray-300 rounded-md" />
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-300 rounded-md" />
    </div>
  );
};

export default MapLoading;
