import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        title: z.string(),
        tagline: z.string(),
        problem: z.string(),
        solution: z.string(),
        result: z.string(),
        image: image(),
        tags: z.array(z.string()),
        link: z.string().optional(),
    }),
});

const demos = defineCollection({
    type: 'data',
    schema: z.object({
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        locale: z.enum(['fr', 'en']),
        name: z.string().min(1),
        tagline: z.string().min(1),
        phone: z.string().regex(/^\+[1-9]\d{7,14}$/, 'Use an international phone number, for example +15145550100'),
        area: z.string().min(1),
        colors: z.object({
            primary: z.string().regex(/^#[0-9a-fA-F]{6}$/),
            accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
        }),
        services: z.array(z.object({
            name: z.string().min(1),
            price: z.string().min(1),
        })).min(1),
        copy: z.object({
            pageSuffix: z.string().min(1),
            metaDescription: z.string().min(1),
            banner: z.string().min(1),
            headerCall: z.string().min(1),
            heroEyebrow: z.string().min(1),
            callAction: z.string().min(1),
            whatsappAction: z.string().min(1),
            servicesEyebrow: z.string().min(1),
            servicesTitle: z.string().min(1),
            requestEyebrow: z.string().min(1),
            requestTitle: z.string().min(1),
            requestIntro: z.string().min(1),
            nameLabel: z.string().min(1),
            phoneLabel: z.string().min(1),
            serviceLabel: z.string().min(1),
            servicePlaceholder: z.string().min(1),
            dateLabel: z.string().min(1),
            messageLabel: z.string().min(1),
            messagePlaceholder: z.string().min(1),
            honeypotLabel: z.string().min(1),
            submitLabel: z.string().min(1),
            formNote: z.string().min(1),
            formSubject: z.string().min(1),
            footerDemo: z.string().min(1),
            footerCredit: z.string().min(1),
            creatorName: z.string().min(1),
            confirmationEyebrow: z.string().min(1),
            confirmationTitle: z.string().min(1),
            confirmationFirstParagraph: z.string().min(1),
            confirmationSecondParagraph: z.string().min(1),
            confirmationReturnAction: z.string().min(1),
        }),
    }),
});

export const collections = {
    'projects': projects,
    'demos': demos,
};
