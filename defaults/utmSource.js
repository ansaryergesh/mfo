import cookie from 'js-cookie';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function newCookie() {
  if (cookie.get('utm_source') !== undefined && cookie.get('utm_medium') !== undefined && cookie.get('utm_campaign') !== undefined && cookie.get('utm_term') !== undefined && cookie.get('clickid') !== undefined) {
    cookie.remove('utm_medium')
    cookie.remove('utm_campaign')
    cookie.remove('utm_source')
    cookie.remove('utm_term')
    cookie.remove('clickid')
  } else if (cookie.get('utm_source') !== undefined && cookie.get('afclick') !== undefined) {
    cookie.remove('utm_source')
    cookie.remove('afclick')
  } else if (cookie.get('utm_source') !== undefined) {
    cookie.remove('utm_source')
  } else {}
}

export const controlUtm = () => {
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('utm_term').length > 0 && getUrlParameter('clickid').length > 0) {
    newCookie()
    if (getUrlParameter('utm_source').includes('qaz')) {
      localStorage.clear();
      cookie.set('utm_source', 'qaz', {expires: 1})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 1})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 1})
      cookie.set('utm_term', getUrlParameter('utm_term'), {expires: 1})
      cookie.set('clickid', getUrlParameter('clickid'), {expires: 1})
    }
  }
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('afclick').length > 0) {
    newCookie()
    localStorage.clear();
    cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 7})
    cookie.set('afclick', getUrlParameter('afclick'), {expires: 7})
  }
  if (getUrlParameter('utm_source').length > 0) {
    if (getUrlParameter('utm_source').includes('sms')) {
      localStorage.clear();
      newCookie()
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 1})
    }
  } else {}
}