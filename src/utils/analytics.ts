declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag () {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
};

// Track page views
export const pageView = (url: string) => {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

// Track custom events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};