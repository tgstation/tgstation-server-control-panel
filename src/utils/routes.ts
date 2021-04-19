import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { AdministrationRights, InstanceManagerRights } from "../ApiClient/generatedcode/_enums";
import InternalError, { ErrorCode } from "../ApiClient/models/InternalComms/InternalError";
import { StatusCode } from "../ApiClient/models/InternalComms/InternalStatus";
import UserClient from "../ApiClient/UserClient";
import CredentialsProvider from "../ApiClient/util/CredentialsProvider";
import JobsController from "../ApiClient/util/JobsController";
import { HostingTabLocation } from "../definitions/constants";
import { resolvePermissionSet } from "./misc";

export interface AppRoute {
    ///Base parameters
    /**
     * Must be unique, also is the id of the route name message
     */
    name: string;
    /**
     * Must be unique, url to access
     */
    route: string;
    /**
     * Fink to link to when linking to the route, defaults to the "route"
     */
    link?: string;
    /**
     * Filename in components/view that the route should display
     */
    file: string;

    ///Path parameters
    /**
     * If subpaths should route here
     */
    loose: boolean;
    /**
     * If subpaths should light up the navbar button
     */
    navbarLoose: boolean;

    ///Authentication
    /**
     * If we can route to it even on the login page
     */
    loginless?: boolean;
    /**
     * Function to tell if we are authorized
     */
    isAuthorized: () => Promise<boolean>;
    /**
     * Result of isAuthorized() after RouteController runs it, can be used by components but only set by RouteController
     */
    cachedAuth?: boolean;

    ///Visibility
    /**
     * If this shows up on the navbar
     */
    visibleNavbar: boolean;
    /**
     * Displays the icon.
     */
    homeIcon?: IconProp;
    /**
     * Is this specific thing hidden? Stops it from being shown in Home.tsx
     */
    hidden?: boolean;

    ///Categories
    /**
     * Name of the category it belongs to
     */
    category?: string;
    /**
     * If this is the main button in the category
     */
    catleader?: boolean;

    ///Misc
    /**
     * Should we not wrap this component in a <Container>?
     */
    noContainer?: boolean;
}

function adminRight(right: AdministrationRights) {
    return async (): Promise<boolean> => {
        if (!CredentialsProvider.isTokenValid()) return false;
        const response = await UserClient.getCurrentUser();

        if (response.code == StatusCode.OK) {
            return !!(resolvePermissionSet(response.payload).administrationRights & right);
        }
        return false;
    };
}

function instanceManagerRight(right: InstanceManagerRights) {
    return async (): Promise<boolean> => {
        if (!CredentialsProvider.isTokenValid()) return false;
        const response = await UserClient.getCurrentUser();

        if (response.code == StatusCode.OK) {
            return !!(resolvePermissionSet(response.payload).instanceManagerRights & right);
        }
        return false;
    };
}
//https://stackoverflow.com/questions/54598322/how-to-make-typescript-infer-the-keys-of-an-object-but-define-type-of-its-value
//Infer the keys but restrict the values to a type
const asElementTypesAppRoute = <T>(et: { [K in keyof T]: AppRoute }) => et;

