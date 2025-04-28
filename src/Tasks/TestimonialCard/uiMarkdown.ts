const testimonialCardCodeMd = `
// TestimonialCard.tsx

import thumbnail from "asset-path/thumbnail.png";

interface CardProps {
  name: string;
  handle: \`@\${string}\`;
  testimonial: string;
}

export const Card = (props: CardProps) => {
  const { name, handle, testimonial } = props;
  return (
    <div
      className="flex flex-col bg-white p-4 rounded-lg max-w-md"
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-testimonial"
    >
      <div className="flex flex-row items-center mb-4">
        <img
          src={thumbnail}
          alt={\`Profile picture of $\{name}\`}
          className="rounded-full max-h-20"
        />
        <div className="ml-5">
          <h3 className="text-xl text-gray-600 font-semibold">{name}</h3>
          <p className="text-gray-600">{handle}</p>
        </div>
      </div>
      <div>
        <p className="mt-2 text-gray-700 text-left">{testimonial}</p>
      </div>
    </div>
  );
};`;

export default testimonialCardCodeMd;
