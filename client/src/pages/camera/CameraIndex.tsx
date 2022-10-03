import React from 'react';
import { Outlet } from 'react-router-dom';
import Card from '../../components/Card';

const routers = [
  {
    link: '/matrix',
    title: 'Matrix',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing', 'Tensorflow'],
  },
  {
    link: '/classification',
    title: 'Camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
  {
    link: '/classification',
    title: 'camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
  {
    link: '/classification',
    title: 'camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
  {
    link: '/classification',
    title: 'camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
  {
    link: '/classification',
    title: 'camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
  {
    link: '/classification',
    title: 'camera',
    imageSrc:
      'https://media.discordapp.net/attachments/758324112325083137/1019822452257333338/unknown.png?width=1184&height=667',
    badge: [{ badgeClass: 'badge-primary', badgeText: 'NEW' }],
    description: 'Live action camera with tensorflow',
    tags: ['Computer vision', 'Deep learing'],
  },
];

function CameraIndex() {
  return (
    <>
      <Outlet />
      <section className="min-h-screen body-font text-gray-600 ">
        <div className="container mx-auto px-5 py-10">
          <div className=" flex flex-wrap">
            {routers.map((value, index) => {
              const classIndex = `${index}-card-component-camera`;
              return (
                <Card
                  title={value.title}
                  badge={value.badge}
                  imageSrc={value.imageSrc}
                  description={value.description}
                  tags={value.tags}
                  key={classIndex}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

CameraIndex.prototype = {};
export default CameraIndex;
