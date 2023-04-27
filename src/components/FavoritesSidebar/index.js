import { useContext } from "react";
import { CloseSidebarButton, Sidebar, SidebarLink, SidebarTitle, SidebarContent } from "./styled";
import { GlobalContext } from "../../context/GlobalContext";

export default function SidebarPanel() {
    const { likes, toggleSidebar } = useContext(GlobalContext);

    return (
        likes &&
        likes.length > 0 && (
            <Sidebar>
                <SidebarTitle>Favoritos</SidebarTitle>
                <CloseSidebarButton onClick={() => toggleSidebar()} />
                <SidebarContent>
                    {likes &&
                        likes.length &&
                        likes.map((favoriteItem, index) => (
                            <li key={`${favoriteItem.url}-${index}`}>
                                <SidebarLink href={favoriteItem.url} target="_blank" rel="noreferrer">
                                    {favoriteItem.title || favoriteItem.url}
                                </SidebarLink>
                            </li>
                        ))}
                </SidebarContent>
            </Sidebar>
        )
    );
}