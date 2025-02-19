class ResumeAnalytics {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.trackPageView();
    }

    async trackPageView() {
        const payload = {
            timestamp: new Date().toISOString(),
            metrics: [{
                metricName: "PageView",
                dimensions: [
                    { Name: "Page", Value: window.location.pathname },
                    { Name: "UserAgent", Value: navigator.userAgent }
                ]
            }]
        };

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log("Page view tracked successfully.");
            } else {
                console.error("Failed to track page view:", response.status);
            }
        } catch (error) {
            console.error("Error tracking page view:", error);
        }
    }
}


const analytics = new ResumeAnalytics('test');
