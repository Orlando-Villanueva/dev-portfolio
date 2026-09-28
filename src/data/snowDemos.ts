export type SnowProspect = {
    slug: string;
    name: string;
    city: string;
    locationPhrase: string;
    phone: string;
    sectors: string[];
};

export const snowDemos: SnowProspect[] = [
    {
        slug: 'mongrain',
        name: 'Déneigement Mongrain',
        city: 'Notre-Dame-de-l’Île-Perrot',
        locationPhrase: 'à Notre-Dame-de-l’Île-Perrot',
        phone: '+15144534454',
        sectors: ['Notre-Dame-de-l’Île-Perrot'],
    },
    {
        slug: 'tuff-dvs',
        name: 'Tuff - Déneigement D.V.S',
        city: 'Les Cèdres',
        locationPhrase: 'aux Cèdres',
        phone: '+15148650263',
        sectors: ['Les Cèdres'],
    },
    {
        slug: 'carriere',
        name: 'Déneigement Carrière',
        city: 'Saint-Zotique',
        locationPhrase: 'à Saint-Zotique',
        phone: '+14508022701',
        sectors: ['Saint-Zotique'],
    },
];
