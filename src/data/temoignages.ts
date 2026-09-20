export type Testimonial = {
    quote: {
        en: string;
        fr: string;
    };
    name: string;
    business: string;
    city: {
        en: string;
        fr: string;
    };
};

// Add a real client result here when one is ready. The section stays hidden until then.
export const testimonials: Testimonial[] = [];
