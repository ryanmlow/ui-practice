const Preview = ({ previewUrl }: { previewUrl: string | undefined }) => {
  return (
    <div className="hidden h-0 rounded-l-2xl bg-gray-500 lg:visible lg:sticky lg:top-0 lg:right-0 lg:flex lg:h-screen lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:p-4">
      <h1 className="mb-4">Preview</h1>
      {previewUrl ? (
        <div>
          <img className="rounded-2xl lg:min-w-xl" src={previewUrl} />
        </div>
      ) : (
        <div className="flex h-6/12 w-10/12 items-center justify-center rounded-2xl bg-gray-50">
          <p className="mb-8 text-center text-2xl font-bold text-gray-500">
            Hover over a card to see the preview
          </p>
        </div>
      )}
    </div>
  );
};
export default Preview;
