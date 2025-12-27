
const getStatusBadge = (status: string) => {
    const baseClasses =
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    switch (status) {
        case "visible":
            return `${baseClasses} bg-green-100 text-green-800`;
        case "hidden":
            return `${baseClasses} bg-red-100 text-red-800`;
        case "pending":
            return `${baseClasses} bg-yellow-100 text-yellow-800`;
        default:
            return baseClasses;
    }
};

export default getStatusBadge;