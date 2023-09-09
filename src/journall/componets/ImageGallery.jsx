import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export const ImageGallery =({imageUrl})=>{
  return (
    <ImageList sx={{ width: '100%', height: 320 }} cols={4} rowHeight={164} gap={4}  >
      {imageUrl?.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
