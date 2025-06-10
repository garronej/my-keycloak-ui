/**
 * This file has been claimed for ownership from @keycloakify/login-ui version 250004.0.34.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/styleLevelCustomization.tsx" --revert
 */

import type { ReactNode } from "react";
import type { ClassKey } from "@keycloakify/login-ui/useKcClsx";
import { useKcContext } from "./KcContext";

type Classes = { [key in ClassKey]?: string };

type StyleLevelCustomization = {
    doUseDefaultCss: boolean;
    classes?: Classes;
    loadCustomStylesheet?: () => void;
    globalStyleNode?: ReactNode;
};

export function useStyleLevelCustomization(): StyleLevelCustomization {

    const { kcContext } = useKcContext();

    return {
        doUseDefaultCss: true,
        loadCustomStylesheet: ()=> {
            switch(kcContext.themeName){
                case "vanilla": 
                    import("./main-vanilla.css");
                    break;
                case "chocolate":
                    import("./main-chocolate.css");
                    break;
            }

        }
    };
}
