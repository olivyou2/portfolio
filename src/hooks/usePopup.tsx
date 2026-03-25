import { useState } from "react";
import type { usePopupState } from "../types/usePopupState";

function usePopup(): usePopupState {
    const [isOpen, setIsOpen] = useState(false);
    const [payload, setPayload] = useState<any>(null);

    const openPopup = (data?: any) => {
        setPayload(data || null);
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
        setPayload(null);
    };

    return { isOpen, payload, openPopup, closePopup };
}

export default usePopup;