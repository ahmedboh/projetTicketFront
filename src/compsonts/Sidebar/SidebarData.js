import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
    {
        title: 'ListeTicket',
        path:'/ListeTicket',
        icon: <FaIcons.FaListAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'ToutesLesTickets',
                path: '/ToutesLesTickets',
                icon: <CgIcons.CgPlayListSearch />,
            },
            {
                title: 'MesTickets',
                path: '/MesTickets',
                icon: <CgIcons.CgPlayList/>,
            },
        ]
    },
    {
        title: 'DéposerTicket',
        path: '/DéposerTicket',
        icon: <IoIcons.IoIosPaper/>,
    },
    {
        title: 'AjouterMembreSociete',
        path: '/AjouMembSociete',
        icon: <AiIcons.AiOutlineUserAdd/>,
    },
    {
        title: 'AjouterClient',
        path: '/AjouClient',
        icon: <AiIcons.AiOutlineUserAdd/>,
    }
];
