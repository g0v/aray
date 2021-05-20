export const getLinksUiSchema = () => {
  return {
    'items': {
      'name': {
        'ui:width': '30%',
      },
      'url': {
        'ui:width': '70%',
      },
    },
    'ui:options': {
      'orderable': true,
    },
  };
};
