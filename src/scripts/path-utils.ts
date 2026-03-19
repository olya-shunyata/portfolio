function buildUrl(path: string): string {
    const trimmedPath = path.replace(/^\/+/, "");
    const trimmedRoot = `${import.meta.env.BASE_URL}`.replace(/\/$/, "");
    return `${trimmedRoot}/${trimmedPath}`
}

export {
    buildUrl,
}
