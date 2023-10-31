Tapcart.mobile.load({
  platform: "editor",
  messageHandlerName: "Tapcart",
  variables: {
    customer: { id: "779544431", firstName: "John" },
    device: {
      id: "25679b7e-2348-44da-94ef-e218f6be4586",
      locale: "en",
    },
    product: {
      id: "6875079049404",
      description: "<p>Vintage cotton Tapcart shirt</p> ",
      options: [{ name: "Color", values: ["Black", "Blue"] }],
      handle: "vintage - shirt",
      tags: ["Vintage", "Cotton", "New"],
      availableForSale: true,
      title: "Vintage Tapcart Shirt",
      price: 55,
      metafields: {
        myNamespace1: { myKey1: "myValue1" },
        myNamespace2: { myKey2: "myValue2" },
      },
      compareAtPrice: 100,
      vendor: "Tapcart",
      images: [
        "https://assets-global.website-files.com/616f0a7a027baaf59a43390b/616f0a7a027baab7e743396e_full.svg",
      ],
      selectedVariant: { id: "6875079049404" },
      variants: [
        {
          selectedOptions: [{ name: "Color", value: "Black" }],
          id: "40122114900156",
          price: 55,
          title: "Vintage Tapcart Shirt",
          isAvailable: true,
          compareAtPrice: 100,
          image:
            "https://assets-global.website-files.com/616f0a7a027baaf59a43390b/616f0a7a027baab7e743396e_full.svg",
          sku: "12938412",
        },
      ],
    },
  },
});

Tapcart.mobile.load({
  platform: "editor",
  messageHandlerName: "Tapcart",
  variables: {
    customer: {
      metafields: [
        {
          key: "customer-key",
          value: "test",
          namespace: "namespace",
        },
      ],
    },
    product: {
      metafields: [
        {
          key: "product-key",
          value: "test",
          namespace: "productNamespace",
        },
      ],
      sourceCollection: {
        metafields: [
          {
            value: "test",
            namespace: "coll",
            key: "coll-key",
          },
          {
            value: "934000",
            namespace: "custom",
            key: "eventid",
          },
        ],
      },
    },
  },
});
