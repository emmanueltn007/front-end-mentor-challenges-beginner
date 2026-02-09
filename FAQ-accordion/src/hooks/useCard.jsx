import { useState } from "react";

export function UseCard () {
    const [openItem, setOpenItem] = useState(null);

    const handleFAQToggle = (id) =>
    setOpenItem((prev) => (prev === id ? null : id));

    return {
        openItem,
        setOpenItem,
        handleFAQToggle
    };
}