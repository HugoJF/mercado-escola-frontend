import {NextPage} from "next";
import {useState} from "react";
import {useDropzone} from "react-dropzone";

type FileWithPreview = { file: File, preview: string };

export const Dropzone: NextPage = () => {
    const [uploadingFiles, setUploadingFiles] = useState<FileWithPreview[]>([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            const filesWithPreview = acceptedFiles.map(file => ({
                file: file,
                preview: URL.createObjectURL(file)
            }));
            setUploadingFiles([...uploadingFiles, ...filesWithPreview]);
        }
    });

    return <section className="space-y-6">
        <aside className="flex gap-6">
            {uploadingFiles.map(file => <img
                key={file.file.webkitRelativePath}
                className="h-32 rounded"
                src={file.preview}
                alt={file.file.name}
            />)}
        </aside>
        <div
            className="flex items-center justify-center px-10 py-16 text-gray-500 text-sm bg-gray-200 border-2 border-dashed border-gray-500 rounded"
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    </section>
}
