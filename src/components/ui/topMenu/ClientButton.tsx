"use client";

import { useUiStore } from "@/store";

export const ClientButton = () => {
    const openSideMenu = useUiStore(state => state.openSideMenu)
    return <button onClick={openSideMenu} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Menú</button>;
};
