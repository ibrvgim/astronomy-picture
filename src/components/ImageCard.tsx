function ImageCard({ url, title }: { url: string; title: string }) {
  return (
    <div>
      <img
        src={url}
        alt={title}
        style={{ borderRadius: '1rem' }}
        draggable={false}
      />
    </div>
  );
}

export default ImageCard;
