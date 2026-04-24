const LEAD_STATUSES = ["NEW", "IN_PROGRESS", "WON", "LOST"]

export function isLeadStatus(value) {
    return typeof value === "string" && LEAD_STATUSES.includes(value)
}

export function buildCRMLeadsEndpoint(apiBaseUrl, statusFilter) {
    if (!statusFilter || !isLeadStatus(statusFilter)) {
        return `${apiBaseUrl}/crm/leads`
    }

    return `${apiBaseUrl}/crm/leads?status_filter=${statusFilter}`
}

export function toAssignedManagerId(value) {
    if (value === undefined || value === null || value === "") {
        return null
    }

    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : null
}
