class ResumeAnalytics {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async trackPageView(page = "main") {
        const payload = {
            metrics: [{ metricName: "PageViews", dimensions: [{ Name: "Page", Value: page }] }]
        };

        try {
            await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            console.log("Page view tracked:", page);
        } catch (error) {
            console.error("Error tracking page view:", error);
        }
    }
}
const analytics = new ResumeAnalytics("https://ibu0e1z720.execute-api.ca-central-1.amazonaws.com/prod/track");
analytics.trackPageView(); 