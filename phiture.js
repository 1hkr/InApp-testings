var phiture = {
  isAndroid: window.navigator.userAgent.toLowerCase().indexOf('android') > -1,// Is this an android phone

  // Adds the platfrom classes to the body tag
  addPlatformClassName:  function () {
    let isDev = location.search.indexOf('dev=true') > -1; // is this a dev
    let isAndroid = window.navigator.userAgent.toLowerCase().indexOf('android') > -1;// Is this an android phone
    let body = document.body; // Get the body tag
    body.classList.add(isAndroid ? 'android' : 'ios');
    body.classList.toggle('dev', isDev);
  },

  // Tag the event function
  tagEvent: function (eventName, properties) {
    var payload = [];
    Object.keys(properties).forEach(function (key) {
      payload.push(key + '=' + encodeURI(properties[key]));
    });
    payload = payload.join('&');
    location.href = 'appboy://customEvent?name=' + eventName + (payload ? '&' + payload : '');
  },

  // Closes the message to the server
  closeMessage: function () {
      location.href = 'http://leanplum:close';
  }
}
