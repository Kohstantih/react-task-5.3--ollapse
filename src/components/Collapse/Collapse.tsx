import { useState } from "react"
import { CollapsePropsType } from "../types/CollapsePropsType";

export default function Collapse(
        {collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть', children}: CollapsePropsType
    ):JSX.Element {
    const [collapseStatus, toggleStatus] = useState(false);

    const nameBtn = collapseStatus ? expandedLabel : collapsedLabel;
    
    const changeCollapse = ():void => {
        toggleStatus(collapseStatus ? false : true)
    }

    return (
        <div className="collapse_box box">
            <button onClick={changeCollapse} className="btn_collapse" type="button">{nameBtn}</button>
            <div className={`collapsible_container ${collapseStatus ? 'show' : ''}`}>
                {children}
            </div>
        </div>
    )
}
