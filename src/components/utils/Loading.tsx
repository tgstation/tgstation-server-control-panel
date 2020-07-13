import React, { ReactNode } from "react";
import Spinner, { SpinnerProps } from "react-bootstrap/Spinner";

type IProps = SpinnerProps & {
    animation: "border" | "grow";
    center: boolean;
    width: number;
    widthUnit: string;
    height: number;
    heightUnit: string;
    className?: string;
};

interface IState {}

export default class Loading extends React.Component<IProps, IState> {
    public static defaultProps = {
        animation: "border",
        width: "50",
        widthUnit: "vmin",
        height: "50",
        heightUnit: "vmin",
        center: true
    };
    public constructor(props: IProps) {
        super(props);
    }

    public render(): ReactNode {
        const {
            variant,
            animation,
            center,
            className,
            width,
            widthUnit,
            height,
            heightUnit,
            ...otherprops
        } = this.props;
        const styles: React.CSSProperties = {
            width: width + widthUnit,
            height: height + heightUnit
        } as React.CSSProperties;
        return (
            <div className={center ? "text-center" : ""}>
                <Spinner
                    variant={variant ? variant : "secondary"}
                    className={center ? "d-block mx-auto " + className : className}
                    style={styles as React.CSSProperties}
                    animation={animation ? animation : "border"}
                    {...otherprops}
                />
            </div>
        );
    }
}