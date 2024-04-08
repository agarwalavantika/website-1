import React from 'react';
import Link from 'next/link';
import TextTruncate from 'react-text-truncate';
interface CardProps {
  title: string;
  body: string;
  icon?: string;
  link?: string;
  image?: string;
  headerSize?: 'small' | 'medium' | 'large';
  bodyTextSize?: 'small' | 'medium' | 'large';
}

const CardBody = ({
  title,
  body,
  icon,
  link,
  image,
  headerSize,
  bodyTextSize,
}: CardProps) => {
  const headerSizeClasses: Record<string, string> = {
    small: 'text-[0.9rem]',
    medium: 'text-[1.3rem]',
    large: 'text-[2rem]',
  };
  const bodyTextSizeClasses: Record<string, string> = {
    small: 'text-[0.85rem]',
    medium: 'text-[1rem]',
    large: 'text-[1.5rem]',
  };
  return (
    <div className='group relative h-full w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 px-12 shadow-3xl transition-colors delay-[150ms] ease-in-out hover:bg-slate-100'>
      <div className='flex justify-center '>
        {image && <img src={image} className='h-32 p-2' />}
      </div>
      <div className='flex flex-row items-start mb-6'>
        {icon && (
          <span className='mr-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border bg-blue-200 px-3 text-gray-900'>
            <img src={icon} alt={title} className='h-full w-full' />
          </span>
        )}
        <p
          className={`mb-1 mt-1 items-center font-bold text-gray-900 ${headerSizeClasses[headerSize || 'medium']}`}
        >
          {title}
        </p>
      </div>
      <hr className='mb-4 mt-3.5 h-px border-0 bg-gray-400' />
      <p
        className={`mb-8 mt-5 ${bodyTextSizeClasses[bodyTextSize || 'medium']} `}
      >
        <TextTruncate element='span' line={3} text={body} />
      </p>
      {link && (
        <p className='absolute bottom-3 right-5 font-medium opacity-0 transition-opacity delay-150 ease-in-out group-hover:opacity-100 dark:text-black'>
          Read More
        </p>
      )}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  title,
  body,
  icon,
  link,
  image,
  headerSize,
  bodyTextSize,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <CardBody
            {...{ title, body, icon, link, image, headerSize, bodyTextSize }}
          />
        </Link>
      ) : (
        <CardBody
          {...{ title, body, icon, link, image, headerSize, bodyTextSize }}
        />
      )}
    </>
  );
};

export default Card;
