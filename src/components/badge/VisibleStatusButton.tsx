


const VisibleStatusButton = ({ status } : { status: 'visible' | 'hidden'}) => {
    const statusStyles = {
        hidden: "bg-red-100 text-red-700 border border-red-300",
        visible: "bg-green-100 text-green-700 border border-green-300",
    };

    const bgColor = status === "visible" ? statusStyles.visible : statusStyles.hidden;
    return (
        <>
            <button
                className={`${bgColor} capitalize w-20 cursor-default px-3 py-0.5 text-sm font-medium rounded-full`}
            >
                {status}
            </button>
        </>
    )
}

export default VisibleStatusButton;