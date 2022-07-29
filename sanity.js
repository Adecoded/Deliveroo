import SanityClient  from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'


const Client =SanityClient({
    projectId:"03v95d76",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21",
});
const builder = ImageUrlBuilder(Client);

export const Urlfor =(source) => builder.image(source);

export default Client;