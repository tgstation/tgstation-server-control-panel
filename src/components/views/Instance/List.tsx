import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, ReactNode } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/esm/Jumbotron";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Table from "react-bootstrap/Table";
import Tooltip from "react-bootstrap/Tooltip";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { InstanceManagerRights } from "../../../ApiClient/generatedcode/_enums";
import { Components } from "../../../ApiClient/generatedcode/_generated";
import InstanceClient from "../../../ApiClient/InstanceClient";
import InstancePermissionSetClient from "../../../ApiClient/InstancePermissionSetClient";
import InternalError, { ErrorCode } from "../../../ApiClient/models/InternalComms/InternalError";
import { StatusCode } from "../../../ApiClient/models/InternalComms/InternalStatus";
import UserClient from "../../../ApiClient/UserClient";
import { resolvePermissionSet } from "../../../utils/misc";
import { AppRoutes, RouteData } from "../../../utils/routes";
import { ErrorAlert, Loading } from "../../utils";

type Instance = Components.Schemas.InstanceResponse & {
    canAccess: boolean;
};

interface IState {
    instances: Instance[];
    loading?: boolean;
    errors: Array<InternalError<ErrorCode> | undefined>;
    //isnt directly used but is used to make react rerender when the selected insance is changed
    instanceid?: number;
    canOnline: boolean;
    canCreate: boolean;
}
interface IProps extends RouteComponentProps {}

