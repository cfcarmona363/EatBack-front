import NoImageProfile from "../assets/noImageProfile";

const ImageSelector = ({ selectedImage, setSelectedImage, fieldName }) => {
  // Function to handle image selection
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setSelectedImage(reader.result, fieldName);
      };
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {selectedImage ? (
        <div className="mb-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-100 h-100 mx-auto rounded-full"
          />
        </div>
      ) : (
        <NoImageProfile />
      )}
      <label
        htmlFor="fileInput"
        className="cursor-pointer inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-sm"
      >
        Select Image
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageSelector;
