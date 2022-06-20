import { Box } from '@mui/system';
import { ChangeEventHandler, FC } from 'react';

interface UploadProps {
  handleFiles: (data: FormData) => void;
}

const Upload: FC<UploadProps> = ({ handleFiles }) => {
  const handleInputchange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target;

    if (files) {
      const formData = new FormData();
      const fileArray = files ? Array.from(files) : [];

      fileArray.forEach((file) => {
        formData.append('images', file);
      });

      handleFiles(formData);
    }
  };

  return (
    <Box>
      <input type="file" name="images" onChange={handleInputchange} />
    </Box>
  );
};

export default Upload;
