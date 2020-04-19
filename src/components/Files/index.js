import React from "react";
import {Button} from "../Button";

export const Files = ({files, handleOpenFile}) => {

    return (
        <>
            <h2>Files</h2>
            <ul className='list-group list-group-flush'>
                {Object.keys(files).map((fileId) => (
                    <li key={fileId} className="list-group-item">
                        <Button onClick={handleOpenFile(fileId)} kind={"btn-warning"}>
                            {files[fileId].title}
                        </Button>
                    </li>
                ))}

            </ul>
        </>
    )
}