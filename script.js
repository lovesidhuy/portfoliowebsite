class ResumeAnalytics {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.sessionId = this.generateSessionId();
        this.trackPageView();
        this.trackUserInteractions();
        this.trackTimeOnPage();
    }

    generateSessionId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    async trackMetric(metricName, dimensions = []) {
        const payload = {
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            metrics: [{
                metricName,
                dimensions: [
                    ...dimensions,
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
                console.log(`Metric ${metricName} tracked successfully:`, payload);
            } else {
                console.error(`Failed to track metric ${metricName}:`, response.status);
            }
        } catch (error) {
            console.error(`Error tracking metric ${metricName}:`, error);
        }
    }

    trackPageView() {
        this.trackMetric("PageView", [{ Name: "Page", Value: window.location.pathname }]);
    }

    trackUserInteractions() {
        document.addEventListener('click', (event) => {
            const target = event.target;
            this.trackMetric("UserInteraction", [
                { Name: "Type", Value: "click" },
                { Name: "Element", Value: target.tagName },
                { Name: "ElementId", Value: target.id || "none" }
            ]);
        });
    }

    trackTimeOnPage() {
        const startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            this.trackMetric("TimeOnPage", [{ Name: "Duration", Value: timeSpent.toString() }]);
        });
    }
}