function transform(input) {
  const source0 = input?.IDX_0 || {};
  const source1 = input?.IDX_1 || {};
  const selectedShowId = input?.trmnl?.plugin_settings?.custom_fields_values?.pbs_kids_show_id;
  const matchingShow = (source1.data || []).find((show) => show?.slug === selectedShowId);

  return {
    IDX_0: {
      errorType: source0.errorType,
      errorMessage: source0.errorMessage,
      items: (source0.items || []).map((item) => ({
        title: item?.title,
        description: item?.description,
        premiered_on: item?.premiered_on,
        images: {
          "kids-mezzannine-16x9": {
            url: item?.images?.["kids-mezzannine-16x9"]?.url,
          },
        },
      })),
    },
    IDX_1: {
      data: matchingShow
        ? [
            {
              slug: matchingShow.slug,
              title: matchingShow.title,
            },
          ]
        : [],
    },
  };
}
