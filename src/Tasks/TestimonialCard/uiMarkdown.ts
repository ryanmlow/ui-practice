const testimonialCardCodeMd = `
import thumbnail from "../../assets/profile-thumbnail.png";

export const testimonialText =
  "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!";

interface CardProps {
  name: string;
  handle: \`@\${string}\`;
  testimonial: string;
}

const TestimonialCard = (props: CardProps) => {
  const { name, handle, testimonial } = props;
  return (
    <div className="justify-self-center">
      <div
        className="mx-auto my-auto flex max-w-md flex-col rounded-lg bg-white p-4"
        role="region"
        aria-labelledby="card-title"
        aria-describedby="card-testimonial"
      >
        <div className="mb-4 flex flex-row items-center">
          <img
            src={thumbnail}
            alt={\`Profile picture of \${name}\`}
            className="max-h-20 rounded-full"
          />
          <div className="ml-5">
            <h3 className="text-xl font-semibold text-gray-600">{name}</h3>
            <p className="text-gray-600">{handle}</p>
          </div>
        </div>
        <div>
          <p className="mt-2 text-left text-gray-700">{testimonial}</p>
        </div>
      </div>
    </div>
  );
};
`;

export default testimonialCardCodeMd;
