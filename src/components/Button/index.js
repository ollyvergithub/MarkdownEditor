import React from "react";
import PropTypes from 'prop-types'

export const Button = ({onClick, children, kind}) =>(

    <button type="button" onClick={onClick} className={`btn ${kind ? kind : ""}`}>
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    kind: PropTypes.string,

}