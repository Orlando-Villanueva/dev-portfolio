export type SnowProspect = {
    slug: string;
    name: string;
    city?: string;
    locationPhrase: string;
    phone: string;
    sectors: string[];
    colors?: {
        primary: string;
        accent: string;
        onAccent: string;
        overlay: string;
        surface: string;
        softSurface: string;
        text: string;
        muted: string;
        cta: string;
        onCta: string;
        ctaKicker: string;
    };
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
        slug: 'al-x',
        name: 'Déneigement AL-X',
        city: 'Coteau-du-Lac',
        locationPhrase: 'à Coteau-du-Lac',
        phone: '+15148091998',
        sectors: ['Coteau-du-Lac'],
    },
    {
        slug: 'jean-wilkens',
        name: 'Jean Wilkens Louis Déneigement',
        city: 'Salaberry-de-Valleyfield',
        locationPhrase: 'à Salaberry-de-Valleyfield',
        phone: '+14384048928',
        sectors: ['Salaberry-de-Valleyfield'],
    },
    {
        slug: 'du-fleuve',
        name: 'Déneigement du Fleuve',
        city: 'Les Cèdres',
        locationPhrase: 'aux Cèdres',
        phone: '+14389988303',
        sectors: ['Les Cèdres'],
    },
    {
        slug: 'ottinger',
        name: 'Paysagiste Ottinger',
        city: 'Pincourt',
        locationPhrase: 'à Pincourt',
        phone: '+15144253799',
        sectors: ['Pincourt'],
    },
    {
        slug: 'sbc',
        name: 'SBC Déneigement',
        city: 'Hudson',
        locationPhrase: 'à Hudson',
        phone: '+14504588042',
        sectors: ['Hudson'],
    },
    {
        slug: 'grp',
        name: 'Déneigement GRP',
        locationPhrase: '',
        phone: '+14508818733',
        sectors: [],
    },
];