const AppRoutes = asElementTypesAppRoute({
    home: {
        name: "routes.home",
        route: "/",
        file: "Home",

        loose: false,
        navbarLoose: false,

        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false, // eeh, kinda useless
        homeIcon: "home",

        category: "home",
        catleader: true
    },
    instancecreate: {
        name: "routes.instancecreate",
        route: "/instances/create",
        file: "Instance/Create",

        loose: false,
        navbarLoose: false,

        isAuthorized: instanceManagerRight(InstanceManagerRights.Create),

        visibleNavbar: false,
        homeIcon: "plus-square",

        category: "instance",
        catleader: false
    },
    instancelist: {
        name: "routes.instancelist",
        route: "/instances",
        file: "Instance/List",

        loose: false,
        navbarLoose: true,

        isAuthorized: instanceManagerRight(InstanceManagerRights.List | InstanceManagerRights.Read),

        visibleNavbar: true,
        homeIcon: "hdd",

        category: "instance",
        catleader: true
    },
    /**
     * @deprecated
     */
    instancecode: {
        name: "routes.instancecode",
        route: "/instances/code/:id(\\d+)",
        file: "Instance/CodeDeployment",

        get link(): string {
            return RouteData.instanceid !== undefined
                ? `/instances/code/${RouteData.instanceid}`
                : AppRoutes.instancelist.link || AppRoutes.instancelist.route;
        },

        loose: false,
        navbarLoose: true,

        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false,
        homeIcon: "code-branch",

        category: "instance"
    },
    instancehosting: {
        name: "routes.instancehosting",
        route: "/instances/hosting/:id(\\d+)/:tab?",
        file: "Instance/Hosting",

        get link(): string {
            return RouteData.instanceid !== undefined
                ? `/instances/hosting/${RouteData.instanceid}${
                      RouteData.selectedinstancehostingtab
                          ? `/${RouteData.selectedinstancehostingtab}`
                          : ""
                  }`
                : AppRoutes.instancelist.link || AppRoutes.instancelist.route;
        },

        loose: false,
        navbarLoose: true,

        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false,
        homeIcon: "server",

        category: "instance"
    },
    /**
     * @deprecated
     */
    instanceconfig: {
        name: "routes.instanceconfig",
        route: "/instances/config/:id(\\d+)/:tab?/",
        file: "Instance/Config",

        get link(): string {
            return RouteData.instanceid !== undefined
                ? `/instances/config/${RouteData.instanceid}${
                      RouteData.selectedinstanceconfigtab !== undefined
                          ? `/${RouteData.selectedinstanceconfigtab}`
                          : ""
                  }`
                : AppRoutes.instancelist.link || AppRoutes.instancelist.route;
        },

        loose: false,
        navbarLoose: true,

        isAuthorized: () => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false, // bye bye!
        homeIcon: "cog",

        category: "instance"
    },
    instancejobs: {
        name: "routes.instancejobs",
        route: "/instances/jobs/:id(\\d+)/:jobid(\\d+)?/",
        file: "Instance/Jobs",

        get link(): string {
            return RouteData.instanceid !== undefined
                ? `/instances/jobs/${RouteData.instanceid}`
                : AppRoutes.instancelist.link || AppRoutes.instancelist.route;
        },

        loose: false,
        navbarLoose: true,

        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "briefcase",

        category: "instance"
    },
    userlist: {
        name: "routes.usermanager",
        route: "/users",
        file: "User/List",

        loose: false,
        navbarLoose: true,

        //you can always read your own user
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "user",

        category: "user",
        catleader: true
    },
    useredit: {
        name: "routes.useredit",
        route: "/users/edit/user/:id(\\d+)/:tab?",

        //whole lot of bullshit just to make it that if you have an id, link to the edit page, otherwise link to the list page, and if you link to the user page, put the tab in
        get link(): string {
            return RouteData.selecteduserid !== undefined
                ? `/users/edit/user/${RouteData.selecteduserid}${
                      RouteData.selectedusertab !== undefined ? `/${RouteData.selectedusertab}` : ""
                  }`
                : AppRoutes.userlist.link || AppRoutes.userlist.route;
        },
        file: "User/Edit",

        loose: true,
        navbarLoose: true,

        //you can always read your own user
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "edit",

        category: "user"
    },
    useredit_info: {
        name: "routes.useredit_info",
        route: "/users/edit/user/:id(\\d+)/:tab?/",

        //whole lot of bullshit just to make it that if you have an id, link to the edit page, otherwise link to the list page, and if you link to the user page, put the tab in
        get link(): string {
            return RouteData.currentuserid
                ? `/users/edit/user/${RouteData.currentuserid}/info`
                : "/users";
        },
        file: "User/Edit",

        loose: true,
        navbarLoose: true,

        //you can always read your own user
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false,
        homeIcon: "edit",

        category: "user"
    },
    usercreate: {
        name: "routes.usercreate",
        route: "/users/create",

        link: "/users/create",
        file: "User/Create",

        loose: true,
        navbarLoose: true,

        isAuthorized: adminRight(AdministrationRights.WriteUsers),

        visibleNavbar: true,
        homeIcon: "user-plus",

        category: "user"
    },
    admin: {
        name: "routes.admin",
        route: "/admin",
        file: "Administration",

        loose: false,
        navbarLoose: true,

        isAuthorized: adminRight(AdministrationRights.ChangeVersion),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "tools",

        category: "admin",
        catleader: true
    },
    admin_update: {
        name: "routes.admin.update",
        route: "/admin/update/:all?",
        file: "Admin/Update",

        link: "/admin/update",

        loose: true,
        navbarLoose: true,

        isAuthorized: adminRight(AdministrationRights.ChangeVersion),
        visibleNavbar: true,
        homeIcon: "toolbox",

        category: "admin"
    },
    admin_logs: {
        name: "routes.admin.logs",
        route: "/admin/logs/:name?",
        link: "/admin/logs",
        file: "Admin/Logs",

        loose: false,
        navbarLoose: true,

        isAuthorized: adminRight(AdministrationRights.DownloadLogs),
        visibleNavbar: true,
        homeIcon: "bars",

        category: "admin",

        noContainer: true
    },
    passwd: {
        name: "routes.passwd",
        route: "/users/passwd/:id(\\d+)?",
        link: "/users/passwd/",
        file: "ChangePassword",

        loose: true,
        navbarLoose: true,

        isAuthorized: adminRight(AdministrationRights.EditOwnPassword),

        visibleNavbar: false,
        homeIcon: "key"
    },
    config: {
        name: "routes.config",
        route: "/config",
        file: "Configuration",

        loose: true,
        navbarLoose: true,

        loginless: true,
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "cog"
    },
    setup: {
        name: "routes.setup",
        route: "/setup",
        file: "Setup",

        loose: true,
        navbarLoose: true,

        loginless: true,
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false,
        homeIcon: "wrench"
    },
    oAuth: {
        name: "routes.oauth",
        route: "/oauth/:provider?",
        file: "Login",

        loose: true,
        navbarLoose: false,

        loginless: true,
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: false,
        homeIcon: "key"
    },
    info: {
        name: "routes.info",
        route: "/info",
        file: "Info",

        loose: false,
        navbarLoose: false,

        loginless: true,
        isAuthorized: (): Promise<boolean> => Promise.resolve(true),
        cachedAuth: true,

        visibleNavbar: true,
        homeIcon: "info-circle",

        category: "admin",
        catleader: false
    }
});

