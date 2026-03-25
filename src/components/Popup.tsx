import styled from "styled-components";
import { useEffect, useState } from "react";
import type { usePopupState } from "../types/usePopupState";

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: opacity 0.1s ease;

    &.show {
        opacity: 1;
    }
`;

const PopupContent = styled.div`
    overflow-y: auto;
    overscroll-behavior: contain;
    position: absolute;
    width: calc(100% - 20px);
    max-width: 700px;

    height: 80%;
    max-height: 800px;

    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;

    box-sizing: border-box;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(10px);

    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.1s ease, transform 0.1s ease;

    &.show {
        opacity: 1;
        transform: scale(1);
    }
`;

function Popup({ popupState, children }: {
    popupState: usePopupState,
    children: React.ReactNode;
}) {
    const { isOpen, closePopup } = popupState;
    const [isVisible, setIsVisible] = useState(false);

    const closePopupRequest = () => {
        if (isVisible) {
            setIsVisible(false);
            // Wait for transition to finish before unmounting
            setTimeout(() => {
                closePopup();
            }, 100);
        }
    };

    const stopWheelPropagation = (event: React.WheelEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    useEffect(() => {
        if (!isOpen) {
            setIsVisible(false);
            return;
        }

        // Wait one frame after mount so transition can run from initial styles.
        setIsVisible(false);
        const rafId = window.requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => window.cancelAnimationFrame(rafId);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        // Render child of parent component
        <PopupOverlay onClick={closePopupRequest} id="popup-overlay" className={isVisible ? "show" : ""}>
            <PopupContent onWheel={stopWheelPropagation} onClick={(e) => e.stopPropagation()} className={isVisible ? "show" : ""}>
                {children}
            </PopupContent>
        </PopupOverlay>
    );
}

export default Popup;