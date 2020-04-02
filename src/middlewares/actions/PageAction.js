export const pageActions = {
  centralPage,
  defaultPage
};

function centralPage(path, file) {
  return { type: 'PAGE_CENTRAL', path, file };
}

function defaultPage() {
  return { type: 'PAGE_DEFAULT' };
}
