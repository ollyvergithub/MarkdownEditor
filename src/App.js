import React, {useEffect, useState, useRef} from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'
import {v4} from 'node-uuid'
import {MarkdownEditor} from "./components/Markdown/MarkdownEditor";


const App = () => {

    const [title, setTitle] = useState("")
    const [textarea, setTextarea] = useState("")
    const [id, setid] = useState("")
    const [files, setFiles] = useState({})

    const textareaRef = useRef(null);
    const tituloRef = useRef(null);

    useEffect(() => {
        initialState()
    }, [])

    useEffect(() => {
        getFiles()
    }, [])

    const getFiles = () => {
        const files = JSON.parse(localStorage.getItem('markdown-editor'))
        setFiles(files)
        /*const files = Object.keys(localStorage)
        setFiles(files.filter((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fieldId) => ({
            ...acc,
            [fieldId]: JSON.parse(localStorage.getItem(fieldId)),
        }), {}))*/
    }

    const handleOpenFile = (fieldId) => () => {
        setTextarea(files[fieldId].content)
        setTitle(files[fieldId].title)
        setid(fieldId)
    }

    const initialState = () => {
        setTextarea("")
        setTitle("")
        //setFiles({})
        setid(v4())
    }

    const createNew = () => {
        initialState()
        tituloRef.current.focus()
    }

    const handleSave = () => {

        console.log("Ollyver ", files)

        const arquivos = {
            ...files,
            [id] : {
                title: title || "Sem título",
                content: textarea
            }
        }
        localStorage.setItem('markdown-editor', JSON.stringify(arquivos ))
        setFiles(arquivos)

        getFiles();
    }

    const handleRemove = () => {
        localStorage.setItem('markdown-editor', JSON.stringify(files))
        delete files[id]
        createNew()
    }

    const handleCreate = () => {
        //localStorage.setItem(id, textarea)
        //localStorage.setItem(id, JSON.stringify({title: title, content: textarea } ))
        createNew()
    }

    const getMarkup = () => {
        return {__html: marked(textarea)}
    }

    marked.setOptions({
        highlight: (code) => {
            return hljs.highlightAuto(code).value
        }
    });


    return (
        <div className="container">
            <h1>App</h1>
            <MarkdownEditor
                textarea={textarea}
                setTextarea={setTextarea}
                getMarkup={getMarkup}
                handleSave={handleSave}
                handleRemove={handleRemove}
                handleCreate={handleCreate}
                tituloRef={tituloRef}
                textareaRef={textareaRef}
                files={files}
                handleOpenFile={handleOpenFile}
                title={title}
                //title={files[id] !== undefined ? files[id].title : ""}
                //title={files[id].title ? files[id].title : ""}
                setTitle={setTitle}
            />
        </div>
    )
}

export default App
