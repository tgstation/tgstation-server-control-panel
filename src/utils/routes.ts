import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { StatusCode } from "../ApiClient/models/InternalComms/InternalStatus";
import { AdministrationRights } from "../ApiClient/generatedcode/_enums";
import UserClient from "../ApiClient/UserClient";
import CredentialsProvider from "../ApiClient/util/CredentialsProvider";

export interface BaseRoute {
    route: string;
    name: string;
    exact?: boolean;
    isAuthorized: () => Promise<boolean>;
    cachedAuth?: boolean; //only RouteController should use this
}

export interface NormalRoute extends BaseRoute {
    icon: IconProp;
    hidden?: false;
}

export interface HiddenRoute extends BaseRoute {
    hidden: true;
}

export type AppRoute = NormalRoute | HiddenRoute;

export const AppRoutes: {
    [id: string]: AppRoute;
} = {
    home: {
        route: "/",
        name: "routes.home",
        exact: true,
        icon: "home",
        isAuthorized: async () => true
    },
    instances: {
        route: "/Instance/",
        name: "routes.instances",
        icon: "hdd",
        isAuthorized: async () => false
    },
    userManager: {
        route: "/Users/",
        name: "routes.user_manager",
        icon: "user",
        isAuthorized: async () => false
    },
    admin: {
        route: "/Administration/",
        name: "routes.admin",
        icon: "tools",
        isAuthorized: async () => {
            /*if (!CredentialsProvider.isTokenValid()) return false;
            const response = await UserClient.getCurrentUser();

            if (response.code == StatusCode.OK) {
                return !!(
                    response.payload!.administrationRights &
                    (AdministrationRights.ChangeVersion | AdministrationRights.RestartHost)
                );
            }
            return false;*/
            //i realized everyone can GET /Administration so this is pretty useless
            return true;
        }
    },
    config: {
        route: "/Configuration/",
        name: "routes.config",
        hidden: true,
        isAuthorized: async () => true
    }
};