import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';
import InfoIcon from './InfoIcon';

const InfoIcons = () => {
    const infoData  =[
        {
            id:1,
            infoTitle:'Opening Hours',
            description:'The doctors portal will open at 10 am  ',
            infoImage:clock ,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            infoTitle:'Visit our location',
            description:'Please visit our hospital and get more exprerience  ',
            infoImage: marker ,
            bgColor: 'bg-accent'
        },
        {
            id:3,
            infoTitle:'Contact us now',
            description:'The doctors portal 24 hours available for you ',
            infoImage:phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                infoData.map(info => <InfoIcon
                key={info.id}
                info={info}
                ></InfoIcon>)
            }
        </div>
    );
};

export default InfoIcons;