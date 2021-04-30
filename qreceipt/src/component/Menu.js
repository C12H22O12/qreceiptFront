import React from "react";

function Menu({menu, cnt, won}) {
    return (
        <tr className="d-flex">
            <td className="col-6">{menu}</td>
            <td className="col-3 text-center">{cnt}</td>
            <td className="col-3 text-center">{won}</td>
        </tr>
    )
}

export default Menu;