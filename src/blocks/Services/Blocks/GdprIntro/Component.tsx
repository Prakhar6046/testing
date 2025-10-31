type GdprIntroProps = {
  title: string;
  description: string;
};

export default function GdprIntro({ title, description }: GdprIntroProps) {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
          {title || ''}
        </h2>
        <p>{description || ''}</p>
      </div>
    </div>
  );
}
