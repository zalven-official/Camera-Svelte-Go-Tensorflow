import React from 'react';

interface CardProps {
  imageSrc: string | undefined;
  title: string | undefined;
  badge:
    | Array<{
        badgeClass: string | undefined;
        badgeText: string | undefined;
      }>
    | undefined;
  description: string | undefined;
  tags: Array<string> | undefined;
}

function Card({ imageSrc, title, badge, description, tags }: CardProps) {
  return (
    <div className="w-48 -p-4 md:w-48 lg:w-1/4 bg-base-200 shadow-xl m-5">
      <figure>
        <img src={imageSrc} alt="card_image" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">
          {title}
          {badge?.map((value) => {
            return (
              <div
                className={`badge ${value.badgeClass}`}
                key={value.badgeText}
              >
                {value.badgeText}
              </div>
            );
          })}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-5">
          {tags?.map((value) => {
            return (
              <div className="badge badge-outline text-xs" key={value}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Card.prototype = {};
export default Card;