export { AppRoutes };

//https://stackoverflow.com/questions/54598322/how-to-make-typescript-infer-the-keys-of-an-object-but-define-type-of-its-value
//Infer the keys but restrict the values to a type
const asElementTypesCategory = <T>(et: { [K in keyof T]: UnpopulatedAppCategory }) => et;

export type UnpopulatedAppCategory = Partial<AppCategory>;

export interface AppCategory {
    name: string; //doesnt really matter, kinda bullshit
    routes: AppRoute[];
    leader: AppRoute;
}

let _instanceid: number | undefined = undefined;

export const UnpopulatedAppCategories = asElementTypesCategory({
    home: {
        name: "home"
    },
    instance: {
        name: "instance"
    },
    user: {
        name: "user"
    },
    admin: {
        name: "admin"
    }
});

// @ts-expect-error This is populated in the constructor after its populated
export const AppCategories: { [K in keyof typeof UnpopulatedAppCategories]: AppCategory } = {};

export const RouteData = {
    selecteduserid: undefined as undefined | number,
    selectedusertab: undefined as undefined | string,
    currentuserid: undefined as undefined | number,

    selectedinstanceconfigtab: undefined as undefined | string,
    selectedinstancehostingtab: undefined as undefined | HostingTabLocation,
    _instanceid: undefined as undefined | number,

    set instanceid(newval: string | undefined) {
        let id: number | undefined;
        //Undefined as a value is ok
        if (newval === undefined) {
            id = undefined;
        } else {
            //check if its a number
            id = parseInt(newval);
            if (Number.isNaN(id)) {
                return;
            }
        }

        //setting the instance id causes the thing to drop all jobs its aware of, so avoid when possible
        if (_instanceid == id) {
            return;
        }

        _instanceid = id;
        JobsController.instance = id;
    },
    get instanceid(): string | undefined {
        return _instanceid?.toString();
    },

    oautherrors: [] as InternalError<ErrorCode>[]
};
