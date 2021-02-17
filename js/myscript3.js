function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-599429567/DiTLCMCei94BEL-j6p0C",
    event_callback: callback,
  });
  return false;
}
