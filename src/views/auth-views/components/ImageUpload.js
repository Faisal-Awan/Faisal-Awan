import React, { useState } from 'react';
import { variables } from '../../../Varaiable';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        debugger
        try {
            if (!file) {
                alert('Please select a file.');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${variables.API_URL}image/createimage`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image. Server returned status code: ' + response.status);
            }

            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Update state with the new image URL
            setImages([...images, imageUrl]);

            alert('Image uploaded successfully.');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again later.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            {/* Render all uploaded images */}
            {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Uploaded Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default ImageUpload;










// const handleUpload = async () => {
//     try {
//         if (!file) {
//             alert('Please select a file.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         const response = await fetch(`${variables.API_URL}image/createimage`, {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Failed to upload image. Server returned status code: ' + response.status);
//         }

//         const data = await response.json();
//         const imagePath = data.filePath;

//         alert('Image uploaded successfully. Image path: ' + imagePath);
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         alert('Failed to upload image. Please try again later.');
//     }
// };


// //  upload image scussessfully
//     const handleUpload = async () => {
//         debugger
//         try {

//             if (!file) {
//                 alert('Please select a file.');
//                 return;
//             }

//             const formData = new FormData();
//             formData.append('file', file);

//             const response = await fetch(`${variables.API_URL}image/createimage`, {
//                 method: 'POST',
//                 body: formData
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to upload image. Server returned status code: ' + response.status);
//             }

//             const data = await response.json();
//             const imagePath = data.filePath;

//             alert('Image uploaded successfully. Image path: ' + imagePath);
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             alert('Failed to upload image. Please try again later.');
//         }
//     };


//image uploaded done and show path on ui
// const handleUpload = async () => {
//     debugger;
//     try {
//         if (!file) {
//             alert('Please select a file.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         const response = await fetch(`${variables.API_URL}image/createimage`, {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Failed to upload image. Server returned status code: ' + response.status);
//         }

//         const data = await response.json();
//         const imagePath = data.filePath;

//         // Assuming you have an <img> element in your UI with id "uploadedImage"
//         document.getElementById('uploadedImage').src = imagePath;

//         alert('Image uploaded successfully. Image path: ' + imagePath);
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         alert('Failed to upload image. Please try again later.');
//     }
// };


// // direct image uploaded and showed
//     const handleUpload = async () => {
//         try {
//             if (!file) {
//                 alert('Please select a file.');
//                 return;
//             }

//             const reader = new FileReader();

//             reader.onload = function (event) {
//                 const imageDataUrl = event.target.result;

//                 // Display the uploaded image
//                 document.getElementById('uploadedImage').src = imageDataUrl;
//             };

//             reader.readAsDataURL(file);

//             alert('Image uploaded successfully.');
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             alert('Failed to upload image. Please try again later.');
//         }
//     };

