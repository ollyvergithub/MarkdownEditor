import React from "react";
import PropTypes from 'prop-types'
import {Button} from "../Button";
import {Files} from "../Files";

export const MarkdownEditor = (props) => {

    const {textarea, setTextarea, getMarkup, handleSave, handleRemove, handleCreate, tituloRef, textareaRef, files, handleOpenFile, title, setTitle} = props

    return (
        <>
            <Files
                files={files}
                handleOpenFile={handleOpenFile}
            />
            <form>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input ref={tituloRef} autoFocus type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Sem título" name="title" className="form-control" id="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="textarea">Conteúdo</label>
                    <textarea ref={textareaRef} value={textarea} onChange={(e) => setTextarea(e.target.value)} name="textarea" className="form-control" id="textarea" rows="5"/>
                </div>
                <div className="form-group mt-4">
                    <Button onClick={handleSave} kind={"btn-primary"}>
                        Salvar
                    </Button>
                    <Button onClick={handleRemove} kind="btn-danger ml-2">
                        Remover
                    </Button>
                    <Button onClick={handleCreate} kind="btn-success ml-2">
                        Criar Novo
                    </Button>
                </div>
            </form>
            <article className="view" dangerouslySetInnerHTML={getMarkup()} />
        </>
    );
}

MarkdownEditor.propTypes = {
    textarea: PropTypes.string.isRequired,
    setTextarea: PropTypes.func.isRequired,
    getMarkup: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}