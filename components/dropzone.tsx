import {FC} from "react";
import {useDropzone} from "react-dropzone";

type UploadingFileWithPreview = { file: File, preview: string };
type ExistingFile = { id: string, preview: string };
type Props = {
    uploadingFiles: UploadingFileWithPreview[];
    setUploadingFiles: (files: UploadingFileWithPreview[]) => void;
    existingFiles?: ExistingFile[],
    removeExistingFile?: (file: ExistingFile) => void;
}

export const Dropzone: FC<Props> = ({uploadingFiles, setUploadingFiles, existingFiles, removeExistingFile}) => {
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

    // TODO add confirmation modal?
    function handleRemoveUploadingFile(toRemove: UploadingFileWithPreview) {
        setUploadingFiles(uploadingFiles.filter(file => file.file.name !== toRemove.file.name));
    }

    return <section className="space-y-6">
        <div
            className="flex items-center justify-center px-10 py-16 text-gray-500 text-sm bg-gray-200 border-2 border-dashed border-gray-500 rounded"
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        </div>
        <aside className="flex flex-wrap gap-6">
            {existingFiles?.map(file => (<img
                key={file.id}
                className="h-32 rounded"
                onClick={() => removeExistingFile?.(file)}
                src={file.preview}
                alt={file.id}
            />))}

            {uploadingFiles.map(file => <img
                key={file.file.webkitRelativePath}
                className="h-32 rounded"
                onClick={() => handleRemoveUploadingFile(file)}
                src={file.preview}
                alt={file.file.name}
            />)}
        </aside>
    </section>
}
