import React, { Component } from "react";
import classNames from "classnames";
import { MDBWaves } from 'mdbreact';
import { navigate } from "gatsby";
import navItemStyles from './fast-link.module.css'

class FastLink extends Component {

    state = {
        cursorPos: {}
    }

    handleClick = e => {
        if (!this.props.disabled) {
            e.stopPropagation();
            let cursorPos = {
                top: e.clientY,
                left: e.clientX,
                time: Date.now()
            };
            this.setState({ cursorPos: cursorPos });
        }
    };

    render() {
        const {
            children,
            className,
            disabled,
            location,
            to,
        } = this.props;

        const { cursorPos } = this.state;

        const classes = classNames(
            navItemStyles.fastLinkItem,
            "nav-item",
            disabled ? "disabled" : "Ripple-parent",
            location === to && "active",
            className
        );

        return (
            <li
                className={classes}
                onMouseUp={this.handleClick}
                onTouchStart={this.handleClick}
                role="link"
                onClick={() => navigate(to)}
            >
                <span className="nav-link">
                  {children}
                </span>
                {!disabled && <MDBWaves cursorPos={cursorPos} />}
            </li>
        );
    }
}

export default FastLink;

