import React from 'react';
import Dropzone from 'react-dropzone';

class FileUploader extends React.Component {

    constructor(props) {
        super(props);
    }

    onDrop(acceptedFiles, rejectedFiles) {
        this.props.onFileDrop(acceptedFiles, rejectedFiles);
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
        );
    }
}

export default FileUploader;