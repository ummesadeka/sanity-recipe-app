import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent,
  } from "next-sanity";
  
  const config = {
    projectId: "xv76lp17",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
  };
  
  export const sanityClient = createClient(config);
  
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  
  export const urlFor = (source) => createImageUrlBuilder(config).image(source);
  
  export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
  });
// import {
//   createClient,
//   createPreviewSubscriptionHook,
//   createImageUrlBuilder,
//   createPortableTextComponent,
// } from "next-sanity";

// const config = {
//   projectId: "xv76lp17",
//   dataset: "production",
//   apiVersion: "2021-03-25",
//   useCdn: false,
// };

// export const sanityClient = createClient(config);

// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// });