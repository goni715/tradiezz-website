"use client"

import dynamic from "next/dynamic";
import MapLoading from "../loader/MapLoading";

const ContactMapWrapper = () => {
    const ContactMap = dynamic(() => import('./ContactMap'), {
        ssr: false,
        loading: () => <MapLoading />
    });

    return <ContactMap />
}

export default ContactMapWrapper