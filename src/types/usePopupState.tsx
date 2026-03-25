export type usePopupState = {
    isOpen: boolean;
    payload: any;
    openPopup: (data?: any) => void;
    closePopup: () => void;
}