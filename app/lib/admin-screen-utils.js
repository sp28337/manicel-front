export function getAdminRequestError(statusCode, entityLabel) {
    if (statusCode === 401) {
        return "Сессия истекла. Авторизуйтесь повторно."
    }

    if (statusCode === 403) {
        return "Доступ запрещён."
    }

    return `Ошибка загрузки ${entityLabel}.`
}