export default withRouter(
    class InstanceList extends React.Component<IProps, IState> {
        public constructor(props: IProps) {
            super(props);

            this.setOnline = this.setOnline.bind(this);

            const actualid =
                RouteData.instanceid !== undefined ? parseInt(RouteData.instanceid) : undefined;

            this.state = {
                loading: true,
                instances: [],
                errors: [],
                instanceid: actualid,
                canOnline: false,
                canCreate: false
            };
        }

        private addError(error: InternalError<ErrorCode>): void {
            this.setState(prevState => {
                const errors = Array.from(prevState.errors);
                errors.push(error);
                return {
                    errors
                };
            });
        }

        private async loadInstances(): Promise<void> {
            const instancelist = await InstanceClient.listInstances();
            const modifiedlist: Array<Instance> = [];

            if (instancelist.code == StatusCode.OK) {
                const work: Array<Promise<void>> = [];
                for (const instance of instancelist.payload) {
                    const modifiedinstance = instance as Instance;
                    if (instance.online) {
                        work.push(
                            InstancePermissionSetClient.getCurrentInstancePermissionSet(
                                instance.id
                            ).then(permissionset => {
                                if (permissionset.code == StatusCode.OK) {
                                    modifiedinstance.canAccess = true;
                                } else {
                                    modifiedinstance.canAccess = false;
                                    if (permissionset.error.code !== ErrorCode.HTTP_ACCESS_DENIED) {
                                        this.addError(permissionset.error);
                                    }
                                }
                                modifiedlist.push(modifiedinstance);
                            })
                        );
                    } else {
                        modifiedinstance.canAccess = false;
                        modifiedlist.push(modifiedinstance);
                    }
                }

                await Promise.all(work);

                this.setState({
                    instances: modifiedlist.sort((a, b) => a.id - b.id)
                });
            } else {
                this.addError(instancelist.error);
            }
        }

        public async componentDidMount(): Promise<void> {
            await this.loadInstances();

            await UserClient.getCurrentUser().then(userinfo => {
                if (userinfo.code === StatusCode.OK) {
                    const instanceManagerRights = resolvePermissionSet(userinfo.payload)
                        .instanceManagerRights;
                    this.setState({
                        canOnline: !!(instanceManagerRights & InstanceManagerRights.SetOnline),
                        canCreate: !!(instanceManagerRights & InstanceManagerRights.Create)
                    });
                } else {
                    this.addError(userinfo.error);
                }
            });

            this.setState({
                loading: false
            });
        }

        private async setOnline(instance: Instance) {
            //Yes this is desynchronized and will use the last known state of the instance
            // to determine what state we should put it in, thats intentional, if the user clicks Set Online, it needs
            // to be online, no matter what it previously was
            const desiredState = !instance.online;
            const instanceedit = await InstanceClient.editInstance(({
                id: instance.id,
                online: desiredState
            } as unknown) as Components.Schemas.InstanceResponse);
            if (instanceedit.code === StatusCode.OK) {
                await this.loadInstances();
            } else {
                this.addError(instanceedit.error);
            }
        }

        public render(): ReactNode {
            if (this.state.loading) {
                return <Loading text="loading.instance.list" />;
            }

            return (
                <>
                    <div className="text-center">
                        {this.state.errors.map((err, index) => {
                            if (!err) return;
                            return (
                                <ErrorAlert
                                    key={index}
                                    error={err}
                                    onClose={() =>
                                        this.setState(prev => {
                                            const newarr = Array.from(prev.errors);
                                            newarr[index] = undefined;
                                            return {
                                                errors: newarr
                                            };
                                        })
                                    }
                                />
                            );
                        })}
                        <Table striped hover variant="dark" responsive className="mb-4">
                            <thead>
                                <tr>
                                    <td colSpan={6}>
                                        <h1>
                                            <FormattedMessage id="view.instance.list.title" />
                                        </h1>
                                    </td>
                                </tr>
                                <tr>
                                    <th>ID</th>
                                    <th>
                                        <FormattedMessage id="view.instance.list.name" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="generic.online" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="generic.path" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="generic.configmode" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="generic.action" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderListing()}
                                <tr>
                                    <td colSpan={6}>{this.renderAddInstance()}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="text-center">
                        <h3>
                            <FormattedMessage id="view.instance.list.title" />
                        </h3>
                        <div className="align-middle">
                            <Button
                                className="mx-1"
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.instancecode.link || AppRoutes.instancecode.route
                                    );
                                }}
                                disabled={this.state.instanceid === undefined}>
                                <FormattedMessage id="routes.instancecode" />
                            </Button>
                            <Button
                                className="mx-1"
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.instancehosting.link ||
                                            AppRoutes.instancehosting.route
                                    );
                                }}
                                disabled={this.state.instanceid === undefined}>
                                <FormattedMessage id="routes.instancehosting" />
                            </Button>
                            <Button
                                className="mx-1"
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.instanceconfig.link ||
                                            AppRoutes.instanceconfig.route
                                    );
                                }}
                                disabled={this.state.instanceid === undefined}>
                                <FormattedMessage id="routes.instanceconfig" />
                            </Button>
                            <Button
                                className="mx-1"
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.instancejobs.link || AppRoutes.instancejobs.route
                                    );
                                }}
                                disabled={this.state.instanceid === undefined}>
                                <FormattedMessage id="routes.instancejobs" />
                            </Button>
                        </div>
                    </div>
                </>
            );
        }

        private renderListing(): React.ReactNode {
            return this.state.instances.map(value => {
                return (
                    <tr
                        key={value.id}
                        className={
                            value.id.toString() === RouteData.instanceid ? "font-weight-bold" : ""
                        }>
                        <td>
                            <code>{value.id}</code>
                        </td>
                        <td>{value.name}</td>
                        <td>
                            {value.online ? (
                                <Badge variant="success">
                                    <FormattedMessage id="generic.online" />
                                </Badge>
                            ) : (
                                <Badge variant="danger">
                                    <FormattedMessage id="generic.offline" />
                                </Badge>
                            )}
                        </td>
                        <td>
                            {value.moveJob ? (
                                <FormattedMessage id="view.instance.moving" />
                            ) : (
                                value.path
                            )}
                        </td>
                        <td>
                            <FormattedMessage
                                id={`view.instance.configmode.${value.configurationType.toString()}`}
                            />
                        </td>
                        <td className="align-middle p-1">
                            <Button
                                className="mx-1"
                                variant={
                                    value.id.toString() === RouteData.instanceid
                                        ? "success"
                                        : "primary"
                                }
                                onClick={() => {
                                    RouteData.instanceid = value.id.toString();
                                    this.setState({
                                        instanceid: value.id
                                    });
                                }}
                                disabled={
                                    !value.canAccess || value.id.toString() === RouteData.instanceid
                                }>
                                <FormattedMessage id="generic.select" />
                            </Button>
                            <Button
                                className="mx-1"
                                variant={value.online ? "danger" : "success"}
                                onClick={() => this.setOnline(value)}
                                disabled={!this.state.canOnline}>
                                <FormattedMessage
                                    id={`view.instance.list.set.${
                                        value.online ? "offline" : "online"
                                    }`}
                                />
                            </Button>
                        </td>
                    </tr>
                );
            });
        }

        private renderAddInstance(): React.ReactNode {
            return (
                <OverlayTrigger
                    overlay={
                        <Tooltip id="create-instance-tooltip">
                            <FormattedMessage id="perms.instance.create.warning" />
                        </Tooltip>
                    }
                    show={this.state.canCreate ? false : true}>
                    {({ ref, ...triggerHandler }) => (
                        <Button
                            ref={ref}
                            size="sm"
                            variant="success"
                            block
                            onClick={() => {
                                this.props.history.push(
                                    AppRoutes.instancecreate.link || AppRoutes.instancecreate.route
                                );
                            }}
                            disabled={!this.state.canCreate}
                            {...triggerHandler}>
                            <div>
                                <FontAwesomeIcon className="mr-2" icon={faPlus} />
                                <FormattedMessage id="routes.instancecreate" />
                            </div>
                        </Button>
                    )}
                </OverlayTrigger>
            );
        }
    }
);
