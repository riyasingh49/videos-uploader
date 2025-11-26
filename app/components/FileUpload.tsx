"use client" 

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

interface FileUploadProps{
    onSuccess?: (res: any) => void
    onProgress?: (progress: number) => void
    fileType?: "image"|"video"
}
const FileUpload = ({
    onSuccess,
    onProgress,
    fileType
}: FileUploadProps) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //optional validation
    const validateFile = (file: File) => {
        if(fileType === "video"){
            if(!)
        }
    }
    
    

    
    

    return (
        <>
            <input type="file" ref={fileInputRef} />
            <button type="button" onClick={handleUpload}>
                Upload file
            </button>
            <br />
            Upload progress: <progress value={progress} max={100}></progress>
        </>
    );
};

export default FileUpload;