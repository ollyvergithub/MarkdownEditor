import React from "react";

export const TituloMarkdown = ({tituloRef, title, setTitle}) => {

    return(
        <div className="form-group">
            <label htmlFor="title">Título</label>
            <input ref={tituloRef} autoFocus type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Sem título" name="title" className="form-control" id="title"/>
        </div>
    );
}