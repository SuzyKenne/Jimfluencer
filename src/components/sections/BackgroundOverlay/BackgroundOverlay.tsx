export const BackgroundOverlay = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" /> */}
    </>
  );
};
