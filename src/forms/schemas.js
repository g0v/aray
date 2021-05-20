export const getLinksSchema = () => {
  return {
    'type': 'array',
    'title': '連結',
    'items': {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string',
          'title': '名稱',
        },
        'url': {
          'type': 'string',
          'title': '網址',
        },
      },
    },
    'default': [],
  };
};
