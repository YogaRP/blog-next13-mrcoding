export const media = (url: string) => {
    if (url) {
        return "https://strapi-demo.agiksetiawan.com" + url;
    }
    return url;
}