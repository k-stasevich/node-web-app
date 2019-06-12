export const getCookie = (name: string) => {
  /* eslint no-useless-escape: 0 */
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export interface ICookieOptions {
  expires?: number | Date | string;
  [index: string]: any;
}

export const setCookie = (name: string, value: string, options?: ICookieOptions) => {
  options = options || {};

  let expires = options.expires;

  if (typeof expires == 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }

  if (typeof expires === 'object' && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  let updatedCookie = name + '=' + value;

  for (let propName in options) {
    updatedCookie += '; ' + propName;
    const propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }

  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, '', { expires: -1 });
};
