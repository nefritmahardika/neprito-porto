import Link from "next/link";

const Project = ({ title, description, href, tags = [], year }) => {
  return (
    <div className="h-[110px] bg-white rounded-xl overflow-hidden transition-all w-full relative">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline block h-full"
      >
        <div className="h-[100px] p-4 bg-white relative">
          <h3 className="h-[30px] font-medium text-gray-800 text-[10px] line-clamp-2">
            {title}
          </h3>
          <p className="text-[7px] text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2 absolute bottom-1 left-4 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-[6px] px-2 py-1 rounded-full ${tag.className}`}
              >
                <i className={tag.icon}></i> {tag.label}
              </span>
            ))}
            <span className="text-[6px] px-2 py-1 bg-gray-100 rounded-full text-gray-600">
              {year}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
